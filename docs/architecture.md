# Architecture

## Overview

This is a single-page React/Vite portfolio. The first implementation keeps the app static, fast, and easy to deploy while leaving room for future CMS, analytics, or backend contact form work.

## Structure

- `src/main.tsx` mounts the React app.
- `src/App.tsx` composes the page sections.
- `src/components/AnimatedBackground.tsx` renders the non-interactive ambient background.
- `src/data/portfolio.ts` holds profile, project, skill, experience, and certification data.
- `src/hooks/usePortfolioMotion.ts` owns GSAP, ScrollTrigger, and Lenis setup.
- `src/styles.css` owns the visual system, responsive layout, and CSS-only motion.
- `public/certs` exposes local certificate files to the browser.

## Design Direction

- Classification: brand portfolio.
- Design variance: expressive.
- Motion intensity: polished, using GSAP ScrollTrigger and Lenis.
- Visual density: normal, with enough scannability for recruiters.

The visual system should feel technical, precise, and warm: dark neutral base, amber highlights, green operational accents, and restrained panels.

## Motion Stack

- GSAP is the primary animation engine for hero sequencing, scroll reveals, parallax, and ambient background movement.
- Lenis provides smoother page scrolling and stays synchronized with ScrollTrigger.
- Barba.js is intentionally not used because this is currently a single-page React app.
- Anime.js is intentionally not used because GSAP already covers the page animation needs.
- Three.js and Spline are intentionally not used until the portfolio has a real 3D scene or art-directed embed requirement.
