# Regras de edição — Projeto Comentário de Gênesis

## 1. Princípios gerais

1.1. Não alterar o contexto, sentido doutrinário ou posição teológica do autor, exceto em caso de:
  - erro claro,
  - heresia,
  - ou incoerência interna grave.

1.2. Em qualquer caso de alteração de sentido:
  - descrever a mudança nos Metadados da edição;
  - informar o nível de confiança (0 a 1);
  - explicar brevemente a motivação da correção.

1.3. Manter a voz do autor:
  - linguagem clara, pastoral e didática;
  - foco em teologia reformada/evangélica.

## 2. Arquivos principais

- `genesis.md` — introdução geral ao livro (nível-livro).
- `genesis-XX/` — **uma pasta por capítulo**, contendo os documentos de estudo daquele capítulo (ver seção 8).
- `docs/conf.md` — configurações.
- `docs/changelog.md` — histórico de mudanças.
- `docs/regras.md` — este arquivo.

## 3. Metadados da edição

Toda resposta da IA deve começar com:

- Arquivos afetados
- Seções afetadas
- Tipo de alteração
- Níveis de confiança
- Notas explicativas

## 4. Estilo de conteúdo

4.1. Sempre que possível:
  - incluir referências bíblicas claras;
  - fazer conexões entre AT e NT;
  - terminar blocos grandes com 1–3 aplicações práticas.

4.2. Manter títulos e numeração (1.1, 2.4.1 etc.) consistentes.

4.3. Hebraico e grego:
  - podem ser usados, mas sempre explicados em português simples.

## 5. Atualização de especificações

5.1. Qualquer nova regra criada pela IA:
  - deve ser escrita aqui;
  - deve ser registrada em `docs/changelog.md`;
  - pode exigir incremento de `spec_version` em `docs/conf.md`.

## 6. Fluxo de trabalho da IA de edição

6.1. Antes de qualquer edição em um arquivo de conteúdo (ex.: `genesis.md`), a IA deve:

  - ler `docs/conf.md`;
  - ler `docs/regras.md`;
  - ler `docs/posicoes.md` — o registro das posições doutrinárias já adotadas pelo projeto;
  - se necessário, ler o trecho relevante do arquivo-alvo (apenas a seção que pretende alterar).

6.1.1. Nenhuma posição doutrinária nova pode ser tomada dentro de um arquivo de conteúdo sem ser registrada em `docs/posicoes.md`. Se um capítulo exigir decidir uma questão que consta como "em aberto" naquele arquivo, a decisão é do autor — a IA apresenta as opções e o custo de cada uma, não escolhe.

6.2. Estrutura obrigatória de cada resposta da IA:

  1. **Metadados da edição**, contendo obrigatoriamente:
     - Arquivos afetados
     - Seções afetadas
     - Tipo de alteração
     - Níveis de confiança (0 a 1, com breve justificativa)
     - Notas explicativas (o que foi feito, por quê, e se houve mudança de sentido ou apenas forma)

  2. **Conteúdo sugerido**, já no formato final de Markdown para ser colado em `genesis.md` (ou no arquivo alvo).

6.3. Limite para mudanças de sentido

  - A IA **não deve** mudar contexto, sentido doutrinário ou posição teológica do autor, exceto em:
    - erro factual claro;
    - heresia evidente à luz da teologia reformada/evangélica;
    - incoerência interna grave (contradição com o próprio texto do autor em outra seção).

  - Se isso ocorrer, é obrigatório:
    - registrar no bloco de Metadados que houve mudança de sentido;
    - indicar o nível de confiança (0 a 1);
    - explicar em 2–3 frases o motivo teológico ou exegético da correção.

6.4. Atualização de regras e versão

  - Sempre que **novas regras** forem adicionadas a este arquivo (`docs/regras.md`) pela IA:
    - a IA deve sugerir o incremento de `spec_version` em `docs/conf.md` (ex.: de `1.0.0` para `1.1.0`);
    - a IA deve registrar a mudança em `docs/changelog.md` com:
      - data (AAAA-MM-DD),
      - versão nova,
      - resumo breve das novas regras.

