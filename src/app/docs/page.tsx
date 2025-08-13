import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Docs — Guides and references",
  description: "Docs hub for POML: quickstart, cheatsheet, styles and more.",
  alternates: { canonical: "https://poml.cloud/docs" },
};

import Link from "next/link";

export default function DocsHub() {
  return (
    <div className="min-h-screen">
      <main className="px-6 md:px-10 py-10 max-w-3xl">
        <h1 className="text-xl font-semibold tracking-tight">POML Docs</h1>
        <p className="mt-3 text-[15px] leading-7 opacity-80">Welcome to the docs hub. Pick a guide to get started.</p>

        <nav className="mt-6 text-sm text-muted">
          <span>Sections: </span>
          <Link href="#guides" className="underline mr-3">Guides</Link>
          <Link href="/templates" className="underline mr-3">Templates</Link>
          <Link href="/sandbox" className="underline">Sandbox</Link>
        </nav>

        <h2 id="guides" className="mt-8 font-medium">Guides</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><Link className="underline" href="/docs/quickstart">Quickstart</Link></li>
          <li><Link className="underline" href="/docs/cheatsheet">Cheatsheet</Link></li>
          <li><Link className="underline" href="/docs/styles">Styles</Link></li>
          <li><Link className="underline" href="/docs/poml-vs-json">POML vs JSON prompts</Link></li>
          <li><Link className="underline" href="/docs/data-embedding">Data Embedding</Link></li>
        </ul>

        <div className="mt-10 text-sm text-muted">
          Can’t find what you need? Browse <Link className="underline" href="/templates">Templates</Link> or open the <Link className="underline" href="/sandbox">Sandbox</Link>.
        </div>
      </main>
    </div>
  );
}


