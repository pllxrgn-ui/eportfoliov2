# eportfoliov2

Personal portfolio of **Pol Danyael Villorente** — live at
<https://pllxrgn-ui.github.io/eportfoliov2/>.

## What this is

A single, self-contained `index.html` — pure HTML + CSS + JS, no build step,
no framework, no npm. Cinematic dark one-pager: Anton + Onest type, giant
accent-red hero name with letter-by-letter reveal, portrait composited in
front, Lenis smooth scroll, infinite marquee, scroll-triggered section
reveals, SVG liquid-distortion image hovers.

The only external dependencies are Google Fonts and Lenis (loaded from
jsDelivr via an importmap). Everything else is inline.

## Editing

All content is hardcoded in `index.html`:

- Projects, experience, and certificates live in JS arrays (`PROJECTS`,
  `EXPERIENCE`, `CERTS`) near the bottom of the file.
- Static assets (résumé, certificate PDFs, images) live under `public/` —
  same paths the old React app used.
- The hero portrait is `public/images/portrait.webp` (transparent-background
  cutout). Replace that file to change the photo.

## Deploying

Push to `main`. The GitHub Actions workflow uploads the repo root straight to
GitHub Pages — no build. Preview locally by opening `index.html` in a browser
or running any static server from the repo root.

## History

Before September 2026 this was a Vite + React + TypeScript app; the full
source is in git history (`git log`, commits up to `4886648`).
