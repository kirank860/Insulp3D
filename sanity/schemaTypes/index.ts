import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { publicationType } from './publicationType'
import { enquiryType } from './enquiryType'
import { blockContentType } from './blockContentType'
import { pageType } from './pageType'
import { serviceType } from './serviceType'
import { homePageType } from './homePage'
import { aboutPageType } from './aboutPage'
import { servicesPageType } from './servicesPage'
import { siteSettingsType } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType, 
    publicationType, 
    enquiryType, 
    blockContentType, 
    pageType, 
    serviceType,
    homePageType,
    aboutPageType,
    servicesPageType,
    siteSettingsType
  ],
}
