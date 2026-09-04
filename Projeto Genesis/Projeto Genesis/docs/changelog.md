# Changelog – Projeto Gênesis Comentado

Registro de mudanças estruturais, teológicas e de regras do projeto.
Cada entrada deve conter: data, arquivo, seção, tipo, confiança e nota.

## 2026-09-04 – Versão 1.9.0 (sugerida, parte 2) — criada `docs/lexicos/`, a wiki lexical

[2026-09-04] – arquivos: docs/lexicos/ (nova pasta — 00-indice, bara, raqia, yom), docs/regras.md (nova §13), docs/conf.md (pasta_lexicos), docs/metodo/00-indice.md (ponteiro), genesis-01/01-texto-hebraico.md (§3 cabeçalho + três linhas da tabela com link)
tipo: criação de camada estrutural + adição de regra. **Nenhuma posição doutrinária alterada.**
confiança: 0.9 para os blocos de corpus — são listas de ocorrências, conferíveis por qualquer um em Sefaria e Blue Letter Bible, e o autor deve conferi-las. **0.0 declarada para os blocos de instrumentos**, que estão marcados `F3 · a conferir` e não foram preenchidos com fonte em mãos. 0.85 para a estrutura, que é minha.
nota: **A assimetria que motivou a pasta.** O projeto já tinha dois documentos preparatórios seguindo princípios opostos, e ninguém tinha notado. `02-traducoes-br.md` abre dizendo "só texto, aqui não há exegese", põe seis versões lado a lado, marca onde divergem e **retira a voz do projeto** — *"ver isso com os próprios olhos é o que permite ao leitor avaliar o comentário em vez de confiar nele"*. Já os 43 verbetes de `01-texto-hebraico.md` §3 fazem o contrário: são **o projeto escrevendo o próprio dicionário**, na própria voz, sem entrada citada e sem divergência exposta — o que a §5 daquele arquivo já confessava ("trate os verbetes como orientação, não como autoridade"). Era **análise pessoal ocupando a etapa que existe justamente para vir antes da análise pessoal**, e os achados sobre *bara* e *Elohim* eram sintoma disso: quando o documento é o próprio dicionário, não há autoridade fora dele para arbitrar. **Decisão do autor sobre o nome:** singular se fosse uma fonte, plural se mais de uma — são cinco fontes livres comparadas por verbete, logo `docs/lexicos/`. **Nível-livro, e não dentro de `genesis-01/`**, porque *bara* volta em Gn 2, 5 e 6, *zera'* atravessa o livro e sai em Gálatas, e verbete enterrado num capítulo é reescrito cinquenta vezes. **A inversão que define o formato (§13.3):** a coluna primária de cada nota **não é dicionário nenhum, é o corpus** — o sentido se estabelece por levantamento de uso (C1) e os léxicos entram depois, em bloco próprio, marcados C4 e com data. Não é preciosismo: é o que já funcionou duas vezes neste projeto, com `Jr 26.1` desfazendo o impasse de *bereshit* e `Gn 1.27` × `Gn 2.7` desfazendo o de *bara*, **nenhum dos dois por verbete**. **A restrição declarada, e ela é a parte séria (§13.4):** dos instrumentos, só os de domínio público são alcançáveis — BDB (1906), Gesenius-Tregelles (1857), Strong's — mais SDBH e Klein, gratuitos e modernos. **HALOT, DCH e DITAT não foram consultados**, e escrever "HALOT registra X" sem ter HALOT seria exatamente o erro que o quarto eixo nasceu para pegar: erraria com cara de rigor. Os três blocos de instrumentos ficam marcados `F3 · a conferir`, com a URL de onde buscar cada fonte livre e o que procurar. **A camada lexical gratuita da internet está congelada em 1906** — por direito autoral, não por mérito —, e isso pesa justamente nas palavras raras, que é onde o material pós-Ugarite (1929) e pós-Qumran (1947) faria diferença. Nova §13.5: **léxico e dicionário teológico são gêneros diferentes** — DITAT e NIDOTTE trazem doutrina dentro da entrada, o que é informação legítima desde que rotulada, e citá-los como "os léxicos dizem" é o erro de categoria da §11.2 aplicado à C4. **Três verbetes escritos.** *bara*: o bloco de corpus reúne as ocorrências que decidem a questão do *ex nihilo* — sobretudo `Gn 1.27` × `Gn 2.7` (o mesmo ato, dois verbos, e um deles **nomeia o material**), mais `Sl 51.10`, `Is 45.7`, `Am 4.13` e `Nm 16.30`; conclui que o verbo **não carrega** *ex nihilo* sozinho e que **a doutrina não depende disso**, apoiada em `Hb 11.3`, `Jo 1.3`, `Cl 1.16` e `Rm 4.17`. *yom*: o caso mais limpo de "onde a briga não está" — ninguém discorda do que a palavra significa, e **nenhuma quantidade de estudo lexical resolve a questão dos dias**; registra o contra-dado do cardinal em `1.5`, que estava no projeto e nunca fora ligado ao argumento do numeral ordinal. *raqia*: registra os **dois** agrupamentos do verbo *raqa'* — bater metal (`Êx 39.3`; `Nm 16.38-39`) **e** estender (`Is 42.5`; `Sl 136.6`) —, porque apresentar só o primeiro é seleção de testemunha (§11.9); traz `Jó 37.18` ("firmes como espelho fundido") como a ocorrência que mais pesa, e a LXX (*stereōma*) e a Vulgata (*firmamentum*) como C2. **Achado que a nota produziu, e é o efeito previsto de pôr fontes lado a lado:** a solidez do *raqia* **não consta em `posicoes.md`** — nem como posição adotada, nem como questão em aberto —, e ela toca acomodação, inerrância e leitura do ANE. Registrado na própria nota conforme §13.7, **não decidido** (regra 6.1.1). **spec_version: 1.8.0 → 1.9.0 — sugerido, não aplicado.**

---

## 2026-09-04 – Versão 1.9.0 (sugerida) — a falácia da raiz estava na régua; C1 tem testemunhas; o binyan antes do léxico

[2026-09-04] – arquivos: docs/regras.md (§11.8, §11.9, §11.10), docs/metodo/camadas-do-texto.md (linhas C1/C2 da tabela; seção "C1 não é um texto só"; seção "Os massoretas deixaram dois sinais"), genesis-01/01-texto-hebraico.md (§1 convenção de raiz; §4.2 binyan de Js 17.15)
tipo: correção de método + adição de regra. **Nenhuma posição doutrinária alterada.**
confiança: 1.0 para as duas citações literais corrigidas (verificáveis por grep). 0.9 para a análise do shevá e do estado construto — é gramática padrão e o autor pode conferir a olho nu no Sefaria comparando o *bet* de בְּרֵאשִׁית (Gn 1.1) com o de בָּאָרֶץ. 0.85 para a reorganização de C1, que é minha e sujeita a ratificação.
nota: **Origem incomum, e vale registrar porque é o método funcionando.** O autor abriu uma conversa paralela com outro assistente sobre "como funciona a análise do hebraico e o que são os léxicos", e trouxe a transcrição para cá. Material de procedência `IA`, fonte **F3** — não vira rodapé, serve de roteiro. Posto lado a lado com o arquivo do projeto, **discordou dele em um ponto e o material externo estava certo.** Três achados. **(1) A falácia da raiz estava na régua do documento preparatório.** `01-texto-hebraico` §1, seção Convenções, dizia: "uma raiz de três consoantes, **que carrega o campo de sentido**". Não é verbete solto — é a instrução de leitura entregue ao leitor antes da primeira palavra, e contradiz a §11.4 ("palavra não decide doutrina"), escrita depois. Conteúdo de precedência 4, exatamente o envelhecimento que a §12 previu. Reescrita: a raiz organiza **famílias de forma** e sugere parentesco que o uso confirma ou desmente; o sentido se estabelece por uso, forma, construção e contexto. Acrescentada a distinção **raiz × lema**, que o projeto não tinha em lugar nenhum. **(2) C1 não é um texto só — e Qumran estava arquivado no lugar errado.** A `camadas-do-texto.md` listava Qumran na **C2**, junto com LXX, Vulgata, Peshitta e Targums. Erro de categoria do mesmo tipo que a nota foi escrita para evitar: um manuscrito **hebraico** do séc. III a.C. não é versão, é consonantal — C1, mil anos antes do manuscrito massorético mais antigo. Qumran movido para C1; acrescentado o **Pentateuco Samaritano**, que não constava em lugar nenhum; C2 passa a dizer explicitamente "**traduções**". Registrados os dois andares: **dentro do TM** o esqueleto é estável e o acrescentado é leitura; **em crítica textual** até o consonantal se compara. O projeto trabalha no primeiro andar e declara que não subiu ao segundo — o aparato de variantes segue como lacuna conhecida na §5 do `01-texto-hebraico`. Nova **§11.8**. **(3) O achado sério: a nota que criou o quarto eixo fazia seleção de testemunha.** A `camadas-do-texto.md` apresentava o acento *tipeha* sobre בְּרֵאשִׁית como evidência de que os massoretas leram 1.1 como frase independente — a posição 3 — e **não mencionava o segundo sinal massorético da mesma palavra**: o *bet* leva **shevá**, não qamets, isto é, **não há artigo definido**, que é o argumento clássico do lado contrário (Rashi). A nota irmã, `testemunhas-antigas.md`, é a que enuncia a regra quebrada: "onde divergem, registra-se a divergência — **não se escolhe a que agrada**". Acrescentados os dois sinais em tabela, mais a formulação exata — construto **não admite artigo**, logo a ausência do artigo **não favorece** a leitura dependente, apenas **não a exclui**; se 1.1 trouxesse בָּרֵאשִׁית a leitura dependente estaria excluída — e a resposta disponível: expressões temporais dispensam artigo com frequência, e `Is 46.10` traz מֵרֵאשִׁית anartro e inequivocamente absoluto. **A posição 3 não muda e fica mais defendida**, por responder ao argumento contrário em vez de não o mencionar. Nova **§11.9**. **(4) Morfologia antes do léxico.** O material externo expôs um degrau que o projeto não tem: entre texto e léxico falta o **parsing**. A prova estava no próprio arquivo — a §4.2 citava `Js 17.15,18` ("desbravar floresta") como sentido alternativo de *bara* **sem dizer que ali o verbo está no piel**, não no qal, e provavelmente é homógrafo. Corrigido, com a advertência explícita. Nova **§11.10**: nenhuma ocorrência entra em levantamento de uso sem binyan declarado. **Ressalvas do assistente externo, aceitas e incorporadas:** a formulação "as consoantes não mudam" precisava do andar da crítica textual (achado 2), e "sem artigo, logo 'em princípio' e não 'no princípio'" era forte demais — ausência de artigo hebraico não mapeia mecanicamente em português, e o dado é sintático, não de tradução. As duas ressalvas estão escritas no texto. **spec_version: 1.8.0 → 1.9.0 — sugerido, não aplicado.**