6.5. Resumo técnico da ação

  - A IA pode incluir, após os Metadados, um parágrafo curto em estilo log, por exemplo:
    - "Summarized conversation history; searched for text and read documentation files; edited genesis.md+XXX-YYY; edited changelog.md+ZZ-ZZ."
  - Esse resumo é apenas técnico, para rastreabilidade, e **não substitui** o bloco de Metadados nem a explicação humana.

## 7. Sistema de referências e citações

O projeto adota um sistema de referências para garantir rigor acadêmico, mesmo sendo uma obra sem fins lucrativos.

### 7.1. Formato de citação

  - Usar **notas de rodapé Markdown** com chave autor-ano: `[^sobrenome-ano]`.
  - Exemplo no texto: `...estrutura quiástica de 31 pontos[^wenham-1987].`
  - Definição da nota no final do arquivo (seção "Notas"):
    ```
    [^wenham-1987]: WENHAM, Gordon J. *Genesis 1–15*. Word Biblical Commentary. Waco: Word Books, 1987.
    ```
  - As chaves são em minúsculas, sem acentos, separadas por hífen: `[^hamilton-1990]`, `[^calvino-1554]`.

### 7.2. Tipos de conteúdo e quando referenciar

  - **Texto bíblico:** Citar livro, capítulo e versículo entre parênteses. Versão padrão: NAA. Se outra versão for usada, indicar.
  - **Dado acadêmico ou afirmação de terceiros:** Sempre com nota de rodapé indicando a fonte (autor, obra, página quando disponível).
  - **Posição do autor do projeto:** Não requer nota de rodapé — é a voz pastoral/didática do comentário.
  - **Informação histórica ou arqueológica:** Referenciar a fonte primária ou o comentarista que a apresenta.

### 7.3. Seção de notas

  - **(revisada em 1.4.0)** Notas de rodapé Markdown **não atravessam arquivos**. Portanto, cada documento carrega as suas próprias: uma seção **"Notas"** ao final, contendo apenas as definições das chaves que aquele documento usa.
  - O documento `14-notas-e-bibliografia.md` de cada pasta consolida a bibliografia do capítulo inteiro e mantém o conjunto completo das notas, para consulta.
  - Em arquivos de nível-livro (`genesis.md`), a seção "Notas" continua vindo antes da última seção (Índice).
  - As notas seguem o formato ABNT simplificado:
    ```
    SOBRENOME, Nome. *Título da obra*. Série/Coleção. Cidade: Editora, ano. p. XX (se aplicável).
    ```

### 7.4. Bibliografia

  - A seção "Bibliografia recomendada" permanece como guia de leitura (descrição informal de cada obra).
  - As notas de rodapé são a referência formal e precisa.
  - Toda obra citada em nota de rodapé deve aparecer também na bibliografia.

## 8. Estrutura de pastas por capítulo (spec 1.4.0)

8.1. **Cada capítulo é uma pasta, não um arquivo.** O formato `genesis-capitulo-XX.md` (arquivo único de 1.000–1.500 linhas) fica obsoleto: um capítulo passa a ser `genesis-XX/`, e dentro dela cada documento trata de **um assunto só**.

8.2. A pasta se divide em duas etapas, e a ordem tem razão de ser:

  - **Material preparatório** (`01`, `02`) — o texto original e as traduções. É instrumento, não interpretação: existe para que o leitor possa conferir o texto por conta própria e, se for o caso, **discordar do autor com o mesmo material na mão**.
  - **Estudo** (`03` em diante) — o comentário propriamente dito.

8.3. **Nomes de arquivo:** `NN-assunto-em-kebab.md` — dois dígitos, sem acentos, sem espaços. A numeração define a ordem de leitura e de exportação para PDF.

8.4. **`00-como-usar.md` é obrigatório** em toda pasta de capítulo: índice dos documentos, guia de "por onde começar" conforme o objetivo do leitor, e ponteiro para `docs/posicoes.md`.

8.5. **A numeração das seções é preservada na divisão.** Se uma seção era §5.10 no capítulo, continua §5.10 dentro do documento que a recebeu. O caminho muda; a referência, não — de modo que as remissões de `docs/posicoes.md` seguem válidas.

8.6. **`01-texto-hebraico.md`** — texto hebraico integral do capítulo, com transliteração e análise palavra a palavra: raiz, campo semântico e o uso **naquele contexto**.

