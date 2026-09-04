# Léxicos — a wiki lexical do projeto

> **Para que serve:** *bara* aparece em Gênesis 1, 2, 5 e 6. *Zera'* atravessa o livro inteiro e sai em Gálatas. Um verbete escrito dentro de `genesis-01/` é escrito uma vez e enterrado num capítulo. Escrito aqui, serve os cinquenta.
>
> **O que esta pasta não é:** não é o léxico do projeto. É o lugar onde **os léxicos existentes são postos lado a lado** e a divergência entre eles fica visível — exatamente o que `genesis-01/02-traducoes-br.md` faz com as versões em português.
>
> Regra normativa: [`regras.md`](../regras.md) §13. Método: [`metodo/`](../metodo/00-indice.md).

---

## A divisão com o capítulo — §13.8

> **A palavra na língua fica aqui. A palavra neste capítulo fica no capítulo.**

Esta pasta dá a **base geral**: como o hebraico foi levantado e analisado no projeto, e o que cada palavra é na língua inteira. O que se consulta **de mão, durante a exegese** — onde a palavra cai neste capítulo, com o que contrasta, como o projeto a lê nesta passagem — mora no `01-texto-hebraico` da pasta do capítulo, e continua sendo escrito por inteiro lá.

| | Aqui | No capítulo |
|---|---|---|
| Lema, raiz, binyan | ✅ | resumo |
| Uso em toda a Escritura | ✅ | — |
| Ocorrências **neste capítulo** e onde caem | — | ✅ |
| Contraste com as vizinhas do capítulo | — | ✅ |
| Léxicos, versões antigas, camadas, faturas | ✅ | — |
| Leitura do projeto **nesta passagem** | ponteiro | ✅ |

**A wiki não esvazia o capítulo (§13.9) e o capítulo não é repetido aqui (§13.10).** Duas cópias envelhecem em ritmos diferentes — a §12 já mostrou o preço disso.

Última atualização: 2026-09-04 · primeira passada — três verbetes de Gênesis 1.

---

## A triagem: nem toda palavra ganha nota

O critério já estava escrito em [[../metodo/onde-a-briga-nao-esta|onde-a-briga-nao-esta]]. Em Gênesis 1, cinco palavras têm briga real; as outras trinta e oito, não.

| Situação | Onde mora |
|---|---|
| Palavra **sem divergência** | Uma linha na tabela do capítulo. Glosa e ocorrências. Fim |
| Palavra **com divergência** | Nota própria aqui, com o aparato completo |

Nota nova só se justifica quando há **o que comparar**.

---

## A inversão que faz isto funcionar

> **A coluna primária de cada nota não é dicionário nenhum. É o corpus.**

O sentido se estabelece por **onde mais a palavra aparece** — dado livre, completo, primário, camada **C1**. Os dicionários entram depois, num bloco rotulado *"o que os instrumentos dizem"*, marcados **C4**, cada um com a sua data.

Não é preciosismo. É o que já aconteceu duas vezes neste projeto: o impasse de *bereshit* foi desfeito por **uma ocorrência** (`Jr 26.1`), não por léxico; e a questão do *ex nihilo* em *bara* foi desfeita por `Gn 1.27` contra `Gn 2.7`. O método que funciona aqui já era esse — a wiki só o transforma em layout.

---

## A estrutura de cada nota

| Bloco | Camada | O que traz |
|---|---|---|
| **Forma** | C1 + C3 | Lema, raiz, binyan, parsing. **Vem primeiro** — define de que palavra se está falando (§11.10) |
| **O corpus** | C1 | Onde mais aparece. A coluna que decide |
| **Os instrumentos** | C4 | BDB, Gesenius, SDBH, e o buraco declarado onde falta |
| **As traduções** | — | Ponteiro para o `02-traducoes-br` do capítulo |
| **Onde a briga está** | N5 | E se o projeto tem posição registrada, ou não |

---

## O estado das fontes — o que dá para conferir e o que falta comprar

