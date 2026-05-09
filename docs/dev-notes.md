# Dev Notes

## 2026-04-29 - Session Summary

### Completed
- Started the e-portfolio as a Vite, React, and TypeScript app.
- Extracted portfolio content from the provided resume.
- Added project data from the supplied Canva work links.
- Added certificate data based on the provided `certs` folder.
- Created project documentation for architecture and feature behavior.

### Files Changed
- `package.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `eslint.config.js`
- `README.md`
- `docs/architecture.md`
- `docs/features.md`
- `docs/dev-notes.md`
- `src/main.tsx`
- `src/App.tsx`
- `src/data/portfolio.ts`
- `src/styles.css`

### Decisions Made
- Kept the first build as a static frontend to reduce setup friction.
- Used CSS-only motion instead of adding GSAP or Lenis before the portfolio needs scroll choreography.
- Centralized portfolio content in `src/data/portfolio.ts`.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev` and review desktop and mobile layouts.

### Next Steps
- Add real screenshots or exported thumbnails for each Canva project.
- Replace generic project links with full case-study pages when project details are ready.
- Add a downloadable resume PDF if desired.

## 2026-04-29 - Motion Pass

### Completed
- Added GSAP, GSAP React, ScrollTrigger, and Lenis for polished portfolio motion.
- Added an animated full-page background layer.
- Added hero sequencing, scroll-triggered section reveals, project card reveals, parallax movement, and hover microinteractions.
- Verified GSAP and Lenis integration patterns with Context7 before implementation.

### Files Changed
- `package.json`
- `package-lock.json`
- `src/App.tsx`
- `src/components/AnimatedBackground.tsx`
- `src/hooks/usePortfolioMotion.ts`
- `src/styles.css`
- `docs/architecture.md`
- `docs/features.md`
- `docs/dev-notes.md`

### Decisions Made
- Installed only `gsap`, `@gsap/react`, and `lenis`.
- Skipped Barba.js because the portfolio is a single-page React app.
- Skipped Anime.js because GSAP already covers DOM and SVG motion needs.
- Skipped Three.js and Spline until there is a concrete 3D scene or embed to build.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev` and inspect scroll behavior on desktop and mobile.

### Next Steps
- Add project thumbnails or exported Canva visuals.
- Consider a dedicated case-study route before adding Barba-style page transitions.

## 2026-04-29 - Stronger Animation Pass

### Completed
- Reworked headline animations into typing-style clip reveals for the hero and section titles.
- Changed work, experience, skills, credentials, and contact content to reveal as section groups on scroll.
- Fixed the animated background layering so the moving particles, orbit lines, grid, and signal lines are visible behind content.
- Added Lenis-aware anchor navigation for smooth in-page section jumps.

### Files Changed
- `src/App.tsx`
- `src/components/AnimatedBackground.tsx`
- `src/hooks/usePortfolioMotion.ts`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept GSAP and Lenis as the only animation dependencies.
- Removed the large typing cursor treatment after visual QA because it looked too heavy on section headlines.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev`, click each nav item, and verify each section title types in while cards/lists reveal on scroll.

### Next Steps
- Add project screenshots or exported Canva visuals to make each work card feel less text-heavy.

## 2026-04-29 - Skill Wheel Pass

### Completed
- Replaced the static skill grid with a rotating icon carousel wheel.
- Added category pills above the carousel for Frontend, Backend and Data, Programming, AI and Systems, and Professional.
- Added hover labels for individual skill icons.
- Reused the existing Lucide icon library because no local technology icon set was present in the repo.

### Files Changed
- `src/App.tsx`
- `src/components/SkillWheel.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept the carousel icon-first so the wheel stays readable with many skills.
- Avoided adding another icon dependency until project-specific SVG/PNG icons are available.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev`, open the Skills section, and hover over wheel icons to see skill names.

