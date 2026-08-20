import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/site'
import { servicePages } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...servicePages.map((p) => ({
      url: `${BASE_URL}/services/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
