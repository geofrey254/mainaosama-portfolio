import { Hero } from '@/blocks/homepage/hero/schema'
import type { CollectionConfig } from 'payload'
import { LandingAbout } from '@/blocks/homepage/home-bio/schema'
import { LandingImpact } from '@/blocks/homepage/impact/schema'
import { LandingVision } from '@/blocks/homepage/vision/schema'
import { About } from '@/blocks/about/schema'
import { Contact } from '@/blocks/contactPage/schema'
import { VisionPage } from '@/blocks/visionPage/schema'
import { Achievement } from '@/blocks/achievementpage/schema'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [
        Hero,
        LandingAbout,
        LandingImpact,
        LandingVision,
        About,
        Contact,
        VisionPage,
        Achievement,
      ],
    },
  ],
}
