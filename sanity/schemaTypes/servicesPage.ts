import { defineField, defineType } from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredSections',
      title: 'Featured Service Sections (Large Blocks)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'subtitle', type: 'string', title: 'Subtitle' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'image1', type: 'image', title: 'Primary Image', options: { hotspot: true } },
            { name: 'image2', type: 'image', title: 'Secondary Image (Optional)', description: 'Only used if the section supports a second image.', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'technologyTitle',
      title: 'Technology Section Title',
      type: 'string',
    }),
    defineField({
      name: 'technologyDescription',
      title: 'Technology Section Description',
      type: 'text',
    }),
    defineField({
      name: 'technologyList',
      title: 'Technology Grid Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'desc', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string', title: 'Step Number (e.g. 01)' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'desc', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
  ],
})
