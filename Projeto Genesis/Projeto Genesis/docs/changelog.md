# Changelog – Projeto Gênesis Comentado

Registro de mudanças estruturais, teológicas e de regras do projeto.
Cada entrada deve conter: data, arquivo, seção, tipo, confiança e nota.

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