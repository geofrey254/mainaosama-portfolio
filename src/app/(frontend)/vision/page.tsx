export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

import KeyPriorities from '@/components/visionpage/VisionCards'
import VisionHero from '@/components/visionpage/VisionHero'

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
