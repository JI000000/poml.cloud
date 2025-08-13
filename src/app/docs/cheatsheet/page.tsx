import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NextPrev from "@/components/NextPrev";
import { nextPrevFor } from "@/docs/data";
import SeoJsonLd from "@/components/SeoJsonLd";
import DocToc from "@/components/DocToc";

export const metadata: Metadata = {
  title: "POML Cheatsheet — Core tags and patterns",
  description: "Quick reference for POML tags like <role>, <task>, <example>, <document>, <table>, <img>, <stylesheet>.",
  alternates: { canonical: "https://poml.cloud/docs/cheatsheet" },
};

export default function Cheatsheet() {
  const nav = nextPrevFor("cheatsheet");
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
        <h1 className="text-lg font-semibold tracking-tight">POML Cheatsheet</h1>
      </header>
      <main className="px-6 md:px-10 py-8">
        <div className="grid md:grid-cols-[1fr_260px] gap-8" id="top">
          <section className="max-w-3xl">
            <Breadcrumbs items={[{href:"/docs",label:"Docs"},{label:"Cheatsheet"}]} />
            <h2 id="core-tags" className="font-medium">Core tags</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{`<role>`} Define the assistant persona</li>
              <li>{`<task>`} Describe the goal</li>
              <li>{`<example>`} Provide few-shot examples</li>
              <li>{`<document>`}/{`<table>`}/{`<img>`} Reference inputs</li>
              <li>{`<stylesheet>`} Control presentation</li>
              <li>{`<let>`}/if/for Templating helpers</li>
            </ul>
            <NextPrev prev={nav.prev} next={nav.next} />
            <SeoJsonLd json={{"@context":"https://schema.org","@type":"Article","headline":"POML Cheatsheet","description":"Core tags and patterns at a glance.","url":"https://poml.cloud/docs/cheatsheet"}} />
          </section>
          <DocToc items={[{id:"core-tags",label:"Core tags"}]} />
        </div>
      </main>
    </div>
  );
}


