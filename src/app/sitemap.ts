import type { MetadataRoute } from 'next'
import { allSlugs } from '@/templates/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://poml.cloud'
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sandbox`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/docs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/templates`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/docs/quickstart`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/docs/cheatsheet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/docs/styles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/docs/poml-vs-json`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/docs/data-embedding`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
  const templateEntries: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${base}/templates/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  return [...staticEntries, ...templateEntries]
}


