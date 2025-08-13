import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML vs JSON prompts — When and how to migrate",
  description: "Compare POML with JSON/template prompts and learn a practical migration path.",
  alternates: { canonical: "https://poml.cloud/docs/poml-vs-json" },
};

export default function PomlVsJson() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">POML vs JSON prompts</h1>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-3xl">
        <h2 className="font-medium">TL;DR</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>POML provides semantic tags, data embedding, and decoupled styling.</li>
          <li>JSON/templates are flexible but often mix content with presentation.</li>
        </ul>
        <h2 className="mt-6 font-medium">Migration tips</h2>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          <li>Map repeated parts to {`<role>`}, {`<task>`}, {`<example>`}.</li>
          <li>External inputs → {`<document>`}, {`<table>`}, {`<img>`}.</li>
          <li>Move formatting into {`<stylesheet>`}.</li>
          <li>Keep a baseline output to compare during migration.</li>
        </ol>
      </main>
    </div>
  );
}


