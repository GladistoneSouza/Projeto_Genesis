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

```
Projeto Genesis/
├── Projeto Genesis/
│   ├── docs/
│   │   ├── conf.md          # Project config, spec_version (currently 1.1.0)
│   │   ├── regras.md        # Editorial rules (AI must read before any edit)
│   │   └── changelog.md     # Change log with date, version, confidence
│   ├── genesis.md           # Book-level commentary (~1300 lines)
│   └── genesis-capitulo-01.md  # Chapter 1 detailed analysis (~2200 lines)
└── base/
    ├── 0101-*.md            # Source research for chapter 1
    ├── 0102-*.md            # Source research (Augustus Nicodemus series)
    ├── Analise chat + transc.md  # Raw transcriptions and analysis
    ├── analise chat + transc - after.md
    ├── o que falta.md       # Feedback / gaps to fill
    └── genesis_old.md       # Earlier draft
```

The project is structured to have one `genesis-capitulo-XX.md` file per chapter. The `base/` directory contains source research and earlier drafts — these are reference material, not output files.

## Editorial Governance (CRITICAL)

The project enforces strict editorial rules defined in `Projeto Genesis/Projeto Genesis/docs/`.

### Before editing any content file:
1. Read `docs/conf.md` (project config, current `spec_version`)
2. Read `docs/regras.md` (editing rules — sections 1–6)

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

### Rule & version updates:
- New rules must be written in `docs/regras.md`
- Changes logged in `docs/changelog.md` with date (YYYY-MM-DD), new version, and summary
- May require `spec_version` increment in `docs/conf.md`
