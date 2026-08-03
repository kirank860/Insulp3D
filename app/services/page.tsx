

import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Industries | InSculp 3D",
  description: "Explore our wide array of 3D printing services, from architectural models to bespoke art sculptures. We accommodate all aesthetic preferences and materials.",
  alternates: { canonical: '/services' }
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <WordPullUp words="OUR SERVICES AND INDUSTRIES" className="text-5xl md:text-7xl font-cinzel text-foreground mb-8" />
        <FadeIn delay={0.4}>
          <p className="text-xl text-foreground/80 font-josefin font-light max-w-2xl mx-auto">
            We provide a wide array of services to meet your needs, all conveniently available under one roof. With our in-house capabilities, we can accommodate various aesthetic preferences, whether you&apos;re seeking a raw finish or something more specialized, such as painting and mixed media production.
          </p>
        </FadeIn>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "3D PRINTING AND PROTOTYPING", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b1_Asset%201.svg" },
          { title: "3D DESIGNING AND MODELING", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468af_Asset%204.svg" },
          { title: "ARCHITECTURAL SCALE MODELS", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b2_Asset%206.svg" },
          { title: "ARCHITECTURAL ELEMENTS", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b5_Asset%208.svg" },
          { title: "FURNITURE, POTTERY AND DECOR", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b0_Asset%209.svg" },
          { title: "FINISHING AND MIXED MEDIA PRODUCTION", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b4_Asset%203.svg" },
          { title: "SIGNAGE 3D PRINTING", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b3_Asset%2010.svg" },
          { title: "RETAIL DISPLAY AND VISUAL MERCHANDISING", icon: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468ad_Asset%2012.svg" },
        ].map((service, i) => (
          <FadeIn key={service.title} delay={0.1 * i} direction="up" className="bg-muted p-10 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors group text-center flex flex-col items-center">
            <Image src={service.icon} alt={service.title} width={64} height={64} className="mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-cinzel font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
          </FadeIn>
        ))}
      </div>

      {/* Architectural Ceiling Feature */}
      <section className="max-w-7xl mx-auto w-full mt-32 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344688f_Component%206.svg" alt="Ceiling Element 1" width={800} height={800} className="w-full h-auto rounded-2xl" />
            <Image src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446890_Frame%2048.png" alt="Ceiling Element 2" width={800} height={800} className="w-full h-auto rounded-2xl mt-8" />
          </div>
        </FadeIn>
        <FadeIn direction="left">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-6">Architectural Ceiling</h2>
          <p className="text-lg text-foreground/70 font-josefin font-light leading-relaxed mb-8">
            In the dynamic landscape of modern manufacturing, 3D printing stands as a beacon of innovation, fundamentally transforming the way we conceive, design, and produce objects. At the forefront of this revolution is InSculp 3D, where innovation is not just a goal but a guiding principle. We are at the cutting edge of 3D printing technology, leveraging the latest advancements to redefine the possibilities of additive manufacturing.
          </p>
          <a href="/contact-us" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-cinzel font-bold tracking-widest rounded-full transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
            LET INSCULP CRAFT YOUR IDEAS
          </a>
        </FadeIn>
      </section>
    </div>
  );
}