### Next Steps
- Add custom skill logo assets under `public/icons` if exact React, Node, Supabase, Java, Python, and other brand icons are preferred.

## 2026-04-29 - Horizontal Skill Carousel Revision

### Completed
- Replaced the circular skill wheel with horizontal left/right carousel rows.
- Added original brand-style technology icons through `react-icons/si`.
- Kept technical rows icon-only and kept visible words only for professional/personality skills.
- Fixed credential category pills clipping on the left side.

### Files Changed
- `package.json`
- `package-lock.json`
- `src/components/SkillCarousel.tsx`
- `src/App.tsx`
- `src/hooks/usePortfolioMotion.ts`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Used Simple Icons through `react-icons` for recognizable technology brand icons.
- Kept Lucide icons only for concepts without official product icons and for personality traits.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Skills section and confirm rows move horizontally.
- Open the Credentials section and confirm category labels are not clipped.

## 2026-04-29 - Skill Carousel Gap Fix

### Completed
- Increased repeated carousel content so short rows no longer leave blank spaces during marquee motion.
- Adjusted marquee animation distance to loop one repeated segment cleanly.
- Removed icons from Professional/personality chips so those display as text-only.

### Files Changed
- `src/components/SkillCarousel.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept technical skills icon-only.
- Kept Professional skills word-only for readability and to match the requested distinction.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Skills section and watch each row for a full loop to confirm there are no empty gaps.

## 2026-04-29 - Frontend Quality and Performance Audit

### Completed
- Ran lint and production build successfully.
- Reviewed production preview screenshots for hero, mobile hero, skills, and credentials sections.
- Reviewed production asset sizes and bundle output.
- Improved repeated project link accessibility with screen-reader-specific project titles.

### Files Changed
- `src/App.tsx`
- `docs/dev-notes.md`

### Decisions Made
- Did not add `content-visibility` because ScrollTrigger relies on stable section measurements.
- Kept GSAP, Lenis, and React Icons despite the moderate JS bundle because they directly support requested motion and original skill icons.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview -- --port 4173` and inspect the hero, skills, and credentials sections.

### Next Steps
- Consider stopping extra local Vite servers after review.
- Add real project thumbnails to reduce text density in the Work section.
- Add automated Playwright smoke tests if this portfolio will be iterated heavily.

## 2026-04-29 - Selected Work Order and Spacing

### Completed
- Reordered selected work from newest to oldest.
- Changed project cards to a consistent two-column layout on desktop and one-column layout on mobile.
- Tightened internal project-card spacing so descriptions, tags, and links align more predictably.
- Kept section eyebrow labels readable by default during scroll animation.

### Files Changed
- `src/data/portfolio.ts`
- `src/styles.css`
- `src/hooks/usePortfolioMotion.ts`
- `docs/dev-notes.md`

### Decisions Made
- Ordered projects as 2025, then 2024 work, then the 2023-2024 clinic project.
- Removed uneven first/second card spans because they created awkward empty space.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Work section and confirm project order and card spacing on desktop and mobile.

## 2026-04-30 - Zakay Selected Work Entry

### Completed
- Added Zakay as a selected-work project for a Davao smart route companion mobile UI/UX design.
- Linked the work item to the supplied Figma design file.
- Updated feature documentation to reflect project links from GitHub, Figma, and Canva.

### Files Changed
- `src/data/portfolio.ts`
- `docs/features.md`
- `docs/dev-notes.md`

