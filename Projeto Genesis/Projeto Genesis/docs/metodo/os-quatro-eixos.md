# Os quatro eixos

**Em uma linha:** toda afirmação carrega quatro coordenadas independentes — o quanto cola no texto, quem a fez, como a citação foi obtida, e sobre que camada do original se apoia.

Os três primeiros vêm de `estudos_biblicos/METODO.md`. O quarto nasceu aqui.

## 1 · Nível — o quanto a afirmação se cola ao texto

| | | |
|---|---|---|
| **N1** | Texto | O que a Bíblia afirma explicitamente. Sustenta-se com capítulo e versículo |
| **N2** | Princípio | Derivação direta, sem salto. Texto + derivação declarada |
| **N3** | Aplicação | Extensão a caso que o texto não trata. Princípio + critérios explícitos |
| **N4** | Formulação | Imagem ou frase nossa. Não sustenta nada — é linguagem |
| **N5** | Em disputa | Onde tradições cristãs divergem legitimamente |

**As três proibições:** não apresentar N3/N4/N5 como N1 · não usar N4 para fechar discussão · não esconder o N5.

## 2 · Procedência — quem produziu

`A` autor · `A+IA` · `IA` · `IA✓` ratificado pelo autor.

**Desde 2026-09-04, `IA` nomeia qual.** Mais de um assistente trabalha no projeto, e `IA` sozinho deixou de identificar de onde veio um bloco e contra o quê ele foi conferido.

| Marca | Significa |
|---|---|
| `IA:Claude` · `IA:ChatGPT` | Um assistente, sozinho |
| `IA:Claude+ChatGPT` | **Houve conferência cruzada** — os dois passaram e convergiram. Leia a ressalva abaixo antes de dar peso a isto |
| `A+IA:Claude` | Autor com assistência |
| `IA✓` | Ratificado pelo autor. **Nenhum sufixo substitui isto** |

**Por que a marca precisou de sobrenome.** Em 2026-09-04 uma conclusão redigida aqui — *"não existe segunda opinião lexical gratuita"* — foi derrubada pelo outro assistente, que encontrou o dataset do SDBH publicado em GitHub. Ambos os blocos estariam marcados `IA`, e daí a seis meses não haveria como reconstruir quem disse o quê. Ver [[../changelog|changelog.md]] e a regra §12.6.

### ⚠️ O que `IA:Claude+ChatGPT` **não** significa

**Dois assistentes concordarem não é confirmação independente.** A marca diz *"dois agentes passaram e convergiram"* — **não** *"foi verificado duas vezes"*.

O motivo é o mesmo da [[../regras|§13.5.2]], aplicado a assistentes em vez de léxicos: **antes de somar dois pareceres, perguntar de quem cada um descende.** Modelos de linguagem treinam sobre corpora que se sobrepõem bastante e têm boa chance de errar nos mesmos lugares, pelas mesmas razões. Concordância entre eles é evidência fraca; é o BDB e o Tregelles outra vez.

**Onde a marca vale de fato:** quando a conferência cruzada veio de **acesso diferente**, não de raciocínio parecido.

No episódio que gerou esta convenção, o que funcionou não foi convergência de juízo — foi **assimetria de acesso**: um assistente tinha alcance de web e GitHub e encontrou a fonte; o outro tinha o checkout local e leu o arquivo de 23 MB. A independência era **de acesso, não de juízo**, e é por isso que rendeu.

**Consequência prática:** ao marcar `IA:Claude+ChatGPT`, dizer **como** a conferência se deu. Convergência sobre a mesma fonte pesa pouco; convergência a partir de fontes ou acessos distintos pesa.

**Nada se promove sozinho.** A IA nunca marca o próprio trabalho como ratificado. Bloco `IA` não vira peça publicável.

## 3 · Fonte — como a citação de terceiro foi obtida

| | | |
|---|---|---|
| **F1** | Verificada | O texto esteve em mãos. Vira rodapé **com página** |
| **F2** | Consultada | Localizada em catálogo, original não lido. Rodapé **sem página**, declarando |
| **F3** | De memória | Atribuição não verificada. **Nunca vira rodapé** |

## 4 · Camada — sobre o que a afirmação se apoia

C1 consoantes · C2 versões antigas · C3 vogais e acentos · C4 léxicos · C5 comentaristas.

Ver [[camadas-do-texto]].

## Por que o quarto era necessário

Os três primeiros medem a **afirmação**. Nenhum mede o **apoio** quando a afirmação é sobre o original.

O caso que provou a lacuna está em [[camadas-do-texto]]: uma afirmação **N1 · F1** — nível máximo, fonte verificada com os próprios olhos — e ainda assim enganosa, porque empacotava um acento do séc. IX d.C. junto com uma tradução do séc. III a.C.

## Relacionado

[[camadas-do-texto]] · [[testemunhas-antigas]] · [[niveis-de-sentido]]

Regra normativa correspondente: [`regras.md`](../regras.md) §11.
