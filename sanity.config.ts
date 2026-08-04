import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'InSculp 3D Studio',
  
  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
})
