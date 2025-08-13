import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Cloud — Learn, preview, and share POML",
  description: "A modern, zero-install POML sandbox and template hub.",
  alternates: { canonical: "https://poml.cloud/" },
  openGraph: { title: "POML Cloud", description: "Learn, preview, and share POML in your browser.", url: "https://poml.cloud", siteName: "POML Cloud" },
  twitter: { card: "summary" },
};

export default function Home() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <header className="sr-only"><h1>POML Cloud</h1></header>
      <main className="px-6 md:px-10 py-10">
        <section className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Prompt Orchestration Markup Language</h2>
          <p className="mt-3 text-balance text-[15px] md:text-[17px] leading-7 text-black/70 dark:text-white/70">
            Learn, preview, and share POML in your browser. Zero setup. Zero cost.
          </p>
          <div className="mt-6 flex gap-3">
            <LinkButton href="/sandbox">Open in Sandbox</LinkButton>
            <LinkButton href="/templates" variant="secondary">Browse Templates</LinkButton>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="font-medium">Featured templates</h3>
          <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/templates/blog-outline-generator" className="block rounded-lg border border-black/10 dark:border-white/15 p-3 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="font-medium text-sm">Blog Outline Generator</div>
              <div className="text-xs opacity-80 mt-1">SEO-friendly outline with H2/H3 and keywords</div>
            </Link>
            <Link href="/templates/table-to-report" className="block rounded-lg border border-black/10 dark:border-white/15 p-3 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="font-medium text-sm">Table → Executive Report</div>
              <div className="text-xs opacity-80 mt-1">Turn CSV into an exec summary</div>
            </Link>
            <Link href="/templates/customer-support-summary" className="block rounded-lg border border-black/10 dark:border-white/15 p-3 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="font-medium text-sm">Customer Support Summary</div>
              <div className="text-xs opacity-80 mt-1">Summarize threads with actions</div>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-3 md:p-4">
            <h3 className="font-medium">Structured prompting</h3>
            <p className="text-sm mt-2 opacity-80">HTML-like semantic tags (&lt;role&gt;, &lt;task&gt;, &lt;example&gt;) improve readability and reuse.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-3 md:p-4">
            <h3 className="font-medium">Data & styling</h3>
            <p className="text-sm mt-2 opacity-80">Embed documents, tables, and images, and decouple presentation via stylesheets.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-3 md:p-4">
            <h3 className="font-medium">Zero-install sandbox</h3>
            <p className="text-sm mt-2 opacity-80">Validate and preview POML locally in your browser. No API keys required.</p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="font-medium">Live example</h3>
          <div className="mt-3 rounded-lg border border-black/10 dark:border-white/15 p-4 card">
            <pre className="text-xs overflow-auto">{`<poml>\n  <role>You are a patient teacher.</role>\n  <task>Explain photosynthesis using the image.</task>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3b/Photosynthesis_equation.svg\" alt=\"Diagram\" />\n  <output-format>Under 80 words; friendly, precise.</output-format>\n</poml>`}</pre>
            <div className="mt-3">
              <Link href="/sandbox" className="btn-primary inline-flex items-center rounded-md px-3.5 py-2 text-sm font-medium">Open this in Sandbox</Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="sr-only" />
    </div>
  );
}
