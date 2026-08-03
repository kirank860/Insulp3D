"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-24 px-6 lg:px-8 bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16">
        <FadeIn direction="right" className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-foreground leading-tight">
            OUR SELECTIVE PROJECTS
          </h1>
          <p className="text-xl text-foreground/80 font-josefin font-light max-w-lg leading-relaxed">
            Our flagship projects reflect our team&apos;s passion, love, and dedication towards printing, design, and innovation in crafting each piece.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-block mt-4 px-8 py-4 bg-primary text-primary-foreground font-cinzel font-bold tracking-widest rounded-full transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            LEARN MORE
          </Link>
        </FadeIn>
        <FadeIn direction="left">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-border">
            <img 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468bf_edb60f66c7e9b3abcc5e426969c4c1e0_lounge%20chair%20TWO%20TONE.jpg" 
              alt="Lounge Chair" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </FadeIn>
      </section>

      {/* Sticky Gallery Section */}
      <section className="max-w-7xl mx-auto w-full py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 relative">
          
          {/* Left Sticky Navigation */}
          <div className="hidden md:block relative">
            <div className="sticky top-32 space-y-6 flex flex-col">
              {[
                "ART AND SCULPTURES",
                "VISUAL MERCHANDISING",
                "AUTOMOBILE TRANSFORMATION",
                "RETAIL DISPLAY UNITS"
              ].map((category, i) => (
                <div key={i} className="text-2xl font-cinzel font-bold text-foreground/40 hover:text-primary transition-colors cursor-pointer">
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Right Scrolling Images */}
          <div className="space-y-24">
            {[
              { title: "ART AND SCULPTURES", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798d60700323216feaa583d_0284f828223d6f3f5000536e9914d54b_PEACOCK%20FRONT.png" },
              { title: "VISUAL MERCHANDISING", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/68021546243cea9672fc603a_WhatsApp%20Image%202024-11-22%20at%2011.25.06%20AM-3.jpeg" },
              { title: "ART AND SCULPTURES", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446891_f0173e3520ccb2a6a0517d99d375fa70_Frame%2050.avif" },
              { title: "AUTOMOBILE TRANSFORMATION", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc1ba1a6bbd3ca34f680_WhatsApp%20Image%202024-09-24%20at%2015.29.04_1a69ca40.jpg" },
              { title: "RETAIL DISPLAY UNITS", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bbab4bb5b53988f2685d_IMG-20241105-WA0040.jpg" },
            ].map((project, i) => (
              <FadeIn key={i} direction="up">
                <div className="w-full flex flex-col items-start group">
                  <div className="w-full bg-border rounded-3xl overflow-hidden shadow-2xl relative mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <h3 className="text-3xl font-cinzel font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}