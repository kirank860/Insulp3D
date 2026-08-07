"use client";
import { useEffect, useState, useRef } from 'react';
import { FadeIn } from "@/components/ui/fade-in";
import { ParallaxImage } from "@/components/gsap/ParallaxImage";
import { TextReveal } from "@/components/gsap/TextReveal";
import { urlForImage } from "@/sanity/lib/image";
import { toProperCase } from "@/lib/utils";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProjectGallery({ projects }: { projects: any[] }) {
  const [activeId, setActiveId] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectElements = gsap.utils.toArray('.project-item') as HTMLElement[];
    
    // We create a ScrollTrigger for each project item
    // It becomes active when its top hits the center of the viewport,
    // and inactive when its bottom passes the center.
    const triggers = projectElements.map((el, index) => {
      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            setActiveId(index);
          }
        }
      });
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [projects]);

  return (
    <section className="max-w-7xl mx-auto w-full py-24" ref={containerRef}>
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 relative">
        
        {/* Left Sticky Navigation */}
        <div className="hidden md:block relative">
          <div className="sticky top-40 flex flex-col max-h-[500px] overflow-y-auto overflow-x-hidden pr-4 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/50 scrollbar-track-transparent">
            <div className="space-y-6 flex flex-col w-full">
              {projects.map((project, i) => {
                const href = project.slug?.current ? `/projects/${project.slug.current}` : `#project-${i}`;
                const isHash = href.startsWith('#');
                return (
                  <a 
                    href={href} 
                    key={i} 
                    className={`text-xl md:text-2xl font-heading font-bold uppercase transition-all duration-500 cursor-pointer shrink-0 break-words whitespace-normal ${
                      activeId === i ? 'text-primary scale-[1.02] origin-left' : 'text-foreground/30 hover:text-foreground/70'
                    }`}
                    onClick={(e) => {
                      if (!isHash) {
                        // Let Next.js native navigation handle it
                      }
                    }}
                  >
                    {toProperCase(project.title)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Scrolling Images */}
        <div className="space-y-32">
          {projects.map((project, i) => {
            const href = project.slug?.current ? `/projects/${project.slug.current}` : `#project-${i}`;
            return (
              <div key={i} id={`project-${i}`} className="project-item w-full flex flex-col items-start group scroll-mt-32 cursor-pointer">
                <FadeIn direction="up" className="w-full">
                  <a href={href} className="block w-full">
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-8 border border-border/50 group-hover:border-primary/50 transition-all duration-700">
                      <ParallaxImage 
                        src={project.image?.asset ? urlForImage(project.image).url() : project.image} 
                        alt={project.title} 
                        className="w-full h-full bg-border scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        speed={1.1}
                      />
                      {/* Subtle vignette on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                    <TextReveal>
                      <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 uppercase group-hover:text-primary transition-colors duration-500 inline-flex items-center gap-4">
                        {toProperCase(project.title)}
                        {project.slug?.current && (
                          <svg className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-10px] group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </h3>
                    </TextReveal>
                    <p className="text-lg md:text-xl text-foreground/70 font-josefin font-light leading-relaxed mb-8 max-w-2xl">
                      {project.description || "InSculp 3D leverages cutting-edge additive manufacturing technology to bring complex geometries to life. This project showcases our dedication to precision, durability, and aesthetic excellence in the UAE."}
                    </p>
                  </a>
                </FadeIn>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
