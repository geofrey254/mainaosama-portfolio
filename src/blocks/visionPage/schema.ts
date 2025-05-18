import { Block } from 'payload'

export const VisionPage: Block = {
  slug: 'visionpage',
  admin: {
    group: 'Vision Page',
  },
  fields: [
    {
      name: 'visions',
      label: 'Vision',
      type: 'relationship',
      relationTo: 'vision',
      hasMany: true,
      required: true,
    },
  ],
}
