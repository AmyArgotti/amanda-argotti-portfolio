# Amanda Argotti — Software Engineering Portfolio

Public website: https://amyargotti.github.io/amanda-argotti-portfolio/

A static, multilingual portfolio with selected AI, web, and mobile projects.
Includes English, Spanish, and Russian interfaces, project case studies, a
light/dark theme, and job and academic CV downloads.

## Content and CVs

`content.json` is the shared source for website content and all CV editions.
Update it, then run:

```sh
python3 tools/generate_cv.py
```

Requires ReportLab and Arial fonts at the macOS paths in the generator.
The generator writes `content-data.js`, three one-page job CVs, three two-page
academic CVs, and the English compatibility download.

The browser bundle is generated rather than fetched so opening `index.html`
directly also works. No server or account is required.

## Verification

With Playwright and Chromium installed:

```sh
node tools/check_portfolio.mjs
```

Checks desktop/mobile layouts, three languages, project filters, dialog
interaction, PDF targets, persisted settings, and image loading.

## Project evidence

Case studies distinguish prototypes, public previews, and hosted capabilities.
Juanito's published snapshot uses JSON persistence; the portfolio does not
claim SQLite, Whisper, or a complete RAG pipeline for that snapshot.

Only credential summaries are published. Original certificates, apostilles,
signatures, and document identifiers are kept out of this repository.

Project screenshots are captures of the public project previews. Figma source
files, measured client results, and the complete Juanito services implementation
are not available in this repository.
