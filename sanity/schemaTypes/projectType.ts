import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'scale',
      title: 'Scale / Dimensions',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Media Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'body',
      title: 'Case Study / Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Art', value: 'art'},
          {title: 'Merchandising', value: 'merchandising'},
          {title: 'Film Sets', value: 'film-sets'},
          {title: 'Architecture', value: 'architecture'},
          {title: 'Events', value: 'events'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
