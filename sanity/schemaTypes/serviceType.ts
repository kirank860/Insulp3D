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
    defineField({
      name: 'offerTitle',
      title: 'Offer Section Title',
      type: 'string',
      description: 'Optional. Defaults to "WHAT WE OFFER".',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Call to Action Title',
      type: 'string',
      description: 'Optional. Defaults to "Ready to start your project?".',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Call to Action Description',
      type: 'text',
      description: 'Optional. Defaults to the standard CTA message.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Call to Action Button Text',
      type: 'string',
      description: 'Optional. Defaults to "Get in Touch".',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})
