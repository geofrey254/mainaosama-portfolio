import { Block } from 'payload'

export const LandingAbout: Block = {
  slug: 'bio',
  admin: {
    group: 'Homepage',
  },
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', required: true },
    {
      name: 'description',
      label: 'Description',
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
          name: 'label',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
        },
      ],
      required: true,
    },
    {
      name: 'photo',
      label: 'Bio Image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'quote',
      label: 'Quote',
      type: 'textarea',
      required: true,
    },
  ],
}
