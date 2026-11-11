# AGENTS.md

Navigation guide for AI coding agents.

## Project Overview

<%= projectName %> — <%= description %>. A full-stack app built on Next.js 15 App Router + TypeScript + Tailwind CSS.

## Directory Structure and Conventions

- `app/`: App Router routes. Each subdirectory is a route segment; `page.tsx` is a page, `layout.tsx` is a layout, `route.ts` is an API Route Handler.
  - `app/layout.tsx`: root layout exporting global `metadata` (SEO), sourced from `lib/site.ts`.
  - `app/api/health/route.ts`: API example; for new endpoints create a directory under `app/api/` and export `GET`/`POST`/etc. handlers.
- `components/`: shared React components. Server components by default; add `"use client"` at the top when interactivity is needed (useState, events).
- `lib/`: non-UI code. `site.ts` is the single source of truth for site settings; `utils.ts` holds shared utilities.
- Path alias: `@/*` maps to the project root (e.g. `@/lib/site`); prefer the alias in imports.

## Coding Conventions

- TypeScript strict mode; avoid `any`.
- Components use default exports (`export default function Xxx()`), consistent with existing files.
- Style with Tailwind CSS utility classes only; no inline styles or extra CSS files.
- UI copy is written in English and the document language is `lang="en"`.
- Do not add dependencies not declared in package.json; explain the reason first if one is truly needed.

## Common Commands

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm dev        # dev server (port <%= port %>)
pnpm build      # production build (includes lint and type check)
pnpm start      # production server
pnpm lint       # ESLint
<% } else if (packageManager === 'yarn') { -%>
yarn dev        # dev server (port <%= port %>)
yarn build      # production build (includes lint and type check)
yarn start      # production server
yarn lint       # ESLint
<% } else { -%>
npm run dev     # dev server (port <%= port %>)
npm run build   # production build (includes lint and type check)
npm run start   # production server
npm run lint    # ESLint
<% } -%>
```

## Verifying Changes

Run the `build` command before committing to confirm lint and type checks pass.
