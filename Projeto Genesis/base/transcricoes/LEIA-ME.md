# Transcrições — série expositiva de Gênesis 1

> **O que é:** transcrição automática de duas exposições em vídeo sobre Gênesis 1.
> **Estatuto:** `base/` é **material-fonte, não saída** — nada aqui é conteúdo do livro.
> **Procedência:** `IA:Claude` (o arquivamento) sobre material de terceiro · transcrição por máquina
> **Arquivado em:** 2026-09-22 · transcrito em 2026-09-03

---

## Os dois arquivos-fonte

| Referência | Título do vídeo | Passagem |
|---|---|---|
| `gn-01-01-02` | *No Princípio* | **Gn 1.1-2** |
| `gn-01-03-13` | *Haja Luz* | **Gn 1.3-13** |

## Quem prega — `0.9`, não confirmado no áudio

**O áudio não identifica o pregador.** A atribuição a **Augustus Nicodemus** se apoia em três indícios convergentes, e é registrada como probabilidade, não como fato:

1. `base/` já contém *"0102 — Gênesis 1–11 com Augustus Nicodemus — Série Expositiva com Notas Comentadas"*, cujo escopo bate exatamente com o destas duas aulas;
2. a própria transcrição diz: *"essa é a nossa segunda mensagem na série que nós nos propusemos a fazer, livro de Gênesis, capítulo 1 até o capítulo 11"* — mesmo recorte, Gn 1–11;
3. os nomes dos arquivos de vídeo trazem a numeração da série (`01-No-Principio`, `02-Haja-Luz`).

**Confirmar antes de citar como dele.** Quem quiser fechar isso abre o vídeo pelos IDs do YouTube preservados nos nomes originais: `BygsEk-R0JE` e `sXbWAxB0AXw`.

## Os seis formatos, e para que serve cada um

| Sufixo | O que é | Quando usar |
|---|---|---|
| **`_paragrafos.txt`** | Texto corrido, em parágrafos | ⭐ **Leitura e pesquisa.** É o formato para consultar |
| `.txt` | Uma linha por segmento | `grep` com contexto curto |
| `.tsv` | `start · end · text`, em milissegundos | Localizar o trecho no vídeo |
| **`.json`** | Segmentos com timestamps **e confiança** | ⭐ **Auditar o que é erro de máquina** — ver abaixo |
| `.srt` · `.vtt` | Legenda | Reproduzir junto com o vídeo |

## A ressalva que mais importa

**Transcrição automática erra, e o erro típico não parece erro.** Referência bíblica truncada, nome próprio deformado, palavra hebraica desfigurada — e, o pior caso, uma **negação que se perde**, fazendo o pregador dizer o oposto do que disse.

Por isso, e pela regra das fontes deste projeto:

> **Um trecho daqui vale no máximo `F2`.** Só vira `F1` — e só então pode receber página, minutagem e citação direta — **depois de conferido contra o áudio.**

O `.json` existe justamente para isso: ele traz a confiança por segmento, e permite listar os trechos duvidosos antes de ler, em vez de descobrir o erro depois de citar.

## Onde está o resto

Os dois `.mp4` (286 MB) e o ambiente do Whisper ficam **fora do repositório**, na bancada de transcrição em `~/workspace/z_glad/vida_com_deus/genesis/genesis_1/`, junto com o `transcrever.sh` que gerou estes arquivos — Whisper `large-v3`, pt-BR. São reprodutíveis; estas transcrições não eram, e é por isso que entraram aqui.
