import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Quickstart — Learn in minutes",
  description: "Learn POML in minutes and preview in the browser.",
  alternates: { canonical: "https://poml.cloud/docs/quickstart" },
};

export default function Quickstart() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">POML Quickstart</h1>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-3xl">
        <p>POML helps you structure prompts using semantic tags and decoupled styling.</p>
        <h2 className="mt-6 font-medium">Hello POML</h2>
        <pre className="mt-2 rounded-lg border border-black/10 dark:border-white/15 p-4 overflow-auto text-sm">
{`<poml>
  <role>You are a patient teacher.</role>
  <task>Explain photosynthesis using the image.</task>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Photosynthesis_equation.svg" alt="Diagram" />
  <output-format>Under 80 words; friendly, precise.</output-format>
</poml>`}
        </pre>
        <p className="mt-4"><a className="underline" href="/sandbox">Open in Sandbox</a></p>
      </main>
    </div>
  );
}


