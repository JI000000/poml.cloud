# POML Cloud (poml.cloud) — Product Requirements Document

Date: 2025-08-13
Owner: Founder/PM/Tech Lead (single-person company)

References:
- GitHub: https://github.com/microsoft/poml
- Docs: https://microsoft.github.io/poml/latest/
- Language (Standalone): https://microsoft.github.io/poml/latest/language/standalone/
- Community: https://news.ycombinator.com/item?id=44853184

## 1) Overview
POML Cloud is the easiest way for developers and AI engineers to learn, try, and operationalize POML (Prompt Orchestration Markup Language) in the browser. It combines a content hub (POML 101, cheatsheet, curated examples) with an online sandbox (render/validate POML, then run with your own keys across multiple model providers) and guardrails (diff/A-B/regression) to help teams move from experimentation to reliable prompt operations.

Problem: Prompt engineering lacks structure, versioning, testability, and consistent presentation. POML introduces semantic tags, data embedding, and CSS-like styles to decouple presentation from content. Developers need a zero-install, production-minded toolchain around the official spec to validate, run, compare, and share prompts.

Positioning: Unofficial companion to the official POML spec providing cloud playground, templates, A/B and CI-friendly guardrails. Not affiliated with Microsoft; we link to and respect the upstream spec.

## 2) Goals & KPIs
Business goals
- Acquire top-of-funnel traffic on “POML” (definition, syntax, examples) and convert to sandbox usage.
- Convert sandbox users to recurring users via BYOK and saved templates.

North-star metrics
- Landing → Sandbox CTR: ≥ 25% (first month), ≥ 35% (month 3)
- Sandbox first render success rate: ≥ 99%
- BYOK connect rate: ≥ 10% of sandbox users (month 1), ≥ 20% (month 3)
- Multi-provider run completion rate: ≥ 95%
- p95 sandbox render latency (no-LLM): ≤ 200 ms; p95 run latency surface time: ≤ provider p95 + 200 ms
- SEO: 50 programmatic template pages indexed; 5 priority keywords top-10 by month 2

## 3) Target Users & Personas
- Individual developers exploring POML (learners, tinkerers)
- Prompt devs in startups who need shareable, reliable prompts (builders)
- Team leads who want guardrails/CI previews (gatekeepers)

## 4) Scope
MVP (Public beta)
1. Content Hub
   - Landing “POML 101”: definition, why it matters, quick comparison to ad-hoc prompts.
   - Cheatsheet of core tags: <role>, <task>, <example>, <document>, <table>, <img>, <stylesheet>, <let>, if/for.
   - Curated links to official docs/spec and GitHub.
   - Templates Gallery: 20 high-quality, runnable templates with explanation; programmatic SEO pages.
2. Sandbox v0 (No LLM calls)
   - POML editor with syntax highlighting, validation, and live render preview using `pomljs`.
   - Resource handling: upload/link images/text/CSV for <document>/<table>/<img>.
   - Stylesheet switcher and output-format inspector.
   - Shareable read-only link (anonymous short id) that opens the editor with state (client-side encode + optional shortlink service).
3. BYOK Runs v1
   - Secure secrets vault (server-side, encrypted at rest) for provider API keys: OpenAI, Azure OpenAI, Google, Anthropic (initial set).
   - Side-by-side multi-provider run from a single POML; basic cost estimation and token usage (where available).
   - Output diff view (simple text diff) and rating panel (thumbs, notes) persisted per run.
   - Rate limiting and abuse prevention; audit log for user’s own runs.
4. Publishing & Sharing
   - “Open in Sandbox” button from every template page.
   - Public share: read-only viewer; optional export to Markdown/HTML.
5. Legal & Branding
   - Clear MIT-licensed references and non-affiliation disclaimer.

Post-MVP (Phase 2/3)
- A/B testing harness with experiment ids and statistical summary.
- Regression suites per template/version with golden outputs.
- GitHub App/PR Preview: render diff, style changes, risk hints.
- CLI: run/regression from CI with JUnit-style report output.
- Team spaces: collaboration, roles, private template libraries.
- Template Marketplace (curated + community submissions).

Non-Goals (for MVP)
- Full enterprise SSO (SAML/SCIM) and complex RBAC.
- Billing/quotas beyond basic fair use.
- Offline desktop app.

