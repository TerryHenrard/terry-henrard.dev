# personnal website (Next.js + AI features)

This repository is a Next.js (app router) TypeScript project with built-in AI UI components.

## Repo snapshot

- Framework: Next.js (app router), TypeScript, React 19, Next 16.
- UI system: `core/components/ui/*` (reusable primitives — Button, Card, Field, Input, etc.).
- AI feature area: `features/ai/` contains AI UI and domain logic (components, schema, tools).
- Server endpoints: `app/api/*` — e.g. `app/api/chat/route.ts` and `app/api/notify/discord/route.ts`.

## Getting started

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Scripts:

- `npm run dev` — start Next.js in development mode
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## AI & extension guidance

This repo contains AI-specific patterns and helper files under `features/ai/`. There's also a concise agent guide created to help automated coding agents and contributors: `.github/copilot-instructions.md` — check that file for immediate, repo-specific guidance (UI primitives, how AI tools are wired via `ChatTools`/`addToolResult`, and schema/form conventions).

## Key places to inspect

- App entry/layout: `app/layout.tsx`, `app/page.tsx`
- UI primitives: `core/components/ui/*`
- Providers: `core/providers/index.tsx`, `core/providers/theme-provider.tsx`
- AI features: `features/ai/` (components, schema, tools)
- API routes: `app/api/chat/route.ts`, `app/api/notify/discord/route.ts`

If you maintain CI, deploy steps, or environment conventions not represented here, add them to the README or `.github/copilot-instructions.md` so contributors and agents can follow them.

---

Edited: concise project summary and pointers for contributors and AI agents.
