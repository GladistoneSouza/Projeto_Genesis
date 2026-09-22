# Transcrições — série expositiva de Gênesis 1

> **O que é:** transcrição automática das exposições em vídeo sobre Gênesis 1.
> **Estatuto:** `base/` é **material-fonte, não saída** — nada aqui é conteúdo do livro.
> **Procedência:** `IA:Claude` (o arquivamento) sobre material de terceiro · transcrição por máquina
> **Atualizado em:** 2026-09-22

---

## O capítulo 1 está completo

| Ref. | Título | Passagem | Duração | Transcrito | Fonte |
|---|---|---|---|---|---|
| # | Ref. | Título | Passagem | Duração | Vídeo | Estado da url |
|---|---|---|---|---|---|---|
| 1 | `gn-01-01-02` | *No Princípio* | **Gn 1.1-2** | 41,8 min | [`BygsEk-R0JE`](https://www.youtube.com/watch?v=BygsEk-R0JE&list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh) | ⚠️ **reconstruída** |
| 2 | `gn-01-03-13` | *Haja Luz* | **Gn 1.3-13** | 53,4 min | [`sXbWAxB0AXw`](https://www.youtube.com/watch?v=sXbWAxB0AXw&list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh&index=2) | ✅ **confirmada pelo autor** |
| 3 | `gn-01-14-31` | — | **Gn 1.14-31** | 47,7 min | [`rHFHz2LzsEg`](https://www.youtube.com/watch?v=rHFHz2LzsEg) | ✅ registrada na hora |

**Gn 1.1 a 1.31, sem lacuna.** 143 minutos de exposição.

⚠️ A url da **primeira** aula foi reconstruída do nome do arquivo e **ainda não foi confirmada**. A playlist e o pregador estão confirmados; o ID daquele vídeo, não.

## Qualidade das três

Medida pelo `qualidade.py` da bancada, sobre a confiança por segmento do `.json`:

| Ref. | Segmentos | Confiança média | Baixa confiança | Suspeita de silêncio |
|---|---|---|---|---|
| `gn-01-01-02` | 1086 | −0,085 *(boa)* | **0** | 0 |
| `gn-01-03-13` | 1306 | −0,085 *(boa)* | **0** | 0 |
| `gn-01-14-31` | 1021 | −0,101 *(boa)* | **0** | 0 |

Nenhum segmento de baixa confiança nas três. Faz sentido: é exposição pausada com microfone bom, não conversa. **Isso reduz o risco, não o elimina** — ver a ressalva abaixo.

As repetições que o `qualidade.py` sinalizou em `gn-01-14-31` (*"Deus disse"* 4×, *"E assim aconteceu"* 3×) foram conferidas e são **citações legítimas do próprio Gênesis 1**, não alucinação do modelo.

## A série e o pregador — confirmados

**Playlist:** [**Série em Gênesis**](https://www.youtube.com/playlist?list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh) · canal **Augustus Nicodemus** · `PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh`

O autor forneceu o link da playlist em 2026-09-22, identificando `sXbWAxB0AXw` como a **segunda aula** (`index=2`) — o que confirma a reconstrução feita a partir do nome do arquivo. A página da playlist dá o título da série e o canal. **`F2`:** a página foi consultada, não navegada por inteiro.

Antes disso a atribuição era `0.9`, apoiada em três indícios convergentes: o documento `0102` já presente no `base/` com o mesmo recorte Gn 1–11; a própria fala nas aulas (*"a nossa segunda mensagem na série… capítulo 1 até o capítulo 11"*); e a numeração nos nomes dos vídeos. **Os indícios estavam certos.**

> **A série cobre Gênesis 1–11, e só o capítulo 1 está transcrito.** As aulas seguintes da playlist são material-fonte ainda não levantado — ver *Em aberto*, no fim.

## Os sete formatos, e para que serve cada um

| Sufixo | O que é | Quando usar |
|---|---|---|
| **`_paragrafos.txt`** | Texto corrido, em parágrafos | ⭐ **Leitura e pesquisa.** É o formato para consultar |
| `.txt` | Uma linha por segmento | `grep` com contexto curto |
| `.tsv` | `start · end · text`, em milissegundos | Localizar o trecho no vídeo |
| **`.json`** | Segmentos com timestamps **e confiança** | ⭐ **Auditar o que é erro de máquina** |
| **`.fonte.txt`** | Url, data, modelo e parâmetros | ⭐ **Procedência.** Leia antes de citar |
| `.srt` · `.vtt` | Legenda | Reproduzir junto com o vídeo |

## A ressalva que mais importa

**Transcrição automática erra, e o erro típico não parece erro.** Referência bíblica truncada, nome próprio deformado, palavra hebraica desfigurada — e, o pior caso, uma **negação que se perde**, fazendo o pregador dizer o oposto do que disse. *Isso aconteceu de fato numa transcrição de outro sermão feita no mesmo dia.*

Confiança alta não é imunidade: o modelo pode estar seguro de uma palavra errada.

> **Um trecho daqui vale no máximo `F2`.** Só vira `F1` — e só então pode receber minutagem e citação direta — **depois de conferido contra o áudio.**

O fluxo é: acha no `_paragrafos.txt` → localiza o tempo no `.tsv` → **abre o vídeo pela url do `.fonte.txt`** → confere → aí cita.

## Como foram geradas, e como gerar a próxima

Bancada em `~/workspace/z_glad/vida_com_deus/genesis/genesis_1/`:

```bash
./transcrever.sh <video-ou-audio> <referencia> [url-da-fonte]
./transcrever.sh aula04.mp4 gn-02-01-03 https://youtu.be/XXXX
```

Whisper `large-v3` na GPU, `float16`, pt-BR, `vad_filter`, `beam 5 / best_of 5`. Áudio normalizado antes (16 kHz mono, *highpass* e *loudnorm*).

**Use a bancada, não monte outra.** Em 2026-09-22 dois pipelines paralelos foram montados do zero por não saberem que esta existia — os dois com menos formatos, sem `.json` de confiança e com `beam_size 1`, que é mais rápido e menos preciso. **A url da fonte veio de um deles** e foi incorporada aqui.

Os `.mp4` (286 MB) e o ambiente do Whisper ficam **fora do repositório**, na bancada. São reprodutíveis; estas transcrições não eram, e é por isso que entraram aqui.

---

## Em aberto

- [ ] **Levantar a playlist inteira.** A série vai de Gn 1 a Gn 11 e **só o capítulo 1 está aqui**. Falta saber quantas aulas existem e que passagens cobrem — `yt-dlp --flat-playlist` resolve, mas `yt-dlp` não está instalado nesta máquina
- [ ] **Confirmar a url da aula 1** (`BygsEk-R0JE`), a única ainda reconstruída
- [ ] Conferir contra o áudio qualquer trecho que for citado — nada aqui passou de `F2`
