# Transcrições — série expositiva de Gênesis 1

> **O que é:** transcrição automática das exposições em vídeo sobre Gênesis 1.
> **Estatuto:** `base/` é **material-fonte, não saída** — nada aqui é conteúdo do livro.
> **Procedência:** `IA:Claude` (o arquivamento) sobre material de terceiro · transcrição por máquina
> **Atualizado em:** 2026-09-22

---

## O capítulo 1 está completo

| # | Ref. | Título | Passagem | Duração | Vídeo | Estado da url |
|---|---|---|---|---|---|---|
| 1 | `gn-01-01-02` | *No Princípio* | **Gn 1.1-2** | 41,8 min | [`BygsEk-R0JE`](https://www.youtube.com/watch?v=BygsEk-R0JE&list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh&index=1) | ✅ **confirmada pelo autor** |
| 2 | `gn-01-03-13` | *Haja Luz* | **Gn 1.3-13** | 53,4 min | [`sXbWAxB0AXw`](https://www.youtube.com/watch?v=sXbWAxB0AXw&list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh&index=2) | ✅ **confirmada pelo autor** |
| 3 | `gn-01-14-31` | — | **Gn 1.14-31** | 47,7 min | [`rHFHz2LzsEg`](https://www.youtube.com/watch?v=rHFHz2LzsEg) | ✅ registrada na hora |

**Gn 1.1 a 1.31, sem lacuna.** 143 minutos de exposição.

As urls das aulas 1 e 2 foram reconstruídas dos nomes dos arquivos e depois confirmadas pelo autor com links da playlist em 2026-09-22. A da aula 3 foi registrada na hora da transcrição.

## Qualidade das três

Medida pelo `qualidade.py` da bancada, sobre a confiança por segmento do `.json`:

| Ref. | Segmentos | Confiança média | Baixa confiança | Suspeita de silêncio |
|---|---|---|---|---|
| `gn-01-01-02` | 1086 | −0,085 *(boa)* | **0** | 0 |
| `gn-01-03-13` | 1306 | −0,085 *(boa)* | **0** | 0 |
| `gn-01-14-31` | 1021 | −0,101 *(boa)* | **0** | 0 |

Nenhum segmento de baixa confiança nas três. Faz sentido: é exposição pausada com microfone bom, não conversa. **Isso reduz o risco, não o elimina** — ver a falha encontrada abaixo e a ressalva sobre conferência contra o áudio.

As repetições que o `qualidade.py` sinalizou em `gn-01-14-31` (*"Deus disse"* 4×, *"E assim aconteceu"* 3×) foram conferidas e são **citações legítimas do próprio Gênesis 1**, não alucinação do modelo.

### Auditoria cruzada de 2026-09-22

As três transcrições foram comparadas com as **legendas automáticas em português do YouTube**, em janelas de dois minutos. A concordância textual aproximada ficou entre **94% e 95%**; isso mede semelhança entre dois reconhecedores automáticos, **não taxa de acerto contra o áudio**. O último segmento de cada transcrição termina a menos de um segundo do fim do respectivo arquivo de áudio ou vídeo. Nas aulas 1 e 2, a comparação não apontou intervalos internos maiores que quatro segundos em que as legendas registram fala e o Whisper não.

Na **aula 3**, há duas lacunas concretas na transcrição principal: [38:26–38:38](https://www.youtube.com/watch?v=rHFHz2LzsEg&t=2306s) e [38:56–39:08](https://www.youtube.com/watch?v=rHFHz2LzsEg&t=2336s). Nesse trecho, o `.tsv` pula frases presentes tanto nas legendas automáticas do YouTube quanto numa segunda transcrição Whisper feita com outros parâmetros; também produz a palavra sem sentido `Fadанием`.

O autor leu e confirmou a fala da **primeira lacuna**: *“criaturas, eles não são divinos, eles não são emanações da divindade, são criaturas dependentes de Deus, não os adore, adore mais, não tenha medo dos dragões do mar, dos monstros mitológicos, são criaturas feitas por Deus”*. A sequência *“não os adore, adore mais”* foi preservada como informada. O autor esclareceu que se trata de uma **reformulação oral**: o sentido é *“não os adore mais”*, e não uma ordem para adorar mais. O *“quer dizer”* usado pelo autor para explicar a reformulação **não integra a fala literal**. Apenas a grafia de *“divindade”* e *“monstros mitológicos”* foi regularizada. Os arquivos de transcrição automática continuam intactos para preservar o resultado bruto. A **segunda lacuna** ainda precisa de conferência antes de corrigir o texto de leitura ou usar o trecho inteiro como citação.

## A série e o pregador — confirmados

**Playlist:** [**Série em Gênesis**](https://www.youtube.com/playlist?list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh) · canal **Augustus Nicodemus** · `PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh`

O autor forneceu links da playlist em 2026-09-22, identificando `BygsEk-R0JE` como a **primeira aula** (`index=1`) e `sXbWAxB0AXw` como a **segunda** (`index=2`). Isso confirma os IDs reconstruídos dos nomes dos arquivos. A página da playlist dá o título da série e o canal; a enumeração por `yt-dlp` confirma os metadados das entradas. **`F2` continua valendo para o texto transcrito**, que não foi conferido contra o áudio.

Antes disso a atribuição era `0.9`, apoiada em três indícios convergentes: o documento `0102` já presente no `base/` com o mesmo recorte Gn 1–11; a própria fala nas aulas (*"a nossa segunda mensagem na série… capítulo 1 até o capítulo 11"*); e a numeração nos nomes dos vídeos. **Os indícios estavam certos.**

**A playlist tem 89 vídeos, com títulos que vão de Gn 1.1 até Gn 50.26.** A fala sobre Gn 1–11 descrevia a primeira parte da série, não seu alcance completo. Só as três aulas de Gênesis 1 estão transcritas aqui; **86 vídeos ainda não estão transcritos**. A enumeração foi feita em 2026-09-22 com `yt-dlp --flat-playlist`, sem baixar vídeos. Veja a [lista das 89 entradas](LISTA-DA-PLAYLIST.md) com posição, ID, título e passagem indicada.

| Aulas numeradas nos títulos | Passagens indicadas nos títulos |
|---|---|
| 01–03 | Gn 1 |
| 04–21 | Gn 2–11 |
| 22–71 | Gn 12–36 |
| 72–89 | Gn 37–50 |

**Ordem da playlist:** as aulas numeradas 87, 88 e 89 ocupam as posições 86, 87 e 88. A aula **86**, [*Jacó se estabelece no Egito* (Gn 47.1–27)](https://www.youtube.com/watch?v=KmdVBIONTCI&list=PLQ__KBt7xtI9AEeeMu8gGLGDXcl7Qt4mh&index=89), está na **posição 89**, confirmada pelo link fornecido pelo autor. Por isso, número no título e `playlist_index` não são intercambiáveis nas últimas quatro entradas.

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

- [x] **Levantar a playlist inteira.** São 89 vídeos, cobrindo Gn 1–50 pelos títulos; a aula 86 aparece na última posição da playlist
- [x] **Confirmar a url da aula 1** (`BygsEk-R0JE`, `index=1`)
- [ ] Transcrever as 86 aulas restantes, conforme a prioridade editorial do projeto
- [ ] Conferir contra o áudio qualquer trecho que for citado — nada aqui passou de `F2`
