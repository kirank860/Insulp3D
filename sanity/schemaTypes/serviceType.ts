import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Used for the service card on the main services page.',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The small icon used on the service card.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The large image used at the top of the individual service page.',
    }),
    defineField({
      name: 'details',
      title: 'Details List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of bullet points for this service.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})
