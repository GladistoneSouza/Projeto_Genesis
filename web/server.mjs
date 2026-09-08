import http from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '127.0.0.1';

// Por padrão, web/ fica na raiz do repositório e o vault continua onde já está.
const DEFAULT_VAULT = path.resolve(__dirname, '../Projeto Genesis/Projeto Genesis');
const VAULT_ROOT = path.resolve(process.env.GENESIS_VAULT || DEFAULT_VAULT);
const PUBLIC_ROOT = path.resolve(__dirname, 'public');

const HIDDEN_DIRS = new Set(['.obsidian', '.trash', '.git', 'node_modules']);
const HIDDEN_FILES = new Set(['genesis-capitulo-01.md']); // substituído por genesis-01/
const ASSET_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif',
  '.pdf', '.mp3', '.wav', '.ogg', '.mp4', '.webm'
]);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.avif': 'image/avif',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ogg': 'audio/ogg',
  '.mp4': 'video/mp4', '.webm': 'video/webm'
};

function json(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store'
  });
  res.end(body);
}

function text(res, status, body, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(status, {
    'content-type': contentType,
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store'
  });
  res.end(body);
}

function normalizeRelative(input = '') {
  return input.replaceAll('\\', '/').replace(/^\/+/, '');
}

function safeInside(root, relativePath) {
  const normalized = normalizeRelative(relativePath);
  const resolved = path.resolve(root, normalized);
  const rootWithSep = root.endsWith(path.sep) ? root : root + path.sep;
  if (resolved !== root && !resolved.startsWith(rootWithSep)) {
    throw new Error('Caminho fora da raiz permitida.');
  }
  return resolved;
}

