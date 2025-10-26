## Repo snapshot

- Framework: Next.js (app router), TypeScript, React 19, Next 16.
- UI system: `core/components/ui/*` (reusable primitives — Button, Card, Field, Input, etc.).
- Feature area: `features/ai/` contains AI UI and domain logic (components, schema, tools).
- Server endpoints: `app/api/*` — e.g. `app/api/chat/route.ts` and `app/api/notify/discord/route.ts`.

## High-level architecture (what to know fast)

- This is a Next.js app using the app directory. Pages/layouts live under `app/` and providers are wired in `core/providers/`.
- UI primitives are centralized under `core/components/ui/` — prefer using these instead of ad-hoc markup for consistent styling and behavior.
- AI features live in `features/ai/`. That folder contains:
  - `components/` for composed UI (e.g. `phone-call-request-form.tsx`, `chat.tsx`).
  - `schema/` for Zod schemas used with react-hook-form (e.g. `phone-call-request-form-schema.ts`).
  - `tools/` for tool wrappers and integration points with the chat/AI flows.
- API integration: client components call internal API routes under `app/api/*` (see `phone-call-request-form.tsx` which posts to `/api/notify/discord`).

## Conventions and patterns to follow

- Component boundaries
  - `core/components/ui/*` = design system primitives (stateless). Use them for all new UI pieces.
  - `features/*` = domain features with their own subcomponents, schema, and small local utilities.
  - Keep presentational pieces in `core` and feature logic in `features`.
- Forms and validation
  - Uses `react-hook-form` + `zod` with `@hookform/resolvers/zod`. See `features/ai/schema/*` for canonical schemas.
  - Use the `Field`, `FieldLabel`, `FieldError`, and `FieldDescription` primitives from `core/components/ui/field` when building forms.
- Tooling pattern (AI integrations)
  - Feature components use a local `ChatTools` type and `addToolResult` callbacks to pipe results back into the chat UI (see `PhoneCallRequestForm` in `features/ai/components/phone-call-request-form.tsx`).
  - When implementing a new tool, mirror the `displayPhoneCallRequestForm` pattern: 1) define input/output types, 2) add UI in `features/ai/components`, 3) call `addToolResult` to return output to the chat.
- Date/time
  - Use `date-fns` utilities already in deps (see `phone-call-request-form.tsx` usage of `addDays`, `format`, `setHours`, `setMinutes`).

## Dev workflows and commands

- Start dev server: `npm run dev` (runs `next dev`).
- Build: `npm run build` -> `next build`.
- Start (production): `npm run start` -> `next start`.
- Lint: `npm run lint` (project uses `eslint`, `eslint-config-next`).
- Key files to inspect when debugging layout/providers: `app/layout.tsx`, `core/providers/index.tsx`, `core/providers/theme-provider.tsx`.

## Integration & dependencies

- AI/backends: `@ai-sdk/openai` and `@ai-sdk/react` are included — check `features/ai/lib` and `features/ai/tools` for how the SDKs are wrapped.
- UI: heavy use of Radix primitives and custom `core/components/ui/*` wrappers. Prefer reusing those wrappers rather than adding raw Radix imports.
- Styling: Tailwind + PostCSS (`tailwindcss` and `@tailwindcss/postcss` in devDeps). Global styles are in `app/globals.css`.

## Examples to reference when working

- Posting form data to API: `features/ai/components/phone-call-request-form.tsx` posts to `/api/notify/discord` and then calls `addToolResult` with a human-friendly message — copy this flow when building new small tools.
- Schema usage: `phone-call-request-form` imports `phone-call-request-form-schema.ts` and uses `zodResolver(phoneCallRequestFormSchema)` with `useForm`.

## Quick checklist for automated edits by AI agents

1. Prefer creating UI in `core/components/ui` for reuse. If adding a new primitive, add tests/examples in the same folder.
2. Validate forms with existing Zod schemas under `features/*/schema` and wire via `react-hook-form` + `zodResolver`.
3. Use `app/api/*` for server-side logic — keep external API keys out of source and use environment variables.
4. Search the repo for `addToolResult` and `ChatTools` to see existing AI tool patterns before adding a new tool.

## Files & locations to inspect (fast links)

- App entry/layout: `app/layout.tsx`, `app/page.tsx`
- API routes: `app/api/chat/route.ts`, `app/api/notify/discord/route.ts`
- UI primitives: `core/components/ui/*` (Button, Card, Field, Input, etc.)
- Providers: `core/providers/index.tsx`, `core/providers/theme-provider.tsx`
- AI feature root: `features/ai/` (components, schema, tools)

If any example or behaviour above is unclear or you want additional examples (e.g., how to add tests, or a new AI tool scaffold), tell me which area to expand and I will iterate.
