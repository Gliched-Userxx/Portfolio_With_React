# Portfolio App

A personal portfolio site built with React and `react-router-dom`, styled as
a drafting-table "blueprint" — each section is a numbered sheet with its own
title block, in the spirit of a technical drawing.

## Sections

- **About** (`/`) — introduction, focus areas, and what you're looking for
- **Projects** (`/projects`) — project cards with stack tags and links
- **Skills** (`/skills`) — skills grouped by language / framework / tools / practices
- **Contact** (`/contact`) — email, LinkedIn, GitHub, and a validated contact form

## Getting started

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`. Routing uses `HashRouter` so the
build can be deployed to any static host (GitHub Pages, S3, Netlify) without
server-side rewrite rules. If you're deploying somewhere that supports
rewrites, swap `HashRouter` for `BrowserRouter` in `src/App.js` for cleaner
URLs.

## Customizing

- **Your info**: edit `src/pages/Home.jsx` and `src/pages/Contact.jsx`
  directly for the intro copy and contact channels.
- **Projects**: edit `src/data/projects.js` — each entry needs a name,
  summary, tech stack array, and live/repo links.
- **Skills**: edit `src/data/skills.js` — grouped as labeled categories.
- **Contact form**: `src/pages/Contact.jsx` validates and shows a success
  message client-side only. Wire the `handleSubmit` function to your backend
  or a form service (e.g. Formspree, Resend) to actually send messages.
- **Colors/fonts**: design tokens live at the top of `src/index.css`
  (`--paper`, `--ink`, `--blueprint`, `--rust`, and the three font families).

## Build for production

```bash
npm run build
```

Outputs a static bundle to `build/`, ready to deploy to any static host.