function titleFromMarkdown(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  if (match) return match[1].replace(/[*_`]/g, '').trim();
  return fallback.replace(/\.md$/i, '').replace(/^\d{2}-/, '').replaceAll('-', ' ');
}

async function scanMarkdown(dir = VAULT_ROOT, rel = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const nodes = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { numeric: true }))) {
    if (entry.name.startsWith('.') || HIDDEN_DIRS.has(entry.name)) continue;
    if (HIDDEN_FILES.has(entry.name)) continue;

    const abs = path.join(dir, entry.name);
    const childRel = normalizeRelative(path.posix.join(rel, entry.name));

    if (entry.isDirectory()) {
      const children = await scanMarkdown(abs, childRel);
      if (children.length) nodes.push({ type: 'folder', name: entry.name, path: childRel, children });
      continue;
    }

    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== '.md') continue;

    const raw = await readFile(abs, 'utf8');
    nodes.push({
      type: 'doc',
      name: entry.name,
      path: childRel,
      title: titleFromMarkdown(raw, entry.name)
    });
  }

  return nodes;
}

function flattenTree(nodes, out = []) {
  for (const node of nodes) {
    if (node.type === 'doc') out.push(node);
    else flattenTree(node.children || [], out);
  }
  return out;
}

function stripMarkdown(s) {
  return s
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => label || target)
    .replace(/[#>*_`~|\[\]()-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeSnippet(raw, query) {
  const clean = stripMarkdown(raw);
  const lower = clean.toLocaleLowerCase('pt-BR');
  const q = query.toLocaleLowerCase('pt-BR');
  const idx = lower.indexOf(q);
  if (idx < 0) return clean.slice(0, 180);
  const start = Math.max(0, idx - 70);
  const end = Math.min(clean.length, idx + q.length + 110);
  return `${start > 0 ? '…' : ''}${clean.slice(start, end)}${end < clean.length ? '…' : ''}`;
}

async function handleApi(url, res) {
  if (url.pathname === '/api/health') {
    try {
      const info = await stat(VAULT_ROOT);
      return json(res, 200, { ok: info.isDirectory(), vault: VAULT_ROOT });
    } catch (error) {
      return json(res, 500, { ok: false, vault: VAULT_ROOT, error: error.message });
    }
  }

  if (url.pathname === '/api/tree') {
    try {
      return json(res, 200, { vault: VAULT_ROOT, tree: await scanMarkdown() });
    } catch (error) {
      return json(res, 500, { error: error.message, vault: VAULT_ROOT });
    }
  }

  if (url.pathname === '/api/doc') {
    try {
      const rel = normalizeRelative(url.searchParams.get('path') || '');
      if (!rel || path.extname(rel).toLowerCase() !== '.md') return json(res, 400, { error: 'Documento inválido.' });
      const abs = safeInside(VAULT_ROOT, rel);
      const raw = await readFile(abs, 'utf8');
      const info = await stat(abs);
      return json(res, 200, {
        path: rel,
        title: titleFromMarkdown(raw, path.basename(rel)),
        markdown: raw,
        modifiedAt: info.mtime.toISOString()
      });
    } catch (error) {
      return json(res, 404, { error: 'Documento não encontrado.', detail: error.message });
    }
  }

  if (url.pathname === '/api/search') {
    const q = (url.searchParams.get('q') || '').trim();
    if (q.length < 2) return json(res, 200, { results: [] });
    try {
      const tree = await scanMarkdown();
      const docs = flattenTree(tree);
      const results = [];
      const needle = q.toLocaleLowerCase('pt-BR');
      for (const doc of docs) {
        const abs = safeInside(VAULT_ROOT, doc.path);
        const raw = await readFile(abs, 'utf8');
        const titleHit = doc.title.toLocaleLowerCase('pt-BR').includes(needle);
        const bodyHit = raw.toLocaleLowerCase('pt-BR').includes(needle);
        if (!titleHit && !bodyHit) continue;
        results.push({
          path: doc.path,
          title: doc.title,
          snippet: makeSnippet(raw, q),
          score: (titleHit ? 10 : 0) + (raw.toLocaleLowerCase('pt-BR').split(needle).length - 1)
        });
      }
      results.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'pt-BR'));
      return json(res, 200, { results: results.slice(0, 40) });
    } catch (error) {
      return json(res, 500, { error: error.message });
    }
  }

  return false;
}

async function handleAsset(url, res) {
  try {
    const rel = normalizeRelative(url.searchParams.get('path') || '');
    const ext = path.extname(rel).toLowerCase();
    if (!ASSET_EXTENSIONS.has(ext)) return json(res, 400, { error: 'Tipo de asset não permitido.' });
    const abs = safeInside(VAULT_ROOT, rel);
    const data = await readFile(abs);
    res.writeHead(200, {
      'content-type': MIME[ext] || 'application/octet-stream',
      'content-length': data.length,
      'cache-control': 'no-cache'
    });
    res.end(data);
  } catch (error) {
    json(res, 404, { error: 'Asset não encontrado.', detail: error.message });
  }
}

async function serveStatic(url, res) {
  let rel = url.pathname === '/' ? 'index.html' : normalizeRelative(url.pathname);
  try {
    const abs = safeInside(PUBLIC_ROOT, rel);
    const ext = path.extname(abs).toLowerCase();
    const data = await readFile(abs);
    res.writeHead(200, {
      'content-type': MIME[ext] || 'application/octet-stream',
      'content-length': data.length,
      'cache-control': ext === '.html' ? 'no-store' : 'no-cache'
    });
    res.end(data);
  } catch {
    text(res, 404, 'Não encontrado.');
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  try {
    if (url.pathname.startsWith('/api/')) {
      const handled = await handleApi(url, res);
      if (handled === false) return json(res, 404, { error: 'Endpoint não encontrado.' });
      return;
    }
    if (url.pathname === '/asset') return handleAsset(url, res);
    return serveStatic(url, res);
  } catch (error) {
    return json(res, 500, { error: 'Erro interno.', detail: error.message });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\nProjeto Gênesis · leitor local`);
  console.log(`http://${HOST}:${PORT}`);
  console.log(`Vault: ${VAULT_ROOT}`);
  console.log(`\nSe o vault estiver em outro lugar:`);
  console.log(`GENESIS_VAULT=/caminho/do/vault node web/server.mjs\n`);
});
