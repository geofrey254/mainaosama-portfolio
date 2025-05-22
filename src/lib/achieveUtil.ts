import config from '@/payload.config'
import { getPayload } from 'payload'

export async function fetchAllAchievements(page = 1, limit = 9) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const res = await payload.find({
    collection: 'projects',
    depth: 2,
    limit,
    page,
  })

  return {
    docs: res.docs.map((doc) => ({
      id: doc.id,
      title: doc.title,
      description: doc.description,
      impact: doc.impact,
      date: doc.date,
      location: doc.location,
      image: (doc.image || []).map((img) => ({
        photo: {
          url: typeof img.photo === 'object' && 'url' in img.photo ? img.photo.url : '',
          alt: typeof img.photo === 'object' && 'alt' in img.photo ? img.photo.alt : '',
        },
      })),
      slug: doc.slug,
    })),

    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}