---

## 2026-09-04 – O argumento da posição 12: milagre pontual × milagre como explicação de sistema

[2026-09-04] – arquivos: genesis.md §7.3 (bloco "crença, não dogma" reescrito e ampliado; fatura 1 acrescida), docs/posicoes.md (posição 12)
tipo: fortalecimento de posição doutrinária — argumento do autor
confiança: 0.95 — o argumento, a distinção e os exemplos são do autor. A ancoragem em revelação geral (`Sl 19.1`; `Rm 1.20`) e a consequência interna sobre o registro fóssil são acréscimos meus, declarados abaixo e sujeitos à ratificação.
nota: Argumento do autor: **"na minha cabeça nem faz sentido defender que a terra tem só 6.000 anos; a própria terra demonstra ser MUITO mais velha. Não é fazer contorcionismo para encaixar a terra antiga — difícil é encaixar processos que levam milhões, bilhões de anos e tentar encaixar tudo em 'Deus fez por milagre'. Porque aí sim seria fé sem lógica alguma, e tentar entender perde o sentido e vira fé cega só porque sim, joga o cérebro fora e responde milagre em tudo. [...] Agora, ressurreições, cura de cegos, fogo do céu — aí sim não tem ciência que explica, e isso sim exige fé de verdade, diferente de fé cega."** O texto de §7.3, escrito horas antes, declarava **que** o autor sustenta terra antiga e não dizia **por quê** — dizia apenas que "não parece ter sido assim". O argumento é mais forte que isso e passou a estar escrito. **A distinção central, que é do autor:** duas coisas muito diferentes se chamam "milagre". O **ato pontual** (Lázaro, o cego, o fogo do Carmelo) acontece num momento, diante de testemunhas, e a Escritura o narra como **sinal** — feito para ser notado e para significar; nenhuma ciência explica e nenhuma precisa. O **milagre como explicação de sistema** sustenta que estratos, isótopos, sucessão fóssil e luz de galáxias distantes foram criados já com aparência de idade — e isso não afirma um evento, afirma que **toda a evidência é aparência**. **Acréscimo meu, declarado:** ancorei a segunda metade na **doutrina da revelação geral** (`Sl 19.1`, "os céus proclamam"; `Rm 1.20`, os atributos invisíveis "percebidos por meio das coisas que foram criadas"). O efeito é deslocar a discussão: a pergunta deixa de ser "Deus poderia?" — poderia, e o texto diz isso — e passa a ser **o que isso implicaria sobre o caráter dEle**, já que uma criação que apresentasse coerentemente uma história que nunca aconteceu não estaria revelando, estaria induzindo ao erro. Isso tira a posição do eixo "ciência contra Bíblia" e a coloca no eixo "Escritura e criação, um Autor só". **Duas ressalvas escritas junto, ambas exigidas pelo estilo do projeto:** (1) nada disso põe a ciência acima da Escritura — a criação não corrige a Palavra, corrige a **nossa leitura** dela, que é o princípio da acomodação já invocado em §7.2, e a reconstrução científica do passado também é humana e revisável; (2) os irmãos de terra jovem **não estão abrindo mão de pensar** — protegem a prioridade da Escritura sobre a reconstrução humana do passado, preocupação legítima, e a divergência é sobre **onde está o erro de leitura**, não sobre quem leva o texto a sério. O vigor do argumento do autor foi mantido; o desprezo, não — o projeto descreve leituras alternativas com respeito quando sustentadas por teólogos sérios. **Fatura nova, e ela é o achado desta passada:** o argumento **fecha uma saída que o próprio comentário poderia querer usar**. Quem sustenta que o registro geológico não pode ser mera aparência não pode, adiante, tratar o **registro fóssil** como aparência — é o mesmo tipo de evidência, lida pelos mesmos métodos. A morte animal antes de Adão terá de ser respondida pela **teologia da morte em Gn 2.17**, no capítulo 3, e não por um recuo sobre o que os fósseis são. A posição ficou mais cara e mais honesta. **Sem incremento de spec_version.**

---

## 2026-09-04 – Posição 12 propagada: `genesis.md` §7.3 passa a declarar a terra antiga

[2026-09-04] – arquivos: genesis.md §7.3, docs/posicoes.md (posição 12 quitada; linha "Genealogias e cronologia" atualizada)
tipo: propagação de posição doutrinária já declarada pelo autor
confiança: 0.95 — a posição, a formulação "Gn 1 é resumo seletivo", o "crença, não dogma" e as três faturas vêm do autor e do registro de 2026-09-03. O residual é de redação, e uma escolha minha declarada abaixo.
nota: Primeira dívida de propagação quitada sob a regra **12.4**, criada horas antes. `genesis.md` §7.3 apresentava YEC e OEC lado a lado e concluía que "a questão de *quando* é matéria de interpretação legítima" — sem declarar nada. A posição 12 apontava para essa seção desde 2026-09-03. **O leitor do livro não tinha acesso à posição do autor.** Acrescentado bloco **"Posição adotada neste projeto"** com os três elementos que o autor declarou: (a) terra antiga, bilhões de anos; (b) Gênesis 1 é **seletivo** — "Deus não narrou tudo o que fez, narrou o que importava ao povo que receberia o texto"; (c) sustentada como **crença, não dogma** — "Deus poderia ter criado tudo em seis mil anos de modo milagroso, e nada na doutrina da criação o impediria; a onipotência não fica menor num cronograma curto". Declarada também a dependência da posição 4: se os "dias" não são necessariamente solares, a soma das genealogias deixa de funcionar como relógio. **As três faturas foram escritas para o leitor, e não só para o registro:** (1) a **morte antes da queda**, com as duas respostas conhecidas apresentadas — Rm 5.12 falando da morte humana, e "muito bom" como adequação ao propósito — e a declaração explícita de que **nenhuma foi adotada**, porque a resposta pertence ao capítulo 3 e a questão segue em aberto; (2) as **genealogias precisam ter lacunas**, com a distinção que não estava no registro e é minha: o dado se sustenta sozinho por Mt 1, mas **a posição depende dele**, e depender é diferente de observar; (3) o **afastamento da CFW 4.1** ("no espaço de seis dias"), delimitado — distância daquela cláusula, não da confissão inteira. Fechado com o que **não** muda: que Deus criou, do nada, com propósito, e que a criação é boa — nada disso depende de quantos anos o processo levou. **Escolha declarada, sujeita à revisão do autor:** o refinamento da posição 4 ("dia" = marcador de fechamento de etapa) **não foi usado** para sustentar a §7.3, embora sustentasse melhor. Usei a §7.2 como ela está hoje ("dias divinos, não necessariamente 24h"), que já basta. O motivo é a regra 12.3: aquele refinamento é a **segunda dívida de propagação**, ainda aberta e com fatura ⚠️ pendente (Ex 20.11 e o sábado como ordenança criacional), e não cabia contrabandeá-lo para dentro de outra seção enquanto isso. Ele continua marcado. **Sem incremento de spec_version:** propagação de posição, não mudança de regra.

