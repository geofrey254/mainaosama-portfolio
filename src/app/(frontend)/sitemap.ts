import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    next: { revalidate: 3600 },
  })

  if (!projectRes.ok) {
    throw new Error(`Failed to fetch project data`)
  }

  const projectData = await projectRes.json()
  const projects: { slug: string }[] = projectData.docs

  const dynamicProjectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://www.mainaosama.com/achievements/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://www.mainaosama.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://www.mainaosama.com/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mainaosama.com/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mainaosama.com/vision',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mainaosama.com/achievements',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.mainaosama.com/media',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  return [...staticPages, ...dynamicProjectEntries]
}
