# Portfolio – Alharth Alhaj Hussein

Live at: https://alharthalhajhussein.github.io/Portfolio/

## Overview
Personal portfolio built with Vite + React + TypeScript and shadcn/ui. It showcases projects, experience, and skills with responsive styling and social/share metadata tuned for GitHub Pages hosting.

## Features
- Modern React SPA with routing and shadcn/ui components
- Project highlights, experience, skills, and contact actions
- Responsive Tailwind styling with gradient theming
- SEO/social cards: custom title, description, OG/Twitter tags, favicon
- GitHub Pages CI/CD (build and deploy on every push to `main`)

## Tech Stack
- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui (Radix)
- React Query, React Router

## Getting Started
Prerequisites: Node 18+ (Node 20 recommended) and npm.

```bash
git clone https://github.com/<username>/Portfolio.git
cd Portfolio
npm install
```

### Development
```bash
npm run dev         # start dev server
```
Open the shown URL (defaults to http://localhost:5173 or the printed host/port).

### Build
```bash
npm run build       # produce production build in dist/
npm run preview     # serve the built site locally for inspection
```

### Lint
```bash
npm run lint
```

## Deployment (GitHub Pages)
- Vite base path is set to `/Portfolio/` in `vite.config.ts` to match the repo name. If you rename the repo or deploy at a different path, update `base` accordingly.
- GitHub Actions workflow: `.github/workflows/jekyll-gh-pages.yml` builds and deploys `dist` to Pages on pushes to `main`.
- GitHub → Settings → Pages: source should be “GitHub Actions”.
- To deploy changes: commit to `main` and push; the workflow publishes automatically.

## Assets and Metadata
- Public assets (images, resume) live in `public/lovable-uploads/`.
- Favicon lives at `public/portfolio_icon.ico` and is referenced in `index.html`.
- Social/share metadata (title, description, OG/Twitter tags) is defined in `index.html`. Update those fields if you change branding or the deployed URL.

## Project Structure (high level)
- `src/` – app code (pages, components, styles)
- `public/` – static assets served as-is
- `vite.config.ts` – Vite config and base path
- `.github/workflows/` – CI/CD for GitHub Pages

## Contact
Alharth Alhaj Hussein — alharth.alhaj.hussein@gmail.com
