export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import ContactHero from '@/components/contactPage/ContactHero'
import ContactForm from '@/components/contactPage/ContactSection'

import config from '@/payload.config'

export const metadata = {
  title: 'Contact Hon. Peter Maina | Maina Osama – MCA Uthiru/Ruthimitu',
  description:
    'Get in touch with Hon. Peter Maina (Maina Osama), MCA for Uthiru/Ruthimitu Ward. Reach out for inquiries, community concerns, or partnership opportunities to build a better Nairobi County.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/contact`),
  openGraph: {
    title: 'Contact | Reach Out to Hon. Peter Maina – Uthiru/Ruthimitu MCA',
    description:
      'Have a question, concern, or idea? Connect directly with Hon. Peter Maina. We welcome feedback, collaboration, and all community engagement efforts.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    images: [
      {
        url: '/contactBanner.png', // Replace with an image of Maina Osama at a community event or office
        width: 1200,
        height: 630,
        alt: 'Contact Hon. Peter Maina – Community Connection',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
}

export default async function ContactPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'contact-us' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <>
      <ContactHero />
      {page.layout?.map((block, index) => renderBlock(block, index))}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'contact':
      return <ContactForm key={index} block={block} />

    default:
      return null
  }
}
