import Link from "next/link";
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
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight">POML Cloud</h1>
        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" href="/docs">Docs</Link>
          <Link className="hover:underline" href="/templates">Templates</Link>
          <Link className="hover:underline" href="/sandbox">Sandbox</Link>
        </nav>
      </header>
      <main className="px-6 md:px-10 py-10">
        <section className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Prompt Orchestration Markup Language</h2>
          <p className="mt-4 text-balance text-base md:text-lg text-black/70 dark:text-white/70">
            Learn, preview, and share POML in your browser. Zero setup. Zero cost.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/sandbox" className="inline-flex items-center rounded-md px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90">Open in Sandbox</Link>
            <Link href="/templates" className="inline-flex items-center rounded-md px-4 py-2 border border-black/10 dark:border-white/15 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">Browse Templates</Link>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
            <h3 className="font-medium">Structured prompting</h3>
            <p className="text-sm mt-2 opacity-80">HTML-like semantic tags (&lt;role&gt;, &lt;task&gt;, &lt;example&gt;) improve readability and reuse.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
            <h3 className="font-medium">Data & styling</h3>
            <p className="text-sm mt-2 opacity-80">Embed documents, tables, and images, and decouple presentation via stylesheets.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
            <h3 className="font-medium">Zero-install sandbox</h3>
            <p className="text-sm mt-2 opacity-80">Validate and preview POML locally in your browser. No API keys required.</p>
          </div>
        </section>
      </main>
      <footer className="px-6 md:px-10 py-10 border-t border-black/10 dark:border-white/10 text-sm opacity-70">
        <p>
          Not affiliated with Microsoft. See official docs for the POML spec.
          <span className="ml-2 underline"><a href="https://microsoft.github.io/poml/latest/" target="_blank">Docs</a></span>
          <span className="ml-3 underline"><a href="https://github.com/microsoft/poml" target="_blank">GitHub</a></span>
        </p>
      </footer>
    </div>
  );
}
