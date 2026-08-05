import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { publicationType } from './publicationType'
import { enquiryType } from './enquiryType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, publicationType, enquiryType, blockContentType],
}
