import Link from "next/link";
import { notFound } from "next/navigation";
import { templates } from "@/templates/data";
import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import RelatedTemplates from "@/components/RelatedTemplates";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function TemplateDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = templates.find((t) => t.slug === slug);
  if (!data) return notFound();
  const encoded = Buffer.from(data.poml, "utf-8").toString("base64");
  return (
    <div className="min-h-screen">
      <main className="px-6 md:px-10 py-8 max-w-3xl" role="main">
        <Breadcrumbs items={[{href:"/templates",label:"Templates"},{label:data.title}]} />
        <h1 className="text-xl font-semibold tracking-tight mb-2">{data.title}</h1>
        <h2 className="sr-only">Template summary and code</h2>
        <p className="text-sm opacity-80">{data.summary}</p>
        <pre className="mt-4 text-sm rounded-lg border border-black/10 dark:border-white/15 p-4 overflow-auto">
{data.poml}
        </pre>
        <section className="mt-6">
          <h3 className="font-medium">How to use</h3>
          <ol className="list-decimal pl-6 mt-2 text-sm space-y-1">
            <li>Click “Open in Sandbox” to load this template.</li>
            <li>Adjust the {`<task>`} and {`<stylesheet>`} to your needs.</li>
            <li>Paste or reference your files via {`<document>`}/{`<table>`}/{`<img>`}.</li>
          </ol>
        </section>
        <section className="mt-6">
          <h3 className="font-medium">Sample I/O</h3>
          <div className="text-sm mt-2">
            <strong>Input</strong>
            <pre className="mt-1 rounded-md border border-black/10 dark:border-white/15 p-3 overflow-auto">{templates.find(t=>t.slug===slug)?.sampleInput ?? `files -> (fill in your own)`}</pre>
            <strong className="mt-3 block">Expected output format</strong>
            <pre className="mt-1 rounded-md border border-black/10 dark:border-white/15 p-3 overflow-auto">{templates.find(t=>t.slug===slug)?.sampleOutputFormat ?? `Follow the Output format section in the POML.`}</pre>
          </div>
        </section>
        <section className="mt-6">
          <h3 className="font-medium">FAQ</h3>
          <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Why no output here? This page shows the POML. Use the Sandbox to preview.</li>
            <li>Need to run locally without paid API? Use the upcoming “Local mode (Ollama)”.</li>
          </ul>
        </section>
        <div className="mt-4">
          <Link className="inline-flex items-center rounded-md px-3 py-1.5 bg-foreground text-background text-sm" href={`/sandbox#${encoded}`}>Open in Sandbox</Link>
        </div>
        <RelatedTemplates currentSlug={slug} tags={data.tags} />
        <SeoJsonLd json={{
          "@context":"https://schema.org",
          "@type":"SoftwareApplication",
          "name": data.title,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web",
          "description": data.summary,
          "url": `https://poml.cloud/templates/${slug}`,
          "offers": {"@type":"Offer","price":"0","priceCurrency":"USD"}
        }} />
        <SeoJsonLd json={{
          "@context":"https://schema.org",
          "@type":"HowTo",
          "name": `${data.title} — How to use`,
          "step": [
            {"@type":"HowToStep","text":"Open in Sandbox"},
            {"@type":"HowToStep","text":"Adjust <task> and <stylesheet>"},
            {"@type":"HowToStep","text":"Reference your files via <document>/<table>/<img>"}
          ]
        }} />
      </main>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = templates.find((t) => t.slug === slug);
  if (!data) return {};
  const title = `${data.title} — POML Template`;
  const description = data.summary;
  const url = `https://poml.cloud/templates/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "POML Cloud" },
    twitter: { card: "summary" },
  };
}


