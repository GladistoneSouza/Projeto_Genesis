# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Projeto Genesis is a theological commentary on the Book of Genesis, written in Brazilian Portuguese (pt-BR). It provides exegetical, theological, and practical analysis from a Reformed evangelical perspective, with Hebrew/Greek linguistic analysis, Ancient Near East (ANE) parallels, and New Testament connections.

This is a **content/writing project** using Markdown — not a software project. There is no build system, test suite, or package manager.

## Tools & Environment

- **Editor:** Obsidian (markdown vault — `.obsidian/` dir present but untracked)
- **Version control:** Git, pushing to `origin/main`
- **Language:** All content and commit messages in Portuguese (pt-BR)

## Content Architecture

All paths below are relative to the repo root.

```
Projeto Genesis/
├── Projeto Genesis/            # Main output (Obsidian vault root)
│   ├── docs/
│   │   ├── conf.md             # Project config, spec_version (currently 1.7.0)
│   │   ├── regras.md           # Editorial rules — sections 1–8 (AI must read before any edit)
│   │   ├── posicoes.md         # Doctrinal positions register (AI must read before any edit)
│   │   ├── fios-canonicos.md   # Canonical threads register — what each chapter plants and where it is paid
│   │   ├── metodo/             # Method knowledge: text layers (C1–C5), ancient witnesses, levels of meaning
│   │   └── changelog.md        # Change log with date, version, confidence
│   ├── prefacio.md             # Book-level preface — declares the project's bias and method
│   ├── genesis.md              # Book-level introduction (~1950 lines)
│   ├── genesis-01/             # Chapter 1 — ONE FOLDER PER CHAPTER (spec 1.4.0)
│   │   ├── 00-como-usar.md     # Folder index + reading guide (mandatory in every chapter folder)
│   │   ├── 01-texto-hebraico.md   # PREPARATORY: full Masoretic text, lexicon, grammar
│   │   ├── 02-traducoes-br.md     # PREPARATORY: translations compared — text only, no commentary
│   │   └── 03..14-*.md            # STUDY: exegesis, ANE, canon, debates, applications, bibliography
│   ├── genesis-capitulo-01.md  # SUPERSEDED by genesis-01/ — do not edit
│   └── genesis-capitulo-02.md  # Old format; to be split into genesis-02/
└── base/                       # Source research and earlier drafts (reference only, not output)
```

**As of spec 1.4.0, a chapter is a FOLDER, not a file.** `genesis-capitulo-01.md` (1.473 lines) proved unusable as reading, so each chapter became `genesis-XX/` with one short document per topic, capped at ~10 pages each. See `docs/regras.md` §8 for the full specification.

The folder has two stages, and the order is deliberate:
- **Preparatory** (`01`, `02`) — the raw material: original text and translations. Instruments, not interpretation. They come first so the reader can check the commentary instead of trusting it.
- **Study** (`03`–`14`) — the commentary proper.

Chapter 2 is still in the old single-file format and needs splitting. The `base/` directory is reference material — never edit it as output.

## Skills

User-level skills at `~/.claude/skills/` cover this project and load in any directory:

- **`genesis-capitulo`** — this project's governance protocol; `references/template-capitulo.md` holds the 12-section chapter template extracted from chapters 1 and 2
- **`biblia-exegese`** — 8-step exegesis (the content itself)
- **`biblia-fontes`** — multilingual sources, F1/F2/F3 levels; a page number is never written unless the page was read
- **`biblia-niveis`** — N1–N5 levels, provenance, assumptions

## Editorial Governance (CRITICAL)

The project enforces strict editorial rules defined in `Projeto Genesis/Projeto Genesis/docs/`.

### Before editing any content file:
1. Read `docs/conf.md` (project config, current `spec_version` — 1.7.0)
2. Read `docs/regras.md` (editing rules — sections 1–11; §8 folders, §9 the silence rule, §10 canonical threads, §11 text layers)
3. Read `docs/posicoes.md` (doctrinal positions already adopted, and what is still open), and `docs/fios-canonicos.md` (canonical threads register)

### Doctrinal positions (rule 6.1.1):
- **No new doctrinal position may be taken inside a content file without registering it in `docs/posicoes.md`.**
- If a chapter requires deciding a question listed there as *em aberto*, **the decision belongs to the author.** Present the options and the cost each one pays — do not choose.
- Every position carries a **"fatura"** column: what that position costs. Positions marked ⚠️ have been adopted without the cost ever being written down; that gap is the point of the column.
- **Chapter 3 depends on four undecided questions:** nature of the serpent, the death threatened in Gn 2.17, Gn 3.15 as protoevangelium, and historicity of the fall.

### Every AI edit response must include:
1. **Metadata block** — affected files, affected sections, change type, confidence level (0–1 with justification), explanatory notes
2. **Suggested content** — final Markdown ready to paste

### Doctrinal integrity rules:
- **Never** alter theological position, doctrinal meaning, or author's context unless: clear factual error, evident heresy (per Reformed theology), or grave internal contradiction
- Any meaning-changing edit requires: metadata disclosure, confidence score, and 2–3 sentence theological/exegetical justification
- Maintain the author's voice: clear, pastoral, didactic, Reformed/evangelical (strongly influenced by Augustus Nicodemus's teaching approach)

### Style requirements:
- Include clear biblical references
- Connect OT to NT when possible
- End large sections with 1–3 practical applications
- Hebrew/Greek terms must always be explained in simple Portuguese
- Keep heading numbering (1.1, 2.4.1, etc.) consistent

### References system (added in spec v1.2.0):
- Use Markdown footnotes with author-year keys: `[^sobrenome-ano]` (lowercase, no accents, hyphen-separated)
- **(revised in 1.4.0)** Markdown footnotes do not cross files: each document carries its own "Notas" section with only the keys it uses; `14-notas-e-bibliografia.md` consolidates the chapter bibliography
- Format: simplified ABNT — `SOBRENOME, Nome. *Título*. Série. Cidade: Editora, ano. p. XX.`
- Every work cited in a footnote must also appear in the "Bibliografia recomendada" section
- Biblical text defaults to NAA; other versions must be indicated explicitly

### Rule & version updates:
- New rules must be written in `docs/regras.md`
- Changes logged in `docs/changelog.md` with date (YYYY-MM-DD), new version, and summary
- May require `spec_version` increment in `docs/conf.md`
