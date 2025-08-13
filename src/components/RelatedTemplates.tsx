import Link from "next/link";
import { templates } from "@/templates/data";

export default function RelatedTemplates({ currentSlug, tags }: { currentSlug: string; tags: string[] }) {
  const pool = templates.filter((t) => t.slug !== currentSlug);
  const scored = pool
    .map((t) => ({ t, score: t.tags.filter((x) => tags.includes(x)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((x) => x.t);
  if (scored.length === 0) return null;
  return (
    <section className="mt-10">
      <h3 className="font-medium text-base">Related templates</h3>
      <div className="mt-3 grid md:grid-cols-2 gap-3">
        {scored.map((t) => (
          <Link key={t.slug} href={`/templates/${t.slug}`} className="block rounded-lg border border-black/10 dark:border-white/15 p-3 hover:bg-black/5 dark:hover:bg-white/5">
            <div className="font-medium text-sm">{t.title}</div>
            <div className="text-xs opacity-80 mt-1 line-clamp-2">{t.summary}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}


