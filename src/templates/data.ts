export type TemplateItem = {
  slug: string
  title: string
  summary: string
  tags: string[]
  poml: string
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
]

export const allSlugs = templates.map((t) => t.slug)


