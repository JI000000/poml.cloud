type TocItem = { id: string; label: string };

export default function DocToc({ items }: { items: TocItem[] }) {
  if (!items?.length) return null;
  return (
    <aside className="mt-8 md:mt-0 md:sticky md:top-20 md:h-[calc(100vh-160px)] md:overflow-auto text-sm">
      <div className="font-medium mb-2">On this page</div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.id}>
            <a className="hover:underline" href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a className="underline" href="#top">Back to top</a>
      </div>
    </aside>
  );
}