## 5) User Journeys (Happy Paths)
1) Learn → Try
- User lands on poml.cloud → skims POML 101 → clicks “Open in Sandbox” → pastes example → sees live render → confidence built.
2) Template → Customize
- User opens an “Industry Template” → tweaks <task>/<stylesheet> → sees changes → shares link with teammate.
3) BYOK → Compare
- User adds API keys → runs multi-provider → compares outputs side-by-side → saves best config as a template.

## 6) Functional Requirements (FRD)
FR-1 Editor & Validation
- Highlight .poml, show inline diagnostics; render preview updates in <200 ms.

FR-2 Resource Handling
- Support <document src>, <table src>, and <img src> for local uploads and remote URLs; disallow unsafe schemes.

FR-3 Stylesheet
- Allow switching among predefined styles; reflect in preview deterministically.

FR-4 Sharing
- Generate shareable URL reflecting editor state; read-only viewer resolves state and renders without edit controls.

FR-5 BYOK & Providers
- Store provider secrets server-side, encrypted; rotate/delete; never expose to client.
- Run same POML across selected providers synchronously; capture outputs, token/cost metadata, duration, status.

FR-6 Diff & Feedback
- Show basic diff between outputs; allow rating/comment per output; persist to Runs table.

FR-7 Templates
- List, filter, and search; open in editor; version each template (semantic versioning).

FR-8 Telemetry & SEO
- Anonymous instrumentation for UX funnels; programmatic pages with structured data (Schema.org) and canonical URLs.

## 7) Non-Functional Requirements (NFR)
- Availability: 99.9% monthly for read paths; 99.5% for run paths during beta.
- Performance: p95 render ≤ 200 ms (no-LLM), API p95 ≤ 300 ms excluding model time.
- Security: TLS 1.2+, secrets encrypted at rest (KMS), signed cookies, CSRF protection, rate limiting, audit logging.
- Privacy: BYOK never logged; opt-in analytics; GDPR-ready data export/delete.
- Accessibility: WCAG 2.1 AA for public pages and editor basic interactions.

