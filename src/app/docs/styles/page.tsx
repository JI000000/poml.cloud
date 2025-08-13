import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NextPrev from "@/components/NextPrev";
import { nextPrevFor } from "@/docs/data";
import SeoJsonLd from "@/components/SeoJsonLd";
import DocToc from "@/components/DocToc";

export const metadata: Metadata = {
  title: "POML Styles — Decoupling content and presentation",
  description: "How to use <stylesheet> to control formatting for stability and reuse.",
  alternates: { canonical: "https://poml.cloud/docs/styles" },
};

export default function Styles() {
  const nav = nextPrevFor("styles");
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">POML Styles</h1>
      </header>
      <main className="px-6 md:px-10 py-8">
        <div className="grid md:grid-cols-[1fr_260px] gap-8" id="top">
          <section className="max-w-3xl">
            <Breadcrumbs items={[{href:"/docs",label:"Docs"},{label:"Styles"}]} />
            <h2 id="why" className="font-medium">Why styles?</h2>
            <p className="mt-2">Decouple presentation so you can tweak formatting without changing task semantics.</p>
            <h2 id="pattern" className="mt-6 font-medium">Basic pattern</h2>
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
            <NextPrev prev={nav.prev} next={nav.next} />
            <SeoJsonLd json={{"@context":"https://schema.org","@type":"Article","headline":"POML Styles","description":"How to use <stylesheet> to control formatting for stability and reuse.","url":"https://poml.cloud/docs/styles"}} />
          </section>
          <DocToc items={[{id:"why",label:"Why styles?"},{id:"pattern",label:"Basic pattern"}]} />
        </div>
      </main>
    </div>
  );
}


