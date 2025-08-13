import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Styles — Decoupling content and presentation",
  description: "How to use <stylesheet> to control formatting for stability and reuse.",
  alternates: { canonical: "https://poml.cloud/docs/styles" },
};

export default function Styles() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">POML Styles</h1>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-3xl">
        <h2 className="font-medium">Why styles?</h2>
        <p className="mt-2">Decouple presentation so you can tweak formatting without changing task semantics.</p>
        <h2 className="mt-6 font-medium">Basic pattern</h2>
        <pre className="mt-2 rounded-lg border border-black/10 dark:border-white/15 p-4 overflow-auto text-sm">
{`<poml>
  <task>Produce a short report.</task>
  <stylesheet>
    h2 { style: "## {text}" }
    li { style: "- {text}" }
  </stylesheet>
  <output-format>Use headings and bullet points.</output-format>
</poml>`}
        </pre>
      </main>
    </div>
  );
}