8.7. **`02-traducoes-br.md`** — **apenas texto de traduções, sem comentário exegético.** As versões são apresentadas da mais formal (equivalência formal) para a mais dinâmica, e o documento destaca os versículos em que a escolha de tradução altera o sentido. A explicação de *por que* a divergência importa pertence aos documentos de exegese, que remetem a este.

8.8. **Tamanho:** nenhum documento deve passar de aproximadamente 10 páginas. Se passar, divide-se por assunto.

8.9. Um arquivo de capítulo no formato antigo, uma vez dividido, recebe aviso de substituição no topo e deixa de ser editado.

## 9. A régua do que fica fora da narrativa (spec 1.5.0)

Critério do autor para decidir o que pertence ao texto comentado e o que é pressuposto sem ser contado. Vale para todo o projeto — rege o dilúvio, os nefilins e o capítulo 3.

9.1. **Foi narrado com detalhes?** → está dentro. Trata-se como texto.

9.2. **É pressuposto como ocorrido, mas não narrado?** → segue para 9.3.

9.3. **Há algo que o situe dentro da janela narrada?** Se não, está **fora da janela**. Registra-se que está fora e **não se decide** se antes, depois ou ainda por vir. A conclusão que o silêncio sustenta é "não aqui" — nunca "então foi antes".

9.4. **Nada entra como fato estabelecido se a Escritura não o afirma — vocabulário incluído.** Termo que a Bíblia não usa, o comentário não usa. Exemplo: "arcanjo" para Satanás (o único arcanjo nomeado é Miguel, `Jd 9`).

9.5. **Distinguir dois silêncios.** Uma afirmação pode faltar no texto comentado e existir em outro lugar do cânon:

  - **Sem apoio em lugar nenhum da Escritura** → não entra.
  - **Sem apoio no texto comentado, com apoio em outro lugar do cânon** → entra como **leitura canônica declarada**, nunca como se fosse o que a passagem diz. Exemplo: a serpente de Gn 3 como Satanás — Gênesis não diz; `Ap 12.9` e `Ap 20.2` dizem.

  A seção "Conexões canônicas" de cada capítulo é inteiramente da segunda categoria, e é método legítimo do projeto — Adão e Cristo em `Rm 5`, a semente em `Gl 3.16`, Melquisedeque em `Hb 7`. O que esta regra proíbe é o **contrabando**: apresentar leitura canônica como exegese da passagem.

9.6. **Questão listada como *em aberto* em `docs/posicoes.md` não serve de premissa para outra posição.** Se uma posição precisa dela, ou a questão é decidida primeiro, ou a posição se sustenta sem ela.

## 10. Fios canônicos: as duas metades das conexões (spec 1.6.0)

Gênesis planta o que só fecha depois. A seção de conexões canônicas de cada capítulo passa a ter **duas metades**, e a segunda não existia até esta versão.

10.1. **Retrospectiva** — o que ilumina esta passagem: textos anteriores e posteriores que a retomam, comentam ou ecoam. É o que os documentos já faziam.

10.2. **Prospectiva** — o que esta passagem **planta e não colhe**: fios que ela abre e que se resolvem em outro capítulo de Gênesis ou fora do livro. Cada fio prospectivo deve nomear **onde ele é pago**.

10.3. **Antes de escrever a seção**, ler [`fios-canonicos.md`](fios-canonicos.md) — ele diz quais fios já passam por este capítulo e qual o estado de cada um.

10.4. **Depois de escrever**, atualizar o registro: fio novo entra; fio pago muda de estado; fio que o capítulo deveria pagar e não pagou fica marcado.

10.5. **Elo nomeado × reverberação.** No registro entram apenas os **elos nomeados** — textos que retomam o fio explicitamente. A reverberação difusa de um tema pertence ao texto corrido do capítulo. *(Critério provisório, a ratificar pelo autor.)*

10.6. **Fio que sai de Gênesis sem fechar recebe marca própria** (🔓). O livro termina com promessa não cumprida por decisão do narrador — o comentário registra o efeito, não o conserta.

10.7. A regra 9.5 continua valendo aqui: leitura canônica é método legítimo do projeto, mas entra **declarada**, nunca como exegese da passagem comentada.

## 11. A camada do texto (spec 1.7.0)