## 8) Information Architecture
- /                (Landing: POML 101, Cheatsheet, Featured templates, CTA → Sandbox)
- /sandbox         (Editor, Preview, Styles; later: BYOK panel)
- /templates       (Gallery with filters)
- /templates/[id]  (Template detail, Open in Sandbox)
- /docs/*          (MDX content: Cheatsheet, Quickstart, Troubleshooting)
- /community       (HN/Reddit curated digest)
- /changelog       (Releases and upstream changes mapping)

## 9) UX & Content Guidelines
- Tone: concise, professional, developer-first; all UI copy in idiomatic English.
- Visual: minimal, high-contrast, plenty of whitespace (x.ai-like aesthetic).
- Key microcopy examples
  - Primary CTA (Landing): “Open in Sandbox”
  - Editor placeholder: “Paste or write your .poml here…”
  - Empty state: “Start from a template or paste a snippet.”

## 10) Technical Architecture
- Hosting: Next.js on Vercel (Edge + Node Functions) behind Cloudflare CDN/WAF.
- Render: `pomljs` in-browser for validation/preview; server-side rendering fallback for bots (SEO) as needed.
- Providers Proxy (API routes): OpenAI, Azure OpenAI, Google, Anthropic (extensible).
- Database: Postgres (Neon/Supabase) via Prisma.
- Cache & RL: Upstash Redis.
- Storage: Cloudflare R2 or Vercel Blob for assets (images/docs) and snapshots.
- Telemetry: PostHog; Email: Resend; Secrets: Vercel Encrypted Env or managed KMS.
- Infrastructure as Code: Vercel project; Terraform optional (later).

## 11) Data Model (initial)
users
- id (uuid), email (nullable for anon), created_at

provider_keys
- id, user_id, provider (enum), name, enc_key, created_at, last_used_at

templates
- id, slug, title, summary, tags (string[]), created_by, created_at, updated_at, is_public (bool)

template_versions
- id, template_id, version (semver), poml_text (text), assets_manifest (jsonb), changelog (text), created_at

runs
- id, user_id, template_version_id (nullable), poml_text, providers (jsonb), outputs (jsonb), cost (jsonb), duration_ms, status, created_at

assets
- id, owner_type (template|run), owner_id, kind (image|document|table), url, sha256, created_at

## 12) API Design (sketch)
POST /api/render (no-LLM)
- body: { poml, assets? }
- resp: { ok, renderHtml|errors }

POST /api/run
- body: { poml, providers: [{provider, model, keyRef}], assets? }
- resp: { ok, results: [{provider, output, tokens?, cost?, durationMs}], errors? }

GET /api/templates
- query: { q?, tag?, page? }
- resp: { items, total }

GET /api/templates/:slug
- resp: { template, versions }

POST /api/share
- body: { state }
- resp: { shortId, url }

## 13) SEO Strategy
- Programmatic pages: “POML template for <industry/task>” with structured data (HowTo/SoftwareApplication).
- Canonical URLs and disambiguation blurb to avoid confusion with financial tickers named “POML”.
- Internal linking to official docs/spec and our Sandbox pages; fast LCP, no CLS.

## 14) Legal & Compliance
- MIT-licensed references; explicit “not affiliated with Microsoft” disclaimer.
- Respect upstream trademarks and brand guidelines; no implied endorsement.

## 15) Analytics & Instrumentation
- Events: page_view, open_sandbox, render_ok, render_error, open_template, run_submit, run_ok, run_error, byok_added, share_created.
- Funnels: Landing → Sandbox; Template → Sandbox; Sandbox → BYOK → Run.

## 16) Rollout Plan
- Alpha (internal): Landing + Cheatsheet + Sandbox v0 + 10 templates.
- Public Beta: BYOK runs + multi-provider compare + 20 templates + shareable links.
- GA: A/B + regression basics + changelog mapping to upstream releases.

## 17) Risks & Mitigations
- Spec churn: track upstream; version templates; add compatibility notes.
- Abuse & cost spikes: strict RL, BYOK-only for runs, burst controls.
- SEO competition: programmatic pages, fast performance, quality content.
- Security: enforce CSP, sanitize user-supplied assets, signed URLs, AV scan for uploaded files.

## 18) Open Questions
- Which providers/models for v1 shortlist? (OpenAI o4/o3-mini, GPT-4o-mini; Azure equivalents; Google Gemini 1.5 Flash/Pro; Anthropic Claude 3.7 Sonnet)
- Use Neon vs Supabase for Postgres? (lean vs integrated stack)
- Introduce billing (Stripe) in Beta or GA?


## Appendix A) Lean Launch (No DB, No Server, No Paid APIs)
- Goal: ship a zero-backend, zero-cost-to-run public site that educates, previews POML, and captures top-of-funnel traffic. Enable migration to full features later without refactor.

- Architecture
  - Hosting: Static Next.js (SSG) on Vercel free tier + Cloudflare free DNS/CDN. No serverless functions required initially.
  - Rendering: `pomljs` runs fully in-browser for validate/preview; no provider calls.
  - Content: MDX pages + repo-stored `.poml` templates compiled at build time; generate SEO pages statically.
  - Docs: try embedding official docs via `<iframe>`; if blocked by X-Frame-Options/CSP, fall back to curated links and our own short MDX summaries with clear attribution.

- Data & State
  - No database. No Redis.
  - Templates: stored in repo (`/templates/*.poml` + metadata JSON) and compiled into static pages.
  - Sandbox state: encoded in URL hash/base64; “Share link” simply copies the URL. No persistence.
  - Assets: user uploads exist only in-memory (no server upload); allow external URLs where CORS permits; support converting small files to Data URI for preview.

- Features Included
  - Landing (POML 101), Cheatsheet, Templates gallery (10–20 static pages), Sandbox v0 (edit/validate/preview/styles), “Open in Sandbox” from templates, Share via URL.
  - Client-only search across templates using MiniSearch/Lunr (embedded index at build time).
  - Analytics: Cloudflare Web Analytics (free) or disable analytics initially.

- Explicitly Excluded (until paid/DB available)
  - BYOK key storage (no secrets collection).
  - Multi-provider runs (no LLM API calls). Provide "Run locally" codegen snippets for Node/Python instead.
  - Short-link service and server-stored shares.

- Migration Path
  - Introduce a thin API layer later for BYOK and runs; keep editor/render contracts identical.
  - When adding DB: promote repo templates into `templates` table; maintain slugs for permalink continuity.
  - Feature flags to enable/disable server features per environment.

- Cost
  - $0 infra (domain already owned). Vercel/Cloudflare free tiers. No provider API spend.


