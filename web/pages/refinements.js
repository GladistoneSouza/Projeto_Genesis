const $r=s=>document.querySelector(s);
const home=$r('#home'),doc=$r('#doc'),tree=$r('#tree');

function currentPath(){return doc?.querySelector('.doc-top small')?.textContent.trim()||''}
function cleanText(s){return String(s||'').replace(/\s+/g,' ').trim()}

function fixHomeCount(){
  if(!home||!tree)return;
  const card=[...home.querySelectorAll('.card')].find(c=>cleanText(c.querySelector('strong')?.textContent)==='Leitura guiada');
  if(!card)return;
  const direct=[...tree.querySelectorAll('button[data-doc]')].filter(b=>/^genesis-01\/[^/]+\.md$/i.test(b.dataset.doc||'')).length;
  const modules=[...tree.querySelectorAll('button[data-doc]')].filter(b=>/^genesis-01\/texto-hebraico\/[^/]+\.md$/i.test(b.dataset.doc||'')).length;
  const p=card.querySelector('p');
  const text=direct?`${direct} etapas de leitura${modules?` · ${modules} módulos de consulta separados`:''}.`:'';
  if(p&&text&&p.textContent!==text)p.textContent=text;
}

function enhanceSemanticTables(){
  if(!doc)return;
  doc.querySelectorAll('table:not(.semantic-checked)').forEach(table=>{
    table.classList.add('semantic-checked');
    const heads=[...table.querySelectorAll('thead th')].map(th=>cleanText(th.textContent).toLocaleLowerCase('pt-BR'));
    if(!(heads.length===4&&heads[0].includes('hebraico')&&heads[1].includes('translitera')&&heads[2].includes('raiz')&&heads[3].includes('sentido')))return;
    const rows=[...table.querySelectorAll('tbody tr')].map(row=>[...row.querySelectorAll('td')]).filter(cells=>cells.length===4);
    if(!rows.length)return;
    const list=document.createElement('div');list.className='lexicon-words';
    const tools=document.createElement('div');tools.className='lexicon-tools';
    const count=document.createElement('span');count.textContent=`${rows.length} palavras · abra uma para ver o sentido e uso aqui`;
    const actions=document.createElement('span');
    for(const [action,label] of [['open','Abrir todas'],['close','Fechar todas']]){
      const button=document.createElement('button');button.type='button';button.dataset.action=action;button.textContent=label;actions.append(button);
    }
    tools.append(count,actions);list.append(tools);
    for(const cells of rows){
      const entry=document.createElement('details');entry.className='lexicon-word';
      const summary=document.createElement('summary');
      for(const [index,className] of [[0,'word-hebrew'],[1,'word-name'],[2,'word-root']]){
        const span=document.createElement('span');span.className=className;span.innerHTML=cells[index].innerHTML;
        if(index===0){span.dir='rtl';span.lang='he'}
        summary.append(span);
      }
      const meaning=document.createElement('div');meaning.className='word-meaning';meaning.innerHTML=cells[3].innerHTML;
      entry.append(summary,meaning);list.append(entry);
    }
    tools.addEventListener('click',event=>{
      const button=event.target.closest('button[data-action]');if(!button)return;
      const open=button.dataset.action==='open';
      list.querySelectorAll('details.lexicon-word').forEach(entry=>entry.open=open);
    });
    table.replaceWith(list);
  });
}

function makeDetailsFromSection(heading,until,summaryText,className){
  if(!heading||heading.dataset.refined)return null;
  heading.dataset.refined='1';
  const details=document.createElement('details');
  details.className=className;
  details.id=heading.id||'';
  const summary=document.createElement('summary');
  summary.textContent=summaryText;
  details.append(summary);
  heading.replaceWith(details);
  let n=details.nextElementSibling;
  while(n&&n!==until){const next=n.nextElementSibling;if(n.tagName==='HR')n.remove();else details.append(n);n=next}
  return details;
}

function enhanceHebrewHub(){
  if(!doc||currentPath()!=='genesis-01/01-texto-hebraico.md')return;
  doc.classList.add('hebrew-hub');
  if(doc.dataset.hubRefined==='1')return;
  doc.dataset.hubRefined='1';
  const h2s=[...doc.querySelectorAll('h2')];
  const about=h2s.find(h=>cleanText(h.textContent)==='O que é esta página');
  const consult=h2s.find(h=>cleanText(h.textContent)==='O que você quer consultar?');
  const shortcuts=h2s.find(h=>cleanText(h.textContent)==='Atalhos de estudo');
  if(about&&consult)makeDetailsFromSection(about,consult,'Sobre este hall e como usar','hub-about');
  if(consult){
    const grid=document.createElement('div');grid.className='hub-grid';
    let n=consult.nextElementSibling;
    while(n&&n!==shortcuts){
      if(n.tagName==='H3'){
        const heading=n,p=heading.nextElementSibling,nextAfterP=p?.nextElementSibling;
        if(p?.tagName==='P'){
          const sourceLink=p.querySelector('a[data-doc]');
          if(sourceLink){
            const clone=p.cloneNode(true);clone.querySelector('a')?.remove();
            const description=cleanText(clone.textContent).replace(/^[—–\-·:]+\s*/,'');
            const card=document.createElement('a');card.className='hub-card';card.href='#';card.id=heading.id||'';card.dataset.doc=sourceLink.dataset.doc||'';
            if(sourceLink.dataset.anchor)card.dataset.anchor=sourceLink.dataset.anchor;
            const action=cleanText(heading.textContent).replace(/^Quero\s+/i,''),label=cleanText(sourceLink.textContent),tags=/termos que pesam/i.test(action)?'<em class="hub-tags">bara · yom · raqia</em>':'';
            card.innerHTML=`<small>${label}</small><strong>${action}</strong><span>${description}</span>${tags}<b>Abrir →</b>`;
            grid.append(card);heading.remove();p.remove();if(nextAfterP?.tagName==='UL')nextAfterP.remove();n=nextAfterP?.tagName==='UL'?nextAfterP.nextElementSibling:nextAfterP;continue;
          }
        }
      }
      const next=n.nextElementSibling;if(n.tagName==='HR')n.remove();n=next;
    }
    consult.insertAdjacentElement('afterend',grid);
  }
  if(shortcuts){
    const table=shortcuts.nextElementSibling?.tagName==='TABLE'?shortcuts.nextElementSibling:null;
    const details=document.createElement('details');details.className='hub-shortcuts';details.id=shortcuts.id||'';
    const summary=document.createElement('summary');summary.textContent='Não sabe onde procurar? Ver atalhos de estudo';details.append(summary);shortcuts.replaceWith(details);if(table)details.append(table);
    const note=details.nextElementSibling?.tagName==='BLOCKQUOTE'?details.nextElementSibling:null;
    if(note){const editorial=document.createElement('details');editorial.className='hub-editorial';const es=document.createElement('summary');es.textContent='Nota de arquitetura editorial';editorial.append(es,note);details.insertAdjacentElement('afterend',editorial)}
  }
}

function applyRefinements(){fixHomeCount();enhanceSemanticTables();enhanceHebrewHub()}
function scheduleRefinements(){for(const ms of [0,250,800,1600])setTimeout(applyRefinements,ms)}

// No MutationObserver here: the reader mutates large DOM trees while loading Markdown,
// and observing the whole document can starve the app in a feedback loop.
document.addEventListener('click',scheduleRefinements,true);
window.addEventListener('pageshow',scheduleRefinements);
window.addEventListener('hashchange',scheduleRefinements);
setTimeout(scheduleRefinements,0);