Toda afirmação sobre o original se apoia numa camada da tradição textual, e as camadas têm idades muito diferentes — até mil e quinhentos anos entre elas. A referência completa está em [`metodo/camadas-do-texto.md`](metodo/camadas-do-texto.md).

11.1. **Quando uma leitura depende de vogal ou acento massorético (C3), ou de instrumento posterior (C4 léxicos, C5 comentaristas), isso se declara.** Vocalização e cantilação são do séc. VII–X d.C.: são o comentário mais antigo que temos, não o texto.

11.2. **Não empacotar camadas diferentes como se pesassem igual.** Citar a Septuaginta (séc. III–II a.C.) e um acento massorético (séc. IX d.C.) como "testemunhos antigos" no mesmo fôlego é erro de categoria — ainda que as duas afirmações sejam verdadeiras, e ainda que ambas passem nos eixos de nível, procedência e fonte.

11.3. **Marcação:** `**(C3)**` no bloco cuja leitura dependa da camada massorética; `**(C2)**` ao invocar versão antiga como testemunho.

11.4. **Palavra não decide doutrina.** O sentido se estabelece por **uso**; a analogia serve para metáforas e palavras raras, não para as comuns. O peso de uma afirmação teológica mora na oração, no parágrafo e no cânon — não no verbete. Ver [`metodo/niveis-de-sentido.md`](metodo/niveis-de-sentido.md).

11.5. **Glosa não é tradução.** Antes de discutir uma palavra, verificar se ela aparece em alguma versão. Se não aparece em nenhuma, é comentário — e comentário não se defende como se fosse texto. Ver [`metodo/glosa-nao-e-traducao.md`](metodo/glosa-nao-e-traducao.md).

11.6. **Antes de defender um versículo como prova, perguntar qual texto de fato carrega a afirmação.** Perder o *proof-text* raramente é perder a doutrina, e saber disso permite examinar a disputa com calma em vez de defender território. Quando a resposta for "nenhum outro texto sustenta", isso pertence à coluna da fatura em [`posicoes.md`](posicoes.md).

11.7. **A incerteza é concentrada, não uniforme.** Palavra com dezenas de ocorrências é segura; *hapax legomenon* é palpite instruído. Declarar a incerteza onde ela existe, e não diluí-la sobre o texto inteiro.

11.8. **C1 também tem testemunhas, e elas divergem.** O consonantal não é um texto só: Texto Massorético, Qumran e Pentateuco Samaritano são testemunhas de C1, e o projeto trabalha sobre o TM. Distinguir os dois andares: **dentro do TM**, o esqueleto consonantal é estável e o que se acrescentou (vogais, acentos) é leitura; **em crítica textual**, até o consonantal se compara. Afirmação que dependa da estabilidade do consonantal vale no primeiro andar e **declara** que não subiu ao segundo — o projeto não tem aparato de variantes, e a lacuna está registrada.

11.9. **Citar uma testemunha de uma camada obriga a citar as que divergem dela.** Vale inclusive dentro da mesma camada e do mesmo versículo: em Gn 1.1 os massoretas deixaram um acento que favorece uma leitura e uma vocalização que deixa a outra possível, e reportar só um dos dois é seleção de testemunha. A posição do projeto não fica mais fraca por responder ao argumento contrário — fica atacável por não o mencionar.

11.10. **Antes do léxico, a morfologia.** Nenhuma ocorrência entra num levantamento de uso sem que se saiba em que **binyan** e em que forma ela está. Ocorrências em padrões verbais diferentes não somam: são dados distintos, e às vezes palavras distintas.

## 12. Precedência: o que vale quando as fontes divergem (spec 1.8.0)

O projeto acumula camadas de decisão em ritmos diferentes — a conversa com o autor, os registros, a norma, e o conteúdo já escrito. Elas divergem, e divergem por um motivo estrutural: **o conteúdo foi escrito antes das decisões.**

12.1. **A decisão mais recente do autor vence.** Quando o conteúdo já escrito discordar de posição declarada depois, o conteúdo está desatualizado — não a posição.

12.2. **Ordem de precedência**, do mais forte ao mais fraco:

