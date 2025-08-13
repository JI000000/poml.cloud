import Link from "next/link";
import { notFound } from "next/navigation";

type TemplateData = {
  title: string;
  poml: string;
  summary: string;
};

const DB: Record<string, TemplateData> = {
  "customer-support-summary": {
    title: "Customer Support Summary",
    summary: "Summarize a support ticket thread with key actions and sentiment.",
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
  "image-assisted-explanation": {
    title: "Image-assisted Explanation",
    summary: "Explain a concept using a reference image with constraints.",
    poml: `<poml>
  <role>You are a patient teacher.</role>
  <task>Explain photosynthesis using the reference image.</task>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Photosynthesis_equation.svg" alt="Diagram" />
  <output-format>Under 80 words; friendly, precise.</output-format>
</poml>`,
  },
  "report-structuring": {
    title: "Report Structuring",
    summary: "Transform raw notes into a structured report with headings and bullets.",
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
};

export default async function TemplateDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = DB[slug];
  if (!data) return notFound();
  const encoded = Buffer.from(data.poml, "utf-8").toString("base64");
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">{data.title}</div>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/templates">Templates</Link>
          <Link className="hover:underline" href={`/sandbox#${encoded}`}>Open in Sandbox</Link>
        </nav>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-3xl">
        <p className="text-sm opacity-80">{data.summary}</p>
        <pre className="mt-4 text-sm rounded-lg border border-black/10 dark:border-white/15 p-4 overflow-auto">
{data.poml}
        </pre>
        <div className="mt-4">
          <Link className="inline-flex items-center rounded-md px-3 py-1.5 bg-foreground text-background text-sm" href={`/sandbox#${encoded}`}>Open in Sandbox</Link>
        </div>
        <div className="mt-8 text-sm opacity-70">
          <p>Not affiliated with Microsoft. See the official POML docs for the full spec.</p>
          <p>
            <a className="underline" href="https://microsoft.github.io/poml/latest/" target="_blank">Official Docs</a>
            <span className="ml-3" />
            <a className="underline" href="https://github.com/microsoft/poml" target="_blank">GitHub</a>
          </p>
        </div>
      </main>
    </div>
  );
}


