import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'visionCards',
      title: 'Our Vision Cards',
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
      name: 'missionDescription',
      title: 'Our Mission Description',
      type: 'text',
    }),
    defineField({
      name: 'valuesList',
      title: 'Values & Code of Conduct',
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
      name: 'coreValuesList',
      title: 'Core Values',
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
      name: 'visionaries',
      title: 'Our Visionaries (Team)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'quote', type: 'text', title: 'Quote' },
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'whyChooseUsList',
      title: 'Why Choose Us (About Page)',
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
      name: 'testimonials',
      title: 'Testimonials (Client Quotes)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', type: 'text', title: 'Quote' },
            { name: 'name', type: 'string', title: 'Client Name' },
            { name: 'role', type: 'string', title: 'Role / Title' },
            { name: 'company', type: 'string', title: 'Company' },
          ],
        },
      ],
    }),
    defineField({
      name: 'technologyList',
      title: 'Our Technology',
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
  ],
})
