import { CollectionConfig } from 'payload'

export const ContactAddresses: CollectionConfig = {
  slug: 'contactaddresses',
  labels: {
    singular: 'Contact',
    plural: 'Contacts',
  },
  admin: {
    useAsTitle: 'label',
    group: 'Settings',
    description: 'Manage contact address entries',
  },
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g. Head Office, Branch Office',
      },
    },
    {
      name: 'address',
      label: 'Address',
      type: 'textarea',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      required: false,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: false,
    },
    {
      name: 'mapLink',
      label: 'Google Map Link',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'https://maps.google.com/...',
      },
    },
  ],
}

export default ContactAddresses