| Fonte | Acesso | Estado |
|---|---|---|
| **O corpus** — [Sefaria](https://www.sefaria.org/Genesis.1?lang=he), [Blue Letter Bible](https://www.blueletterbible.org/) | **Livre** | ✅ é a coluna que decide |
| **BDB** (1906) | **Livre**, domínio público | **F2** — consultado nos três verbetes em 2026-09-04 |
| **Klein**, etimológico | **Livre**, no Sefaria | **F2** — consultado nos três |
| **Strong's** (índice) | **Livre** | **F2** — contagens conferidas |
| **UBS / SDBH** (2000–2023), **em português** | **Livre**, CC BY-SA 4.0, dados versionados | **F1** — consultado nos três verbetes em 2026-09-04 |
| **Gesenius-Tregelles** (1846/57) | **Livre** | ⛔ **não é testemunha independente** — ver abaixo |
| ~~semanticdictionary.org~~ | — | ⛔ interface morta; **os dados estão no GitHub**, ver abaixo |
| **HALOT** | **Pago** | ❌ **não consultado** |
| **DCH** (Clines) | **Pago** | ❌ **não consultado** |
| **DITAT** (pt-BR) | **Comprável**, impresso | ❌ não consultado |

### A descoberta que fecha a lista das fontes livres

Fomos atrás das duas que faltavam. **Nenhuma das duas acrescenta um segundo parecer**, e o motivo importa mais que o resultado.

**Gesenius-Tregelles é da mesma família que o BDB.** A genealogia, conferida:

```
Gesenius, Lexicon Manuale (1810-12)
   ├── trad. Robinson (1836) ──> BDB (1906)
   ├── trad. Tregelles (1846/57) ──> o "Gesenius" que o Blue Letter Bible serve
   └── glosas do Strong's
```

Os editores do BDB chamam Gesenius de *"o pai da lexicografia hebraica moderna"*. Não é elogio distante: **o BDB é construído sobre a tradução de Robinson do mesmo livro.** Consultar Tregelles depois do BDB não é ouvir um segundo perito — é ouvir o mesmo perito, cinquenta anos antes. Regra §13.5.2.

**E Tregelles editou a teologia de propósito.** No próprio prefácio ele critica Robinson por ter escrito que *"nenhum comentário era necessário sobre quaisquer visões teológicas que a obra pudesse conter"*, e declara ter corrigido o **racionalismo** de Gesenius na sua tradução. Ou seja: o "Gesenius" gratuito é uma tradução **confessionalmente editada**, e o tradutor diz isso na cara.

**As ferramentas ainda empilham.** O BibleStudyTools credita a entrada a *"Brown, Driver, Briggs, Gesenius Lexicon"* — **uma família impressa como autoridade composta**, numa linha só. E as contagens divergem entre ferramentas livres: 54 ocorrências no Strong's do BLB, 46 versículos no BibleStudyTools, porque contam coisas diferentes.

> ### ⚠️ A conclusão estrutural — **retirada em 2026-09-04**
>
> Esta seção afirmava: *"a camada lexical gratuita tem exatamente uma tradição… **não existe segunda opinião gratuita sobre divisão de sentidos**"*, e concluía que HALOT e DCH eram a única forma de obter testemunha independente.
>
> **Estava errado.** Existe, é gratuita, é moderna, **é em português**, e é metodologicamente independente da família Gesenius — ver abaixo.
>
> **A causa do erro merece ficar registrada, porque é de método:** concluí *"não existe"* a partir de *"não consegui alcançar"*. A interface do SDBH estava morta; **os dados nunca estiveram**. São coisas diferentes, e o salto entre elas é exatamente o tipo de coisa que os quatro eixos existem para impedir. O achado veio do assistente do outro lado da banca, não daqui.
>
> **O que sobrevive da seção:** a genealogia é verdadeira, e a §13.5.2 continua valendo — BDB, Tregelles e Strong's **são** uma família só, e vê-los concordar não é confirmação.

---

## UBS Dictionary of Biblical Hebrew — a testemunha independente, e em português

Derivado do **SDBH** (*Semantic Dictionary of Biblical Hebrew*, United Bible Societies, 2000–2023). Organizado por **domínio semântico** — método declaradamente diferente da linhagem etimológica e por raiz.

| | |
|---|---|
| **Dados** | [`ubsicap/ubs-open-license`](https://github.com/ubsicap/ubs-open-license) → `dictionaries/hebrew/JSON/` |
| **Arquivo** | `UBSHebrewDic-v0.9.2-pt.JSON` — 22,9 MB, 7.932 verbetes |
| **Commit fixado** | [`0592471`](https://github.com/ubsicap/ubs-open-license/commit/0592471dbc8bbda7a63c6c8eb3b0686a3a548aee) — 2026-03-21, assinado por **Reinier de Blois**, editor do SDBH |
| **sha256** | `00ba7b930735d3e4264985b552d117ba2bfdab310f084b0ad2a8771979c3ff82` |
| **Licença** | CC BY-SA 4.0 · © United Bible Societies |
| **Cobertura** | ~90% do vocabulário do AT |

**Três coisas que fazem dele a melhor fonte livre deste projeto:**

1. **É em português, e não é tradução automática.** Os verbetes têm **autor nomeado**: *bara* e *yom* são de **Enio R. Mueller**; *raqia* é de **de Blois**. É o único léxico moderno em português que apareceu nesta investigação — o DITAT é de 1980 e é dicionário teológico, não léxico.
2. **Separa `DefinitionShort` de `Glosses` em campos distintos** — a mesma distinção de [[../metodo/glosa-nao-e-traducao|glosa-nao-e-traducao]], encontrada aqui de forma independente e encodada no modelo de dados.
3. **É versionado e conferível por hash.** Diferente de qualquer verbete lido em página web, este é um arquivo com commit e checksum: **F1 reproduzível**, não F2. Regra §13.11.

**Ressalva, e ela é honesta:** o README do SDBH cita **HALOT e DCH** entre as obras de referência. Não é uma tradição que os ignora — é uma que os leu. Independente de **método**, não de **acesso**.

### Como usar sem virar fork do dicionário

Licença é **CC BY-SA 4.0**, e o *ShareAlike* incide sobre **material adaptado que se compartilha**, não sobre fonte consultada. O modelo adotado (§13.11): consultar o dataset, registrar versão/commit/hash, **citação curta com atribuição**, síntese na voz do projeto, **sem versionar os 23 MB no vault** e sem reproduzir verbetes inteiros em série.

> **Por que F2 e não F1.** Os verbetes foram obtidos pela API do Sefaria e pelo Blue Letter Bible, em **leitura mediada** — o volume não esteve em mãos e o texto não foi conferido palavra a palavra. Pela §7.2, isso é **rodapé sem página, declarando**. Cada nota traz a URL: abrir e conferir promove a **F1**.

### O que a primeira conferência produziu

Não foi confirmação de rotina. Os três verbetes renderam coisa diferente, e vale saber antes de ler:

- ***bara*** — o BDB **acrescentou** as ocorrências mais duras contra o verbo carregar *ex nihilo* (`Is 54.16`, o ferreiro; `Ml 2.10`, israelitas vivos). O instrumento reforçou a leitura do corpus. **E corrigiu uma afirmação nossa:** o piel de `Js 17.15` não é homógrafo, é o mesmo lexema em outro binyan
- ***raqia*** — o BDB **entrega a conclusão junto com a glosa**: diz que o *raqia* era "tido pelos hebreus como sólido, e sustentando as águas acima". Juízo cosmológico impresso no mesmo tipo de letra do sentido
- ***yom*** — o instrumento **confirmou que não tem nada a decidir**. Dá o dia solar e o período indefinido; os dois lados acham o que precisam

---

## Os verbetes

| Palavra | Onde nasce | Estado |
|---|---|---|
| [[bara]] · בָּרָא | Gn 1.1 | Corpus ✅ · BDB/Klein **F2** · UBS/SDBH **F1** ✅ · pagos ❌ |
| [[raqia]] · רָקִיעַ | Gn 1.6 | Corpus ✅ · BDB/Klein **F2** · UBS/SDBH **F1** ✅ · **questão não registrada em `posicoes.md`, e a evidência ficou mais pesada** |
| [[yom]] · יוֹם | Gn 1.5 | Corpus ✅ · BDB/Klein **F2** · UBS/SDBH **F1** ✅ · pagos ❌ e sem urgência |

**A escrever para Gênesis 1:** *re'shit* (a sintaxe de 1.1 — hoje tratada em `04-exegese-1-2`), *tselem / demut* (hoje em `08-imago-dei`).

---

## Procedência

`IA:Claude` — estrutura e blocos de corpus redigidos em 2026-09-04, sujeitos à ratificação do autor.

`IA:Claude+ChatGPT` — **conferência cruzada** na camada das fontes: a rota do UBS/SDBH foi encontrada pelo assistente externo, verificada e integrada aqui, e derrubou uma conclusão redigida deste lado. Ver [[../regras|regras.md]] §12.6 e §12.8.

**Estado dos blocos:** corpus ✅ · BDB/Klein **F2** (leitura mediada) · UBS/SDBH **F1** (arquivo lido, commit e hash registrados) · HALOT, DCH e DITAT ❌ não consultados, e declarados verbete a verbete.