---

## 2026-09-04 – Versão 1.8.0 — regra de precedência, e a primeira auditoria que ela produziu

[2026-09-04] – arquivos: docs/regras.md (nova §12), docs/conf.md (spec_version), docs/posicoes.md (duas dívidas de propagação marcadas), genesis-01/05-dias-1-3.md (§5.4)
tipo: adição de regra + auditoria de divergência
confiança: 1.0 para as divergências — são citação literal dos arquivos, verificáveis por grep. 0.9 para a formulação da regra, que é da IA a partir da instrução do autor.
nota: Instrução do autor: **"as conversas aqui, principalmente as de hoje e ontem, são as mais recentes; se algo está discordando disso, aqui é a fonte da verdade."** Formalizada como **§12**, com ordem de precedência explícita: conversa em curso > registros (`posicoes`, `fios`) > norma (`regras`, `conf`, `metodo`) > conteúdo (`genesis.md`, capítulos) > `base/`. A regra existe porque a divergência é estrutural, não acidental: **o conteúdo foi escrito antes das decisões**. A subregra decisiva é a **12.4** — posição declarada em `posicoes.md` sem estar escrita no arquivo que a coluna "Onde" indica é **dívida, não posição cumprida**; se o leitor abrir aquela seção e não encontrar a posição, ela não existe para ele. **A auditoria imediata encontrou três divergências.** (1) **Mecânica, corrigida:** `05-dias-1-3.md` §5.4 dizia "*bara* marca a **criação absoluta** (v.1)" — uso não qualificado da glosa aposentada horas antes, num contraste técnico com *asah*. Reescrito como "o ato criador que não parte de material preexistente", que diz a mesma coisa sem a palavra. (2) **Doutrinária, marcada e não corrigida:** o refinamento da posição 4 pelo autor em 2026-09-03 — o "dia" é **marcador de fechamento de etapa, não medida de duração** — está no registro e **não está em `genesis.md` §7.2**, que segue dizendo "dias divinos, períodos reais de atividade criadora". "Período real de atividade" é afirmação de duração; "marcador de etapa" não é. Propagar exige antes responder a fatura já marcada ⚠️ (Ex 20.11 e o sábado como ordenança criacional). (3) **Doutrinária, marcada e não corrigida:** a posição 12 (terra antiga, bilhões de anos) aponta para `genesis.md` §7.3, e **§7.3 não a declara** — apresenta YEC e OEC lado a lado e conclui que "a questão de *quando* é matéria de interpretação legítima". A posição existe no registro e não existe para o leitor. **Auditoria negativa registrada:** varredura por "Lúcifer", "arcanjo", "terça parte", "1/3", "guerra no céu" e "serpente = Satanás" nos arquivos de saída — **nenhuma ocorrência**. Os termos descartados pela §9 aparecem só nos registros que documentam o descarte. As duas dívidas ficam marcadas na tabela de posições com o rótulo **⚠️ Dívida de propagação**, para que a próxima passada as encontre sem depender de memória. **spec_version: 1.7.0 → 1.8.0.**

---

## 2026-09-04 – Versão 1.7.0 — quarto eixo do método: a camada do texto; criada docs/metodo/

[2026-09-04] – arquivos: docs/metodo/ (nova pasta, 11 documentos), docs/regras.md (nova §11), docs/conf.md (spec_version + pasta_metodo), genesis-01/01-texto-hebraico.md (ponteiro)
tipo: criação de camada de método + adição de regra
confiança: 0.9 — os eixos de nível (N1–N5), procedência e fonte (F1–F3) foram importados de `estudos_biblicos/METODO.md`, lido na íntegra (F1). As datas das testemunhas antigas são de referência corrente. O eixo da camada é formulação nova, e o residual está nele: é leitura da máquina sobre uma lacuna real, sujeita à ratificação do autor.
nota: Pedido do autor: **"tem muita coisa importante aqui que foi surgindo sob demanda que, se organizado, serve como base tremenda"** — e, quando a proposta veio pequena demais: **"tu não tá entendendo o quão sério é o bagulho, quero entender esse negócio a fundo."** Levantamento dos quatro repositórios (`estudos_biblicos`, `genesis`, `judas_escolheu_ou_foi_escolhido`, `Projeto_Genesis`): 21.189 linhas de markdown, quatro funções de uma obra só — captação, método, monografia, comentário. Decisão do autor: **usar os outros três como fonte de leitura e concentrar tudo no Projeto Gênesis**, "o mais atualizado em metodologia, estrutura, conhecimento e nível de discussão". **O achado que motivou a versão:** o `METODO.md` da wiki tem três eixos ortogonais e bons — nível (N1–N5), procedência (A/A+IA/IA/IA✓) e fonte (F1/F2/F3) —, mas **nenhum deles mede sobre que camada da tradição textual uma afirmação se apoia**. A prova é do próprio dia: a IA apresentou o acento *tipeha* sobre *bereshit* (séc. IX d.C.) como "testemunho antigo" ao lado da Septuaginta (séc. III–II a.C.), mil anos e uma categoria de distância. A afirmação era **N1** (está no texto massorético), procedência `IA` correta, e **F1** — o sinal foi lido com os próprios olhos no arquivo do projeto. **Passou limpo nos três eixos e enganava.** Quem pegou foi o autor, na mão, perguntando "isso muda algo?" — e o método existe justamente para não depender disso. **Criado o quarto eixo, a camada:** C1 consoantes (até séc. V a.C.) · C2 versões antigas (LXX, Vulgata, Peshitta, Targums, Qumran) · C3 vogais e acentos massoréticos (séc. VII–X d.C.) · C4 léxicos e gramáticas · C5 comentaristas. Regra: **quando a leitura depende de C3 ou abaixo, declara-se**. Criada `docs/metodo/` com 11 documentos curtos e interligados por wikilink — os quatro eixos, as camadas, as testemunhas antigas, a incerteza concentrada, os níveis de sentido, onde a briga não está, glosa × tradução, negociar com o texto, prova-texto × doutrina, conferir sem hebraico, e o índice. Formato deliberadamente fragmentado: uma nota por conceito, para que o grafo do Obsidian tenha o que mostrar e para que a busca futura encontre o conceito, não um arquivo grande. **Nova §11 em regras.md** com sete regras, incluindo 11.4 ("palavra não decide doutrina"), 11.5 ("glosa não é tradução") e 11.6 (perguntar qual texto carrega a afirmação antes de defender um versículo). **Distinção registrada no índice:** `docs/metodo/` guarda **conhecimento** (como o texto funciona); `regras.md` guarda **norma**; `posicoes.md` guarda **decisão**; `fios-canonicos.md` guarda **registro**. Método não decide doutrina. **spec_version: 1.6.0 → 1.7.0.** **Pendências declaradas:** as notas são `IA` e nenhuma foi ratificada; a §9 e a §10, nascidas aqui, ainda não voltaram para a tabela de convergência da wiki; o repositório `genesis/` (captação — vídeo, whisper, transcrições que alimentam `base/0102`) **não tem git nem backup remoto**, sendo o único elo da cadeia que não volta se sumir; e o ponteiro de `posicoes.md` para `../../../../estudos_biblicos/METODO.md` funciona no disco do autor mas é link morto no GitHub e no Obsidian.

---

## 2026-09-04 – "Absoluto" declarado como glosa, não tradução