### Decisions Made
- Kept the change data-driven because the selected-work section already renders from `projects`.
- Used the supplied product framing, "a smart route companion in Davao", as the source for the project summary.
- Did not add a local screenshot because Figma authentication returned a reauthentication error during extraction.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev` and verify Zakay appears in the Selected work section with the Figma link.

### Next Steps
- Export or reconnect the Figma design so the portfolio can include an exact Zakay thumbnail or case-study preview.

## 2026-04-29 - Work and Credential Spacing Cleanup

### Completed
- Tightened desktop spacing between selected work cards and reduced oversized card padding.
- Made project cards use consistent internal spacing with the project link pinned to the bottom.
- Expanded the odd final project card across the grid so the last row no longer leaves an empty right-side column.
- Rechecked the credentials list spacing and category label alignment in a production preview.

### Files Changed
- `src/styles.css`
- `src/hooks/usePortfolioMotion.ts`
- `docs/dev-notes.md`

### Decisions Made
- Kept a two-column desktop work grid because it scans better for this portfolio than a masonry layout.
- Reduced scroll reveal travel on project cards so animation does not make the layout feel like it has extra gaps.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview -- --host 127.0.0.1 --port 4175`.
- Open `http://127.0.0.1:4175/#work` and `http://127.0.0.1:4175/#credentials`.

## 2026-04-29 - Compact Spacing Follow-Up

### Completed
- Reduced project card padding, text spacing, tag spacing, and heading-to-grid spacing.
- Stopped project links from being pinned to the bottom of uneven-height cards.
- Let project cards use natural content height instead of stretching every card to the tallest item in a row.
- Reduced credential row height, padding, category width, and date column width.

### Files Changed
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept the final odd project as a full-width card to avoid a blank grid cell.
- Kept credential rows as a table-like list, but made the density closer to a professional certificate index.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview -- --host 127.0.0.1 --port 4180`.
- Open `http://127.0.0.1:4180/#work` and `http://127.0.0.1:4180/#credentials`.

## 2026-04-29 - Credential Alignment Fix

### Completed
- Added a dedicated credential content column wrapper.
- Constrained the credential list width so desktop dates no longer float too far from the certificate content.
- Standardized category, title, issuer, and date columns for consistent row alignment.

### Files Changed
- `src/App.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept the credentials as a compact table-like list instead of converting them to cards.
- Preserved the mobile single-column fallback.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview -- --host 127.0.0.1 --port 4181`.
- Open `http://127.0.0.1:4181/#credentials`.

## 2026-04-29 - Credential Box Reveal

### Completed
- Replaced per-row credential scroll animation with a single container reveal.
- Removed sideways hover movement from credential rows so the table alignment stays fixed.

### Files Changed
- `src/hooks/usePortfolioMotion.ts`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept row hover background feedback but removed row translation.
- Kept title text animation separate from the credential list reveal.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview -- --host 127.0.0.1 --port 4182`.
- Open `http://127.0.0.1:4182/#credentials`.

## 2026-04-29 - Dashboard Screenshot Selected Work

### Completed
- Captured the loaded `http://localhost:3000/dashboard` Chrome window and saved the cleaned app viewport screenshot.
- Added the SAVAGE LLC Internal Portal as a featured selected-work item.
- Updated project cards to support optional screenshots without breaking the text-only project cards.
- Restored the final project card to full-width so the Work grid does not leave an empty right column.

### Files Changed
- `public/work-shots/company-portal-dashboard.png`
- `src/data/portfolio.ts`
- `src/App.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept the internal portal project link-free because the dashboard is local/private and should not expose a dead public URL.
- Used a full-width featured card for the dashboard screenshot so image content does not create uneven two-column card rows.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview -- --host 127.0.0.1 --port 4183`.
- Open `http://127.0.0.1:4183/#work` and confirm the featured dashboard card, two-column project rows, and full-width final card align cleanly.

## 2026-04-30 - Company Portal Link Card Cleanup

### Completed
- Removed the dashboard screenshot treatment from the SAVAGE LLC Internal Portal work card.
- Connected the company portal `View project` action to its GitHub repository.
- Simplified project card rendering back to text-and-link cards so the six selected-work items align in a standard two-column grid.

