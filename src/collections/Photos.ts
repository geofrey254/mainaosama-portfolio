import { CollectionConfig } from 'payload'

export const Photos: CollectionConfig = {
  slug: 'photos',
  labels: {
    singular: 'Photo',
    plural: 'Photos',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Add Image',
    group: 'Photos Collection',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },

    {
      name: 'image',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Photos
