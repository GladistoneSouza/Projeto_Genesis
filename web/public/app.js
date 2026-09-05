let mermaidApi = null;
try {
  const m = await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs');
  mermaidApi = m.default;
  mermaidApi.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'neutral' });
} catch (e) { console.warn('Mermaid indisponível', e); }

const md = window.markdownit
  ? window.markdownit({ html:false, linkify:true, typographer:true }).use(window.markdownitFootnote || (()=>{}))
  : { render: s => `<pre><code>${esc(s)}</code></pre>` };

if (window.markdownit) {
  const baseFence = md.renderer.rules.fence?.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const t = tokens[idx];
    if ((t.info || '').trim().toLowerCase() === 'mermaid') {
      const code = md.utils.escapeHtml(t.content);
      return `<div class="diagram"><div class="mermaid">${code}</div><details><summary>Fonte Mermaid</summary><pre><code>${code}</code></pre></details></div>`;
    }
    return baseFence ? baseFence(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
  };
}

const state = { tree:[], docs:[], current:null, view:'home', timer:null };
const $ = s => document.querySelector(s);
const els = {
  tree:$('#tree'), doc:$('#document'), home:$('#home'), reader:$('#reader'), search:$('#search'),
  results:$('#search-results'), refresh:$('#refresh'), theme:$('#theme-toggle'), homeBtn:$('#go-home'),
  homeLink:$('#home-link'), title:$('#file-title'), path:$('#file-path'), time:$('#file-time'),
  badges:$('#badges'), outline:$('#outline'), health:$('#health-dot'), sidebar:$('#sidebar'),
  toggleNav:$('#toggle-nav'), prev:$('#prev-doc'), next:$('#next-doc'), toast:$('#toast')
};

