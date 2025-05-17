import { Block } from 'payload'

export const LandingGallery: Block = {
  slug: 'gallery',
  admin: {
    group: 'Homepage',
  },
  fields: [
    {
      name: 'photos',
      label: 'Photos',
      type: 'relationship',
      relationTo: 'gallery',
      hasMany: true,
      required: true,
    },
  ],
}
