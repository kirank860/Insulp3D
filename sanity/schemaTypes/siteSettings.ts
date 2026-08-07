import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
      ],
    }),
  ],
})
