import Link from "next/link";

type TemplateMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

const templates: TemplateMeta[] = [
  {
    slug: "customer-support-summary",
    title: "Customer Support Summary",
    summary: "Summarize a support ticket thread with key actions and sentiment.",
    tags: ["support", "summary"],
  },
  {
    slug: "image-assisted-explanation",
    title: "Image-assisted Explanation",
    summary: "Explain a concept using a reference image with constraints.",
    tags: ["education", "vision"],
  },
  {
    slug: "report-structuring",
    title: "Report Structuring",
    summary: "Transform raw notes into a structured report with headings and bullets.",
    tags: ["report", "formatting"],
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">Templates</div>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/sandbox">Sandbox</Link>
        </nav>
      </header>
      <main className="px-6 md:px-10 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </main>
    </div>
  );
}


