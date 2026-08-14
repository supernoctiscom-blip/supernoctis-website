# Noctis AI Labs — Marketing Site

Marketing + lead-capture site for Noctis AI Labs, built with React + TypeScript + Vite.

## Stack
- React 19 + TypeScript
- Vite (build/dev server)
- Plain CSS (design tokens in `src/index.css`) — no UI framework
- Deploy target: Vercel

## Structure
```
src/
  components/   One component per section (Header, Hero, Capabilities, Portfolio, Process, Enterprise, Contact, Footer)
  data/         Editable content (capabilities, products, process steps, form options) — separate from markup
  hooks/        useReveal — scroll-reveal animation hook
  index.css     Design tokens (colors, fonts) + all section styles
```

## Local development
```bash
npm install
npm run dev
```

## Lead form
The contact form posts to whatever URL is set in `VITE_FORM_ENDPOINT` (see `.env.example`).
It currently has **no endpoint configured** — submissions will show a success state locally but
go nowhere until you set one. Easiest options:
- [Formspree](https://formspree.io) — create a form, copy the endpoint into `.env` as
  `VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx`
- Your own serverless function (e.g. a Vercel API route) that emails/stores the lead

## Deploy to Vercel
```bash
npm run build      # sanity check — must pass before pushing
git init -q        # skip if you already have a .git folder here
git add -A
git commit -m "Initial Noctis AI Labs site"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
Then in Vercel: **New Project → Import this repo**. Vercel auto-detects Vite
(build command `npm run build`, output dir `dist`) — no config needed.

Before the first deploy, set `VITE_FORM_ENDPOINT` in Vercel's **Project → Settings → Environment Variables**
so the live form actually sends somewhere.
