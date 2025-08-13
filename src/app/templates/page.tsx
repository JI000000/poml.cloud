"use client";
import Link from "next/link";
import { templates } from "@/templates/data";
import { useMemo, useState } from "react";
// Note: client component cannot export metadata; layout handles generic SEO.

export default function TemplatesPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    templates.forEach((t) => t.tags.forEach((x) => set.add(x)));
    return Array.from(set).sort();
  }, []);
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const hitTitle = t.title.toLowerCase().includes(query.toLowerCase());
      const hitSummary = t.summary.toLowerCase().includes(query.toLowerCase());
      const hitTag = activeTags.length === 0 || activeTags.every((x) => t.tags.includes(x));
      return (hitTitle || hitSummary) && hitTag;
    });
  }, [query, activeTags]);
  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag]));
  };
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search templates" className="w-full md:w-80 rounded-md border border-black/10 dark:border-white/15 px-3 py-2 bg-background" />
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button key={tag} onClick={()=>toggleTag(tag)} className={`text-xs px-2 py-1 rounded-full border ${activeTags.includes(tag)?"bg-foreground text-background":"border-black/10 dark:border-white/15"}`}>{tag}</button>
            ))}
            {activeTags.length>0 && (
              <button onClick={()=>setActiveTags([])} className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/15">Clear</button>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t) => (
          <Link key={t.slug} href={`/templates/${t.slug}`} className="block rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/5">
            <h3 className="font-medium">{t.title}</h3>
            <p className="text-sm mt-2 opacity-80">{t.summary}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {t.tags.map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-full border ${activeTags.includes(tag)?"bg-foreground text-background":"border-black/10 dark:border-white/15 opacity-80"}`}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
        </div>
      </main>
    </div>
  );
}


