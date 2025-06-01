export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

import AboutHeader from '@/components/aboutpage/AboutHeader'
import Biography from '@/components/aboutpage/Biography'

export const metadata = {
  title: 'About Hon. Peter Maina | Maina Osama – MCA Uthiru/Ruthimitu',
  description:
    'Learn more about Hon. Peter Maina (Maina Osama), the visionary MCA for Uthiru/Ruthimitu Ward in Nairobi County. Discover his leadership journey, mission, and commitment to community development and inclusive governance.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/about`),
  openGraph: {
    title: 'About Hon. Peter Maina | Transforming Leadership at the Grassroots',
    description:
      'Explore the story and leadership philosophy of Hon. Peter Maina (Maina Osama). From public service to policy-making, discover how he is shaping the future of Uthiru/Ruthimitu through inclusive and accountable leadership.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    images: [
      {
        url: '/speech.png',
        width: 1200,
        height: 630,
        alt: 'Hon. Peter Maina – About the MCA',
      },
    ],
    type: 'profile',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
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
      slug: { equals: 'about' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <>
      <AboutHeader />
      {page.layout?.map((block, index) => renderBlock(block, index))}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'about':
      return <Biography key={index} block={block} />
    // case 'goals':
    //   return <GoalsSection key={index} block={block} />
    // case 'core-values':
    //   return <ValuesSection key={index} block={block} />
    default:
      return null
  }
}