[2026-09-04] – arquivos: genesis-01/04-exegese-1-2.md (§4.2), genesis-01/01-texto-hebraico.md (verbete *bereshit*)
tipo: correção de excesso introduzido pela IA no mesmo dia
confiança: 0.95 — os paralelos de *re'shit* são verificáveis por qualquer leitor no interlinear indicado na §6 do documento hebraico. O residual é de redação.
nota: Segunda passada no mesmo verbete, no mesmo dia, provocada pelo autor: **"tô tentando negociar e fazer um acordo com o texto; se *bereshit* é o início absoluto de tudo e isso é o significado de fato, não tem como discordar."** A desconfiança estava certa e a premissa estava errada — *bereshit* não significa isso. O diagnóstico: a correção da manhã ainda dizia que "a expressão é boa desde que se saiba contra quem foi cunhada", frase da IA, generosa demais com uma glosa. **"Absoluto" não aparece em nenhuma versão** — TB, ACF, ARA, NAA, NVI, NVT, Vulgata (*in principio*) e LXX (*ἐν ἀρχῇ*) trazem apenas "no princípio". Acrescentados ao texto os dados lexicais que o leitor pode conferir sozinho: *re'shit* é o termo comum para **primícias** (Lv 23.10; Nm 18.12) e para o começo de um reino (Gn 10.10), e a **forma idêntica** *bere'shit* ocorre em Jr 26.1 significando apenas "quando começou o reinado de Jeoiaquim". A palavra abre uma lacuna — "na cabeça de ___" — que quem preenche é o objeto do verbo. **Separadas três camadas que vinham grudadas e que produziram a confusão:** (1) "no princípio" é o que o texto diz; (2) "início real, não relativo" é o que a **sintaxe** afirma, por 1.1 ser frase independente — posição 3; (3) "nada além de Deus é eterno" é **conclusão doutrinária**, vinda de `Cl 1.16`, `Hb 11.3` e `Jo 1.3`. As três se sustentam e o comentário afirma as três; o erro era fazer a terceira morar dentro da primeira. **Registrado também o risco inverso**, para que a correção não seja usada como cavalo de Troia: a modéstia do vocábulo **não** favorece a leitura dependente ("quando Deus começou a criar"), porque aquela disputa é de sintaxe, não de léxico — *bere'shit* é igualmente modesta em Jr 26.1 e ali o reinado de fato começou. **Autocrítica registrada:** na mensagem anterior a IA recomendara um recorte cronológico (1.31 → 3.1) argumentando que ele "sai mais barato" por eliminar uma remenda da posição 11 — **argumento de contabilidade do projeto, não do texto**, retirado. Nenhuma posição foi alterada; as 11 e 11b seguem como estavam, e a decisão sobre datar ou não a corrupção continua com o autor. **Sem incremento de spec_version.**

---

## 2026-09-04 – Precisão sobre o alcance de "início absoluto" em Gn 1.1

