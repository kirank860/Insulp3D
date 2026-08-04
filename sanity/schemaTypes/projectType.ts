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
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
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
