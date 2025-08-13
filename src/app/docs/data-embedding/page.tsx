import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Data Embedding — document/table/img best practices",
  description: "How to reference documents, tables and images reliably in POML.",
  alternates: { canonical: "https://poml.cloud/docs/data-embedding" },
};

export default function DataEmbedding() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">Data Embedding in POML</h1>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-3xl">
        <h2 className="font-medium">Components</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>{`<document src>`}: text files, snippets and large context.</li>
          <li>{`<table src>`}: CSV or simple TSV.</li>
          <li>{`<img src>`}: images referenced by URL.</li>
        </ul>
        <h2 className="mt-6 font-medium">Tips</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Prefer stable URLs; fall back to uploads if available.</li>
          <li>Normalize tables; declare units and headers.</li>
          <li>Pair with {`<stylesheet>`} to control output format.</li>
        </ul>
      </main>
    </div>
  );
}


