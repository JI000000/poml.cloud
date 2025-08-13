import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NextPrev from "@/components/NextPrev";
import { nextPrevFor } from "@/docs/data";
import SeoJsonLd from "@/components/SeoJsonLd";
import DocToc from "@/components/DocToc";

export const metadata: Metadata = {
  title: "POML Data Embedding — document/table/img best practices",
  description: "How to reference documents, tables and images reliably in POML.",
  alternates: { canonical: "https://poml.cloud/docs/data-embedding" },
};

export default function DataEmbedding() {
  const nav = nextPrevFor("data-embedding");
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">Data Embedding in POML</h1>
      </header>
      <main className="px-6 md:px-10 py-8">
        <div className="grid md:grid-cols-[1fr_260px] gap-8" id="top">
          <section className="max-w-3xl">
            <Breadcrumbs items={[{href:"/docs",label:"Docs"},{label:"Data Embedding"}]} />
            <h2 id="components" className="font-medium">Components</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{`<document src>`}: text files, snippets and large context.</li>
              <li>{`<table src>`}: CSV or simple TSV.</li>
              <li>{`<img src>`}: images referenced by URL.</li>
            </ul>
            <h2 id="tips" className="mt-6 font-medium">Tips</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Prefer stable URLs; fall back to uploads if available.</li>
              <li>Normalize tables; declare units and headers.</li>
              <li>Pair with {`<stylesheet>`} to control output format.</li>
            </ul>
            <NextPrev prev={nav.prev} next={nav.next} />
            <SeoJsonLd json={{"@context":"https://schema.org","@type":"Article","headline":"Data Embedding in POML","description":"How to reference documents, tables and images reliably in POML.","url":"https://poml.cloud/docs/data-embedding"}} />
          </section>
          <DocToc items={[{id:"components",label:"Components"},{id:"tips",label:"Tips"}]} />
        </div>
      </main>
    </div>
  );
}


