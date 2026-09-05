# Biblioteca local do Projeto Gênesis — V1

Camada de apresentação **somente leitura** para o vault Markdown do Projeto Gênesis.

## Princípio arquitetural

> **A web depende do conteúdo; o conteúdo não depende da web.**

- Os `.md`, imagens e demais assets continuam no vault `Projeto Genesis/Projeto Genesis/`.
- A aplicação **não copia** o conteúdo para `public/`.
- O servidor lê os arquivos diretamente do disco.
- Se `web/` for apagada, o comentário continua inteiro e utilizável no Obsidian.
- A aplicação não edita o conteúdo e não cria uma segunda fonte de verdade.

## Rodar

Na raiz do repositório:

```bash
node web/server.mjs
```

Abra:

```text
http://127.0.0.1:4173
```

Não há `npm install` nesta versão. O servidor usa apenas módulos nativos do Node.

### Vault em outro caminho

```bash
GENESIS_VAULT="/caminho/para/Projeto Genesis/Projeto Genesis" node web/server.mjs
```

### Rede local, deliberadamente

```bash
HOST=0.0.0.0 node web/server.mjs
```

Por padrão o servidor escuta apenas `127.0.0.1`.

## O que a V1 já faz

- página inicial visual com portas de entrada para capítulo, hebraico, léxicos, método, posições e fios;
- árvore automática de todos os Markdown do vault;
- abre os `.md` sem duplicá-los;
- busca textual global;
- wikilinks do Obsidian (`[[arquivo]]`, `[[arquivo|rótulo]]`);
- links Markdown relativos entre documentos;
- imagens e outros assets servidos **do local original**;
- tabelas, listas, blockquotes, código e notas de rodapé;
- Mermaid renderizado no navegador;
- direção RTL automática para blocos predominantemente hebraicos;
- painel de contexto com marcadores N/F/C/P/IA encontrados na página;
- sumário lateral gerado dos headings;
- navegação anterior/próximo (`Alt+←` / `Alt+→`);
- tema claro e escuro persistente;
- botão **↻** para reler o vault sem reiniciar o servidor;
- layout responsivo para leitura no celular.

## Dependência externa deliberada

Conteúdo, imagens e servidor são locais. Para manter a V1 sem toolchain, o navegador carrega por CDN:

- `markdown-it`;
- `markdown-it-footnote`;
- `mermaid`.

Uma etapa futura pode fixar essas bibliotecas localmente com `package-lock.json`, tornando a leitura 100% offline sem mudar a arquitetura do conteúdo.

## O que NÃO faz

- não edita Markdown;
- não grava no vault;
- não tem banco de dados;
- não exige build;
- não publica nada na internet;
- não substitui Obsidian, Git ou o fluxo editorial.

## Estrutura

```text
web/
├── server.mjs
├── README.md
└── public/
    ├── index.html
    ├── app.js
    └── styles.css
```

## Próximas melhorias candidatas

1. páginas visuais específicas para `posicoes.md`, `fios-canonicos.md` e `docs/lexicos/`;
2. fixar as bibliotecas JS localmente para modo 100% offline;
3. backlinks e grafo de wikilinks;
4. filtros por `N`, `F`, `C`, procedência e P1/P2/P3;
5. botão para abrir o arquivo correspondente no Obsidian/editor local;
6. modo de leitura por capítulo com progresso e favoritos locais.