function esc(v=''){ return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function norm(p=''){ const o=[]; for(const x of p.replaceAll('\\','/').split('/')){ if(!x||x==='.')continue; x==='..'?o.pop():o.push(x); } return o.join('/'); }
function dir(p=''){ const a=p.split('/'); a.pop(); return a.join('/'); }
function stem(p=''){ return p.split('/').pop().replace(/\.md$/i,''); }
function byPath(p){ return state.docs.find(d=>d.path===p); }
function flatten(nodes,out=[]){ for(const n of nodes){ n.type==='doc'?out.push(n):flatten(n.children||[],out); } return out; }
function pretty(s){ if(s==='docs')return'Documentação'; if(s==='lexicos')return'Léxicos'; if(s==='metodo')return'Método'; if(/^genesis-\d{2}$/.test(s))return`Gênesis ${Number(s.slice(-2))}`; return s.replaceAll('-',' '); }
function category(p=''){ if(/^genesis-\d{2}\//.test(p))return'Capítulo'; if(p.startsWith('docs/lexicos/'))return'Léxico'; if(p.startsWith('docs/metodo/'))return'Método'; if(p==='docs/posicoes.md')return'Posições'; if(p==='docs/fios-canonicos.md')return'Fios canônicos'; if(p.startsWith('docs/'))return'Governança'; if(p==='prefacio.md')return'Livro'; if(p==='genesis.md')return'Introdução'; return'Documento'; }
function glyph(p=''){ return ({Capítulo:'א',Léxico:'אב',Método:'N',Posições:'◆','Fios canônicos':'⌁',Governança:'§',Livro:'✦',Introdução:'ב'})[category(p)]||'·'; }
function toast(msg){ els.toast.textContent=msg; els.toast.classList.remove('hidden'); clearTimeout(toast.t); toast.t=setTimeout(()=>els.toast.classList.add('hidden'),1800); }

function renderTree(nodes,depth=0){
  return nodes.map(n=>n.type==='folder'
    ? `<details class="tree-folder" ${depth<1||n.name.startsWith('genesis-01')?'open':''}><summary><span>›</span>${esc(pretty(n.name))}</summary><div>${renderTree(n.children||[],depth+1)}</div></details>`
    : `<button class="tree-doc" data-path="${esc(n.path)}"><i></i><span>${esc(n.title)}</span></button>`).join('');
}
function bindTree(){ els.tree.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>{openDoc(b.dataset.path);els.sidebar.classList.remove('open');}); }
function markActive(){ els.tree.querySelectorAll('.tree-doc').forEach(b=>b.classList.toggle('active',state.view==='doc'&&b.dataset.path===state.current)); els.homeLink.classList.toggle('active',state.view==='home'); }
async function loadTree(){ const r=await fetch('/api/tree',{cache:'no-store'}),d=await r.json(); if(!r.ok)throw new Error(d.error||'Falha ao ler o vault'); state.tree=d.tree; state.docs=flatten(d.tree); els.tree.innerHTML=renderTree(d.tree); bindTree(); }
function find(path){ return byPath(path)||state.docs.find(d=>stem(d.path)===stem(path))||null; }
function target(path){ return find(path)?.path||''; }

function homeCard(kicker,title,text,path,cls=''){
  const p=target(path); return `<button class="home-card ${cls}" ${p?`data-path="${esc(p)}"`:'disabled'}><small>${esc(kicker)}</small><strong>${esc(title)}</strong><p>${esc(text)}</p><b>Abrir →</b></button>`;
}
function renderHome(){
  const c=state.docs.filter(d=>d.path.startsWith('genesis-01/')).length,l=state.docs.filter(d=>d.path.startsWith('docs/lexicos/')).length,m=state.docs.filter(d=>d.path.startsWith('docs/metodo/')).length;
  els.home.innerHTML=`
    <section class="hero"><div><span class="overline">Projeto pessoal de estudo bíblico</span><h1>Gênesis, com o texto aberto<br><em>e as perguntas à vista.</em></h1><p>Uma biblioteca local sobre o mesmo vault que alimenta o comentário. O Markdown continua sendo a fonte de verdade; esta interface só organiza e apresenta.</p><div class="actions"><button class="primary" data-path="${esc(target('genesis-01/00-como-usar.md'))}">Começar Gênesis 1 →</button><button data-path="${esc(target('prefacio.md'))}">Ler o prefácio</button></div></div><aside><span>בְּרֵאשִׁית</span><hr><small>no princípio</small></aside></section>
    <section class="home-section"><header><div><span class="overline">Portas de entrada</span><h2>Escolha como quer estudar</h2></div><small>${state.docs.length} documentos no vault</small></header><div class="home-grid">
      ${homeCard('Capítulo 1','Leitura guiada',`${c} documentos entre material preparatório e estudo.`,'genesis-01/00-como-usar.md','gold')}
      ${homeCard('Hebraico','Texto original','Texto, transliteração e os termos que decidem o capítulo.','genesis-01/01-texto-hebraico.md','hebrew')}
      ${homeCard('Wiki lexical','Palavras em disputa',`${l} notas comparando corpus, léxicos e testemunhas.`,'docs/lexicos/00-indice.md','blue')}
      ${homeCard('Método','Como o projeto sabe',`${m} notas sobre níveis, fontes, camadas e inferência.`,'docs/metodo/00-indice.md','green')}
      ${homeCard('Registro','Posições e faturas','O que foi adotado, o que segue em aberto e o preço de cada posição.','docs/posicoes.md','burgundy')}
      ${homeCard('Cânon','Fios canônicos','Promessas, ecos e temas que Gênesis abre e outros textos pagam.','docs/fios-canonicos.md','purple')}
    </div></section>
    <section class="method-strip"><div><span class="overline">Régua do projeto</span><h2>Nem toda afirmação pesa igual.</h2><p>Os marcadores já presentes nos documentos aparecem na interface durante a leitura.</p></div><div class="axes"><span><b>N</b>N1–N5<small>texto</small></span><span><b>F</b>F1–F3<small>fonte</small></span><span><b>C</b>C1–C5<small>camada</small></span><span><b>P</b>P1–P3<small>pergunta</small></span></div></section>`;
  els.home.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>b.dataset.path&&openDoc(b.dataset.path));
}
function showHome(){ state.view='home'; state.current=null; els.search.value=''; els.results.classList.add('hidden'); els.doc.classList.add('hidden'); els.home.classList.remove('hidden'); els.title.textContent='Visão geral'; els.path.textContent='biblioteca local'; els.time.textContent='O conteúdo continua no vault.'; els.badges.innerHTML='<span class="muted">Abra um documento.</span>'; els.outline.innerHTML='<span class="muted">—</span>'; els.prev.disabled=els.next.disabled=true; history.replaceState(null,'',location.pathname); markActive(); els.reader.scrollTo({top:0}); }

function resolve(targetPath){ const clean=targetPath.split('#')[0].trim(); const anchor=targetPath.includes('#')?targetPath.split('#').slice(1).join('#'):''; const w=clean.toLowerCase().endsWith('.md')?clean:`${clean}.md`; const rel=norm(`${dir(state.current||'')}/${w}`); const d=byPath(rel)||byPath(norm(w))||state.docs.find(x=>stem(x.path)===stem(w)); return d?{path:d.path,anchor}:null; }
function wiki(raw){ return raw.replace(/\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]/g,(_,t,l)=>{const r=resolve(t),text=(l||t).trim(); return r?`[${text}](wiki:${encodeURIComponent(r.path)}${r.anchor?`#${r.anchor}`:''})`:`${text} ⚠`;}); }
function rewrite(container){
  container.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href'); if(!h)return; if(h.startsWith('wiki:')){a.dataset.doc=decodeURIComponent(h.slice(5).split('#')[0]);a.dataset.anchor=h.includes('#')?h.slice(h.indexOf('#')+1):'';a.href='#';} else if(/^https?:|^mailto:|^tel:/i.test(h)){a.target='_blank';a.rel='noopener noreferrer';} else if(!h.startsWith('#')&&h.split('#')[0].toLowerCase().endsWith('.md')){const r=resolve(h);if(r){a.dataset.doc=r.path;a.dataset.anchor=r.anchor;a.href='#';}}});
  container.querySelectorAll('img[src]').forEach(img=>{const s=img.getAttribute('src'); if(!s||/^https?:|^data:|^blob:/i.test(s))return; img.src=`/asset?path=${encodeURIComponent(norm(`${dir(state.current)}/${decodeURIComponent(s)}`))}`; img.loading='lazy';});
  container.onclick=e=>{const a=e.target.closest('a[data-doc]');if(!a)return;e.preventDefault();openDoc(a.dataset.doc,a.dataset.anchor||'');};
}
function slug(s){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9\u0590-\u05ff]+/g,'-').replace(/^-|-$/g,'')||'secao'; }
function outline(){ const used=new Set(),rows=[]; els.doc.querySelectorAll('h2,h3,h4').forEach(h=>{let id=h.id||slug(h.textContent);let n=2,b=id;while(used.has(id))id=`${b}-${n++}`;used.add(id);h.id=id;rows.push(`<a class="l${h.tagName.slice(1)}" href="#${id}">${esc(h.textContent)}</a>`);}); els.outline.innerHTML=rows.join('')||'<span class="muted">Sem subtítulos.</span>'; }
function rtl(){ const re=/[\u0590-\u05ff]/g; els.doc.querySelectorAll('p,li,td,th,blockquote').forEach(el=>{const t=el.textContent||'',n=t.match(re)?.length||0,l=t.replace(/\s/g,'').length||1;if(n>=4&&n/l>.35){el.dir='rtl';el.lang='he';}}); }
function badges(raw){ const f=new Set(); for(const re of [/\bN[1-5]\b/g,/\bF[1-3]\b/g,/\bC[1-5]\b/g,/\bP[1-3]\b/g,/\bIA(?:✓|:[A-Za-z+]+)/g]) for(const x of raw.matchAll(re))f.add(x[0]); els.badges.innerHTML=f.size?[...f].sort().map(x=>`<span class="badge ${x[0].toLowerCase()}">${esc(x)}</span>`).join(''):'<span class="muted">Nenhum marcador explícito.</span>'; }
function neighbors(p){ const i=state.docs.findIndex(d=>d.path===p); return {prev:i>0?state.docs[i-1]:null,next:i>=0&&i<state.docs.length-1?state.docs[i+1]:null}; }
function nav(p){const{prev,next}=neighbors(p);els.prev.disabled=!prev;els.next.disabled=!next;els.prev.dataset.path=prev?.path||'';els.next.dataset.path=next?.path||'';}
async function renderMermaid(){if(!mermaidApi)return;const nodes=[...els.doc.querySelectorAll('.mermaid')];if(nodes.length)try{await mermaidApi.run({nodes});}catch(e){console.warn(e);}}

async function openDoc(path,anchor=''){
  try{ state.view='doc'; const r=await fetch(`/api/doc?path=${encodeURIComponent(path)}`,{cache:'no-store'}),d=await r.json(); if(!r.ok)throw new Error(d.error||'Documento não encontrado'); state.current=d.path; els.doc.innerHTML=md.render(wiki(d.markdown)); els.doc.insertAdjacentHTML('afterbegin',`<div class="doc-chrome"><span>${glyph(d.path)}</span><div><b>${esc(category(d.path))}</b><small>${esc(d.path)}</small></div></div>`); rewrite(els.doc); outline(); rtl(); badges(d.markdown); await renderMermaid(); els.title.textContent=d.title; els.path.textContent=d.path; els.time.textContent=`Relido do disco · ${new Date(d.modifiedAt).toLocaleString('pt-BR')}`; document.title=`${d.title} · Projeto Gênesis`; nav(d.path); markActive(); els.results.classList.add('hidden'); els.home.classList.add('hidden'); els.doc.classList.remove('hidden'); const q=new URLSearchParams();q.set('doc',d.path);history.replaceState(null,'',`#${q}`); if(anchor)requestAnimationFrame(()=>document.getElementById(anchor)?.scrollIntoView({behavior:'smooth'}));else els.reader.scrollTo({top:0}); }
  catch(e){els.home.classList.add('hidden');els.doc.classList.remove('hidden');els.doc.innerHTML=`<div class="error"><b>!</b><h1>Não consegui abrir o arquivo</h1><p>${esc(e.message)}</p></div>`;}
}

async function search(q){q=q.trim();if(q.length<2){els.results.classList.add('hidden');state.view==='home'?showHome():els.doc.classList.remove('hidden');return;}const r=await fetch(`/api/search?q=${encodeURIComponent(q)}`,{cache:'no-store'}),d=await r.json(),items=d.results||[];els.results.innerHTML=`<header class="results-head"><div><span class="overline">Busca no vault</span><h1>${items.length} resultado${items.length===1?'':'s'}</h1></div><p>para “${esc(q)}”</p></header><div>${items.length?items.map(x=>`<button class="result" data-path="${esc(x.path)}"><span>${glyph(x.path)}</span><div><small>${category(x.path)}</small><strong>${esc(x.title)}</strong><code>${esc(x.path)}</code><p>${esc(x.snippet)}</p></div><b>→</b></button>`).join(''):'<div class="empty">⌕<strong>Nada encontrado.</strong><p>Tente outra palavra, referência ou termo hebraico.</p></div>'}</div>`;els.results.classList.remove('hidden');els.doc.classList.add('hidden');els.home.classList.add('hidden');els.results.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>{els.search.value='';openDoc(b.dataset.path);});}
async function health(){try{const r=await fetch('/api/health',{cache:'no-store'}),d=await r.json();els.health.classList.toggle('ok',!!d.ok);els.health.title=d.ok?`Vault: ${d.vault}`:'Vault indisponível';}catch{els.health.classList.remove('ok');}}
function setTheme(t){document.documentElement.dataset.theme=t;localStorage.setItem('genesis-theme',t);}
function initTheme(){setTheme(localStorage.getItem('genesis-theme')||((matchMedia?.('(prefers-color-scheme: dark)').matches)?'dark':'light'));}

