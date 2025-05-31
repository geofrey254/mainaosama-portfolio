import { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  admin: {
    group: 'Homepage',
  },
  fields: [
    { name: 'name', label: 'Full Name and Role', type: 'text', required: true },

    {
      name: 'quote',
      label: 'Quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
