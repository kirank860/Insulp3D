import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'marqueeTextTop',
      title: 'Top Marquee Text List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The scrolling text items going left.',
    }),
    defineField({
      name: 'marqueeTextBottom',
      title: 'Bottom Marquee Text List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The scrolling text items going right.',
    }),
    defineField({
      name: 'mainFeatures',
      title: 'Main Features (Text + Image Blocks)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'image', type: 'image', title: 'Image' },
          ],
        },
      ],
      description: 'The alternating large text and image blocks.',
    }),
    defineField({
      name: 'stats',
      title: 'Stats (Numbers)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', title: 'Number (e.g. 26k+)' },
            { name: 'label', type: 'string', title: 'Label (e.g. Happy Customers)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ourServices',
      title: 'Our Services (Homepage Cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'image', type: 'image', title: 'Image' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ourIndustries',
      title: 'Our Industries (Homepage Slider)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'image', type: 'image', title: 'Image' },
          ],
        },
      ],
    }),
    defineField({
      name: 'clientLogos',
      title: 'Client / Partner Logos ("Trusted By" strip)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Client Name' },
            { name: 'logo', type: 'image', title: 'Logo' },
          ],
        },
      ],
      description: 'Shown as a "Trusted By" logo strip on the homepage. Leave empty to hide the section.',
    }),
    defineField({
      name: 'processSteps',
      title: 'Our Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string', title: 'Step Number (e.g. 01)' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
  ],
})
