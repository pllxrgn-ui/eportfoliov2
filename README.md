# Pol Danyael Villorente E-Portfolio

Personal portfolio site for Pol Danyael Villorente, built as a responsive React/Vite frontend with real resume, project, and certificate content.

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS custom properties
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

## Deployment

This project is ready for GitHub Pages through the included workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`, or run the workflow manually from the **Actions** tab.

The Vite build uses a relative base path so the site can run from a GitHub Pages project URL such as `https://username.github.io/repository-name/`.

## Content Sources

- Resume: `D:/work dawg/UPDATED RESUME.docx`
- Certificates: `D:/CODE/eportfoliov2/certs`
- Project links: Canva URLs provided in the project brief
