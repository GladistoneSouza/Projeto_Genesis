# Changelog – Projeto Gênesis Comentado

Registro de mudanças estruturais, teológicas e de regras do projeto.
Cada entrada deve conter: data, arquivo, seção, tipo, confiança e nota.

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