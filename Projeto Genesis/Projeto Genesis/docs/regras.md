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

- `genesis.md` — conteúdo comentado de Gênesis.
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
  - se necessário, ler o trecho relevante do arquivo-alvo (apenas a seção que pretende alterar).

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

  - Cada arquivo de conteúdo (`genesis.md`, `genesis-capitulo-XX.md`) deve ter, antes da última seção (Índice), uma seção chamada **"Notas"** contendo todas as definições de notas de rodapé.
  - As notas seguem o formato ABNT simplificado:
    ```
    SOBRENOME, Nome. *Título da obra*. Série/Coleção. Cidade: Editora, ano. p. XX (se aplicável).
    ```

### 7.4. Bibliografia

  - A seção "Bibliografia recomendada" permanece como guia de leitura (descrição informal de cada obra).
  - As notas de rodapé são a referência formal e precisa.
  - Toda obra citada em nota de rodapé deve aparecer também na bibliografia.