| | Fonte | Por quê |
|---|---|---|
| 1 | **A conversa em curso com o autor** | É onde as decisões nascem, e é a mais recente por definição |
| 2 | `posicoes.md` · `fios-canonicos.md` | Decisões e registros |
| 3 | `regras.md` · `conf.md` · `metodo/` | A norma e o método |
| 4 | `genesis.md` · capítulos | Conteúdo — o que envelhece |
| 5 | `base/` | Material de referência. **Nunca é saída** |

12.3. **Divergência encontrada não se conserta em silêncio.** Registra-se onde está, o que cada lado diz, e de que tipo é o conserto: **mecânico** (aplicar decisão já tomada) ou **doutrinário** (depende do autor, regra 6.1.1).

12.4. **Posição declarada em `posicoes.md` sem estar escrita no arquivo que a coluna "Onde" indica é dívida, não posição cumprida.** A coluna aponta para onde a posição precisa estar **dita ao leitor** — se o leitor abrir aquela seção e não encontrar a posição, ela não existe para ele.

12.5. **Antes de escrever seção que toque questão já decidida, conferir os registros recentes do changelog.** O conteúdo antigo não avisa que envelheceu.

12.6. **Mais de um assistente trabalha neste repositório, e os papéis não são idênticos.**

| | Papel | Por quê |
|---|---|---|
| **Autor** | **Autoridade final.** Dono das posições e das faturas | Regra 6.1.1 |
| **Claude Code** | **Editor residente.** Escreve no repositório | Trabalha no checkout local: vê árvore, commits pendentes, diff e estado operacional |
| **ChatGPT** | **Segundo parecer e auditor externo.** Lê, revisa, contradiz, encontra fonte | Acesso e memória diferentes — o valor está em não ver a mesma coisa |

  Não é hierarquia de competência: é **divisão de posto**. O auditor externo escreve no repositório quando o autor pedir, e nesse caso valem as mesmas regras — §12.7 e a entrada de changelog.

  **A procedência passa a nomear qual assistente:** `IA:Claude`, `IA:ChatGPT`, `A+IA:Claude`, e `IA:Claude+ChatGPT` quando houve **conferência cruzada**. `IA✓` continua exigindo o autor. Ver [`metodo/os-quatro-eixos`](metodo/os-quatro-eixos.md).

12.6.1. **Concordância entre assistentes não é confirmação independente.** `IA:Claude+ChatGPT` significa *"dois agentes passaram e convergiram"*, **não** *"foi verificado duas vezes"*. É a §13.5.2 aplicada a assistentes: antes de somar dois pareceres, perguntar **de quem cada um descende** — modelos treinam sobre corpora que se sobrepõem e erram nos mesmos lugares pelos mesmos motivos.

  **A marca vale quando a conferência veio de acesso diferente, não de raciocínio parecido.** No caso que gerou a convenção, o que rendeu foi assimetria de acesso — um assistente com alcance de web encontrou a fonte, o outro com o checkout local leu o arquivo. Ao marcar, **dizer como a conferência se deu**.

12.7. **Sincronizar antes de escrever; empurrar só sobre estado atualizado.** Antes de qualquer escrita, o agente relê o `main` corrente e os registros de governança (`posicoes`, `fios`, changelog recente). **Nenhum commit entra sem entrada de changelog** — a integridade deste projeto depende do registro estar completo, e registro incompleto não quebra com erro, quebra em silêncio.

  *Precedente:* em 2026-09-04 o assistente externo auditou o projeto sobre um `main` **sete commits atrasado**, e confirmou como bug vivo uma frase já corrigida. O diagnóstico dele estava certo; o estado, não.

12.8. **Divergência entre assistentes é evidência, não erro a apagar.** Registra-se **o que cada lado disse e qual prevaleceu** — é a §12.3 estendida ao caso novo. Conclusão derrubada fica visível como **retratada**, não some.

  *Precedente:* a conclusão *"não existe segunda opinião lexical gratuita"*, redigida aqui e derrubada pelo assistente externo com o dataset do SDBH. O erro virou as regras §13.11 e §13.12; apagá-lo teria custado as duas.

## 13. A wiki lexical — `docs/lexicos/` (spec 1.9.0)

