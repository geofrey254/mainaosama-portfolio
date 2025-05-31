export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import HeroBlock from '@/components/homepage/HeroBlock'
import LogosSection from '@/components/homepage/LogosSection'
import Bio from '@/components/homepage/Bio'
import Impact from '@/components/homepage/Impact'
import Vision from '@/components/homepage/Vision'
import GetInvolved from '@/components/homepage/CTA'
import config from '@/payload.config'
import './styles.css'
import Testimonial from '@/components/homepage/Testimonial'

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
        {page.layout?.map((block, index) => renderBlock(block, index))}
        <GetInvolved />
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock key={index} block={block} />
    case 'logos-section':
      return <LogosSection key={index} block={block} />
    case 'bio':
      return <Bio key={index} block={block} />
    case 'impact':
      return <Impact key={index} block={block} />
    case 'testimonial':
      return <Testimonial key={index} block={block} />
    case 'vision':
      return <Vision key={index} block={block} />

    default:
      return null
  }
}
