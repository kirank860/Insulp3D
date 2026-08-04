import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to bypass CDN for dynamic fetching and mutations
  token, // Optional, used for mutations or preview drafts
})
