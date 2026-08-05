import { createClient } from 'next-sanity';
import dotenv from 'dotenv';

// Load env vars
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const fallbackPublications = [
    { title: "WHY GRP IS REPLACING TRADITIONAL MATERIALS IN MODERN ARCHITECTURE & INTERIORS", desc: "GRP in Modern Architecture: The Material Architects Are Choosing Over Concrete & Metal" },
    { title: "CUSTOMIZATION TAILORED 3D DESIGN", desc: "Because every space deserves a unique identity." },
    { title: "SUSTAINABLE 3D PRINTING: BUILDING THE FUTURE FROM RECYCLED PLASTICS", desc: "Turning waste into art — the circular vision behind Insculp-3D’s creations." },
    { title: "HOW 3D PRINTING ENABLES ORGANIC, FREE-FORM FURNITURE DESIGN", desc: "When creativity meets precision — redefining what furniture can be." },
    { title: "CHOOSIING THE RIGHT MATERIAL FOR LARGE FORMAT 3D PRINTED FURNITURE", desc: "Strength, finish, and sustainability start with the right material." },
    { title: "THE FUTURE OF GRP AND 3D PRINTING IN DUBAI: HOW INSCULP3D IS TRANSFORMING DESIGN & MANUFACTURING", desc: "How Insculp3D is Transforming Design & Manufacturing" },
    { title: "HOW INSCULP 3D IS REDEFINING PROPS & SCULPTURES", desc: "How Insculp 3D is Redefining Props & Sculptures for Immersive Spaces" },
    { title: "FURNITURE REIMAGINED", desc: "Where art Meets Function Through Large Format 3D Printing" },
    { title: "REIMAGINING INTERIOR SPACES", desc: "Reimagining Interior Spaces" },
];

function getDummyBody(title) {
  return [
    {
      _key: Math.random().toString(36).substring(7),
      _type: 'block',
      children: [
        {
          _key: Math.random().toString(36).substring(7),
          _type: 'span',
          text: `Welcome to our latest publication: ${title}. We are constantly exploring the boundaries of large-format 3D printing and modern materials. In this article, we dive deep into the processes, inspirations, and technologies that drive our vision forward.`,
        }
      ],
      style: 'normal',
    },
    {
      _key: Math.random().toString(36).substring(7),
      _type: 'block',
      children: [
        {
          _key: Math.random().toString(36).substring(7),
          _type: 'span',
          text: `The intersection of design and manufacturing is evolving rapidly. By leveraging cutting-edge robotics, parametric design software, and advanced composite materials, we are able to produce stunning geometries that were previously impossible or cost-prohibitive using traditional methods.`,
        }
      ],
      style: 'normal',
    },
    {
      _key: Math.random().toString(36).substring(7),
      _type: 'block',
      children: [
        {
          _key: Math.random().toString(36).substring(7),
          _type: 'span',
          text: `Our commitment to sustainability also plays a massive role in our material selection. We prioritize materials that offer structural integrity while minimizing environmental impact, ensuring that the incredible pieces we build today don't compromise the world of tomorrow.`,
        }
      ],
      style: 'normal',
    },
    {
      _key: Math.random().toString(36).substring(7),
      _type: 'block',
      children: [
        {
          _key: Math.random().toString(36).substring(7),
          _type: 'span',
          text: `Stay tuned as we continue to push the envelope in the world of spatial design, furniture fabrication, and architectural elements.`,
        }
      ],
      style: 'normal',
    },
  ];
}

async function run() {
  console.log("Fetching publications from Sanity...");
  const pubs = await client.fetch(`*[_type == "publication"]`);
  console.log(`Found ${pubs.length} publications to update.`);
  
  for (const pub of pubs) {
    let desc = pub.description;
    
    // Match with fallback list to restore original descriptions
    const matched = fallbackPublications.find(f => f.title.toLowerCase() === pub.title.toLowerCase());
    if (matched) {
        desc = matched.desc;
    }
    
    // Fallback if still no description
    if (!desc) {
        desc = `An insightful look into ${pub.title} and the future of 3D printing at InSculp 3D.`;
    }

    const body = pub.body || getDummyBody(pub.title);

    console.log(`Updating "${pub.title}"...`);
    try {
        await client.patch(pub._id)
          .set({ description: desc, body: body })
          .commit();
        console.log(`✅ Updated successfully.`);
    } catch (e) {
        console.error(`❌ Failed to update ${pub.title}:`, e.message);
    }
  }
  
  console.log("All done!");
}

run().catch(console.error);
