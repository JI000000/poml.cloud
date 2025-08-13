import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://poml.cloud'
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sandbox`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/templates`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/docs/quickstart`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/templates/customer-support-summary`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/templates/image-assisted-explanation`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/templates/report-structuring`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]
}


