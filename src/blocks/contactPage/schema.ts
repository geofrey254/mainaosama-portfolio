import { Block } from 'payload'

export const Contact: Block = {
  slug: 'contact',
  admin: { group: 'Contact Page' },
  fields: [
    { name: 'title', type: 'textarea', required: true },
    { name: 'description', type: 'textarea', required: true },
  ],
}
