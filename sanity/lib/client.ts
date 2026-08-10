import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to bypass CDN for dynamic fetching and mutations
  token, // Optional, used for mutations or preview drafts
})

// Save the original fetch method
const originalFetch = client.fetch.bind(client);

// Override fetch to handle missing or invalid Sanity setups gracefully during local development
client.fetch = async function (query: string, params?: any, options?: any) {
  if (projectId === 'dummy-project-id') {
    return null;
  }
  try {
    return await originalFetch(query, params, options);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
} as any;

