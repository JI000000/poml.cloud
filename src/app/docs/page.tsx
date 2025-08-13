import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Docs — Guides and references",
  description: "Docs hub for POML: quickstart, cheatsheet, styles and more.",
  alternates: { canonical: "https://poml.cloud/docs" },
};

export default function DocsHub() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight">POML Docs</h1>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-3xl">
        <p className="opacity-80">Welcome to the docs hub. Pick a guide to get started.</p>
        <h2 className="mt-6 font-medium">Guides</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><a className="underline" href="/docs/quickstart">Quickstart</a></li>
          <li><a className="underline" href="/docs/cheatsheet">Cheatsheet</a></li>
          <li><a className="underline" href="/docs/styles">Styles</a></li>
          <li><a className="underline" href="/docs/poml-vs-json">POML vs JSON prompts</a></li>
          <li><a className="underline" href="/docs/data-embedding">Data Embedding</a></li>
        </ul>
        <div className="mt-10 text-sm text-muted">
          Can’t find what you need? Browse <a className="underline" href="/templates">Templates</a> or open the <a className="underline" href="/sandbox">Sandbox</a>.
        </div>
      </main>
    </div>
  );
}