O material preparatório expõe fontes e some; o estudo comenta. A pasta `genesis-01/` obedecia a isso nas traduções e desobedecia no léxico: `02-traducoes-br.md` põe seis versões lado a lado e retira a voz do projeto, enquanto os 43 verbetes de `01-texto-hebraico.md` §3 são o projeto escrevendo o próprio dicionário, sem entrada citada. A §13 corrige a assimetria.

13.1. **Verbete comparado mora em [`docs/lexicos/`](lexicos/00-indice.md), nível-livro, uma nota por palavra.** Palavra que atravessa capítulos é escrita uma vez e chamada por link — não reescrita a cada capítulo.

13.2. **Triagem: nem toda palavra ganha nota.** Nota só onde há **divergência a comparar**. Palavra sem divergência fica como uma linha na tabela do capítulo. O critério está em [`metodo/onde-a-briga-nao-esta`](metodo/onde-a-briga-nao-esta.md).

13.3. **A coluna primária é o corpus, não o dicionário — porque o corpus é fonte direta e o dicionário é instrumento.** O levantamento de uso é a Escritura ela mesma (**C1**); todo léxico é **C4**, e C4 resume C1 sem nunca substituí-lo. Por isso o verbete não arbitra o levantamento: é o levantamento que julga o verbete. Os léxicos entram depois, em bloco próprio, com a data de cada um. Foi assim que `Jr 26.1` desfez o impasse de *bereshit* e `Gn 1.27` × `Gn 2.7` desfez o de *bara* — nenhum dos dois por verbete.

13.3.1. **E é isso que torna a nota de palavra material de nível-livro.** O levantamento de uso atravessa a Bíblia inteira: *bara* se decide com Isaías, Amós, Números e Salmos; *raqia* com Ezequiel e Jó. Um levantamento que corre por todo o cânon não pertence a capítulo nenhum — pertence ao projeto.

13.4. **Bloco de instrumentos não conferido fica marcado `F3 · a conferir`, e não vira rodapé.** Escrever "HALOT registra X" sem ter HALOT é o erro que o quarto eixo existe para pegar: erraria com cara de rigor. O buraco se declara, verbete a verbete.

13.5. **Léxico e dicionário teológico são gêneros diferentes.** BDB, HALOT, DCH e Gesenius são léxicos; DITAT e NIDOTTE são dicionários teológicos, que trazem doutrina dentro da entrada — informação legítima, **desde que rotulada**. Citá-los no mesmo fôlego, como "os léxicos dizem", é o erro de categoria da §11.2 aplicado à camada C4.

13.5.1. **Mas o léxico também opina, e é preciso separar a glosa do juízo.** Verificado no verbete de *raqia*: o BDB não se limita a glosar "expanse" — afirma que a coisa era "tida pelos hebreus como sólida, e sustentando as águas acima", que é **juízo cosmológico**, impresso no mesmo tipo de letra do sentido. Ao citar um verbete, distinguir **o que a palavra significa** do **que o lexicógrafo conclui sobre o mundo de quem a usou**. A segunda parte é C5 disfarçada de C4.

13.5.2. **Léxicos da mesma família não são testemunhas independentes.** Gesenius (1810-12) é a nascente; Robinson o traduziu em 1836 e o **BDB (1906) é construído sobre essa tradução**; Tregelles traduziu a mesma obra em 1846/57; as glosas do Strong's vêm da mesma linhagem. Citar BDB, Gesenius-Tregelles e Strong's lado a lado como três pareceres é a **§11.2 aplicada à camada C4** — o mesmo erro de empacotar Qumran com a Septuaginta, um andar acima. Antes de somar verbetes, perguntar **de quem cada um descende**.

13.6. **A nota abre pelo bloco de forma** — lema, raiz, binyan, parsing —, conforme a §11.10. Só depois vem o corpus.

13.11. **Fonte externa versionada: fixa-se o commit, registra-se o hash, não se versiona o dataset.** Aplica-se ao UBS Dictionary of Biblical Hebrew e a qualquer dado aberto que o projeto venha a consultar.

  - **Fixar a versão.** Nunca citar um caminho que se move (`main`, "última versão"). Registrar **arquivo, versão, commit e `sha256`** — sem isso "F1" não é reproduzível, porque quem for conferir daqui a um ano pode ver outro arquivo.
  - **Não versionar o dataset no vault.** Consulta-se fora e extrai-se o necessário.
  - **Citação curta com atribuição; síntese na voz do projeto.** Não reproduzir verbetes inteiros em série.
  - **Licença.** CC BY-SA incide sobre **material adaptado que se compartilha**, não sobre fonte consultada. Consultar e escrever análise própria é uso de fonte; traduzir, transformar ou redistribuir o dataset é outra coisa, e aí a licença vira **decisão editorial do autor**, não detalhe técnico.
  - **Ler o arquivo direto é F1**; ler a mesma obra por interface web mediada é **F2**. A diferença é a conferibilidade, não o prestígio da fonte.

