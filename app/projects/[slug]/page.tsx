import { PortableText } from '@portabletext/react';
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { FadeIn } from "@/components/ui/fade-in";
import { VelocityScroll } from "@/components/gsap/VelocityScroll";
import { TextReveal } from "@/components/gsap/TextReveal";
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 60;

export async function generateStaticParams() {
  const query = `*[_type == "project" && defined(slug.current)][]{
    "slug": slug.current
  }`;
  const projects = await client.fetch(query);
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudy(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(query, { slug: params.slug });

  if (!project) {
    notFound();
  }

  // Get next project for infinite loop footer
  const nextProjectQuery = `*[_type == "project" && defined(slug.current) && _createdAt < $createdAt] | order(_createdAt desc)[0]`;
  let nextProject = await client.fetch(nextProjectQuery, { createdAt: project._createdAt });
  
  if (!nextProject) {
    // Wrap around to the newest project
    nextProject = await client.fetch(`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)[0]`);
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Cinematic Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] w-full flex flex-col overflow-hidden bg-black">
        <VelocityScroll intensity={1.5} className="absolute inset-0 w-full h-[150vh] -top-[25vh]">
          <div className="w-full h-full relative">
             <img 
               src={project.image?.asset ? urlForImage(project.image).url() : project.image}
               alt={project.title}
               className="w-full h-full object-cover scale-[1.05] opacity-70"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          </div>
        </VelocityScroll>
        <div className="relative z-20 w-full px-6 md:px-12 pt-40 pb-16 max-w-7xl mx-auto flex flex-col items-start justify-end flex-1">
          <TextReveal>
             <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white uppercase tracking-wider drop-shadow-2xl leading-[1.1] max-w-5xl text-left">
               {project.title}
             </h1>
          </TextReveal>
          {project.category && (
            <FadeIn delay={0.4} className="mt-6">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-josefin tracking-[0.2em] uppercase text-xs md:text-sm font-bold rounded-full shadow-2xl backdrop-blur-md border border-primary/20">
                {project.category}
              </span>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Sticky Metadata Bar */}
      <div className="sticky top-[80px] z-50 bg-background/90 backdrop-blur-xl border-y border-border/50 py-6 px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6 text-sm md:text-base font-josefin">
           <div>
             <span className="text-foreground/50 uppercase tracking-widest block text-xs mb-1">Client</span>
             <span className="font-bold text-lg">{project.client || "InSculp 3D Internal"}</span>
           </div>
           <div>
             <span className="text-foreground/50 uppercase tracking-widest block text-xs mb-1">Scale / Dimensions</span>
             <span className="font-bold text-lg">{project.scale || "Bespoke Size"}</span>
           </div>
           <div>
             <span className="text-foreground/50 uppercase tracking-widest block text-xs mb-1">Duration</span>
             <span className="font-bold text-lg">{project.duration || "Standard"}</span>
           </div>
        </div>
      </div>

      {/* Editorial Content Layout */}
      <section className="max-w-4xl mx-auto py-32 px-6 lg:px-8 prose prose-lg prose-invert lg:prose-2xl font-josefin font-light leading-loose text-foreground/80 prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-blockquote:text-white prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:bg-muted/50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl">
        {project.body ? (
          <PortableText value={project.body} />
        ) : (
          <p className="text-center italic opacity-50">This project currently has no long-form case study available.</p>
        )}
      </section>

      {/* Bento Grid Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto py-12 px-6 lg:px-8 mb-32">
          <TextReveal>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-16 uppercase text-center">Project Gallery</h3>
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {project.gallery.map((img: any, i: number) => (
              <FadeIn key={i} delay={i * 0.1} className={`w-full h-full relative rounded-3xl overflow-hidden group ${i % 4 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img 
                  src={urlForImage(img).url()} 
                  alt={`${project.title} detail ${i}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer */}
      {nextProject && nextProject.slug && (
        <Link href={`/projects/${nextProject.slug.current}`}>
          <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
               <img 
                 src={nextProject.image?.asset ? urlForImage(nextProject.image).url() : nextProject.image}
                 alt={nextProject.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-700" />
            </div>
            <div className="relative z-20 text-center flex flex-col items-center p-8">
               <span className="bg-primary text-primary-foreground font-josefin tracking-[0.2em] uppercase text-xs md:text-sm mb-6 px-6 py-2 rounded-full shadow-2xl backdrop-blur-md border border-primary/20 font-bold">Next Project</span>
               <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase group-hover:text-primary transition-colors duration-500 drop-shadow-2xl">
                 {nextProject.title}
               </h2>
            </div>
          </section>
        </Link>
      )}
    </div>
  );
}
