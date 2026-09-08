# Gênesis 1 — Fontes, procedência e lacunas

> **Módulo:** [[../01-texto-hebraico|Texto hebraico — índice]] · **Pasta:** Gênesis 1 · **Etapa:** material preparatório

---

Esta página registra **de onde veio o material hebraico desta área, o que pode ser conferido e o que ainda falta**. A divisão em módulos não muda a procedência do conteúdo anterior; apenas separa as perguntas para consulta.

## Procedência

**Texto hebraico.** *Miqra according to the Masorah*, obtida via API do Sefaria em 2026-09-03. É edição do texto massorético com vocalização e acentuação completas. Nenhum caractere foi digitado de memória — o texto foi transferido da fonte e conferido em amostragem. O material está em [[02-texto-integral|Texto hebraico integral]].

### Segunda testemunha — colação contra o Códice de Leningrado (2026-09-08)

O texto acima vinha de **uma fonte só**, e isso era ponto único de falha: um erro de digitação na edição de origem não seria detectável por nada no repositório. Em 2026-09-08 o capítulo inteiro foi **colacionado contra uma segunda testemunha, de outra tradição manuscrita**.

| | |
|---|---|
| **Testemunha A** (a do repositório) | *Miqra according to the Masorah* — tradição do **Códice de Alepo**, via API do Sefaria |
| **Testemunha B** | **Westminster Leningrad Codex** — Códice de **Leningrado**, de `openscriptures/morphhb` |
| **Arquivo** | `wlc/Gen.xml` |
| **Commit fixado** | [`2408955`](https://github.com/openscriptures/morphhb/commit/2408955b1f3a1ea8acfdf5f51155674917e491b0) — 2022-03-10 |
| **sha256** | `0526e5c9a5fb4d907847645f954ed3d1268fa69decbd872056cedd2668d86449` |

Fixação de versão e registro de hash conforme a **§13.11**; o dataset **não** foi versionado no vault.

#### O resultado

> **`C1` — esqueleto consonantal: 31 de 31 versículos idênticos. Zero divergência.**

O texto consonantal de Gênesis 1 neste repositório está **confirmado por duas tradições manuscritas independentes**. O ponto único de falha deixou de existir para este capítulo.

Em **`C3`** — vogais e acentos — as divergências caem em três grupos, e a maioria esmagadora **não é variante textual**:

| Tipo | Quantas | O que é |
|---|---|---|
| **Convenção de codificação** — *qamets qatan* (U+05C7) na testemunha A × *qamets* simples (U+05B8) na B | 15 | Em כׇּל / כָּל (*kol*) e לְאׇכְלָה. **Mesma palavra, mesma leitura**: as edições discordam sobre usar o codepoint dedicado |
| **Convenção de codificação** — *qadma* × *pashta* no *pashta* duplicado | 6 | Os dois sinais são **visualmente idênticos**; as edições discordam sobre como codificar o primeiro traço. Inclui תֹהוּ em `1.2` |
| **Variantes reais** | **2** | Abaixo |

#### As duas variantes reais

**`Gn 1.18` — vocalização.** וּלְהַבְדִּיל (A, *shevá*) × וּלֲהַבְדִּיל (B, *hataf patach*) sob o *lamed*. Ambas leem "e para separar": **sem efeito morfológico nem semântico**.

**`Gn 1.11` — cantilação.** A palavra דֶּשֶׁא carrega **revia** em A e **zaqef qatan** em B. Os dois são disjuntivos, mas de **hierarquia diferente** — as duas tradições dividem o versículo de modo ligeiramente distinto neste ponto. É a única divergência de fraseado do capítulo.

#### E o que isso faz pelos argumentos já construídos

**`Gn 1.1` é idêntico nas duas tradições, em todos os níveis.** O *tipcha* disjuntivo sobre בְּרֵאשִׁ֖ית e o *munach* conjuntivo sobre בָּרָ֣א — em que se apoia a leitura de 1.1 como **frase independente** — não dependem de uma edição só. Isso **reforça** a posição #3 de [[../../docs/posicoes|posicoes.md]], e a §11.9 continua exigindo que o argumento contrário (a vocalização sem artigo) seja reportado junto.

**`Gn 1.2` diverge apenas na codificação do *pashta*.** O ***etnachta* sobre תְהוֹם** — que divide o versículo entre as trevas e o Espírito — é **idêntico** nas duas testemunhas.

---

**Léxico do capítulo.** Substitui a tabela de 13 termos que existia no antigo `genesis-capitulo-01.md` §3.2, ampliando-a para 43 verbetes na ordem de ocorrência. Todos os termos da tabela anterior estão cobertos: `'ish / 'ishshah` foi realocado como observação sob *zakhar u-neqevah*, porque esses termos **não ocorrem em Gênesis 1** — aparecem só em Gênesis 2. As afirmações do autor sobre *bereshit* (início real do mundo criado) e *bara* (*ex nihilo*) foram preservadas na íntegra. O verbete de *bereshit* recebeu em 2026-09-04 a precisão do autor sobre o alcance da palavra "absoluto" — ver [[../04-exegese-1-2]] §4.2.

**Aqui está o ponto fraco do [[04-lexico-do-capitulo|léxico do capítulo]], e ele precisa ser dito.** Ao contrário do texto hebraico — que foi transferido de uma edição identificada e pode ser aberto no link da própria página —, **a tabela rápida não tem fonte citada verbete a verbete.** Ela não foi copiada de um dicionário; foi redigida para o documento preparatório. Onde uma afirmação depende de leitura disputada, o verbete remete ao documento de estudo ou à [[../../docs/lexicos/00-indice|wiki lexical]], mas isso não substitui referência para todas as 43 linhas.

> ✅ **Fechada em 2026-09-08, e o parágrafo acima passa a ser histórico.** O [[08-aparato-lexical|Aparato lexical]] dá, para cada uma das 48 palavras, o código de Strong atribuído pelo **WLC** na própria ocorrência em Gênesis 1 e a entrada do **UBS/SDBH em português**, com autor, domínio semântico e nível de fonte — **`F1`, hash conferido**. **44 das 48 têm entrada**; as outras 4 caem numa lacuna sistemática do dataset, registrada lá.
>
> **O que ainda não está fechado:** em **24 palavras** a acepção usada é a primeira do verbete e vem marcada `⚠️ a revisar` — o UBS dá mais de uma acepção para 32 das 44, e escolher errado produz erro com cara de fonte. Os termos que já receberam aparato comparado de nível-livro ficam em [[../../docs/lexicos/00-indice|docs/lexicos]].

> **Método.** A referência sobre camadas do texto, testemunhas antigas e o que o léxico decide (e o que não decide) está em [[../../docs/metodo/00-indice|docs/metodo]]. A regra normativa é a §11 de [[../../docs/regras|regras.md]].

## Como conferir sem saber hebraico

Qualquer verbete da tabela pode ser verificado em minutos, de graça, sem ler hebraico:

| Ferramenta | O que faz |
|---|---|
| [Sefaria](https://www.sefaria.org/Genesis.1?lang=he) | O texto original ao lado da tradução, versículo a versículo |
| [Bible Hub — interlinear](https://biblehub.com/interlinear/genesis/1.htm) | Cada palavra hebraica com a tradução **embaixo dela**, na ordem do original |
| [Blue Letter Bible](https://www.blueletterbible.org/) | Clique numa palavra e veja a raiz, o significado e **todos os outros lugares da Bíblia onde ela aparece** |

O terceiro é o mais útil para auditar a tabela rápida: quando uma linha diz "esta palavra também aparece em tal lugar", é exatamente isso que a ferramenta mostra — e se não mostrar, a linha está errada.

## Rastreabilidade da análise gramatical

As duas análises hoje reunidas em [[06-analise-gramatical|Análise gramatical]] vêm do antigo `genesis-capitulo-01.md`, onde eram §3.4 e §3.5. Foram renumeradas ao migrar para o documento preparatório original; nenhuma remissão de `docs/posicoes.md` apontava para elas.

## Lacunas conhecidas

| O que falta | Estado |
|---|---|
| Transliteração dos vv. 6–31 | ❌ Feita apenas para 1–5 — ver [[03-transliteracao]] |
| Análise sintática por versículo | ⚠️ **Parcial.** O v. 2 recebeu análise de cláusula circunstancial em [[lexico/01-abertura]]; os demais 30 versículos, não |
| Aparato de variantes — **fora do TM** | ❌ Segue sem registro de Pentateuco Samaritano, LXX e Qumran |
| Aparato de variantes — **dentro do TM** | ✅ **Fechado para este capítulo em 2026-09-08**: colação Alepo × Leningrado, consonantal idêntico, duas variantes reais registradas acima |
| Notas sobre os acentos de cantilação | ⚠️ **Parcial.** `1.1` e `1.2` estão feitos ([[lexico/01-abertura]] e a colação acima); os demais, não |
| Fonte verbete a verbete no léxico do capítulo | ⚠️ **Em grande parte fechada** — ver [[08-aparato-lexical]]. 44/48 com entrada `F1`; 24 acepções a revisar |
| Testemunha de domínio semântico para 10 lemas | ⚠️ *el*, *hayah*, *hinneh*, *ki*, *kol*, *me'od*, *natan*, *al*, *panim*, *ravah* não existem no UBS. **Têm BDB, Klein e Jastrow** — o que se perde é diversidade de **método**, não fonte |

---

**Voltar ao hall:** [[../01-texto-hebraico|Texto hebraico — índice]]
