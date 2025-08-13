export type DocItem = { slug: string; title: string; summary: string };

export const docs: DocItem[] = [
  { slug: "quickstart", title: "POML Quickstart", summary: "Learn POML in minutes and preview in the browser." },
  { slug: "cheatsheet", title: "POML Cheatsheet", summary: "Core tags and patterns at a glance." },
  { slug: "styles", title: "POML Styles", summary: "Decouple content and presentation with <stylesheet>." },
  { slug: "poml-vs-json", title: "POML vs JSON prompts", summary: "When to migrate and how." },
  { slug: "data-embedding", title: "Data Embedding in POML", summary: "Best practices for document/table/img." },
];

export function nextPrevFor(slug: string) {
  const i = docs.findIndex((d) => d.slug === slug);
  return {
    prev: i > 0 ? { href: `/docs/${docs[i - 1].slug}`, label: docs[i - 1].title } : undefined,
    next: i >= 0 && i < docs.length - 1 ? { href: `/docs/${docs[i + 1].slug}`, label: docs[i + 1].title } : undefined,
  };
}