13.12. **"Não consegui alcançar" não é "não existe".** Registrado porque o projeto cometeu o erro: a interface do SDBH estava morta e a conclusão escrita foi que **não havia** segunda opinião lexical gratuita — quando os dados estavam publicados em outro lugar, versionados e em português. Antes de registrar a **ausência** de uma fonte, declarar **o que foi tentado**; ausência de acesso é fato sobre a busca, não sobre o mundo.

13.7. **Questão que a nota levantar e que não constar em [`posicoes.md`](posicoes.md) fica marcada na própria nota.** Pôr fontes lado a lado produz perguntas; a nota registra a pergunta e **não a decide** (regra 6.1.1).

13.8. **A divisão: a palavra na língua fica na wiki; a palavra neste capítulo fica no capítulo.** A wiki dá a base geral — como o hebraico foi levantado e analisado no projeto. O capítulo guarda o que se consulta **de mão, durante a exegese**.

| | Wiki `docs/lexicos/` | Capítulo `genesis-XX/01-texto-hebraico` |
|---|---|---|
| **Responde** | O que a palavra é na língua | O que a palavra faz **aqui** |
| Lema, raiz, binyan, parsing | ✅ | resumo |
| Levantamento de uso em toda a Escritura | ✅ | — |
| Ocorrências **dentro deste capítulo**, e onde caem | — | ✅ |
| Contraste com as palavras vizinhas do capítulo | — | ✅ |
| Comparação entre léxicos, versões antigas | ✅ | — |
| Estado das fontes, camadas, faturas | ✅ | — |
| Leitura do projeto **nesta passagem** | ponteiro | ✅ |

13.9. **A wiki não esvazia o capítulo.** A coluna "Sentido e uso **aqui**" do documento preparatório é a camada do capítulo e continua sendo escrita por inteiro. O link para a wiki **acrescenta** aparato; não substitui o que o exegeta precisa ter à mão sem sair do arquivo.

13.10. **A wiki não repete o capítulo.** Nota de palavra remete ao capítulo em vez de reproduzir a leitura daquela passagem — senão as duas divergem, e a §12 já mostrou o que acontece quando duas cópias envelhecem em ritmos diferentes.

## 14. A régua das três perguntas (spec 1.10.0)

Regra do autor. Nasceu de duas seções do capítulo 1 que **pareciam se contradizer e não se contradiziam** — respondiam a perguntas diferentes sem dizer qual, e uma delas respondeu à pergunta errada sem perceber.

14.1. **Sempre que o comentário fala do mundo antigo, três perguntas diferentes estão em jogo — e cada uma tem uma resposta só.**

| | Pergunta | Que tipo de resposta é |
|---|---|---|
| **P1** | O que o leitor antigo **imaginava**? | Histórica. Decide-se pelo texto, pelas versões antigas e pelo Antigo Oriente |
| **P2** | O que **existe de fato**? | Científica. Não se decide no comentário |
| **P3** | O que o texto **afirma**? | Teológica. É onde moram acomodação, posição e fatura |

14.2. **A seção declara a qual pergunta responde.** Não é enfeite: é o que impede que **divergência aparente** seja lida como contradição real, e que **contradição real** se esconda atrás de "são coisas diferentes".

14.3. **Descrição de P1 não pode usar conhecimento posterior.** Se a seção descreve como o israelita via o mundo, ela **não** pode descrever o que física, química, astronomia e meteorologia levaram milênios para estabelecer. Fazer isso não é ser científico — é **pôr palavras na boca de um morto**, e ainda apresentá-las como se fossem o sentido do versículo.

  *O caso que gerou a regra:* `05-dias-1-3` §5.4 glosava "as águas superiores **(nuvens, chuva)**" e chamava o *raqia* de "céu/atmosfera". Nuvem é resposta de **P2** vestida de **P1** — e o próprio parágrafo se entregava três blocos adiante, ao explicar `Gn 7.11` com as "comportas dos céus", que **só funcionam** no quadro antigo. Ver `metodo/as-tres-perguntas`.

