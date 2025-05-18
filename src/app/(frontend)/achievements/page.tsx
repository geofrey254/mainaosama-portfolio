export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

import AchievementsPage from '@/components/achievementpage/AchieventCards'

export default async function AchievementPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'achievement' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return <>{page.layout?.map((block, index) => renderBlock(block, index))}</>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'achievement':
      return <AchievementsPage key={index} block={block} />

    default:
      return null
  }
}
