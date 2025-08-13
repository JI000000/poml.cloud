"use client";
import Script from "next/script";

type JsonLd = Record<string, unknown>;

export default function SeoJsonLd({ json }: { json: JsonLd }) {
  return (
    <Script
      id={`jsonld-${Math.random().toString(36).slice(2)}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}


