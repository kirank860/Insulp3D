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
  const query = `*[_type == "publication" && defined(slug.current)][]{
    "slug": slug.current
  }`;
  const publications = await client.fetch(query);
  return (publications || []).map((pub: { slug: string }) => ({
    slug: pub.slug,
  }));
}

export default async function PublicationArticle(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const query = `*[_type == "publication" && slug.current == $slug][0]`;
  const publication = await client.fetch(query, { slug: params.slug });

  if (!publication) {
    notFound();
  }

  // Get next publication for infinite loop footer
  const nextPubQuery = `*[_type == "publication" && defined(slug.current) && _createdAt < $createdAt] | order(_createdAt desc)[0]`;
  let nextPub = await client.fetch(nextPubQuery, { createdAt: publication._createdAt });
  
  if (!nextPub) {
    // Wrap around to the newest publication
    nextPub = await client.fetch(`*[_type == "publication" && defined(slug.current)] | order(_createdAt desc)[0]`);
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Editorial Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] w-full flex flex-col overflow-hidden bg-black">
        <VelocityScroll intensity={1} className="absolute inset-0 w-full h-[150vh] -top-[25vh]">
          <div className="w-full h-full relative">
             <img 
               src={publication.image?.asset ? urlForImage(publication.image).url() : publication.image}
               alt={publication.title}
               className="w-full h-full object-cover scale-[1.05] opacity-70"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          </div>
        </VelocityScroll>
        <div className="relative z-20 w-full px-6 md:px-12 pt-40 pb-16 max-w-7xl mx-auto flex flex-col items-start justify-end flex-1">
          <FadeIn delay={0.2} className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-josefin tracking-[0.2em] uppercase text-xs font-bold rounded-full shadow-2xl backdrop-blur-md border border-primary/20">
              {new Date(publication.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </FadeIn>
          <TextReveal>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-wider drop-shadow-2xl leading-[1.15] max-w-5xl text-left">
               {publication.title}
             </h1>
          </TextReveal>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="max-w-4xl mx-auto py-24 px-6 lg:px-8 prose prose-lg prose-invert lg:prose-2xl font-josefin font-light leading-relaxed text-foreground/90 prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-blockquote:text-white prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:bg-muted/50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl">
        {publication.body ? (
          <PortableText value={publication.body} />
        ) : (
          <p className="text-center italic opacity-50">Full article content coming soon.</p>
        )}
      </section>

      {/* Next Article Footer */}
      {nextPub && nextPub.slug && (
        <Link href={`/publications/${nextPub.slug.current}`}>
          <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden group cursor-pointer mt-12">
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
               <img 
                 src={nextPub.image?.asset ? urlForImage(nextPub.image).url() : nextPub.image}
                 alt={nextPub.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-700" />
            </div>
            <div className="relative z-20 text-center flex flex-col items-center p-8">
               <span className="bg-primary text-primary-foreground font-josefin tracking-[0.2em] uppercase text-xs md:text-sm mb-6 px-6 py-2 rounded-full shadow-2xl backdrop-blur-md border border-primary/20 font-bold">Read Next Article</span>
               <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase group-hover:text-primary transition-colors duration-500 drop-shadow-2xl">
                 {nextPub.title}
               </h2>
            </div>
          </section>
        </Link>
      )}
    </div>
  );
}