els.search.oninput=()=>{clearTimeout(state.timer);state.timer=setTimeout(()=>search(els.search.value),160);};
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();els.search.focus();els.search.select();}if(e.key==='Escape'){els.search.value='';search('');els.sidebar.classList.remove('open');}if(e.altKey&&e.key==='ArrowLeft'&&!els.prev.disabled)openDoc(els.prev.dataset.path);if(e.altKey&&e.key==='ArrowRight'&&!els.next.disabled)openDoc(els.next.dataset.path);});
els.refresh.onclick=async()=>{await loadTree();renderHome();state.current?await openDoc(state.current):showHome();toast('Vault relido do disco.');};
els.theme.onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
els.homeBtn.onclick=showHome;els.homeLink.onclick=()=>{showHome();els.sidebar.classList.remove('open');};els.toggleNav.onclick=()=>els.sidebar.classList.toggle('open');els.prev.onclick=()=>els.prev.dataset.path&&openDoc(els.prev.dataset.path);els.next.onclick=()=>els.next.dataset.path&&openDoc(els.next.dataset.path);els.outline.onclick=e=>{const a=e.target.closest('a[href^="#"]');if(a){e.preventDefault();document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth',block:'start'});}};

async function boot(){initTheme();await health();try{await loadTree();renderHome();const p=new URLSearchParams(location.hash.replace(/^#/,'')),r=p.get('doc');r&&byPath(r)?await openDoc(r):showHome();}catch(e){els.home.classList.add('hidden');els.doc.classList.remove('hidden');els.doc.innerHTML=`<div class="error"><b>!</b><h1>Não encontrei o vault</h1><p>${esc(e.message)}</p><p>Veja <code>web/README.md</code> e <code>GENESIS_VAULT</code>.</p></div>`;}}
boot();
