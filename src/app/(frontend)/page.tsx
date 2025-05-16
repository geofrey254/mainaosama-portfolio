export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import HeroBlock from '@/components/homepage/HeroBlock'
import Bio from '@/components/homepage/Bio'
import Impact from '@/components/homepage/Impact'
import Vision from '@/components/homepage/Vision'
import MediaGallery from '@/components/homepage/Gall'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home-page' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <div className="page">
        <HeroBlock />
        <Bio />
        <Impact />
        <Vision />
        <MediaGallery />
        {page.layout?.map((block, index) => renderBlock(block, index))}
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    // case 'hero':
    //   return <HeroBlock key={index} block={block} />

    default:
      return null
  }
}
