import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Vision: CollectionConfig = {
  slug: 'vision',
  admin: {
    useAsTitle: 'title',
    description: 'Add Vision Item',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (Do not touch)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value, { lower: true, strict: true })
            if (data?.title) return slugify(data.title, { lower: true, strict: true })
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },

    {
      name: 'keyPoints',
      label: 'Key Points',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
