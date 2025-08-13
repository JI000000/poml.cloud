"use client";
import Link from "next/link";
import { templates } from "@/templates/data";
import { useMemo, useState } from "react";
import MiniSearch from "minisearch";
// Note: client component cannot export metadata; layout handles generic SEO.

export default function TemplatesPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    templates.forEach((t) => t.tags.forEach((x) => set.add(x)));
    return Array.from(set).sort();
  }, []);
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  type Doc = { id: number; slug: string; title: string; summary: string; tags: string[] };
  const mini = useMemo(() => {
    const m = new MiniSearch<Doc>({ fields: ["title", "summary", "tags"], storeFields: ["slug", "title", "summary", "tags"] });
    m.addAll(templates.map((t, i) => ({ id: i, ...t })) as Doc[]);
    return m;
  }, []);

  const searched = useMemo<Doc[]>(() => {
    if (!query.trim()) return templates.map((t, i) => ({ id: i, ...t }));
    return mini.search(query, { prefix: true, fuzzy: 0.2 }).map((r) => r as unknown as Doc);
  }, [mini, query]);

  const filtered = useMemo<Doc[]>(() => {
    const byTag = (ts: Doc[]) => ts.filter((t) => activeTags.length === 0 || activeTags.every((x) => t.tags.includes(x)));
    return byTag(searched);
  }, [searched, activeTags]);

  const highlight = (text: string) => {
    if (!query.trim()) return text;
    try {
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return text.replace(new RegExp(escaped, "ig"), (m) => `<mark>${m}</mark>`);
    } catch { return text; }
  };
  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag]));
  };
  return (
    <div className="min-h-screen">
      <main className="px-6 md:px-10 py-8" role="main">
        <h1 className="text-lg font-semibold tracking-tight mb-2">POML Templates</h1>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://poml.cloud"},
            {"@type":"ListItem","position":2,"name":"Templates","item":"https://poml.cloud/templates"}
          ]
        })}} />
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
            <h3 className="font-medium" dangerouslySetInnerHTML={{__html: highlight(t.title)}} />
            <p className="text-sm mt-2 opacity-80" dangerouslySetInnerHTML={{__html: highlight(t.summary)}} />
            <div className="mt-3 flex gap-2 flex-wrap">
              {t.tags.map((tag: string) => (
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


