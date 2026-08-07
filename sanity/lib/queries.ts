import { groq } from 'next-sanity'

export const getPageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    pageName,
    "slug": slug.current,
    heroTitle,
    heroDescription
  }
`
