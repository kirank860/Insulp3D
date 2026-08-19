import { groq } from 'next-sanity'

export const getPageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    pageName,
    "slug": slug.current,
    heroTitle,
    heroDescription
  }
`

export const getHomePageQuery = groq`
  *[_type == "homePage"][0] {
    marqueeTextTop,
    marqueeTextBottom,
    mainFeatures[] {
      title,
      description,
      "imageUrl": image.asset->url
    },
    stats[] {
      number,
      label
    },
    whyChooseUs[] {
      title,
      description
    },
    ourServices[] {
      title,
      "imageUrl": image.asset->url
    },
    ourIndustries[] {
      title,
      "imageUrl": image.asset->url
    },
    clientLogos[] {
      name,
      "logoUrl": logo.asset->url
    },
    processSteps[] {
      step,
      title,
      description
    }
  }
`

export const getAboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    visionCards[] { title, desc },
    missionDescription,
    valuesList[] { title, desc },
    coreValuesList[] { title, desc },
    visionaries[] {
      name,
      role,
      quote,
      "imageUrl": image.asset->url
    },
    whyChooseUsList[] { title, desc },
    testimonials[] { quote, name, role, company },
    technologyList[] { title, desc }
  }
`

export const getServicesPageQuery = groq`
  *[_type == "servicesPage"][0] {
    featuredSections[] {
      title,
      subtitle,
      description,
      "image1Url": image1.asset->url,
      "image2Url": image2.asset->url
    },
    technologyTitle,
    technologyDescription,
    technologyList[] { title, desc },
    processTitle,
    processSteps[] { step, title, desc }
  }
`

export const getSiteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    email,
    phone,
    address,
    businessHours,
    socialLinks {
      facebook,
      instagram,
      linkedin
    }
  }
`

export const getServiceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description,
    "iconUrl": icon.asset->url,
    "mainImageUrl": mainImage.asset->url,
    details,
    offerTitle,
    ctaTitle,
    ctaDescription,
    ctaButtonText
  }
`;

export const getServicesQuery = groq`
  *[_type == "service"] {
    title,
    "slug": slug.current,
    description,
    "iconUrl": icon.asset->url,
    "mainImageUrl": mainImage.asset->url,
    details
  }
`
