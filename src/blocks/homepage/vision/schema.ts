import { Block } from 'payload'

export const LandingVision: Block = {
  slug: 'vision',
  admin: {
    group: 'Homepage',
  },
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', required: true },
    {
      name: 'sub-heading',
      label: 'SubHeading',
      type: 'textarea',
      required: true,
    },
    {
      name: 'quote',
      label: 'Quote',
      type: 'textarea',
      required: true,
    },
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
