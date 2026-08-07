

import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import { ParallaxImage } from "@/components/gsap/ParallaxImage";
import { TextReveal } from "@/components/gsap/TextReveal";
import { MagneticButton } from "@/components/gsap/MagneticButton";
import { VelocityScroll } from "@/components/gsap/VelocityScroll";
import Scene from "@/components/three/Scene";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Industries | InSculp 3D",
  description: "Explore our wide array of 3D printing services, from architectural models to bespoke art sculptures. We accommodate all aesthetic preferences and materials.",
  alternates: { canonical: '/services' }
};

import { client } from "@/sanity/lib/client";
import { getPageQuery, getServicesPageQuery, getServicesQuery } from "@/sanity/lib/queries";

import { servicesData } from "@/lib/data/services";

export default async function Services() {
  const pageContent = await client.fetch(getPageQuery, { slug: '/services' });
  const servicesPageData = await client.fetch(getServicesPageQuery);
  const servicesList = await client.fetch(getServicesQuery);
  const title = pageContent?.heroTitle || "Our Services & Industries";
  const description = pageContent?.heroDescription || "We provide a wide array of services to meet your needs, all conveniently available under one roof. With our in-house capabilities, we can accommodate various aesthetic preferences, whether you're seeking a raw finish or something more specialized, such as painting and mixed media production.";

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
      <Scene />
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <WordPullUp words={title} className="text-5xl md:text-7xl font-heading text-foreground mb-8 uppercase" />
        <FadeIn delay={0.4}>
          <p className="text-xl text-foreground/80 font-josefin font-light max-w-2xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </FadeIn>
      </div>

      {/* Services Grid (Icons) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {(servicesList?.length > 0 ? servicesList : servicesData).map((service: any, i: number) => (
          <FadeIn key={service.title} delay={0.1 * i} direction="up" className="h-full">
            <Link href={`/services/${service.slug}`} className="bg-muted p-10 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors group text-center flex flex-col items-center h-full justify-center">
              <Image src={service.iconUrl || service.icon || "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446845_Vector.svg"} alt={service.title} width={64} height={64} className="mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Dynamic Featured Sections */}
      {(servicesPageData?.featuredSections || [
        {
          title: "Architectural Ceiling",
          subtitle: "Redefining Interior Spaces",
          description: "In the dynamic landscape of modern interior architecture, large-format 3D printing stands as a beacon of innovation. We specialize in producing bespoke architectural ceiling panels and custom parametric structures that transform commercial and residential spaces across Dubai and the EMEA region.\n\nLeveraging cutting-edge additive manufacturing, we eliminate traditional constraints, allowing architects to conceive and install breathtaking, lightweight, and acoustically optimized ceiling elements with unmatched precision.",
          image1Url: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344688f_Component%206.svg",
          image2Url: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446890_Frame%2048.png"
        },
        {
          title: "Large-Scale Prototyping",
          subtitle: "Up to 3 Meters in Height",
          description: "When standard 3D printing companies hit their size limits, InSculp 3D steps in. Our advanced industrial pellet printers and state-of-the-art FDM machines are capable of executing massive, seamless prints up to 3 meters tall.\n\nFrom highly detailed aerospace prototypes to large-scale industrial mockups and cinematic props, we provide the ultimate solution for rapid manufacturing in the UAE. Our process ensures robust structural integrity, precise dimensional accuracy, and remarkably fast turnaround times.",
          image1Url: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc3f5f28106b27f69b66_75252de1259e2a79bd20bc62fca24c51_POT.png"
        },
        {
          title: "Retail & Visual Merchandising",
          subtitle: "Captivate Your Audience",
          description: "In the highly competitive luxury retail market of Dubai, standing out requires extraordinary visual merchandising. We craft eye-catching, custom 3D printed pop-up displays, giant window installations, and immersive brand activations.\n\nOur comprehensive service includes full post-processing—sanding, smoothing, painting, and mixed-media finishing—ensuring your retail display reflects the premium quality of your brand. If you can dream it, we can print and install it.",
          image1Url: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/679b72388458dc748e83e1bc_b2aa567d67b672de17f0dd53ae3b0416_GISOU%20NY%20SIDE.png"
        }
      ]).map((section: any, idx: number) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={section.title} className="max-w-7xl mx-auto w-full mt-32 grid md:grid-cols-2 gap-12 items-center px-6 lg:px-8">
            <FadeIn direction={isEven ? "right" : "left"} className={isEven ? "" : "order-2 md:order-1 space-y-6"}>
              {isEven ? (
                section.image2Url ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full aspect-square rounded-2xl bg-border relative overflow-hidden shadow-2xl">
                      <Image src={section.image1Url} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="w-full aspect-[4/5] rounded-2xl bg-border mt-8 relative overflow-hidden shadow-2xl">
                      <Image src={section.image2Url} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-square rounded-3xl bg-border shadow-2xl relative overflow-hidden">
                    <Image src={section.image1Url} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                )
              ) : (
                <>
                  <TextReveal>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{section.title}</h2>
                  </TextReveal>
                  {section.subtitle && (
                    <h3 className="text-xl font-josefin font-bold text-primary tracking-widest uppercase">{section.subtitle}</h3>
                  )}
                  <p className="text-lg text-foreground/70 font-josefin font-light leading-relaxed whitespace-pre-line">
                    {section.description}
                  </p>
                </>
              )}
            </FadeIn>
            <FadeIn direction={isEven ? "left" : "right"} className={isEven ? "space-y-6" : "order-1 md:order-2 w-full"}>
              {isEven ? (
                <>
                  <TextReveal>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{section.title}</h2>
                  </TextReveal>
                  {section.subtitle && (
                    <h3 className="text-xl font-josefin font-bold text-primary tracking-widest uppercase">{section.subtitle}</h3>
                  )}
                  <p className="text-lg text-foreground/70 font-josefin font-light leading-relaxed whitespace-pre-line">
                    {section.description}
                  </p>
                </>
              ) : (
                section.image2Url ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full aspect-square rounded-2xl bg-border relative overflow-hidden shadow-2xl">
                      <Image src={section.image1Url} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="w-full aspect-[4/5] rounded-2xl bg-border mt-8 relative overflow-hidden shadow-2xl">
                      <Image src={section.image2Url} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] rounded-3xl bg-border shadow-2xl relative overflow-hidden">
                    <Image src={section.image1Url} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                )
              )}
            </FadeIn>
          </section>
        );
      })}

      {/* Materials & Tech Grid */}
      <section className="max-w-7xl mx-auto w-full mt-32 bg-muted p-12 md:p-16 rounded-[3rem] border border-border/50">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{servicesPageData?.technologyTitle || "Technology & Materials"}</h2>
          </TextReveal>
          <p className="text-xl text-foreground/70 font-josefin font-light max-w-2xl mx-auto">
            {servicesPageData?.technologyDescription || "We operate the most advanced digital fabrication fleet in the region, prioritizing both precision and eco-conscious sustainability."}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {(servicesPageData?.technologyList || [
            { title: "Advanced Pellet Extrusion", desc: "Our pellet-fed 3D printers offer unmatched speed and material cost-efficiency for massive prints, enabling rapid large-scale production runs." },
            { title: "Sustainable Plastics", desc: "We actively champion the circular economy by utilizing recyclable and biodegradable polymers, ensuring your large installations are eco-friendly." },
            { title: "High-Precision FDM", desc: "For projects requiring microscopic detail and intricate geometries, our array of top-tier FDM printers guarantees flawless execution every time." },
          ]).map((item: any, i: number) => (
            <FadeIn key={item.title} delay={0.1 * i} direction="up" className="bg-background p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-foreground/70 font-josefin font-light leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* The InSculp Process */}
      <section className="max-w-7xl mx-auto w-full mt-32 mb-20 text-center">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-16">{servicesPageData?.processTitle || "Our Proven Workflow"}</h2>
        </TextReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {(servicesPageData?.processSteps || [
            { step: "01", title: "Consultation", desc: "We evaluate your concept, requirements, and feasibility." },
            { step: "02", title: "3D Modeling", desc: "Our engineers prepare and optimize digital CAD designs." },
            { step: "03", title: "Fabrication", desc: "Industrial-grade 3D printing brings the design to reality." },
            { step: "04", title: "Finishing", desc: "Sanding, painting, and professional post-processing." },
          ]).map((item: any, i: number) => (
            <FadeIn key={item.step} delay={0.1 * i} direction="up" className="relative">
              <div className="text-6xl md:text-8xl font-heading font-black text-primary/10 mb-4">{item.step}</div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2 relative z-10">{item.title}</h3>
              <p className="text-sm md:text-base text-foreground/70 font-josefin font-light relative z-10">{item.desc}</p>
              {i < (servicesPageData?.processSteps?.length || 4) - 1 && <div className="hidden md:block absolute top-12 left-2/3 w-full h-[1px] bg-gradient-to-r from-border to-transparent -z-10" />}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full max-w-7xl mx-auto mt-20 bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to Build the Impossible?</h2>
          <p className="text-xl md:text-2xl font-josefin font-light mb-10 text-primary-foreground/90">
            Whether it is a 3-meter art sculpture or a custom architectural ceiling, InSculp 3D is your premium manufacturing partner in Dubai.
          </p>
          <MagneticButton>
            <a href="/contact-us#contact-form" className="inline-block px-10 py-5 bg-background text-foreground font-heading font-bold tracking-widest uppercase rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
              Request a Custom Quote
            </a>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}