[2026-09-04] – arquivos: genesis-01/01-texto-hebraico.md (verbete *bereshit* e nota de rastreabilidade da §5), genesis-01/04-exegese-1-2.md (§4.2, "Bereshit"), docs/posicoes.md (posição 3)
tipo: precisão de posição doutrinária já adotada
confiança: 0.95 — a distinção foi levantada pelo autor e a resolução decorre de posições que o projeto já sustenta (#3, #11, e o merismo como afirmação de origem). O residual é a formulação, que é da IA e fica sujeita à ratificação.
nota: Objeção do autor: **"tu depende de como tu olha, o começo absoluto de tudo, mas, TUDO o quê? Deus já existia, o Espírito Santo, Jesus, os querubins."** A objeção derruba a palavra, não a posição, e resolve de quebra a inconsistência que ficara pendente de 2026-09-03 — o léxico dizia "início absoluto de tempo, espaço e matéria" sem qualificação, enquanto a exegese, reescrita depois da posição 11, já dizia "no reino criado e mortal". **A palavra fazia dois trabalhos:** (1) sentido estrito, "nada existia" — falso, e o próprio v. 2 o desmente ao mostrar o Espírito agindo; (2) sentido em que a tradição a cunhou, "nada além de Deus é eterno" — verdadeiro, polêmico, e com endereço no Egito, onde Israel passou 400 anos ouvindo que a água e o caos sempre existiram. Adotado: **"absoluto" cabe só a Deus**, o único sem começo; aplicado a 1.1 o termo vale **contra matéria eterna**, não contra um Deus eterno. O versículo afirma início **real, não relativo**. **A pergunta "tudo o quê?" já tinha resposta no capítulo, mas nunca ligada a este verbete:** a corte celestial também é criatura — `Cl 1.16` nomeia "tronos, soberanias, principados, potestades" —, e não há terceira categoria entre Criador e criatura. É o que o merismo de 1.1 afirma: origem, não cronologia (posição 11). **O ponto onde o argumento do autor realmente aperta não é "absoluto", é "início do tempo":** se a corte já estava lá, houve um "antes"? A posição 11 já dissolvera isso ao recusar dizer "antes" — a conclusão que o silêncio sustenta é "não aqui". Acrescentado ao texto que "início do tempo" se lê como o tempo **deste mundo**, que o comentário **não responde** se a corte celestial tem duração própria, e que `Jó 38.7` mostra os filhos de Deus jubilando *enquanto* os fundamentos eram lançados — simultaneidade, não anterioridade. **Sem incremento de spec_version:** nenhuma regra nova, e nenhuma posição trocada — apenas dito com precisão o que #3 sempre quis dizer.

---

## 2026-09-03 – Versão 1.6.0 — criado docs/fios-canonicos.md e a metade prospectiva das conexões

[2026-09-03] – arquivos: docs/fios-canonicos.md (novo), docs/regras.md (nova §10), docs/conf.md (spec_version + ponteiros), docs/posicoes.md (ponteiro cruzado)
tipo: criação de arquivo de governança + adição de regra
confiança: 0.9 — os 23 fios foram extraídos de `genesis.md` §4 e §8, onde já estavam nomeados; as passagens vêm do texto do autor. O residual cobre a inferência de estado (quais fios os capítulos 1 e 2 pagam), que foi lida dos arquivos e não declarada por eles, e dois fios cuja resolução fora de Gênesis não foi encontrada. Primeira passada, explicitamente provisória.
nota: Observação do autor: **"todo o cânon precisa ser revisto e mencionado"** — há coisas citadas em Gênesis que só se resolvem muito à frente, como o descendente da mulher. O diagnóstico foi que isso **não é falta de conteúdo, é nível errado**: `genesis.md` §4.3 já traz o estreitamento da semente com diagrama e tabela de sete elos (3.15 → Sete → Sem → Abraão → Isaque → Jacó → Judá → `Gl 3.16`), e o §4 inteiro nomeia dezessete temas desses. Mas tudo mora no arquivo de nível-livro, e os capítulos não conversam com ele: ao escrever o cap. 4, nada lembraria que 4.25 é o segundo elo da corrente. É o mesmo problema que o `posicoes.md` resolveu, aplicado a fios em vez de posições. Criado `fios-canonicos.md` com 23 fios, cada um com onde nasce, elos dentro de Gênesis, elos nomeados fora, e **estado** (✅ plantado · ⚠️ raiz faltando · ⏳ ainda não alcançado · 🔓 sai do livro sem fechar). **O registro já produziu dois achados:** (1) **nove dos vinte e três fios nascem no capítulo 3 ou dependem dele** — a semente, o sacrifício substitutivo, a graça comum, o juízo progressivo, o exílio, a bênção/maldição —, o que faz do capítulo 3 não o próximo da fila, mas o gargalo por onde passa quase metade da estrutura do livro, e ele está travado por quatro questões em aberto; (2) **dois fios saem de Gênesis sem fechar** (o exílio e a terra prometida), efeito produzido de propósito pelo narrador, que o comentário deve registrar em vez de consertar. Nova §10 em regras.md: a seção de conexões canônicas passa a ter duas metades — **retrospectiva** (o que já se fazia) e **prospectiva** (o que a passagem planta e não colhe, nomeando onde é paga) —, com obrigação de ler o registro antes e atualizá-lo depois. **spec_version: 1.5.0 → 1.6.0.** Pendências declaradas no próprio arquivo: o critério "elo nomeado × reverberação" é provisório; os capítulos 1 e 2 ainda não têm seção prospectiva, e os fios que eles pagam foram inferidos, não declarados; falta cruzar com o `INDICE-DE-PASSAGENS.md` da wiki.

---

## 2026-09-03 – Versão 1.5.0 — posição 11 reescrita como escopo; nova §9 (a régua do que fica fora da narrativa)

[2026-09-03] – arquivos: docs/regras.md (nova §9), docs/posicoes.md (posição 11 reescrita, nova 11b), docs/conf.md (spec_version), genesis-01/04-exegese-1-2.md (seção "Bereshit" e o merismo), genesis-01/01-texto-hebraico.md (verbete *ha'aretz*)
tipo: reescrita de posição doutrinária + adição de regra de método
confiança: 1.0 para o registro — a posição foi construída pelo autor em diálogo, e cada exemplo descartado foi verificado contra o texto bíblico citado. 0.95 para a §9 — é formulação da IA de um critério enunciado pelo autor, sujeita à ratificação.
nota: A posição 11, registrada no mesmo dia como afirmação **cronológica** ("os céus precedem Gn 1.1"), foi reescrita pelo autor como afirmação de **escopo**. A formulação dele: Gênesis é o "prólogo da campanha" — a corte celestial existe, é pressuposta, e o narrador nunca vai contá-la. A diferença é decisiva: a versão cronológica precisava datar a queda dos anjos e convertia silêncio em "aconteceu antes"; a versão de escopo apenas retira o evento da janela dos seis dias, sem dizer se antes, depois ou futuro — conclusão que o silêncio realmente sustenta. Isso resolveu de quebra o problema do "muito bom" de 1.31 (veredito sobre o que está em quadro) e dissolveu a objeção de Ap 12, que na versão cronológica era contraexemplo e na de escopo é exemplo. **Três exemplos do autor foram descartados por não passarem na própria régua:** (1) "Satanás arcanjo" — a Escritura não usa o termo; o único arcanjo nomeado é Miguel (Jd 9), e Ez 28.14 diz "querubim ungido"; (2) a expulsão do céu como evento primordial — Jo 12.31, Lc 10.18 e Ap 12.10-11 a ancoram na cruz, e no AT o acusador ainda tem acesso ao conselho (Jó 1.6; 2.1; Zc 3.1), o que gerou a **posição 11b** distinguindo três momentos: corrupção (não narrada) → expulsão (na cruz) → derrota final (futura); (3) o "1/3 dos anjos", que se apoia só em Ap 12.4. **Auditoria do texto já escrito:** nenhuma dessas afirmações estava no projeto — não há ocorrência de "arcanjo", "Lúcifer", "terça parte" ou "1/3" em nenhum arquivo, e a serpente não é identificada com Satanás em lugar nenhum. As imprecisões existiam só na conversa. **Nova §9 em regras.md**, formalizando o critério do autor em seis regras. As duas mais importantes nasceram de erros cometidos nesta própria conversa: a **9.5**, que distingue "sem apoio em lugar nenhum da Escritura" (não entra) de "sem apoio no texto comentado, mas com apoio no cânon" (entra como leitura canônica **declarada**, nunca como exegese da passagem — a seção "Conexões canônicas" é inteiramente dessa categoria e é método legítimo; o que se proíbe é o contrabando); e a **9.6**, que impede questão listada como em aberto de servir de premissa para outra posição — regra que nasceu ao se detectar que a posição 11 se apoiava na identificação serpente = Satanás, ainda em aberto para o capítulo 3. **spec_version incrementada: 1.4.0 → 1.5.0.**

---

## 2026-09-03 – Três posições doutrinárias declaradas pelo autor (11, 12 e refinamento da 4)

[2026-09-03] – arquivos: docs/posicoes.md (posições 11 e 12, refinamento da 4, questão em aberto resolvida), genesis-01/04-exegese-1-2.md (seção "Bereshit" reescrita)
tipo: declaração de posição doutrinária pelo autor + correção de contradição interna
confiança: 1.0 para o registro — as três posições foram enunciadas pelo autor em conversa e transcritas sem interpretação da IA. As faturas são leitura da máquina, sujeitas à ratificação.
nota: O autor declarou três posições, uma das quais **contradizia frontalmente o texto já escrito** — detectada porque o posicoes.md foi consultado antes de registrar, que é exatamente a função do arquivo. **Posição 11 (o que precede Gn 1.1):** os céus, reino invisível onde Deus reina na comunhão trinitária e onde os anjos existem, precedem a criação narrada em Gn 1; o v. 1.1 é o início de tudo no "reino mortal". Isso obrigou a reescrever a seção "Bereshit" de `04-exegese-1-2`, que afirmava o oposto — "Antes desse princípio não havia mundo, nem anjos, nem nada criado". Fatura declarada em três partes, incluindo a mais importante: **o argumento de apoio não alcança a conclusão** — a serpente já corrompida em Gn 3 prova queda angelical anterior a Gênesis 3, não a Gênesis 1.1, e o próprio autor reconhece que a Escritura "não mostra nada do céu antes da criação". A posição entra como inferência teológica, não como dado do texto, e o texto reescrito diz isso ao leitor. **Posição 12 (idade da terra):** terra antiga, bilhões de anos, com Gn 1 como resumo seletivo — "Deus só mostrou o importante" —, sustentada como crença e não dogma, já que Deus poderia ter feito tudo em 6.000 anos milagrosamente. Resolve uma das questões que constavam como em aberto. Fatura: a **morte antes da queda**, que pressiona o "muito bom" de 1.31 e Rm 5.12, e cuja resposta cai no capítulo 3, em questão que segue em aberto — a posição cobra uma dívida ainda não paga. **Refinamento da posição 4:** o "dia" é marcador de fechamento de etapa, não medida de duração ("Deus nem precisaria de 24 horas"). Fatura adicional marcada ⚠️ a responder: se o dia não guarda analogia com jornada de trabalho, falta dizer o que sustenta Ex 20.11 e o sábado como ordenança criacional, que o projeto afirma em `07-setimo-dia` e §12.3 (Vos). Registrada também a consequência sobre a questão em aberto das genealogias: a posição 12 força que tenham lacunas. **Sem incremento de spec_version:** declaração de posição, não mudança de regra.

---

## 2026-09-03 – Correção: duas afirmações doutrinárias enfraquecidas na migração do léxico

[2026-09-03] – arquivo: genesis-01/01-texto-hebraico.md – seção 3 (verbetes *bereshit* e *bara*), seção 5 (nota de rastreabilidade)
tipo: **correção de mudança de sentido não declarada** — restauração de posição do autor
confiança: 1.0 — a divergência foi detectada por comparação mecânica do arquivo contra a versão em a07a1d8, e as duas afirmações originais foram restauradas literalmente
nota: Auditoria da divisão do capítulo 1 (diff contra o commit a07a1d8) apontou 23 linhas do original ausentes na pasta nova. Vinte e uma são substituição deliberada e sem perda: título antigo, cabeçalhos de seção migrados ou renumerados (§3.1 → §2.1, §3.4 → §4.1, §3.5 → §4.2), e a tabela de 13 termos do §3.2, ampliada para o léxico de 43 verbetes. **As outras duas eram regressão doutrinária introduzida por mim na reescrita do léxico, sem declaração — violação da regra 6.3.** (1) *bereshit*: o autor afirmava "início absoluto de tempo, espaço e matéria"; a reescrita apresentava o debate construto/independente sem decidir, ficando **mais neutra que a posição declarada do próprio projeto** em posicoes.md #3 (leitura clássica independente). (2) *bara*: o autor afirmava "criação soberana, *ex nihilo*"; a reescrita trocara por "não se diz o material de que se cria" — recuo exegeticamente defensável, mas que **não cabia à IA tomar**. Ambas as afirmações foram restauradas literalmente. A nuance que motivou o recuo foi preservada, mas agora **acrescentada** à posição do autor em vez de substituí-la: o verbete de *bara* registra que o verbo isolado não demonstra a criação do nada e remete a Hb 11.3; o de *bereshit* registra o estado construto como o argumento do lado contrário, remetendo à fatura em posicoes.md. Acrescentada nota de rastreabilidade na §5 registrando a correspondência entre a tabela antiga e o léxico novo, incluindo a realocação de `'ish / 'ishshah` (termos que não ocorrem em Gênesis 1, só em Gênesis 2). **Sem incremento de spec_version:** nenhuma regra nova; restauração do que já era a posição do projeto.

---

## 2026-09-03 – Criados 01-texto-hebraico.md e prefacio.md

[2026-09-03] – arquivos: genesis-01/01-texto-hebraico.md (novo), prefacio.md (novo, nível-livro)
tipo: criação de conteúdo novo
confiança: 1.0 para o texto hebraico — transferido da edição *Miqra according to the Masorah* via API do Sefaria, nenhum caractere digitado de memória, vocalização e cantilação preservadas. 0.9 para o léxico — redigido para este documento, seguindo o uso corrente dos léxicos padrão; verbetes que dependem de leitura disputada remetem ao documento de estudo correspondente em vez de decidir. 0.85 para o prefácio — é voz autoral, sujeita à revisão do autor.
nota: **01-texto-hebraico.md** — primeiro documento preparatório da pasta genesis-01: convenções de leitura (direção, vocalização massorética, raiz triconsonantal, transliteração), texto hebraico integral dos 31 versículos, transliteração dos vv. 1–5, léxico de 43 termos na ordem de ocorrência (contra os 13 da tabela anterior), e as duas análises gramaticais que vinham do arquivo antigo (§3.4 *Elohim* com verbo singular e §3.5 os verbos *bara*/*asah*/*yatzar*, renumeradas para 4.1 e 4.2 — nenhuma remissão de posicoes.md apontava para elas). O documento declara as próprias lacunas: transliteração dos vv. 6–31, análise sintática por versículo, aparato de variantes (TM × Samaritano × LXX × Qumran) e explicação dos acentos de cantilação. **prefacio.md** — não existia prefácio no projeto; `genesis.md` §1 é introdução técnica, não prefácio. Criado no nível-livro, cobrindo: a lacuna editorial que o projeto ocupa, a distinção entre esta obra e a futura "Entendendo a Bíblia", a **declaração de viés** (perspectiva reformada, autoria humana com auxílio de IA e material da internet, ausência de revisão por pares) e a resposta metodológica do projeto a ela — toda posição registrada com a fatura que paga, e o material preparatório vindo antes do comentário para que o leitor possa discordar com o mesmo material na mão. Inclui o que a obra não é, como lê-la, e o critério de que, havendo divergência entre comentário e texto bíblico, o texto vence.

---

## 2026-09-03 – Gênesis 1: criado 02-traducoes-br.md (documento preparatório de traduções comparadas)

[2026-09-03] – arquivos: genesis-01/02-traducoes-br.md (novo), docs/posicoes.md (seção "Voz e método")
tipo: criação de conteúdo novo + registro de posição de método
confiança: 0.97 para os textos citados — todos obtidos de fonte online identificada e datada, nenhum escrito de memória; a NAA foi conferida palavra por palavra contra o texto NAA já presente no projeto e bate integralmente. Uma primeira consulta à NVI retornou texto contaminado (com travessão de diálogo, marca da NAA) e foi descartada em favor de fonte independente. 1.0 para a TB (transcrição direta do Wikisource, domínio público). O residual de 0.03 cobre as versões ACF/ARA/NVT, cuja redação não pôde ser cruzada com uma segunda fonte.
nota: Criado o segundo documento preparatório da pasta genesis-01. Escopo definido pelo autor: **apenas texto, sem comentário exegético** — o documento expõe a divergência, e o "porquê" pertence aos documentos de exegese, que remetem a ele. Abre com a **TB (Tradução Brasileira, 1917)** por decisão do autor, como a versão mais próxima da sintaxe hebraica; a escolha é registrada em posicoes.md com a fatura declarada de que literalismo não equivale a fidelidade, e de que a versão-base do comentário continua sendo a NAA. A TB é reproduzida **na íntegra** (domínio público, 31 versículos); as demais versões (ACF, ARA, NAA, NVI, NVT) são citadas apenas nos versículos em disputa, com atribuição e fonte datada — decisão tomada por direito autoral, e que se mostrou também editorialmente melhor, já que o valor do documento está nos pontos de divergência, não num paralelo de 31 versículos em seis colunas. Mapeados 7 versículos: 1.1 (bereshit, céu/céus), 1.2 (tehom, ruach, merachefet — a TB é a única a grafar "espírito" em minúscula), 1.5 (yom echad — cardinal no hebraico, preservado só por TB e ACF), 1.6 (raqia — firmamento/expansão/espaço), 1.21 (tanninim — "baleias" na ACF apaga a polêmica anticaos), 1.26 (adam — homem/ser humano) e 1.28 (kabash/radah — sujeitar/subjugar/governar). O próprio documento registra o que ainda falta: 1.11-12, 1.14, 1.27, 1.31, e as versões A21, ARC e Bíblia de Jerusalém.

---

## 2026-09-03 – Versão 1.4.0 — capítulo passa a ser pasta: divisão de Gênesis 1 em documentos por tópico

[2026-09-03] – arquivos: genesis-01/ (nova pasta, 13 documentos), genesis-capitulo-01.md (aviso de substituição), docs/regras.md (§2, §7.3 revisada, nova §8), docs/conf.md (spec_version)
tipo: mudança estrutural de formato editorial + adição de regra
confiança: 1.0 para a divisão — migração mecânica verificada: todas as 40 seções (h2/h3) do arquivo original foram localizadas na saída, e a distribuição das 23 notas de rodapé foi auditada arquivo a arquivo (usos = definições em todos). Nenhuma palavra de conteúdo foi reescrita, acrescentada ou removida nesta etapa. 0.9 para a decisão de formato — é decisão editorial do autor, aprovada em conversa.
nota: O formato "um arquivo por capítulo" produziu um `genesis-capitulo-01.md` de 1.473 linhas — inutilizável como leitura, e crescendo. Decisão do autor: **o capítulo vira uma pasta e cada documento trata de um assunto só**, com teto de ~10 páginas por documento. A pasta se divide em duas etapas: **material preparatório** (01 texto hebraico, 02 traduções comparadas) e **estudo** (03–14). A razão da ordem é do autor: o preparatório é material bruto — "nada melhor que consultar o original na hora das dúvidas" — e só depois começa Gênesis 1 de fato. Isso dá ao leitor o meio de auditar o comentário, o que é a contrapartida honesta ao viés declarado do projeto. Criados nesta etapa: `00-como-usar.md` (índice e guia de leitura) e a divisão dos documentos 03–14 a partir do conteúdo existente, preservada a numeração de seções (§5.10 continua §5.10, muda só o caminho — as remissões de posicoes.md seguem válidas). Regra 7.3 revisada: notas de rodapé Markdown não atravessam arquivos, então cada documento carrega as suas e o `14` consolida a bibliografia. Nova §8 em regras.md especifica a estrutura de pastas, nomenclatura, as duas etapas e o teto de tamanho. **Pendentes desta versão:** os documentos `01-texto-hebraico.md` e `02-traducoes-br.md` ainda não foram escritos — são conteúdo novo, não migração. **spec_version incrementada: 1.3.0 → 1.4.0.**

---

## 2026-09-03 – Versão 1.3.0 — criado docs/posicoes.md: registro único de posições doutrinárias

[2026-09-03] – arquivos: docs/posicoes.md (novo), docs/regras.md (seção 6.1 e nova 6.1.1)
tipo: adição de regra editorial e criação de arquivo de governança
confiança: 1.0 para o registro — nenhuma posição foi criada, inferida ou alterada; todas foram extraídas de declarações já existentes em genesis.md e genesis-capitulo-02.md, com a origem apontada em cada linha. A seção "Em aberto" lista questões que comprovadamente não têm posição declarada em nenhum arquivo.
nota: Com 48 capítulos restantes, as posições do projeto estavam distribuídas por genesis.md, genesis-capitulo-01.md, genesis-capitulo-02.md e changelog.md, sem registro único — a posição sobre os "dias", por exemplo, mora na linha 1384 de um arquivo de 1.946 linhas. Isso funcionou para 2 capítulos; para 48 é o mecanismo pelo qual um capítulo futuro contradiz um anterior sem que ninguém perceba, e o changelog mostra que uma posição já mudou uma vez. Criado docs/posicoes.md com: 10 posições adotadas (gênero, autoria, sintaxe de 1.1-3, os dias, criação, historicidade de Adão, relação Gn 1×2, Éden como proto-templo, aliança adâmica, complementaridade), a voz e método do projeto, o histórico de mudança de posição, e 8 questões em aberto mapeadas ao capítulo em que passam a ser necessárias. Quatro delas são pré-requisito do capítulo 3 (natureza da serpente, a morte ameaçada em 2.17, Gn 3.15 como protoevangelho, historicidade da queda). Cada posição traz a coluna **"A fatura"** — o que ela paga — seguindo a regra adotada do projeto Judas de que nenhuma posição é grátis: registrar só o que foi adotado, apresentando as alternativas como legítimas, é a versão fraca que permite trocar de posição sem perceber o preço, e foi o que ocorreu na mudança sobre os "dias". Duas faturas estão **declaradas no próprio texto** (dias analógicos: abre mão do argumento de *yom* + numeral ordinal e se afasta de tradição confessional, §7.2; criação: o projeto fica sem mecanismo declarado, §7.4); as outras nove estão marcadas ⚠️ a declarar, sendo a de Adão histórico a mais cara — marcada "inegociável" sem o preço escrito. As colunas de extração são procedência `A`; as ⚠️ são `IA`, pendentes de ratificação. Regra 6.1 passa a exigir a leitura de posicoes.md antes de qualquer edição; nova 6.1.1 proíbe tomar posição nova sem registrá-la, e reserva a decisão ao autor. **spec_version incrementada: 1.2.0 → 1.3.0** (adição de regra editorial), aplicada após confirmação explícita do autor, conforme regras.md §6.4.

---

## 2026-09-03 – Reparo de encoding em regras.md e conf.md (inclui correção semântica)

[2026-09-03] – arquivos: docs/regras.md (seções 1–5, título), docs/conf.md (título, comentários) – seções 6–7 de regras.md não foram tocadas
tipo: correção de forma, com uma correção de sentido decorrente
confiança: 1.0 — reconstrução verificada mecanicamente: re-aplicando o dano (acentuado → U+FFFD, travessão → suprimido) ao texto corrigido, os 31 pares de linha reproduzem exatamente o texto anterior; nenhuma palavra foi alterada
nota: Os arquivos continham 67 caracteres de substituição U+FFFD gravados (55 em regras.md, 12 em conf.md) — corrupção já persistida, não erro de leitura; os bytes originais eram irrecuperáveis por transcodificação e foram reconstruídos a partir do português. Além dos acentos, travessões haviam sido suprimidos silenciosamente, e um deles alterou o sentido de uma regra: a seção 4.1 mandava "terminar blocos grandes com 13 aplicações práticas", quando a regra é **1–3 aplicações práticas** (o traço de intervalo foi engolido, colando "1" e "3"). A leitura correta está confirmada pelo resumo em inglês do CLAUDE.md do repositório ("End large sections with 1–3 practical applications"). Também restaurados os travessões dos títulos e da seção 2. **Não houve incremento de spec_version:** nenhuma regra nova foi criada; o conteúdo editorial vigente foi restaurado ao que já era, e a regra das aplicações práticas volta ao que sempre esteve especificado.

---

## 2026-03-07 – Capítulo 2: criação completa do comentário de Gênesis 2

[2026-03-07] – arquivo: genesis-capitulo-02.md – seções: 1–12 (arquivo inteiro)
tipo: criação de novo arquivo de comentário
confiança: 0.93 — conteúdo redigido do zero (sem material base), baseado em fontes acadêmicas evangélicas/reformadas; termos hebraicos verificados; posição de dias analógicos mantida
nota: Criado genesis-capitulo-02.md completo (~1130 linhas) com 12 seções: (1) Texto NAA Gn 2.1-25; (2) Resumo com diagrama Mermaid; (3) Hebraico — 18 termos-chave, toledot, mudança Elohim→YHWH Elohim; (4) Exegese do sétimo dia — 4 verbos hebraicos, sabbat como ordenança criacional; (5) Exegese Gn 2.4-25 em 10 subseções — yatsar/aphar/neshamah, Éden como proto-templo, duas árvores, abad+shamar sacerdotal, pacto de obras, ezer kenegdo, nomeação dos animais, tsela/ish/ishshah, casamento; (6) 6 temas teológicos — YHWH Elohim imanente, Éden proto-templo (Beale), trabalho como vocação, aliança de obras, casamento tipo Cristo/Igreja, dignidade e complementaridade; (7) ANE — Atrahasis, Enuma Elish, jardim mesopotâmico, tabela de contrastes; (8) Conexões canônicas — 8 AT + 10 NT com diagramas Mermaid; (9) 4 seções de aplicação — síntese doutrinária, casamento, trabalho, pastoral; (10) 4 perspectivas reformadas — Calvino, Bavinck, Vos, Westminster; (11) Bibliografia; (12) 11 notas de rodapé. Teólogos principais: Wenham, Cassuto, Vos, Kline, Bavinck, Beale, Waltke, Calvino, Walton, Middleton.

---

## 2026-03-07 – Capítulo 1: segunda rodada de expansão (6 novas seções temáticas)

[2026-03-07] – arquivo: genesis-capitulo-01.md – seções: 5.1.1, 5.2 (expansão), 5.3.1, 5.7.1, 5.7.2, 6.3 (expansão radah/kabash)
tipo: adição de conteúdo exegético e teológico
confiança: 0.94 — conteúdo baseado em fontes acadêmicas evangélicas/reformadas; termos hebraicos verificados; conexões canônicas AT-NT incluídas
nota: Adicionadas 6 novas seções/expansões ao genesis-capitulo-01.md: (1) 5.1.1 — padrão de separação (*havdil*), 5 ocorrências em Gn 1, reverberação em Levítico e escatologia; (2) 5.2 expandida — fórmula *wayyo'mer...wayehi-khen*, palavra performativa, *davar* como palavra/coisa, conexão com Logos de João 1; (3) 5.3.1 — atos de nomear (*qara*), soberania sobre domínios cósmicos, delegação a Adão; (4) 5.7.1 — *tanninim* como polêmica anti-mitológica contra Tiamat/Lotan, desmitologização; (5) 5.7.2 — fórmula da bênção (*barakh*), capacitação divina, indicativo antes do imperativo; (6) 6.3 expansão — análise hebraica de *radah* e *kabash*, contexto ANE, distorção pós-queda, trajetória redentiva em Cristo. Sumário atualizado. Nova nota de rodapé [^day-1985] e entrada bibliográfica correspondente adicionadas.

---

## 2026-03-07 – Capítulo 1: primeira rodada de expansão (5 seções + correções)

[2026-03-07] – arquivo: genesis-capitulo-01.md – seções: 3.5, 5.8 (expansão tov me'od), 5.11, 5.12, 6.5, 6.6, sumário, notas, correções gerais
tipo: adição de conteúdo, correção de formato, criação de sistema de notas
confiança: 0.93 — conteúdo baseado em fontes acadêmicas; verificado contra posições do projeto
nota: (1) Correções de formato: referências bíblicas convertidas de ':' para '.'; 21 citações inline convertidas para notas de rodapé; sumário com wiki-links Obsidian; seções duplicadas mescladas (9.5/9.8); seção 9.3 reescrita para Gn 1. (2) Novas seções: 3.5 (verbos da criação bara/asah/yatzar), 5.8 expansão (tov me'od), 5.11 (sétimo dia, repouso divino), 5.12 (lemin/מִין), 6.5 (plural de Gn 1.26), 6.6 (três visões da imago Dei).

---

## 2026-03-07 – Expansão massiva: 26 novas seções, sumário, notas e bibliografia

[2026-03-07] – arquivo: genesis.md – seções: 1.9–1.14, 3.6–3.7, 4.7.1–4.7.8, 4.9–4.18, sumário, notas, bibliografia
tipo: adição de conteúdo e atualização estrutural
confiança: 0.93 — conteúdo novo redigido com base em fontes acadêmicas evangélicas e reformadas; verificado contra posições do projeto
nota: Adicionadas 26 novas seções ao genesis.md cobrindo: (1) estrutura/metodologia — gênero literário (1.9), texto hebraico e testemunhas textuais (1.10), historicidade patriarcal (1.11), religião dos patriarcas (1.12), cronologia (1.13), geografia (1.14); (2) estrutura literária — poética e narratologia hebraica (3.6), composição e fontes (3.7); (3) questões contemporâneas — racismo (4.7.1), bioética (4.7.2), migração (4.7.3), Babel e IA (4.7.4), solidão digital (4.7.5), sacralidade da vida (4.7.6), ecologia (4.7.7), arqueologia recente (4.7.8); (4) temas teológicos — fé/justificação (4.9), providência (4.10), Éden como proto-templo (4.11), sacrifício substitutivo (4.12), rei prometido (4.13), juízo progressivo (4.14), duas cidades (4.15), exílio (4.16), adoração (4.17), graça comum (4.18). Sumário atualizado com todas as novas seções. 11 novas notas de rodapé adicionadas. 11 novas entradas bibliográficas em 3 novas categorias. Revisão geral e correções de formato também aplicadas (referências bíblicas, concordismo, tehom/Tiamat, Gn 14.19 NAA).

---

## 2026-03-07 – Revisão de posição teológica: dias da criação

[2026-03-07] – arquivo: genesis.md – seções: 6.5 (leituras debatidas), 7.2 (os "dias" de Gênesis 1)
tipo: mudança de posição teológica do projeto
confiança: 0.95 — posição explicitamente declarada pelo autor (Gladistone); alinhada com teólogos reformados (C. John Collins, Herman Bavinck, B. B. Warfield)
nota: O projeto anteriormente adotava a leitura de "dias literais de 24 horas" (influência da análise inicial baseada em Augustus Nicodemus). O autor discorda dessa posição e adota a leitura de **dias divinos/analógicos** — períodos reais de atividade criadora de Deus, não necessariamente idênticos a dias solares humanos. A nova posição se alinha com os "dias analógicos" de C. John Collins e com o princípio da acomodação de Calvino. 2 Pedro 3.8 e Salmo 90.4 são citados com a nuance de que falam primariamente da eternidade/paciência de Deus, mas expressam o princípio de que o tempo divino não se mede pelo relógio humano. A leitura de dias literais permanece descrita e respeitada como posição legítima dentro do campo evangélico. Não houve alteração de spec_version (mudança de conteúdo teológico, não de regras editoriais).

---

## 2025-03-05 – Versão 1.2.0

[2025-03-05] – arquivo: docs/regras.md – seção: 7. Sistema de referências e citações
tipo: adição de regra editorial
confiança: 1.0
nota: Criada seção 7 com padrão de citação por notas de rodapé Markdown (chave autor-ano), regras para quando referenciar, formato ABNT simplificado, e relação entre notas e bibliografia. Incrementada spec_version para 1.2.0.

---

[2025-12-20 14:00] – arquivo: genesis.md – seção: 2.5. Exegese dos dias da criação (1:3–31)  
tipo: refinamento teológico e de estilo, pequenos ajustes de hebraico e tom doutrinário, sem mudança de posição bíblica adotada (seis dias literais).  
confiança: 0.98 para ajustes de estrutura, clareza e remoção de redundância; 0.94 para formulações teológicas (criação em seis dias, estrutura "formar e encher").  
nota: Mantida a espinha dorsal do rascunho da IA (dias, hebraico, implicações, aplicações), mas: (1) removido trecho hebraico deslocado de Gn 1.1 no Dia 1; (2) suavizado o tom polêmico na parte sobre "criação recente" e modelos alternativos, deixando claro que o projeto adota leitura literal mas sem transformar em ataque direto a outras leituras; (3) ajustado um trecho do Segundo Dia sobre "águas de cima" para uma formulação mais precisa; (4) pequenas melhorias de coesão e ritmo, mantendo sua voz pastoral-exegética.

[2025-12-20 15:00] – arquivo: genesis.md – seção: 2.6. Imagem de Deus e dignidade humana (1:26–28)  
tipo: expansão e padronização da seção 2.6 (texto base, hebraico, exegese, implicações e aplicações), alinhando com o estilo de 2.4 e 2.5.  
confiança: 0.97 para estrutura e conteúdo exegético (gramática hebraica padrão e tradições reformadas/evangélicas); 0.95 para formulações teológicas (imagem de Deus, dignidade humana, domínio como mordomia).  
nota: Mantida a posição doutrinária do autor (criação literal, teologia reformada, dignidade da vida humana, complementaridade homem/mulher e domínio como mordomia). Ajustados apenas estrutura, formatação e fluidez do texto, além de pequenas correções terminológicas e de ênfase.

[2025-12-20 16:00] – arquivo: genesis.md – seção: 1.12. Notas de apoio – Bíblia de Estudo Thomas Nelson (NVI); 1.13. Esboço geral de Gênesis  
tipo: adição de seções de apoio teológico e estrutural, integrando insights da Bíblia de Estudo Thomas Nelson (NVI) para enriquecer o comentário sem alterar posições doutrinárias.  
confiança: 0.98 para integração de fontes externas (paráfrases éticas, sem plágio); 0.96 para alinhamento com teologia reformada/evangélica.  
nota: Adicionadas seções 1.12 (notas de apoio da Thomas Nelson sobre história, teologia, NT, humanidade, ciência e estrutura) e 1.13 (esboço adaptado da Thomas Nelson), servindo como recursos complementares para aprofundar o estudo de Gênesis, citando a fonte quando apropriado para reforçar argumentos já presentes no projeto.

[2025-12-20 17:00] – arquivo: genesis.md – seção: 1.1. Introdução e propósito (nota teológica 1)  
tipo: correção estilística menor, remoção de formatação em negrito desnecessária em frase sobre graça e incredulidade.  
confiança: 1.0 para alteração puramente cosmética, sem impacto doutrinário.  
nota: Ajustado o texto em "não responde de forma detalhada por que alguns são alcançados eficazmente pela graça e outros persistem na incredulidade" removendo negrito, para consistência estilística com o restante da lista.

## 2025-12-20 – Versão 1.1.0

- Atualizadas as regras em `docs/regras.md` com a criação da seção **6. Fluxo de trabalho da IA de edição**.
- Formalizado o fluxo:
  - leitura prévia de `conf.md` e `regras.md`;
  - metadados obrigatórios em toda resposta da IA;
  - obrigação de registrar nível de confiança para qualquer mudança de sentido.
- Incrementada `spec_version` em `docs/conf.md` de `1.0.0` para `1.1.0`.

---## Entradas iniciais

[2025-12-20 11:20] – arquivo: docs/conf.md  
tipo: criação de arquivo de configuração  
confiança: 1.0  
nota: criado arquivo `conf.md` definindo idioma do projeto, arquivos de regras e uso obrigatório de nível de confiabilidade (0–1) para alterações da IA.

[2025-12-20 11:21] – arquivo: docs/regras.md  
tipo: criação de arquivo de regras  
confiança: 1.0  
nota: definidas regras iniciais para IA: não mudar sentido sem motivo forte, não apagar conteúdo, manter referências bíblicas corretas, registrar alterações com nível de confiança e nota explicativa.

[2025-12-20 11:22] – arquivo: docs/changelog.md  
tipo: criação de changelog  
confiança: 1.0  
nota: iniciado registro de histórico de alterações do projeto.

[2025-12-20 12:00] – arquivo: genesis.md – seção: 2.1. Texto bíblico base (NAA)  
tipo: adição de conteúdo bíblico  
confiança: 1.0  
nota: adicionado texto completo de Gênesis 1 em NAA, conforme padrão do projeto.

[2025-12-20 12:01] – arquivo: genesis.md – seção: 2.2. Texto hebraico e termos-chave  
tipo: adição de comentário exegético  
confiança: 0.95  
nota: incluído texto hebraico com transliteração, análise de termos-chave e conexões teológicas, baseado em gramática hebraica padrão e tradições judaico-cristãs.

[2025-12-20 12:02] – arquivo: genesis.md – seção: 2.3. Resumo do capítulo  
tipo: adição de resumo detalhado  
confiança: 0.9  
nota: fornecido resumo estruturado por dias, com ênfase em teologia e conexões bíblicas, visando clareza e profundidade.

[2025-12-20 12:03] – arquivo: genesis.md – seção: 2.4. Exegese de Gênesis 1:1–2  
tipo: adição de exegese versículo por versículo  
confiança: 0.92  
nota: desenvolvida análise detalhada de vv.1-2, incluindo hebraico, contexto e aplicações doutrinárias, com referências ao NT e tradições interpretativas.

[2025-12-20 12:04] – arquivo: genesis.md – seção: 2.2. Texto hebraico e termos-chave  
tipo: reorganização e enriquecimento de conteúdo  
confiança: 0.95  
nota: unificada análise longa em hebraico com vocabulário sintético, enfatizando teologia e conexões bíblicas, mantendo fidelidade ao estilo detalhado.

[2025-12-20 12:05] – arquivo: genesis.md – seção: 2.3. Resumo do capítulo  
tipo: adição de níveis de resumo  
confiança: 0.9  
nota: incluído resumo panorâmico + por blocos, com ênfase em estrutura interna e ligações doutrinárias.

[2025-12-20 12:06] – arquivo: genesis.md – seção: 2.4. Exegese de Gênesis 1:1–2  
tipo: reestruturação em subseções  
confiança: 0.92  
nota: reorganizada em 2.4.1 a 2.4.6, misturando conteúdo existente com nova análise, priorizando profundidade espiritual e conexões.

[2025-12-20 13:00] – arquivo: genesis.md – seção: Apêndice Inicial (1.1–1.11)  
tipo: expansão e adição de conteúdo  
confiança: 0.95  
nota: expandiu 1.1 com síntese ampliada incluindo perguntas fundamentais e resumos de capítulos; adicionou seções 1.2 (estrutura literária), 1.3 (temas atualizados), 1.4 (ligações com matrimônio e Bíblia), 1.5–1.11 (notas técnicas, toledot, eixos teológicos, contrapontos, leituras debatidas, fio canônico, referências); reformulou citações bíblicas como "Caixa de referência" mantendo fidelidade ao conteúdo original.

## [2025-12-20] Atualização de Gênesis 1 – seções 2.2, 2.3 e 2.4

- Mesclagem do material antigo de Gênesis 1 com nova análise detalhada.
- Enriquecimento de 2.2 (Texto hebraico e termos-chave) com:
  - transliteração completa de Gênesis 1 em hebraico;
  - vocabulário sintético no final.
- Reescrita de 2.3 (Resumo do capítulo) com:
  - visão panorâmica;
  - resumo por blocos de versículos.
- Reestruturação de 2.4 (Exegese de Gênesis 1:1–2) em sub-seções:
  - 2.4.1 O peso espiritual das primeiras palavras
  - 2.4.2 Texto e contexto imediato
  - 2.4.3–2.4.6 exegese detalhada e implicações teológicas.
- Mantido o sentido teológico original, com foco em:
  - criação ex nihilo;
  - monoteísmo bíblico;
  - atuação da Trindade na criação.

---