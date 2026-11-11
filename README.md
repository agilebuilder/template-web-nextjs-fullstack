# <%= projectName %>

<%= description %>

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript (strict mode)
- Tailwind CSS 3
- ESLint (next/core-web-vitals)

## Project Structure

```
├── app/                    # App Router routes
│   ├── layout.tsx          # Root layout (global SEO metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles (Tailwind directives)
│   ├── about/              # Example route /about
│   │   └── page.tsx
│   └── api/
│       └── health/
│           └── route.ts    # Route Handler example: GET /api/health
├── components/             # React components
│   ├── SiteHeader.tsx      # Site header (server component)
│   └── Counter.tsx         # Counter (client component example)
├── lib/                    # Utilities and configuration
│   ├── site.ts             # Site config (name, description, URL)
│   └── utils.ts            # Shared utility functions
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind CSS config
└── .env.example            # Environment variable example
```

## Quick Start

This project was generated from an [AgileBuilder](https://github.com/agilebuilder) template. Create a new project with:

```bash
ag create --git-url <template-repo-url> --target <directory>
```

Then enter the project directory, install dependencies, and start the dev server:

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm install
pnpm dev
<% } else if (packageManager === 'yarn') { -%>
yarn
yarn dev
<% } else { -%>
npm install
npm run dev
<% } -%>
```

The dev server runs at `http://localhost:<%= port %>` by default.

## Template Variables

| Variable | Description | Default |
| --- | --- | --- |
| `projectName` | Project name (package name and site name) | `demo-web` |
| `description` | Project description | A Next.js full-stack app |
| `author` | Author | (empty) |
| `port` | Dev/start server port | `3000` |
| `packageManager` | Package manager (pnpm / npm / yarn) | `pnpm` |

## Environment Variables

Copy `.env.example` to `.env.local` and adjust as needed:

```bash
cp .env.example .env.local
```

## Common Commands

| Command | Description |
| --- | --- |
| `<% if (packageManager === 'pnpm') { %>pnpm dev<% } else if (packageManager === 'yarn') { %>yarn dev<% } else { %>npm run dev<% } %>` | Start the dev server (port <%= port %>) |
| `<% if (packageManager === 'pnpm') { %>pnpm build<% } else if (packageManager === 'yarn') { %>yarn build<% } else { %>npm run build<% } %>` | Production build |
| `<% if (packageManager === 'pnpm') { %>pnpm start<% } else if (packageManager === 'yarn') { %>yarn start<% } else { %>npm run start<% } %>` | Start the production server |
| `<% if (packageManager === 'pnpm') { %>pnpm lint<% } else if (packageManager === 'yarn') { %>yarn lint<% } else { %>npm run lint<% } %>` | Run ESLint |

## License

[MIT](./LICENSE)
