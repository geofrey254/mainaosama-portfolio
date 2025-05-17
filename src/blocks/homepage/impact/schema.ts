import { Block } from 'payload'

export const LandingImpact: Block = {
  slug: 'impact',
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
      name: 'info',
      label: 'Info',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'label',
          type: 'text',
        },
      ],
      required: true,
    },
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
