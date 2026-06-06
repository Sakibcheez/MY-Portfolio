# Sakib Ahmed Shishir — Portfolio

A personal portfolio built with **React + Vite + Framer Motion**, ready to deploy on **Vercel**.

## Features
- Animated, editorial dark-theme portfolio generated from a CV
- Owner-only **Edit** mode (password protected) — bottom-right pencil button
- **Photo upload** (stored locally in the browser)
- Fully responsive

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # outputs to /dist
npm run preview    # preview the build
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → **New Project** → import your repo.
3. Vercel auto-detects Vite. Click **Deploy**. Done.

Alternatively, with the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Editing your info
- Click the **Edit** button (bottom-right), enter your password.
- **Change the password**: open `src/EditPanel.jsx` and edit the line
  `const EDIT_PASSWORD = "sakib2026";`
- Quick fields (name, title, summary, contacts, photo) are editable in the UI.
- For projects / experience / skills / education, edit `src/data.js` — it is fully
  commented and structured.

## Important notes
- Edits made in the browser save to **that browser only** (localStorage). They are
  private to your device and are **not** visible to visitors. To make edits permanent
  for everyone, update `src/data.js` and redeploy.
