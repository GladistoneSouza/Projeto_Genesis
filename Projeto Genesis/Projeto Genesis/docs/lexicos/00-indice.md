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
| **Gesenius-Tregelles** (1857) | **Livre** | ⚠️ a conferir |
| **SDBH** — [semanticdictionary.org](https://semanticdictionary.org) | **Livre**, moderno | ⚠️ a conferir |
| **HALOT** | **Pago** | ❌ **não consultado** |
| **DCH** (Clines) | **Pago** | ❌ **não consultado** |
| **DITAT** (pt-BR) | **Comprável**, impresso | ❌ não consultado |

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
| [[bara]] · בָּרָא | Gn 1.1 | Corpus ✅ · BDB/Klein **F2** ✅ · SDBH e pagos ⚠️ |
| [[raqia]] · רָקִיעַ | Gn 1.6 | Corpus ✅ · BDB/Klein **F2** ✅ · HALOT ❌ faz falta real · **questão não registrada em `posicoes.md`** |
| [[yom]] · יוֹם | Gn 1.5 | Corpus ✅ · BDB/Klein **F2** ✅ · pagos ❌ e sem urgência |

**A escrever para Gênesis 1:** *re'shit* (a sintaxe de 1.1 — hoje tratada em `04-exegese-1-2`), *tselem / demut* (hoje em `08-imago-dei`).

---

## Procedência

`IA` — estrutura e blocos de corpus redigidos em 2026-09-04, sujeitos à ratificação do autor. Os blocos de instrumentos **não foram preenchidos com fonte em mãos** e estão marcados como tal.