14.4. **O sintoma de estar misturando as faixas é ter de trocar de modelo no meio.** Seção que responde P1 de forma coerente não precisa pegar emprestado o mobiliário de P2, e vice-versa. Quando o empréstimo acontece, o modelo abandonado é o que estava certo para aquela faixa.

14.5. **P1 e P2 divergirem é o esperado, não um problema.** O problema é o comentário fingir que não divergem — pelos dois lados: nem harmonizar o texto antigo com a ciência moderna, nem tratar a ciência como se o texto a estivesse contestando. **P3 é a pergunta em que o projeto trabalha**, e ela só pode ser respondida depois que P1 e P2 estiverem separadas.

## 15. A régua da divisão (spec 1.10.0)

Régua do autor. Nasceu ao decidir onde guardar a sustentação das posições e como tratar o `genesis.md`, que tem 1.990 linhas e nunca recebeu o tratamento que os capítulos receberam na 1.4.0.

15.1. **A unidade de divisão é a pergunta, não o tamanho.** Documento pequeno que fecha está certo; documento grande que obriga o leitor a garimpar está errado. `07-setimo-dia` tem 43 linhas e está inteiro — começo, meio e fim. `genesis.md` §4 tem **447 linhas** e guarda dezoito tópicos que existiriam sozinhos.

15.2. **O teste é negativo, e é o mais rápido de aplicar:**

  > **Divisão feita só para outro arquivo não ficar grande é divisão errada.**

  Divisão legítima é a que **existiria de qualquer jeito**. A marca da ilegítima é o pedaço **precisar de irmãos para fazer sentido**.

15.3. **Três formas, e cada uma tem uma unidade completa diferente.**

| Forma | O que precisa estar completo | Exemplo |
|---|---|---|
| **Documento** | Uma pergunta, respondida | `07-setimo-dia` · `metodo/incerteza-nao-e-uniforme` |
| **Registro** | O **campo** — três linhas podem bastar | `posicoes.md` · `fios-canonicos.md` · `genesis.md` §10 |
| **Fio / cadeia** | **A cadeia inteira, não o elo** | a semente da mulher (`fios-canonicos.md` #1) |

  No fio, cada elo é fragmento **por natureza** — `Gn 4.25` sozinho não diz nada — e **a sequência é o conteúdo**. Não se corta em elos, nem se funde em bloco corrido. A explicação por passagem é curta de propósito.

15.4. **Peça dependente fica no arquivo do pai.** Nota, imagem, diagrama, tabela de apoio: não fecham sozinhas, logo não viram documento.

  **Exceção, e exige as duas condições juntas:** (a) o arquivo do pai está grande demais **e** (b) a peça extraída é grande o bastante para sustentar um arquivo.

  Só **(a)** produz exatamente o fragmento que a 15.2 proíbe. Só **(b)** não é motivo — bloco grande dentro de arquivo pequeno fica onde está.

  *Precedente já aplicado sem estar escrito:* a §7.3 manda cada documento carregar as próprias notas de rodapé — peça dependente com o pai — e `14-notas-e-bibliografia.md` é a exceção, porque a bibliografia consolidada do capítulo inteiro satisfaz (a) e (b).

15.5. **Divisão técnica não é divisão editorial.** Mídia e anexos moram em pasta própria por exigência de ferramenta e são referenciados de dentro do documento. Isso não os torna documentos, e esta régua não se aplica a eles.

15.6. **A régua é juízo, não algoritmo.** Forma, tamanho e sentido puxam em direções diferentes, e é o caso concreto que decide. Quando as três apontarem para lados distintos, decide a **15.2**.

15.7. **Classificar antes de dividir.** Boa parte do que parece problema de tamanho é problema de **classe**: registro morando em arquivo de documentos, ou documento tratado como campo. Ver [`metodo/00-indice`](metodo/00-indice.md) para a distinção entre as pastas, e a §13.8 para a divisão entre nível-livro e capítulo.

