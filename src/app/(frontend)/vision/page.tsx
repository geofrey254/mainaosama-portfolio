export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

import KeyPriorities from '@/components/visionpage/VisionCards'
import VisionHero from '@/components/visionpage/VisionHero'

export const metadata = {
  title: 'Vision & Leadership | Hon. Peter Maina – MCA Uthiru/Ruthimitu',
  description:
    'Discover the vision and leadership philosophy of Hon. Peter Maina (Maina Osama), MCA for Uthiru/Ruthimitu Ward. Learn how his strategic goals are shaping a more inclusive, empowered, and developed community in Nairobi County.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/vision`),
  openGraph: {
    title: 'Vision | Hon. Peter Maina’s Roadmap for Uthiru/Ruthimitu',
    description:
      'Hon. Peter Maina envisions a progressive, equitable, and united Uthiru/Ruthimitu Ward. Explore the values, goals, and strategic direction behind his grassroots-driven leadership.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/vision`,
    images: [
      {
        url: '/maish.png', // Replace with a symbolic image (e.g., community gathering, sunrise over the ward, etc.)
        width: 1200,
        height: 630,
        alt: 'Hon. Peter Maina Vision – A Future for All',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/vision`,
  },
}

export default async function AboutPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'vision' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <>
      <VisionHero />
      {page.layout?.map((block, index) => renderBlock(block, index))}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    // case 'about':
    //   return <AboutHero key={index} block={block} />
    case 'visionpage':
      return <KeyPriorities key={index} block={block} />
    // case 'core-values':
    //   return <ValuesSection key={index} block={block} />
    default:
      return null
  }
}
