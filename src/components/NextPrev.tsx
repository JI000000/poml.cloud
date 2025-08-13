import Link from "next/link";

export default function NextPrev({ prev, next }: { prev?: { href: string; label: string }; next?: { href: string; label: string } }) {
  if (!prev && !next) return null;
  return (
    <div className="mt-10 flex items-center justify-between text-sm">
      <div>{prev && <Link className="underline" href={prev.href}>← {prev.label}</Link>}</div>
      <div>{next && <Link className="underline" href={next.href}>{next.label} →</Link>}</div>
    </div>
  );
}


