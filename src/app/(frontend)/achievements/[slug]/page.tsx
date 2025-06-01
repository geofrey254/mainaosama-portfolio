export const dynamic = 'force-dynamic'

import React from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { fetchAllAchievements } from '@/lib/achieveUtil'
import Image from 'next/image'
import { CalendarDays, MapPin, Lightbulb } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const project = docs[0]

  if (!project) {
    return {
      title: 'Project Not Found – Hon. Peter Maina | Uthiru/Ruthimitu MCA',
      description:
        'The project you are looking for could not be found. Explore more achievements and development milestones from Hon. Peter Maina (Maina Osama), MCA Uthiru/Ruthimitu.',
    }
  }

  const { title, impact, location, date, image } = project

  const ogImage =
    image &&
    image[0] &&
    typeof image[0].photo === 'object' &&
    image[0].photo !== null &&
    'url' in image[0].photo
      ? (image[0].photo.url as string)
      : '' // Fallback image

  const fullTitle = `${title} – Hon. Peter Maina Achievements`
  const fullDescription = `${impact} | Implemented in ${location} on ${date}. Learn more about this impactful project and how it’s transforming lives in Uthiru/Ruthimitu.`

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/achievements/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || 'Hon. Peter Maina Project Highlight',
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/achievements/${slug}`,
    },
  }
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadClient = await getPayload({ config })

  const programResult = await payloadClient.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
  })

  const program = programResult?.docs?.[0]
  if (!program) notFound()

  return (
    <>
      {/* Header Section */}
      <section className="relative bg-emerald-50 pt-32 md:pt-36 md:pb-8 px-4 md:px-12">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100 rounded-bl-full opacity-30" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-tr-full opacity-40" />
        </div>

        {/* Additional floating elements for depth */}
        <div
          className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-amber-300 opacity-10 blur-2xl animate-pulse"
          style={{ animationDuration: '6s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-40 h-40 rounded-full bg-emerald-300 opacity-10 blur-2xl animate-pulse"
          style={{ animationDuration: '10s' }}
        ></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-800/10 to-transparent opacity-50"></div>
        <div className="max-w-5xl mx-auto text-center">
          <MapPin className="inline text-emerald-600 mb-2" size={20} />
          <p className="text-sm text-emerald-700 mb-4">{program.location}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">{program.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{program.description}</p>
        </div>
      </section>

      {/* Images */}
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {program.image.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src={
                  typeof img.photo === 'object' && img.photo !== null && 'url' in img.photo
                    ? (img.photo.url ?? '')
                    : ''
                }
                alt={program.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Impact & Meta */}
      <section className="bg-emerald-50 py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-2 flex items-center gap-2">
              <Lightbulb className="text-amber-500" /> Project Impact
            </h2>
            <p className="text-gray-700">{program.impact}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-2 flex items-center gap-2">
              <CalendarDays className="text-blue-600" /> Date
            </h2>
            <p className="text-gray-700">{program.date}</p>
          </div>
        </div>
      </section>
    </>
  )
}

// Static params generation for SSG/ISR
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const programs = await fetchAllAchievements()
    return programs.docs.map((prog) => ({ slug: String(prog.slug) }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
