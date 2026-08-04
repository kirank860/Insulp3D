

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Projects | InSculp 3D",
  description: "View our flagship 3D printing projects. Our portfolio showcases passion, dedication, and innovation in large scale additive manufacturing across Dubai.",
  alternates: { canonical: '/projects' }
};

export default async function Projects() {
  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc)`);
  
  const fallbackProjects = [
    { title: "ART AND SCULPTURES", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798d60700323216feaa583d_0284f828223d6f3f5000536e9914d54b_PEACOCK%20FRONT.png" },
    { title: "VISUAL MERCHANDISING", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/68021546243cea9672fc603a_WhatsApp%20Image%202024-11-22%20at%2011.25.06%20AM-3.jpeg" },
    { title: "ART AND SCULPTURES", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446891_f0173e3520ccb2a6a0517d99d375fa70_Frame%2050.avif" },
    { title: "AUTOMOBILE TRANSFORMATION", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc1ba1a6bbd3ca34f680_WhatsApp%20Image%202024-09-24%20at%2015.29.04_1a69ca40.jpg" },
    { title: "RETAIL DISPLAY UNITS", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bbab4bb5b53988f2685d_IMG-20241105-WA0040.jpg" },
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-24 px-6 lg:px-8 bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16">
        <FadeIn direction="right" className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
            OUR SELECTIVE PROJECTS
          </h1>
          <p className="text-xl text-foreground/80 font-josefin font-light max-w-lg leading-relaxed">
            Our flagship projects reflect our team&apos;s passion, love, and dedication towards printing, design, and innovation in crafting each piece.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-block mt-4 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold tracking-widest rounded-full transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            LEARN MORE
          </Link>
        </FadeIn>
        <FadeIn direction="left">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-border">
            <Image 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468bf_edb60f66c7e9b3abcc5e426969c4c1e0_lounge%20chair%20TWO%20TONE.jpg" 
              alt="Lounge Chair" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </FadeIn>
      </section>

      {/* Sticky Gallery Section */}
      <section className="max-w-7xl mx-auto w-full py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 relative">
          
          {/* Left Sticky Navigation */}
          <div className="hidden md:block relative">
            <div className="sticky top-32 flex flex-col max-h-[350px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/50 scrollbar-track-transparent">
              <div className="space-y-6 flex flex-col">
                {displayProjects.map((project: any, i: number) => (
                  <a href={`#project-${i}`} key={i} className="text-2xl font-heading font-bold text-foreground/40 hover:text-primary transition-colors cursor-pointer shrink-0">
                    {project.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Scrolling Images */}
          <div className="space-y-24">
            {displayProjects.map((project: any, i: number) => (
              <FadeIn key={i} direction="up">
                <div id={`project-${i}`} className="w-full flex flex-col items-start group scroll-mt-48">
                  <div className="w-full aspect-[4/3] bg-border rounded-3xl overflow-hidden shadow-2xl relative mb-6">
                    <Image 
                      src={project.image?.asset ? urlForImage(project.image).url() : project.image} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-xl text-foreground/80 font-josefin font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}