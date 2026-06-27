# MZH 3D Portfolio

A production-ready 3D portfolio built with React, Vite, React Three Fiber, Drei, Framer Motion, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

## Personalize

Edit content and links in `src/App.jsx`. The 3D scene is in `src/components/Scene.jsx`.

## Vercel deployment notes

- Node.js: 20.x
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Do not commit `node_modules` or `dist`.
- The included `.npmrc` ensures dependencies resolve from the public npm registry and prevents machine-specific registry URLs from being written into `package-lock.json`.
