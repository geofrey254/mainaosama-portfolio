import { Block } from 'payload'

export const Achievement: Block = {
  slug: 'achievement',
  admin: {
    group: 'Achievement page',
  },
  fields: [
    {
      name: 'projects',
      label: 'Projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      required: true,
    },
  ],
}
