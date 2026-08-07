import { notFound } from "next/navigation";
import Image from "next/image";
import { servicesData } from "@/lib/data/services";
import { FadeIn } from "@/components/ui/fade-in";
import { TextReveal } from "@/components/gsap/TextReveal";
import Link from "next/link";
import { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Groq query to fetch a single service by slug
const getServiceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description,
    "iconUrl": icon.asset->url,
    "mainImageUrl": mainImage.asset->url,
    details
  }
`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Try to fetch from Sanity
  const sanityService = await client.fetch(getServiceBySlugQuery, { slug });
  
  // Fallback to hardcoded data if Sanity is empty
  const service = sanityService || servicesData.find((s) => s.slug === slug);
  
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | InSculp 3D`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch from Sanity
  const sanityService = await client.fetch(getServiceBySlugQuery, { slug });
  
  // Use Sanity data or fallback to hardcoded
  const service = sanityService || servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Handle differences in data structure between Sanity and hardcoded
  const imageUrl = service.mainImageUrl || service.image || "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc3f5f28106b27f69b66_75252de1259e2a79bd20bc62fca24c51_POT.png";
  const detailsList = service.details || [
    "Expert Consultation",
    "Precision 3D Modeling",
    "High-Quality Fabrication",
    "Professional Post-Processing"
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="space-y-8">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-foreground font-josefin uppercase tracking-widest text-sm font-bold transition-colors mb-4">
            <span className="mr-2">←</span> Back to Services
          </Link>
          <TextReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              {service.title}
            </h1>
          </TextReveal>
          <p className="text-lg md:text-xl text-foreground/80 font-josefin font-light leading-relaxed whitespace-pre-line">
            {service.description}
          </p>
        </FadeIn>
        
        <FadeIn direction="left" delay={0.2} className="w-full">
          <div className="w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl border border-border/50 bg-border">
             <Image src={imageUrl} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </FadeIn>
      </section>

      {/* Details Section */}
      <section className="w-full bg-muted py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-foreground">WHAT WE OFFER</h2>
          </TextReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detailsList.map((detail: string, index: number) => (
              <FadeIn key={index} delay={0.1 * index} direction="up" className="bg-background p-8 rounded-3xl border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 font-bold font-josefin text-lg">
                  {index + 1}
                </div>
                <p className="font-josefin font-light text-foreground/80 leading-relaxed text-lg">
                  {detail}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-6 lg:px-8 mt-32">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">Ready to start your project?</h2>
          <p className="text-lg text-foreground/70 font-josefin font-light mb-10">
            Contact us today to discuss how our {service.title.toLowerCase()} services can bring your vision to reality.
          </p>
          <Link href="/contact-us" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-josefin font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
            Get in Touch
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}
