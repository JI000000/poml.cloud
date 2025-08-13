import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NextPrev from "@/components/NextPrev";
import { nextPrevFor } from "@/docs/data";
import SeoJsonLd from "@/components/SeoJsonLd";
import DocToc from "@/components/DocToc";

export const metadata: Metadata = {
  title: "POML vs JSON prompts — When and how to migrate",
  description: "Compare POML with JSON/template prompts and learn a practical migration path.",
  alternates: { canonical: "https://poml.cloud/docs/poml-vs-json" },
};

export default function PomlVsJson() {
  const nav = nextPrevFor("poml-vs-json");
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">POML vs JSON prompts</h1>
      </header>
      <main className="px-6 md:px-10 py-8">
        <div className="grid md:grid-cols-[1fr_260px] gap-8" id="top">
          <section className="max-w-3xl">
            <Breadcrumbs items={[{href:"/docs",label:"Docs"},{label:"POML vs JSON"}]} />
            <h2 id="tldr" className="font-medium">TL;DR</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>POML provides semantic tags, data embedding, and decoupled styling.</li>
              <li>JSON/templates are flexible but often mix content with presentation.</li>
            </ul>
            <h2 id="migration" className="mt-6 font-medium">Migration tips</h2>
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>Map repeated parts to {`<role>`}, {`<task>`}, {`<example>`}.</li>
              <li>External inputs → {`<document>`}, {`<table>`}, {`<img>`}.</li>
              <li>Move formatting into {`<stylesheet>`}.</li>
              <li>Keep a baseline output to compare during migration.</li>
            </ol>
            <NextPrev prev={nav.prev} next={nav.next} />
            <SeoJsonLd json={{"@context":"https://schema.org","@type":"Article","headline":"POML vs JSON prompts","description":"Compare POML with JSON/template prompts and learn a practical migration path.","url":"https://poml.cloud/docs/poml-vs-json"}} />
          </section>
          <DocToc items={[{id:"tldr",label:"TL;DR"},{id:"migration",label:"Migration tips"}]} />
        </div>
      </main>
    </div>
  );
}


