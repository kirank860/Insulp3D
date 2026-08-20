

import { FadeIn } from "@/components/ui/fade-in";
import { MagneticButton } from "@/components/gsap/MagneticButton";
import { ProjectGallery } from "@/components/ProjectGallery";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { getPageQuery } from "@/sanity/lib/queries";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | InSculp 3D",
  description: "View our flagship 3D printing projects. Our portfolio showcases passion, dedication, and innovation in large scale additive manufacturing across Dubai.",
  alternates: { canonical: '/projects' }
};

export default async function Projects() {
  const pageContent = await client.fetch(getPageQuery, { slug: '/projects' });
  const title = pageContent?.heroTitle || "Our Selective Projects";
  const description = pageContent?.heroDescription || "Our flagship projects reflect our team's passion, love, and dedication towards printing, design, and innovation in crafting each piece.";

  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc)`);
  
  const fallbackProjects = [
    { title: "ART AND SCULPTURES", image: "/assets/projects/1.png" },
    { title: "VISUAL MERCHANDISING", image: "/assets/projects/2.jpg" },
    { title: "ART AND SCULPTURES", image: "/assets/projects/3.jpg" },
    { title: "AUTOMOBILE TRANSFORMATION", image: "/assets/projects/4.jpg" },
  ];

  const displayProjects = projects && projects.length > 0 ? projects : fallbackProjects;
  
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-24 px-6 lg:px-8 bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16 min-h-[70vh]">
        <FadeIn direction="right" className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight uppercase flex flex-col md:block">
            <span className="whitespace-nowrap">{title.split(' ').slice(0, 2).join(' ')}</span>{' '}
            <span>{title.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-xl text-foreground/80 font-josefin font-light max-w-lg leading-relaxed whitespace-pre-line">
            {description}
          </p>
          <MagneticButton>
            <Link 
              href="/contact-us#contact-form" 
              className="inline-block mt-4 px-10 py-5 bg-primary text-primary-foreground font-heading font-bold tracking-widest rounded-full transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 uppercase"
            >
              Start Your Project
            </Link>
          </MagneticButton>
        </FadeIn>
        
        <FadeIn direction="left" className="h-full w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-border">
            <Image 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468bf_edb60f66c7e9b3abcc5e426969c4c1e0_lounge%20chair%20TWO%20TONE.jpg" 
              alt="Lounge Chair TWO TONE" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </FadeIn>
      </section>

      {/* GSAP Scroll Spy Gallery */}
      <ProjectGallery projects={displayProjects} />

      {/* CTA Footer */}
      <section className="w-full max-w-7xl mx-auto mt-12 bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none animate-bg-drift" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1.5px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase">Bring Your Idea to Life</h2>
          <p className="text-xl md:text-2xl font-josefin font-light mb-10 text-primary-foreground/90">
            From intricate art sculptures to massive retail displays, we have the technology to build it.
          </p>
          <MagneticButton>
            <Link 
              href="/contact-us#contact-form" 
              className="inline-block px-10 py-5 bg-background text-foreground font-heading font-bold tracking-widest uppercase rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
            >
              Contact Our Engineers
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}