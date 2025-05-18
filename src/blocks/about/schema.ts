import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const About: Block = {
  slug: 'about',
  admin: {
    group: 'About Page',
  },
  fields: [
    { name: 'clause', type: 'textarea', required: true },
    { name: 'photo', label: 'Firm Photo', type: 'upload', relationTo: 'media', required: true },
    { name: 'title', label: 'Image Title', type: 'text', required: true },
  ],
}

export const Biography: Block = {
  slug: 'biography',
  admin: {
    group: 'About Page',
  },
  fields: [{ name: 'bio', type: 'richText', editor: lexicalEditor(), required: true }],
}