### Files Changed
- `src/data/portfolio.ts`
- `src/App.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept the previously captured screenshot asset in `public/work-shots` for possible future use, but it is no longer rendered in the Work section.
- Removed screenshot-specific card styles because no active project card currently uses them.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Work section and confirm the company portal card has a `View project` link to GitHub and the card grid aligns evenly.

## 2026-04-30 - Credential Width Restoration

### Completed
- Removed the fixed maximum width from the credentials list so the card fills the available section width again.
- Kept the credential date column aligned with an intrinsic-width date track instead of relying on a narrower card.

### Files Changed
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Preserved the compact row density and table-like credential layout.
- Avoided changing the credential data or section heading copy.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Credentials section and confirm the list spans the available content width while the category, title, issuer, and date columns remain aligned.

## 2026-04-30 - Credential Preview Modal

### Completed
- Changed credential rows from direct file links into in-page preview buttons.
- Added a credential preview modal that embeds PDF certificates and image certificates.
- Added close controls, Escape-key close behavior, backdrop close behavior, and an `Open file` action for users who still want the source file.

### Files Changed
- `src/App.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Kept the credential list visually table-like while changing the interaction from navigation/download to modal preview.
- Used native `iframe`/`img` previews instead of adding a new PDF viewer dependency.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Credentials section, click a PDF credential, and confirm it opens inside the modal.
- Click the Excel image credential and confirm it previews as an image.
- Confirm Escape, backdrop click, and the close button dismiss the modal.

## 2026-04-30 - Facebook Link and Graduation Year Update

### Completed
- Updated the hero education stat from `2025` to `2026`.
- Added the Facebook profile URL to shared profile data.
- Added Facebook links to the hero action buttons and contact section.

### Files Changed
- `src/data/portfolio.ts`
- `src/App.tsx`
- `docs/dev-notes.md`

### Decisions Made
- Reused the existing button/contact action styles so the new Facebook link matches the LinkedIn and email actions.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the homepage and confirm the stat card shows `2026`.
- Click the Facebook buttons and confirm they open `https://web.facebook.com/Pollygonbear/`.

## 2026-04-30 - Savage Corporation Experience

### Completed
- Added Savage Corporation to the Background work experience section.
- Listed the role as Full-Stack Developer for a freelance company.

### Files Changed
- `src/data/portfolio.ts`
- `docs/dev-notes.md`

### Decisions Made
- Placed the full-stack developer role first because it is the most directly relevant software experience.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Background section and confirm Savage Corporation appears as a Full-Stack Developer role.

## 2026-04-30 - Expanded Dynamic Credentials and Footer

### Completed
- Added the remaining certificate files from `public/certs` into the credential data set.
- Added explicit credential sort dates and sorted the UI from newest to oldest.
- Added a compact credential display that shows the first 10 credentials by default with a `View all credentials` toggle.
- Updated the hero certificate count to `29`.
- Added a footer with rights-reserved text and technical build notes.

### Files Changed
- `src/data/portfolio.ts`
- `src/App.tsx`
- `src/styles.css`
- `docs/features.md`
- `docs/dev-notes.md`

### Decisions Made
- Kept certificate previews local and dependency-free with the existing modal behavior.
- Used explicit `dateValue` fields so sorting remains stable even when display dates are abbreviated.
- Kept the duplicate database certificate file visible because it exists as a separate file in the certificate folder.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Credentials section and confirm it shows 10 of 29 credentials by default.
- Click `View all credentials` and confirm the full list appears newest to oldest.
- Open a few credentials and confirm the modal preview still works.
- Confirm the footer appears after the Contact section with rights and build information.

## 2026-04-30 - Hero Avatar Sticker Asset

### Completed
- Generated a stylized hoodie avatar sticker asset for the hero panel.
- Removed the chroma-key background and saved the transparent PNG under `public/images`.
- Added the avatar to the top hero highlight card while preserving the availability message.

### Files Changed
- `public/images/hero-avatar-source.png`
- `public/images/hero-avatar.png`
- `src/App.tsx`
- `src/styles.css`
- `docs/dev-notes.md`

