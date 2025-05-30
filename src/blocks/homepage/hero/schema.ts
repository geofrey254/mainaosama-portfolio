import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  admin: {
    group: 'Homepage',
  },
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', required: true },
    {
      name: 'subheading',
      label: 'SubHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'hero_image',
      label: 'Hero Image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
  ],
}
