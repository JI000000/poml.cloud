export type TemplateItem = {
  slug: string
  title: string
  summary: string
  tags: string[]
  poml: string
  sampleInput?: string
  sampleOutputFormat?: string
}

export const templates: TemplateItem[] = [
  {
    slug: 'customer-support-summary',
    title: 'Customer Support Summary',
    summary: 'Summarize a support ticket thread with key actions and sentiment.',
    tags: ['support', 'summary'],
    poml: `<poml>
  <role>You are an expert support assistant.</role>
  <task>Summarize the following ticket thread. Provide actions, blockers, and sentiment.</task>
  <document src="ticket.txt" />
  <output-format>
    - Title
    - TL;DR (2-3 bullets)
    - Actions (who/what/when)
    - Risks/Blockers
    - Sentiment (brief)
  </output-format>
</poml>`,
  },
  {
    slug: 'okrs-writer',
    title: 'OKRs Writer',
    summary: 'Draft quarterly OKRs from strategy notes.',
    tags: ['business','planning'],
    poml: `<poml>
  <role>You are a strategy operator.</role>
  <task>Draft 3 Objectives and 3-4 Key Results each.</task>
  <document src="strategy.txt" />
  <output-format>Objective 1 -> KRs; Objective 2 -> KRs; Objective 3 -> KRs.</output-format>
</poml>`,
    sampleInput: `strategy.txt -> company priorities`,
    sampleOutputFormat: `O1: ...\n- KR1: ...`,
  },
  {
    slug: 'meeting-followup-mail',
    title: 'Meeting Follow-up Email',
    summary: 'Generate follow‑up email with actions and owners.',
    tags: ['business','email'],
    poml: `<poml>
  <role>You are an executive assistant.</role>
  <task>Write a concise follow-up email with action items and owners.</task>
  <document src="minutes.txt" />
  <output-format>Greeting; Summary; Actions (owner + due); Thanks.</output-format>
</poml>`,
    sampleInput: `minutes.txt -> meeting minutes`,
    sampleOutputFormat: `Summary: ...\nActions: owner + due`,
  },
  {
    slug: 'brand-voice-guide',
    title: 'Brand Voice Guide',
    summary: 'Extract brand voice from examples and codify a guide.',
    tags: ['marketing','style'],
    poml: `<poml>
  <role>You are a brand strategist.</role>
  <task>Derive brand voice traits and a short style guide.</task>
  <document src="examples.txt" />
  <output-format>Voice traits; Do/Don’t; Examples.</output-format>
</poml>`,
    sampleInput: `examples.txt -> sample copy`,
    sampleOutputFormat: `Traits: ...\nDo: ...\nDon't: ...`,
  },
  {
    slug: 'changelog-summary-mail',
    title: 'Changelog Summary Email',
    summary: 'Email-friendly product update summary from changelog.',
    tags: ['product','email'],
    poml: `<poml>
  <role>You are a product marketer.</role>
  <task>Summarize weekly changes into an email.</task>
  <document src="changelog.txt" />
  <output-format>Subject; Intro; Highlights; Links.</output-format>
</poml>`,
    sampleInput: `changelog.txt -> merged items`,
    sampleOutputFormat: `Subject: ...\nHighlights: ...`,
  },
  {
    slug: 'persona-writer',
    title: 'User Persona Writer',
    summary: 'Create 2-3 personas from research notes.',
    tags: ['product','research'],
    poml: `<poml>
  <role>You are a product researcher.</role>
  <task>Create 2-3 personas with goals and pains.</task>
  <document src="research.txt" />
  <output-format>Persona name; Goals; Pains; Context.</output-format>
</poml>`,
    sampleInput: `research.txt -> interview notes`,
    sampleOutputFormat: `Name: ...\nGoals: ...\nPains: ...`,
  },
  {
    slug: 'support-root-cause',
    title: 'Support Root Cause Clustering',
    summary: 'Cluster tickets by root cause and volume.',
    tags: ['support','analysis'],
    poml: `<poml>
  <role>You are a support analyst.</role>
  <task>Cluster tickets by root cause and quantify volume.</task>
  <document src="tickets.csv" />
  <output-format>Clusters; Counts; Sample tickets; Fix ideas.</output-format>
</poml>`,
    sampleInput: `tickets.csv -> id,subject,desc`,
    sampleOutputFormat: `Cluster: ... (N)\nSamples: ...`,
  },
  {
    slug: 'engineering-handbook',
    title: 'Engineering Handbook Page',
    summary: 'Generate a handbook page from raw SOP.',
    tags: ['dev','docs'],
    poml: `<poml>
  <role>You are an engineering manager.</role>
  <task>Rewrite SOP into a clear handbook page.</task>
  <document src="sop.txt" />
  <output-format>Purpose; Scope; Process; Owners.</output-format>
</poml>`,
    sampleInput: `sop.txt -> draft SOP`,
    sampleOutputFormat: `Purpose: ...\nProcess: ...`,
  },
  {
    slug: 'demo-script-writer',
    title: 'Demo Script Writer',
    summary: 'Write a 5-min product demo script.',
    tags: ['sales','script'],
    poml: `<poml>
  <role>You are a sales engineer.</role>
  <task>Write a 5-min demo script from product notes.</task>
  <document src="notes.txt" />
  <output-format>Intro; 3 scenes; Close; CTA.</output-format>
</poml>`,
    sampleInput: `notes.txt -> product value + features`,
    sampleOutputFormat: `Intro: ...\nScene 1: ...`,
  },
  {
    slug: 'internal-memo-writer',
    title: 'Internal Memo Writer',
    summary: 'Draft an internal memo from meeting and decision logs.',
    tags: ['business','writing'],
    poml: `<poml>
  <role>You are a chief of staff.</role>
  <task>Draft a memo from decisions and context.</task>
  <document src="decisions.txt" />
  <output-format>Background; Decisions; Rationale; Next steps.</output-format>
</poml>`,
    sampleInput: `decisions.txt -> bullets`,
    sampleOutputFormat: `Background: ...\nDecisions: ...\nRationale: ...\nNext: ...`,
  },
  {
    slug: 'competitive-brief',
    title: 'Competitive Brief',
    summary: 'Summarize a competitor landscape with positioning.',
    tags: ['product','analysis'],
    poml: `<poml>
  <role>You are a product strategist.</role>
  <task>Summarize competitor features and positioning.</task>
  <document src="competitors.txt" />
  <output-format>Competitors; Feature matrix; Positioning.</output-format>
</poml>`,
    sampleInput: `competitors.txt -> list + notes`,
    sampleOutputFormat: `Competitor A: ...\nMatrix: ...\nPositioning: ...`,
  },
  {
    slug: 'feature-adoption-report',
    title: 'Feature Adoption Report',
    summary: 'Summarize adoption metrics and user feedback.',
    tags: ['product','report'],
    poml: `<poml>
  <role>You are a product analyst.</role>
  <task>Summarize adoption metrics and feedback with next steps.</task>
  <document src="metrics.csv" />
  <document src="feedback.txt" />
  <output-format>Adoption KPIs; Segments; Feedback themes; Next steps.</output-format>
</poml>`,
    sampleInput: `metrics.csv + feedback.txt`,
    sampleOutputFormat: `KPIs: ...\nThemes: ...\nSteps: ...`,
  },
  {
    slug: 'sop-checklist',
    title: 'SOP Checklist Generator',
    summary: 'Generate a step-by-step checklist from SOP.',
    tags: ['ops','checklist'],
    poml: `<poml>
  <role>You are an operations lead.</role>
  <task>Turn SOP into a step-by-step checklist with roles.</task>
  <document src="sop.txt" />
  <output-format>Step; Role; Tools; Evidence.</output-format>
</poml>`,
    sampleInput: `sop.txt -> process description`,
    sampleOutputFormat: `1) Step ... (Role ...)`,
  },
  {
    slug: 'code-comment-generator',
    title: 'Code Comment Generator',
    summary: 'Generate clear code comments from source files.',
    tags: ['dev','docs'],
    poml: `<poml>
  <role>You are a senior engineer.</role>
  <task>Add line-level comments to explain non-trivial logic.</task>
  <document src="source.ts" />
  <output-format>Commented snippets; Rationale; Edge cases.</output-format>
</poml>`,
    sampleInput: `source.ts -> TypeScript module`,
    sampleOutputFormat: `Snippet:\n// comment...`,
  },
  {
    slug: 'api-contract-from-examples',
    title: 'API Contract from Examples',
    summary: 'Infer an API contract/schema from request/response logs.',
    tags: ['dev','api'],
    poml: `<poml>
  <role>You are an API architect.</role>
  <task>Infer fields, types, and constraints from examples.</task>
  <document src="requests.jsonl" />
  <document src="responses.jsonl" />
  <output-format>OpenAPI-like schema; Notes; Unknowns.</output-format>
</poml>`,
    sampleInput: `requests.jsonl + responses.jsonl`,
    sampleOutputFormat: `Paths:/...\nSchema: ...\nNotes: ...`,
  },
  {
    slug: 'gdpr-data-map',
    title: 'GDPR Data Map',
    summary: 'Map personal data categories and processors.',
    tags: ['legal','privacy'],
    poml: `<poml>
  <role>You are a privacy analyst.</role>
  <task>Map personal data, purposes, processors, retention.</task>
  <document src="systems.txt" />
  <output-format>Data categories; Purposes; Processors; Retention.</output-format>
</poml>`,
    sampleInput: `systems.txt -> system inventory`,
    sampleOutputFormat: `Categories: ...\nPurposes: ...\nProcessors: ...\nRetention: ...`,
  },
  {
    slug: 'phishing-awareness-email',
    title: 'Phishing Awareness Email',
    summary: 'Write a short awareness email from incident details.',
    tags: ['security','email'],
    poml: `<poml>
  <role>You are a security awareness lead.</role>
  <task>Draft a phishing awareness email referencing a recent incident.</task>
  <document src="incident.txt" />
  <output-format>Subject; Key learning; Do/Don’t; Report link.</output-format>
</poml>`,
    sampleInput: `incident.txt -> short summary`,
    sampleOutputFormat: `Subject: ...\nBody: ...`,
  },
  {
    slug: 'grant-proposal-drafter',
    title: 'Grant Proposal Drafter',
    summary: 'Draft a grant proposal from program notes.',
    tags: ['nonprofit','writing'],
    poml: `<poml>
  <role>You are a grant writer.</role>
  <task>Draft a grant proposal from program notes.</task>
  <document src="program.txt" />
  <output-format>Need; Objectives; Activities; Budget; Impact.</output-format>
</poml>`,
    sampleInput: `program.txt -> goals + beneficiaries`,
    sampleOutputFormat: `Need: ...\nObjectives: ...\nActivities: ...\nBudget: ...\nImpact: ...`,
  },
  {
    slug: 'lesson-plan-writer',
    title: 'Lesson Plan Writer',
    summary: 'Create a lesson plan with objectives and activities.',
    tags: ['education','planning'],
    poml: `<poml>
  <role>You are a curriculum designer.</role>
  <task>Create a single lesson plan from the topic.</task>
  <document src="topic.txt" />
  <output-format>Objectives; Materials; Activities; Assessment.</output-format>
</poml>`,
    sampleInput: `topic.txt -> subject + level`,
    sampleOutputFormat: `Objectives: ...\nActivities: ...`,
  },
  {
    slug: 'menu-nutrition-checker',
    title: 'Menu Nutrition Checker',
    summary: 'Check menu items against nutrition constraints.',
    tags: ['healthcare','restaurant'],
    poml: `<poml>
  <role>You are a nutritionist.</role>
  <task>Check menu against calories/salt/sugar constraints.</task>
  <document src="menu.txt" />
  <output-format>Non-compliant items; Suggestions.</output-format>
</poml>`,
    sampleInput: `menu.txt -> list of items`,
    sampleOutputFormat: `Non-compliant: ...\nSuggestions: ...`,
  },
  {
    slug: 'refund-policy-writer',
    title: 'Refund Policy Writer',
    summary: 'Draft a clear refund policy based on constraints.',
    tags: ['ops','policy'],
    poml: `<poml>
  <role>You are an operations policy writer.</role>
  <task>Draft a clear refund policy based on the constraints.</task>
  <document src="constraints.txt" />
  <output-format>Scope; Eligibility; Process; Timeline; Exceptions.</output-format>
</poml>`,
    sampleInput: `constraints.txt -> rules`,
    sampleOutputFormat: `Scope: ...\nEligibility: ...\nProcess: ...\nTimeline: ...\nExceptions: ...`,
  },
  {
    slug: 'product-ops-faq',
    title: 'Product Ops FAQ',
    summary: 'Turn internal SOP into a searchable FAQ.',
    tags: ['ops','qa'],
    poml: `<poml>
  <role>You are a product operations lead.</role>
  <task>Convert SOP into a short FAQ.</task>
  <document src="sop.txt" />
  <output-format>Q&A pairs; Links.</output-format>
</poml>`,
    sampleInput: `sop.txt -> SOP content`,
    sampleOutputFormat: `Q: ...\nA: ...`,
  },
  {
    slug: 'terms-diff-summary',
    title: 'Terms Diff Summary',
    summary: 'Summarize changes between TOS versions in plain English.',
    tags: ['legal','diff'],
    poml: `<poml>
  <role>You are a legal counsel.</role>
  <task>Summarize meaningful changes in TOS updates.</task>
  <document src="tos_old.txt" />
  <document src="tos_new.txt" />
  <output-format>Added; Removed; Clarified; Impact.</output-format>
</poml>`,
    sampleInput: `tos_old.txt + tos_new.txt`,
    sampleOutputFormat: `Added: ...\nRemoved: ...\nClarified: ...\nImpact: ...`,
  },
  {
    slug: 'clinic-intake-summary',
    title: 'Clinic Intake Summary',
    summary: 'Summarize patient intake form for the physician.',
    tags: ['healthcare','summary'],
    poml: `<poml>
  <role>You are a medical assistant.</role>
  <task>Summarize key info from the intake form.</task>
  <document src="intake.txt" />
  <output-format>Chief complaint; History; Meds; Allergies; Vitals.</output-format>
</poml>`,
    sampleInput: `intake.txt -> patient info`,
    sampleOutputFormat: `Chief complaint: ...\nHistory: ...\nMeds: ...\nAllergies: ...\nVitals: ...`,
  },
  {
    slug: 'ehr-note-structurer',
    title: 'EHR Note Structurer',
    summary: 'Structure free-text notes into SOAP format.',
    tags: ['healthcare','formatting'],
    poml: `<poml>
  <role>You are a clinical scribe.</role>
  <task>Convert free-text into SOAP structure.</task>
  <document src="note.txt" />
  <output-format>Subjective; Objective; Assessment; Plan.</output-format>
</poml>`,
    sampleInput: `note.txt -> raw note`,
    sampleOutputFormat: `S: ...\nO: ...\nA: ...\nP: ...`,
  },
  {
    slug: 'bug-report-reproducer',
    title: 'Bug Report Reproducer',
    summary: 'Turn a bug report into clear repro steps.',
    tags: ['dev','qa'],
    poml: `<poml>
  <role>You are a QA engineer.</role>
  <task>Write minimal repro steps and expected vs actual.</task>
  <document src="bug.txt" />
  <output-format>Steps; Expected; Actual; Environment.</output-format>
</poml>`,
    sampleInput: `bug.txt -> description + logs`,
    sampleOutputFormat: `Steps: ...\nExpected: ...\nActual: ...\nEnv: ...`,
  },
  {
    slug: 'game-patch-notes',
    title: 'Game Patch Notes',
    summary: 'Write player-facing patch notes from internal changelog.',
    tags: ['gaming','writing'],
    poml: `<poml>
  <role>You are a game community writer.</role>
  <task>Write friendly patch notes.</task>
  <document src="changelog.txt" />
  <output-format>Highlights; Balance changes; Fixes; Known issues.</output-format>
</poml>`,
    sampleInput: `changelog.txt -> dev changes`,
    sampleOutputFormat: `Highlights: ...\nBalance: ...\nFixes: ...\nKnown: ...`,
  },
  {
    slug: 'storefront-copy',
    title: 'Storefront Copy',
    summary: 'Write storefront copy from product bullets.',
    tags: ['ecommerce','copywriting'],
    poml: `<poml>
  <role>You are an ecommerce copywriter.</role>
  <task>Write storefront title, bullets, and description.</task>
  <document src="product.txt" />
  <output-format>Title; 5 bullets; Long description.</output-format>
</poml>`,
    sampleInput: `product.txt -> specs + benefits`,
    sampleOutputFormat: `Title: ...\nBullets: ...\nDescription: ...`,
  },
  {
    slug: 'product-review-summarizer',
    title: 'Product Review Summarizer',
    summary: 'Summarize reviews into pros, cons and themes.',
    tags: ['ecommerce','summary'],
    poml: `<poml>
  <role>You are a marketplace analyst.</role>
  <task>Summarize review themes with pros/cons.</task>
  <document src="reviews.txt" />
  <output-format>Pros; Cons; Themes; Quotes.</output-format>
</poml>`,
    sampleInput: `reviews.txt -> raw reviews`,
    sampleOutputFormat: `Pros: ...\nCons: ...\nThemes: ...\nQuotes: ...`,
  },
  {
    slug: 'customer-chat-summary',
    title: 'Customer Chat Summary',
    summary: 'Summarize a multi-turn customer chat with next actions.',
    tags: ['support','summary'],
    poml: `<poml>
  <role>You are a customer support lead.</role>
  <task>Summarize the chat and propose next actions.</task>
  <document src="chat.txt" />
  <output-format>TL;DR; Issues; Actions; Owners.</output-format>
</poml>`,
    sampleInput: `chat.txt -> transcript`,
    sampleOutputFormat: `TL;DR: ...\nIssues: ...\nActions: ...\nOwners: ...`,
  },
  {
    slug: 'risk-register-writer',
    title: 'Risk Register Writer',
    summary: 'Create a risk register from project notes.',
    tags: ['project','risk'],
    poml: `<poml>
  <role>You are a project manager.</role>
  <task>Create a risk register from notes.</task>
  <document src="project.txt" />
  <output-format>Risk; Impact; Likelihood; Mitigation; Owner.</output-format>
</poml>`,
    sampleInput: `project.txt -> context + constraints`,
    sampleOutputFormat: `Risk: ...\nImpact: ...\nLikelihood: ...\nMitigation: ...\nOwner: ...`,
  },
  {
    slug: 'incident-slack-brief',
    title: 'Incident Slack Brief',
    summary: 'Draft a concise Slack brief for a production incident.',
    tags: ['ops','writing'],
    poml: `<poml>
  <role>You are an SRE.</role>
  <task>Draft a clear Slack brief from the timeline.</task>
  <document src="timeline.txt" />
  <output-format>What happened; Impact; Current status; Next update.</output-format>
</poml>`,
    sampleInput: `timeline.txt -> timestamps + events`,
    sampleOutputFormat: `What: ...\nImpact: ...\nStatus: ...\nNext: ...`,
  },
  {
    slug: 'ux-research-synthesis',
    title: 'UX Research Synthesis',
    summary: 'Synthesize interview notes into themes and insights.',
    tags: ['design','research'],
    poml: `<poml>
  <role>You are a UX researcher.</role>
  <task>Synthesize interviews into themes and insights.</task>
  <document src="interviews.txt" />
  <output-format>Themes; Insights; Quotes; Recommendations.</output-format>
</poml>`,
    sampleInput: `interviews.txt -> notes`,
    sampleOutputFormat: `Themes: ...\nInsights: ...\nQuotes: ...\nRecs: ...`,
  },
  {
    slug: 'seo-brief-writer',
    title: 'SEO Brief Writer',
    summary: 'Create an SEO brief with keywords and structure.',
    tags: ['marketing','seo'],
    poml: `<poml>
  <role>You are an SEO strategist.</role>
  <task>Create an SEO brief from the topic.</task>
  <document src="topic.txt" />
  <output-format>Primary/Secondary keywords; SERP notes; Outline.</output-format>
</poml>`,
    sampleInput: `topic.txt -> focus keyword`,
    sampleOutputFormat: `Primary: ...\nSecondary: ...\nSERP: ...\nOutline: ...`,
  },
  {
    slug: 'meeting-agenda-writer',
    title: 'Meeting Agenda Writer',
    summary: 'Create a 30-min agenda with timings and outcomes.',
    tags: ['business','planning'],
    poml: `<poml>
  <role>You are an executive assistant.</role>
  <task>Create a 30-min agenda with timings and expected outcomes.</task>
  <document src="context.txt" />
  <output-format>Agenda items with duration; Outcome; Owner.</output-format>
</poml>`,
    sampleInput: `context.txt -> purpose + attendees`,
    sampleOutputFormat: `Item 1 (10m): ...\nItem 2 (10m): ...\nOutcome: ...`,
  },
  {
    slug: 'kpi-digest',
    title: 'Weekly KPI Digest',
    summary: 'Summarize KPIs and add highlights/alarms.',
    tags: ['data','summary'],
    poml: `<poml>
  <role>You are a data PM.</role>
  <task>Summarize KPIs and call out highlights and alarms.</task>
  <table src="kpi.csv" />
  <output-format>TL;DR; Highlights; Alarms; Next actions.</output-format>
</poml>`,
    sampleInput: `kpi.csv -> metric,value,delta`,
    sampleOutputFormat: `TL;DR: ...\nHighlights: ...\nAlarms: ...\nActions: ...`,
  },
  {
    slug: 'press-release-writer',
    title: 'Press Release Writer',
    summary: 'Draft a press release from a product announcement.',
    tags: ['pr','writing'],
    poml: `<poml>
  <role>You are a PR writer.</role>
  <task>Draft a press release from the announcement.</task>
  <document src="announcement.txt" />
  <output-format>Headline; Subhead; Quote; Body; Boilerplate.</output-format>
</poml>`,
    sampleInput: `announcement.txt -> bullets`,
    sampleOutputFormat: `Headline: ...\nSubhead: ...\nQuote: ...\nBody: ...`,
  },
  {
    slug: 'qbr-slide-outline',
    title: 'QBR Slide Outline',
    summary: 'Create a QBR slide outline with wins and plans.',
    tags: ['business','outline'],
    poml: `<poml>
  <role>You are a customer success manager.</role>
  <task>Create a QBR outline with wins and next-quarter plan.</task>
  <document src="account.txt" />
  <output-format>Wins; ROI; Plan; Risks.</output-format>
</poml>`,
    sampleInput: `account.txt -> highlights`,
    sampleOutputFormat: `Wins: ...\nROI: ...\nPlan: ...\nRisks: ...`,
  },
  {
    slug: 'feature-brief',
    title: 'Feature Brief',
    summary: 'Turn raw ideas into a short feature brief.',
    tags: ['product','writing'],
    poml: `<poml>
  <role>You are a product manager.</role>
  <task>Turn ideas into a feature brief.</task>
  <document src="ideas.txt" />
  <output-format>Problem; Value; Users; Scope; Metrics.</output-format>
</poml>`,
    sampleInput: `ideas.txt -> bullet ideas`,
    sampleOutputFormat: `Problem: ...\nValue: ...\nUsers: ...\nScope: ...\nMetrics: ...`,
  },
  {
    slug: 'support-macro-writer',
    title: 'Support Macro Writer',
    summary: 'Create reusable support macros from resolved threads.',
    tags: ['support','writing'],
    poml: `<poml>
  <role>You are a support enablement lead.</role>
  <task>Create a macro template from the resolved thread.</task>
  <document src="thread.txt" />
  <output-format>When to use; Steps; Variables; Caveats.</output-format>
</poml>`,
    sampleInput: `thread.txt -> resolution steps`,
    sampleOutputFormat: `When: ...\nSteps: ...\nVars: ...\nCaveats: ...`,
  },
  {
    slug: 'customer-email-reply',
    title: 'Customer Email Reply',
    summary: 'Draft a concise, friendly reply to a customer email.',
    tags: ['support', 'email'],
    poml: `<poml>
  <role>You are a helpful customer support agent.</role>
  <task>Draft a concise, friendly reply addressing the customer concerns.</task>
  <document src="email.txt" />
  <output-format>Greeting; Summary of issue; Resolution; Next steps.</output-format>
</poml>`,
  },
  {
    slug: 'changelog-to-blog',
    title: 'Changelog → Blog Post',
    summary: 'Turn a raw changelog into a user-facing blog post.',
    tags: ['dev', 'marketing'],
    poml: `<poml>
  <role>You are a devrel writer.</role>
  <task>Convert the changelog into a friendly blog post with highlights.</task>
  <document src="changelog.txt" />
  <output-format>Intro; Highlights; Screenshots (placeholders); How to upgrade.</output-format>
</poml>`,
  },
  {
    slug: 'bug-report-triage',
    title: 'Bug Report Triage',
    summary: 'Normalize user bug reports into repro steps and severity.',
    tags: ['dev', 'qa'],
    poml: `<poml>
  <role>You are a QA triager.</role>
  <task>Summarize each report into repro steps and assign severity.</task>
  <document src="bugs.txt" />
  <output-format>Issue; Repro steps; Expected vs actual; Severity; Owner.</output-format>
</poml>`,
  },
  {
    slug: 'policy-to-faq',
    title: 'Policy → FAQ',
    summary: 'Convert a policy text into an internal FAQ.',
    tags: ['legal', 'qa'],
    poml: `<poml>
  <role>You are a policy analyst.</role>
  <task>Convert the policy into a concise FAQ for employees.</task>
  <document src="policy.txt" />
  <output-format>Q&A pairs; Links to sections.</output-format>
</poml>`,
  },
  {
    slug: 'blog-outline-generator',
    title: 'Blog Outline Generator',
    summary: 'Turn a topic into an SEO-friendly outline with H2/H3 suggestions.',
    tags: ['marketing', 'seo'],
    poml: `<poml>
  <role>You are an SEO content strategist.</role>
  <task>Create an outline for the topic, with H2/H3 and target keywords.</task>
  <document src="topic.txt" />
  <output-format>Title; H2 sections (with 2-3 H3 each); Target keywords; FAQ.</output-format>
</poml>`,
    sampleInput: `topic.txt ->\n"How to build a personal website with Next.js"`,
    sampleOutputFormat: `Title: ...\nH2: ...\n  H3: ...\nH2: ...`,
  },
  {
    slug: 'api-doc-summarizer',
    title: 'API Doc Summarizer',
    summary: 'Summarize API docs into quick-start, endpoints table, and examples.',
    tags: ['dev', 'docs'],
    poml: `<poml>
  <role>You are a developer advocate.</role>
  <task>Summarize the API docs into an actionable quick-start and endpoints table.</task>
  <document src="api.txt" />
  <output-format>Quick-start steps; Endpoints table; Sample request/response.</output-format>
</poml>`,
  },
  {
    slug: 'release-notes-drafter',
    title: 'Release Notes Drafter',
    summary: 'From merged PRs, draft human-friendly release notes.',
    tags: ['dev', 'changelog'],
    poml: `<poml>
  <role>You are a technical writer.</role>
  <task>Draft release notes from the merged PR list.</task>
  <document src="prs.txt" />
  <output-format>Highlights; Breaking changes; Upgrade notes.</output-format>
</poml>`,
  },
  {
    slug: 'incident-postmortem',
    title: 'Incident Postmortem',
    summary: 'Create a post-incident report with timeline and corrective actions.',
    tags: ['ops', 'postmortem'],
    poml: `<poml>
  <role>You are an SRE.</role>
  <task>Write a concise postmortem from the incident timeline.</task>
  <document src="incident.txt" />
  <output-format>Summary; Timeline; Root cause; Corrective actions; Lessons learned.</output-format>
</poml>`,
  },
  {
    slug: 'sql-to-insights',
    title: 'SQL to Insights',
    summary: 'Explain SQL query results in plain English with key takeaways.',
    tags: ['data', 'analysis'],
    poml: `<poml>
  <role>You are a data storyteller.</role>
  <task>Explain the result set and derive insights.</task>
  <table src="results.csv" />
  <output-format>Insights; Anomalies; Suggested next analyses.</output-format>
</poml>`,
  },
  {
    slug: 'code-review-assistant',
    title: 'Code Review Assistant',
    summary: 'Generate review notes from a diff with risks and test ideas.',
    tags: ['dev', 'review'],
    poml: `<poml>
  <role>You are a senior code reviewer.</role>
  <task>Review the diff and point out risks, test ideas, and readability issues.</task>
  <document src="diff.patch" />
  <output-format>Risks; Tests; Readability; Suggested refactors.</output-format>
</poml>`,
  },
  {
    slug: 'pr-faq-writer',
    title: 'PR/FAQ Writer',
    summary: 'Turn a product idea into a PR/FAQ document.',
    tags: ['product', 'amazon-style'],
    poml: `<poml>
  <role>You are a product strategist.</role>
  <task>Write a PR/FAQ from the idea brief.</task>
  <document src="idea.txt" />
  <output-format>Press release; FAQ (customers, business, tech).</output-format>
</poml>`,
  },
  {
    slug: 'curriculum-planner',
    title: 'Curriculum Planner',
    summary: 'Design a 4-week curriculum outline with resources.',
    tags: ['education', 'planning'],
    poml: `<poml>
  <role>You are a curriculum designer.</role>
  <task>Produce a 4-week plan with weekly goals and resources.</task>
  <document src="topic.txt" />
  <output-format>Week-by-week plan; Reading list; Practice ideas.</output-format>
</poml>`,
  },
  {
    slug: 'financial-report-explainer',
    title: 'Financial Report Explainer',
    summary: 'Explain a 10-K section in simple terms with risk notes.',
    tags: ['finance', 'explain'],
    poml: `<poml>
  <role>You are a financial analyst.</role>
  <task>Explain the following 10-K section and outline risks.</task>
  <document src="10k.txt" />
  <output-format>Summary; Key metrics; Risks; Questions to ask.</output-format>
</poml>`,
  },
  {
    slug: 'ux-copy-polisher',
    title: 'UX Copy Polisher',
    summary: 'Polish microcopy for clarity and consistency.',
    tags: ['design', 'copy'],
    poml: `<poml>
  <role>You are a UX writer.</role>
  <task>Polish the microcopy for clarity and tone.</task>
  <document src="copy.txt" />
  <output-format>Before → After table; Rationale; Tone notes.</output-format>
</poml>`,
  },
  {
    slug: 'security-readout',
    title: 'Security Readout',
    summary: 'Summarize security findings and remediation priorities.',
    tags: ['security', 'report'],
    poml: `<poml>
  <role>You are a security lead.</role>
  <task>Summarize findings by severity and suggest priorities.</task>
  <document src="findings.txt" />
  <output-format>High/Med/Low; Remediation; Owners; Timeline.</output-format>
</poml>`,
    sampleInput: `findings.txt ->\n- High: TLS misconfig\n- Medium: Missing CSP on /admin`,
    sampleOutputFormat: `High:\n- ...\nMedium:\n- ...\nOwners:\n- ...\nTimeline:\n- ...`,
  },
  {
    slug: 'sales-email-writer',
    title: 'Sales Email Writer',
    summary: 'Write a short outbound email tailored to the ICP.',
    tags: ['sales', 'email'],
    poml: `<poml>
  <role>You are a sales copywriter.</role>
  <task>Write a 120-word outbound email from ICP notes.</task>
  <document src="icp.txt" />
  <output-format>Subject; Email body; CTA.</output-format>
</poml>`,
    sampleInput: `icp.txt ->\nCompany: SMB ecommerce\nPain: high CAC\nOffer: conversion uplift tool`,
    sampleOutputFormat: `Subject: ...\nBody: ...\nCTA: ...`,
  },
  {
    slug: 'medical-note-simplifier',
    title: 'Medical Note Simplifier',
    summary: 'Simplify a clinical note into patient-friendly language.',
    tags: ['healthcare', 'simplify'],
    poml: `<poml>
  <role>You are a patient educator.</role>
  <task>Simplify the clinical note for a non-expert reader.</task>
  <document src="note.txt" />
  <output-format>Plain language summary; Next steps; Warnings.</output-format>
</poml>`,
    sampleInput: `note.txt ->\nPatient with ... prescribed ...`,
    sampleOutputFormat: `Summary: ...\nNext steps: ...\nWarnings: ...`,
  },
  {
    slug: 'legal-qa-from-terms',
    title: 'Legal Q&A from Terms',
    summary: 'Turn terms of service into common Q&A.',
    tags: ['legal', 'qa'],
    poml: `<poml>
  <role>You are a legal analyst.</role>
  <task>Generate Q&A from the TOS.</task>
  <document src="tos.txt" />
  <output-format>Top questions; Clear answers; Caveats.</output-format>
</poml>`,
    sampleInput: `tos.txt ->\n(terms excerpt)`,
    sampleOutputFormat: `Q: ...\nA: ...`,
  },
  {
    slug: 'multi-doc-synthesis',
    title: 'Multi-doc Synthesis',
    summary: 'Synthesize 3 short docs into a single brief.',
    tags: ['synthesis', 'summary'],
    poml: `<poml>
  <role>You are a research assistant.</role>
  <task>Synthesize the documents into a concise brief.</task>
  <document src="a.txt" />
  <document src="b.txt" />
  <document src="c.txt" />
  <output-format>TL;DR; Key points; Conflicts; Open questions.</output-format>
</poml>`,
    sampleInput: `a.txt -> ...\nb.txt -> ...\nc.txt -> ...`,
    sampleOutputFormat: `TL;DR: ...\nKey points: ...\nConflicts: ...\nOpen questions: ...`,
  },
  {
    slug: 'image-assisted-explanation',
    title: 'Image-assisted Explanation',
    summary: 'Explain a concept using a reference image with constraints.',
    tags: ['education', 'vision'],
    poml: `<poml>
  <role>You are a patient teacher.</role>
  <task>Explain photosynthesis using the reference image.</task>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Photosynthesis_equation.svg" alt="Diagram" />
  <output-format>Under 80 words; friendly, precise.</output-format>
</poml>`,
  },
  {
    slug: 'report-structuring',
    title: 'Report Structuring',
    summary: 'Transform raw notes into a structured report with headings and bullets.',
    tags: ['report', 'formatting'],
    poml: `<poml>
  <role>You are a technical writer.</role>
  <task>Turn the notes into a structured report.</task>
  <document src="notes.txt" />
  <stylesheet>
    h2 { style: "## {text}" }
    li { style: "- {text}" }
  </stylesheet>
  <output-format>
    Include Introduction, Findings, Recommendations.
  </output-format>
</poml>`,
  },
  {
    slug: 'meeting-minutes',
    title: 'Meeting Minutes',
    summary: 'Convert meeting transcript into concise minutes with decisions and owners.',
    tags: ['business', 'summary'],
    poml: `<poml>
  <role>You are a precise note-taker.</role>
  <task>Extract decisions, owners, and deadlines from the transcript.</task>
  <document src="transcript.txt" />
  <output-format>
    Decisions; Owners; Deadlines; Open Questions.
  </output-format>
</poml>`,
  },
  {
    slug: 'policy-extractor',
    title: 'Policy Clause Extractor',
    summary: 'Pull key clauses and risks from a policy PDF (text copy).',
    tags: ['legal', 'extraction'],
    poml: `<poml>
  <role>You are a compliance analyst.</role>
  <task>Extract key clauses and risks from the policy text.</task>
  <document src="policy.txt" />
  <output-format>Key clauses; Risk summary; Required actions.</output-format>
</poml>`,
  },
  {
    slug: 'product-brief-writer',
    title: 'Product Brief Writer',
    summary: 'Turn feature notes into a crisp PRD-style brief.',
    tags: ['product', 'writing'],
    poml: `<poml>
  <role>You are a product manager.</role>
  <task>Convert raw notes into a product brief with Goals, Scope, and Risks.</task>
  <document src="notes.txt" />
  <output-format>Title; Problem; Goals; Non-Goals; Milestones; Risks.</output-format>
</poml>`,
  },
  {
    slug: 'marketing-landing-copy',
    title: 'Marketing Landing Copy',
    summary: 'Craft above-the-fold copy with value prop and CTAs.',
    tags: ['marketing', 'copywriting'],
    poml: `<poml>
  <role>You are a senior copywriter.</role>
  <task>Write landing hero copy from the product summary.</task>
  <document src="summary.txt" />
  <output-format>Headline (max 10 words); Subhead (max 20 words); Primary CTA; Secondary CTA.</output-format>
</poml>`,
  },
  {
    slug: 'resume-tailor',
    title: 'Resume Tailor',
    summary: 'Tailor a resume to a job description with bullet rewriting.',
    tags: ['hr', 'rewrite'],
    poml: `<poml>
  <role>You are a career coach.</role>
  <task>Revise the resume bullets to match the job description.</task>
  <document src="resume.txt" />
  <document src="jd.txt" />
  <output-format>Rewritten bullets grouped by role; short summary.</output-format>
</poml>`,
  },
  {
    slug: 'table-to-report',
    title: 'Table → Executive Report',
    summary: 'Turn a CSV table into an executive summary.',
    tags: ['data', 'report'],
    poml: `<poml>
  <role>You are a data analyst.</role>
  <task>Summarize the CSV table and highlight trends and anomalies.</task>
  <table src="metrics.csv" />
  <output-format>TL;DR; Key trends; Anomalies; Next actions.</output-format>
</poml>`,
  },
  {
    slug: 'finance-statement-analyzer',
    title: 'Finance Statement Analyzer',
    summary: 'Analyze P/L or cash flow statements and list key variances.',
    tags: ['finance', 'analysis'],
    poml: `<poml>
  <role>You are a financial analyst.</role>
  <task>Analyze this statement and list key YoY/ QoQ variances with reasons.</task>
  <document src="pl.csv" />
  <output-format>TL;DR; Positive variances; Negative variances; Watchouts.</output-format>
</poml>`,
    sampleInput: `pl.csv -> revenue,cogs,opex,net`,
    sampleOutputFormat: `TL;DR: ...\nPositive: ...\nNegative: ...\nWatchouts: ...`,
  },
  {
    slug: 'invoice-field-extractor',
    title: 'Invoice Field Extractor',
    summary: 'Extract fields from invoices (text/OCR result).',
    tags: ['ops', 'extraction'],
    poml: `<poml>
  <role>You are an operations assistant.</role>
  <task>Extract invoice number, vendor, date, amount, currency.</task>
  <document src="invoice.txt" />
  <output-format>JSON with fields: invoice_no, vendor, date, amount, currency.</output-format>
</poml>`,
    sampleInput: `invoice.txt -> OCR text`,
    sampleOutputFormat: `{ "invoice_no": "...", "vendor":"...", "date":"YYYY-MM-DD", "amount":123.45, "currency":"USD" }`,
  },
  {
    slug: 'onboarding-email-sequence',
    title: 'Onboarding Email Sequence',
    summary: 'Draft a 3-step onboarding email sequence from product notes.',
    tags: ['marketing', 'email'],
    poml: `<poml>
  <role>You are a lifecycle marketer.</role>
  <task>Create a 3-email onboarding sequence with clear CTAs.</task>
  <document src="product_notes.txt" />
  <output-format>Email 1; Email 2; Email 3 (Subject + Body + CTA).</output-format>
</poml>`,
    sampleInput: `product_notes.txt -> value prop, setup steps`,
    sampleOutputFormat: `Email 1: Subject/Body/CTA...`,
  },
  {
    slug: 'churn-risk-brief',
    title: 'Churn Risk Brief',
    summary: 'Identify churn risk signals from support and usage logs.',
    tags: ['product', 'analysis'],
    poml: `<poml>
  <role>You are a customer success analyst.</role>
  <task>Summarize churn risks and mitigation actions.</task>
  <document src="support.txt" />
  <document src="usage.csv" />
  <output-format>Risk signals; Accounts at risk; Actions.</output-format>
</poml>`,
    sampleInput: `support.txt + usage.csv`,
    sampleOutputFormat: `Signals: ...\nAccounts: ...\nActions: ...`,
  },
  {
    slug: 'spec-from-issue',
    title: 'Product Spec from Issue',
    summary: 'Turn a GitHub issue into a concise product spec.',
    tags: ['product', 'writing'],
    poml: `<poml>
  <role>You are a product manager.</role>
  <task>Convert the issue into a brief spec.</task>
  <document src="issue.txt" />
  <output-format>Problem; Goals; Non-goals; Acceptance criteria.</output-format>
</poml>`,
    sampleInput: `issue.txt -> user story + context`,
    sampleOutputFormat: `Problem: ...\nGoals: ...\nNon-goals: ...\nAC: ...`,
  },
  {
    slug: 'retro-summary',
    title: 'Sprint Retro Summary',
    summary: 'Summarize retro notes into keep/less/more actions.',
    tags: ['dev', 'summary'],
    poml: `<poml>
  <role>You are an agile coach.</role>
  <task>Summarize retro notes and propose actions.</task>
  <document src="retro.txt" />
  <output-format>Keep; Less; More; Actions with owners.</output-format>
</poml>`,
    sampleInput: `retro.txt -> raw notes`,
    sampleOutputFormat: `Keep: ...\nLess: ...\nMore: ...\nActions: owner + due`,
  },
  {
    slug: 'release-risk-assessment',
    title: 'Release Risk Assessment',
    summary: 'Assess release PRs for risk and callouts.',
    tags: ['dev', 'risk'],
    poml: `<poml>
  <role>You are a release manager.</role>
  <task>Assess risks from merged PR list.</task>
  <document src="prs.txt" />
  <output-format>High-risk areas; Missing tests; Rollback plan hints.</output-format>
</poml>`,
    sampleInput: `prs.txt -> merged PR titles`,
    sampleOutputFormat: `High-risk: ...\nMissing tests: ...\nRollback: ...`,
  },
  {
    slug: 'hiring-scorecard',
    title: 'Hiring Scorecard',
    summary: 'Convert interview notes into a structured scorecard.',
    tags: ['hr', 'evaluation'],
    poml: `<poml>
  <role>You are a hiring manager.</role>
  <task>Summarize notes into strengths/concerns and a decision.</task>
  <document src="interview.txt" />
  <output-format>Strengths; Concerns; Decision; Evidence quotes.</output-format>
</poml>`,
    sampleInput: `interview.txt -> interviewer notes`,
    sampleOutputFormat: `Strengths: ...\nConcerns: ...\nDecision: ...\nQuotes: ...`,
  },
  {
    slug: 'jd-refiner',
    title: 'Job Description Refiner',
    summary: 'Polish a job description for clarity and inclusivity.',
    tags: ['hr', 'rewrite'],
    poml: `<poml>
  <role>You are a talent brand writer.</role>
  <task>Rewrite the JD for clarity, inclusivity, and appeal.</task>
  <document src="jd.txt" />
  <output-format>Before/After blocks; Rationale.</output-format>
</poml>`,
    sampleInput: `jd.txt -> original JD`,
    sampleOutputFormat: `Before: ...\nAfter: ...\nWhy: ...`,
  },
  {
    slug: 'contract-diff',
    title: 'Contract Diff',
    summary: 'Highlight changes between two contract versions.',
    tags: ['legal', 'diff'],
    poml: `<poml>
  <role>You are a contracts analyst.</role>
  <task>Compare v1 and v2 and list changes with risk notes.</task>
  <document src="v1.txt" />
  <document src="v2.txt" />
  <output-format>Added; Removed; Modified; Risk notes.</output-format>
</poml>`,
    sampleInput: `v1.txt + v2.txt`,
    sampleOutputFormat: `Added: ...\nRemoved: ...\nModified: ...\nRisks: ...`,
  },
  {
    slug: 'rfq-writer',
    title: 'Procurement RFQ Writer',
    summary: 'Generate an RFQ draft from requirements.',
    tags: ['ops', 'writing'],
    poml: `<poml>
  <role>You are a procurement specialist.</role>
  <task>Draft an RFQ with scope, deliverables, and evaluation criteria.</task>
  <document src="requirements.txt" />
  <output-format>Background; Scope; Deliverables; Evaluation; Timeline.</output-format>
</poml>`,
    sampleInput: `requirements.txt -> bullets`,
    sampleOutputFormat: `Scope: ...\nDeliverables: ...\nEvaluation: ...\nTimeline: ...`,
  },
  {
    slug: 'quality-report',
    title: 'Manufacturing Quality Report',
    summary: 'Summarize defect logs into a weekly quality report.',
    tags: ['manufacturing', 'report'],
    poml: `<poml>
  <role>You are a quality engineer.</role>
  <task>Summarize defects by type and suggest corrective actions.</task>
  <table src="defects.csv" />
  <output-format>Summary; Pareto; Corrective actions; Owners.</output-format>
</poml>`,
    sampleInput: `defects.csv -> date,type,count`,
    sampleOutputFormat: `Summary: ...\nPareto: ...\nActions: ...`,
  },
  {
    slug: 'route-summary',
    title: 'Logistics Route Summary',
    summary: 'Summarize route performance and delays.',
    tags: ['logistics', 'report'],
    poml: `<poml>
  <role>You are a logistics analyst.</role>
  <task>Summarize on-time performance and delays with reasons.</task>
  <table src="routes.csv" />
  <output-format>On-time %; Delay reasons; Recommendations.</output-format>
</poml>`,
    sampleInput: `routes.csv -> route,date,ontime`,
    sampleOutputFormat: `On-time: ...\nDelays: ...\nRecs: ...`,
  },
  {
    slug: 'travel-itinerary',
    title: 'Travel Itinerary Planner',
    summary: 'Create a 3-day itinerary under given constraints.',
    tags: ['travel', 'planning'],
    poml: `<poml>
  <role>You are a travel planner.</role>
  <task>Create a 3-day itinerary within budget and preferences.</task>
  <document src="prefs.txt" />
  <output-format>Day 1; Day 2; Day 3; Budget notes.</output-format>
</poml>`,
    sampleInput: `prefs.txt -> city,budget,interests`,
    sampleOutputFormat: `Day 1: ...\nDay 2: ...\nDay 3: ...\nBudget: ...`,
  },
  {
    slug: 'quiz-generator',
    title: 'Education Quiz Generator',
    summary: 'Generate a short quiz from a chapter summary.',
    tags: ['education', 'generation'],
    poml: `<poml>
  <role>You are a teacher.</role>
  <task>Create 5 questions with answers from the summary.</task>
  <document src="chapter.txt" />
  <output-format>Q1/A1 ... Q5/A5.</output-format>
</poml>`,
    sampleInput: `chapter.txt -> short summary`,
    sampleOutputFormat: `Q1: ...\nA1: ...`,
  },
  {
    slug: 'discharge-instructions',
    title: 'Discharge Instructions',
    summary: 'Draft patient-friendly discharge instructions.',
    tags: ['healthcare', 'writing'],
    poml: `<poml>
  <role>You are a patient educator.</role>
  <task>Draft clear discharge instructions and warnings.</task>
  <document src="visit.txt" />
  <output-format>Summary; Medications; Follow-up; Warnings.</output-format>
</poml>`,
    sampleInput: `visit.txt -> diagnosis, meds`,
    sampleOutputFormat: `Summary: ...\nMeds: ...\nFollow-up: ...\nWarnings: ...`,
  },
  {
    slug: 'listing-writer',
    title: 'Real Estate Listing Writer',
    summary: 'Write a listing from property notes and highlights.',
    tags: ['realestate', 'writing'],
    poml: `<poml>
  <role>You are a real estate copywriter.</role>
  <task>Write an appealing property listing from notes.</task>
  <document src="property.txt" />
  <output-format>Headline; Highlights; Neighborhood; CTA.</output-format>
</poml>`,
    sampleInput: `property.txt -> beds/baths/sqft/highlights`,
    sampleOutputFormat: `Headline: ...\nHighlights: ...\nNeighborhood: ...\nCTA: ...`,
  },
  {
    slug: 'menu-generator',
    title: 'Restaurant Menu Generator',
    summary: 'Generate a menu from cuisine and constraints.',
    tags: ['restaurant', 'generation'],
    poml: `<poml>
  <role>You are a chef.</role>
  <task>Create a simple menu within dietary constraints.</task>
  <document src="constraints.txt" />
  <output-format>Starters; Mains; Desserts; Drinks.</output-format>
</poml>`,
    sampleInput: `constraints.txt -> cuisine + dietary`,
    sampleOutputFormat: `Starters: ...\nMains: ...`,
  },
  {
    slug: 'social-post-calendar',
    title: 'Social Post Calendar',
    summary: 'Create a weekly social post calendar from themes.',
    tags: ['marketing', 'planning'],
    poml: `<poml>
  <role>You are a social media manager.</role>
  <task>Plan 7 posts with captions and hashtags.</task>
  <document src="themes.txt" />
  <output-format>Day; Caption; Hashtags; Asset idea.</output-format>
</poml>`,
    sampleInput: `themes.txt -> product themes`,
    sampleOutputFormat: `Mon: ...\nTue: ...`,
  },
  {
    slug: 'slide-outline',
    title: 'Slide Outline Generator',
    summary: 'Produce slide outlines from a brief.',
    tags: ['business', 'outline'],
    poml: `<poml>
  <role>You are a presentation designer.</role>
  <task>Create a slide outline with titles and bullets.</task>
  <document src="brief.txt" />
  <output-format>Slide 1: title + bullets ...</output-format>
</poml>`,
    sampleInput: `brief.txt -> audience, goal`,
    sampleOutputFormat: `Slide 1: ...\nSlide 2: ...`,
  },
]

export const allSlugs = templates.map((t) => t.slug)


