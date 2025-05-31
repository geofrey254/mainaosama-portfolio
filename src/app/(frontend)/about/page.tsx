export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

import AboutHeader from '@/components/aboutpage/AboutHeader'
import Biography from '@/components/aboutpage/Biography'

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