### Decisions Made
- Used a transparent PNG asset instead of CSS/vector illustration so the hero card can show a polished Memoji-style character.
- Kept the source chroma-key image alongside the final transparent output for future regeneration or cleanup.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the homepage and confirm the avatar appears inside the hero highlight card without covering the text.

## 2026-04-30 - Publish Readiness Pass

### Completed
- Added a fixed accessible back-to-top button.
- Added a custom SVG favicon for browser tabs.
- Added a compressed transparent WebP version of the hero avatar for runtime use.
- Moved large avatar source PNGs out of `public` so they are not shipped in production.
- Added a GitHub Pages deployment workflow.
- Updated public asset URLs and Vite base config for static project-path deployment.

### Files Changed
- `.github/workflows/deploy.yml`
- `README.md`
- `index.html`
- `output/image-assets/hero-avatar-source.png`
- `output/image-assets/hero-avatar.png`
- `public/favicon.svg`
- `public/images/hero-avatar.webp`
- `src/App.tsx`
- `src/data/portfolio.ts`
- `src/styles.css`
- `vite.config.ts`
- `docs/dev-notes.md`

### Decisions Made
- Used an SVG favicon so the browser tab icon stays sharp at small sizes.
- Used a WebP hero avatar in the app while keeping the PNG source files available for future edits.
- Used GitHub Actions deployment instead of adding a deployment package dependency.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run preview` and check the favicon, hero card image, certificate previews, and back-to-top button.

## 2026-04-30 - Selected Work Equal Height Cards

### Completed
- Equalized selected-work card heights on desktop by letting the project grid stretch all rows to the tallest card.
- Added a stable minimum card height so the project grid reads as an aligned set.
- Adjusted internal project-card spacing so descriptions stay at the top while tags and project links settle consistently near the bottom.
- Kept mobile cards at natural height to avoid excessive empty space on small screens.
- Locked project-card frames in place by moving scroll animation to the card contents and removing vertical hover lift from the card box.

### Files Changed
- `src/styles.css`
- `src/hooks/usePortfolioMotion.ts`
- `docs/dev-notes.md`

### Decisions Made
- Used CSS grid row sizing instead of JavaScript measurement so the layout adapts automatically when project text changes.
- Kept the existing card design system and only refined sizing, spacing, and alignment.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Work section on desktop and confirm all selected-work cards align to a consistent height.
- Resize to mobile and confirm the cards stack naturally without large blank areas.

## 2026-05-07 - Resume Download CTA

### Completed
- Added the supplied resume PDF as a public site asset.
- Added a `Download resume` button to the hero action group.
- Added a matching resume download action in the Contact section.
- Updated feature documentation to mention downloadable resume access.

### Files Changed
- `public/resume/RESUME_Villorente.pdf`
- `src/App.tsx`
- `src/data/portfolio.ts`
- `docs/features.md`
- `docs/dev-notes.md`

### Decisions Made
- Stored the resume under `public/resume` so GitHub Pages can serve it as a static file.
- Centralized the resume URL in `profile.resumeHref` to avoid repeating the path across the app.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the homepage and confirm the hero and Contact `Download resume` actions download the PDF.

## 2026-05-10 - ESC Food Hub Selected Work Entry

### Completed
- Added ESC Food Hub as a selected-work project.
- Linked the project card to the GitHub repository.
- Summarized the project as a LAN-based food ordering system for an internet cafe and food hub.

### Files Changed
- `src/data/portfolio.ts`
- `docs/dev-notes.md`

### Decisions Made
- Used the repository README as the source for the project description and impact statement.
- Placed the project first because it is a 2026 work item and the selected-work list is ordered newest to oldest.

### How to Test
- Run `npm run lint`.
- Run `npm run build`.
- Open the Work section and confirm ESC Food Hub appears with the GitHub link.
