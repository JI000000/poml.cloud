import Link from "next/link";
import { templates } from "@/templates/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POML Templates — Ready-to-use prompts for developers",
  description: "Browse ready-to-use POML templates across industries and tasks. Open any template in the Sandbox.",
  alternates: { canonical: "https://poml.cloud/templates" },
  openGraph: {
    title: "POML Templates",
    description: "Ready-to-use POML templates you can open in the Sandbox.",
    url: "https://poml.cloud/templates",
    siteName: "POML Cloud",
  },
  twitter: { card: "summary" },
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between" role="banner">
        <h1 className="text-lg font-semibold tracking-tight">POML Templates</h1>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/sandbox">Sandbox</Link>
        </nav>
      </header>
      <main className="px-6 md:px-10 py-8" role="main">
        <h2 className="sr-only">All templates</h2>
        <div className="mb-6 text-sm opacity-80">Browse by tag:</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <Link key={t.slug} href={`/templates/${t.slug}`} className="block rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/5">
            <h3 className="font-medium">{t.title}</h3>
            <p className="text-sm mt-2 opacity-80">{t.summary}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {t.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-black/10 dark:border-white/15 opacity-80">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
        </div>
      </main>
    </div>
  );
}


