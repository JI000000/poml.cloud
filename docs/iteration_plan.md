# POML Cloud — Iteration Plan (from 2025-08-13)

Owner: Founder/PM/Tech Lead (single-person company)
Assumption: Next.js app deployed on Vercel behind Cloudflare; Postgres (Neon/Supabase), Upstash Redis, R2/Blob for assets.

## Phase 0 (Day 0–1): Project bootstrap
- Repo scaffolding: Next.js (App Router), TypeScript, ESLint/Prettier, Tailwind (minimal)
- MDX support for docs; sitemap/robots, basic SEO meta + canonical
- Install pomljs for client render; stub /sandbox
- Telemetry: PostHog; error reporting: Sentry
- CI: lint/Typecheck/Build on PR; preview deploys

Deliverables:
- Deployed landing at poml.cloud
- Basic /sandbox route loads

Lean mode note (no-DB, no-API):
- Deploy fully static pages (SSG) and client-side sandbox; disable analytics initially to keep truly $0.
- Keep provider features and server routes behind a feature flag (off).

## Phase 1 (Week 1): Content hub + Sandbox v0
- Pages
  - “POML 101” landing with Cheatsheet section and CTA
  - /docs/quickstart, /docs/cheatsheet, /community
  - /templates gallery + 10 initial templates, each with detail page
- Sandbox v0
  - Monaco editor with .poml syntax highlight theme
  - Live render preview (pomljs), validation diagnostics
  - Resource panel: link/upload assets (images/docs/csv) mock via Blob
  - Stylesheet presets selector
- Sharing v0
  - URL state serialization (base64) + optional short-id API storing small payload in Redis

Metrics target:
- Landing→Sandbox CTR ≥ 25%
- 10 templates indexed by search engines

Lean mode adjustments:
- Omit short-id API; only URL-hash based share.
- All templates and metadata generated statically from repo contents.

## Phase 2 (Week 2–3): BYOK runs v1 + Gallery v1
- BYOK
  - Providers: OpenAI, Azure OpenAI, Google, Anthropic
  - Server-side key vault (encrypted), CRUD + last-used
  - Run API: execute one POML across chosen providers; capture outputs, latency, token/cost meta (when available)
- UI
  - Side-by-side outputs with simple diff and rating
  - Save as template (private)
- Templates
  - Expand to 20–30 templates; filters and tags
  - Programmatic SEO pages generation + sitemap

Metrics target:
- BYOK connect rate ≥ 10%
- Run success rate ≥ 95%

Lean mode gate:
- If we must stay $0: replace BYOK UI with code snippets (Node/Python) that show how to run the current POML locally using official SDKs; keep UI/flows but no server calls.

## Phase 3 (Week 4–5): Guardrails basics + Community digest
- A/B harness: define A/B style variants and compare outputs with labeled experiment id
- Regression basics: pin baseline output; compare drift; export JSON report
- Community page: curated HN/Reddit digest updates (manual curation weekly)
- Changelog: map upstream releases to impact notes

Metrics target:
- Repeat runs per user ≥ 2.0
- Template reuse rate ≥ 30%

## Phase 4 (Week 6–8): PR preview + CLI + Hardening
- GitHub App (private beta): comment PR with render preview and change risk hints
- CLI: poml run and poml test (wrap our API) for CI usage
- Security & perf hardening: CSP, signed URLs for assets, RL tuning, AV scanning, cache headers
- Accessibility sweep; Lighthouse ≥ 90 on core pages

Metrics target:
- 5 pilot repos using PR preview
- p95 API latency (non-model) ≤ 300 ms

## Backlog (post-GA)
- Team spaces with roles; SAML/SCIM; billing via Stripe
- Template Marketplace (submission, review, revenue share)
- Private deployments (VPC) for enterprise

## Risks & Mitigations
- Provider instability → circuit breakers, retries, graceful degradation
- SEO competition → programmatic content, internal linking, performance budgets
- Single-person bandwidth → aggressively scope, automate testing, maintain error budgets

## Success Checklist per Phase
- Phase 1: Top-of-funnel captured; sandbox reliable; 10 templates live
- Phase 2: Users can run/comparative-test with own keys; 20+ templates
- Phase 3: Basic guardrails and learning loop; community trust assets
- Phase 4: CI touchpoints; readiness for early team adoption
