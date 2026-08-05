import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import { ParallaxImage } from "@/components/gsap/ParallaxImage";
import { toProperCase } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Publications | InSculp 3D",
  description: "Read our latest publications, news, and insights into the world of large-format 3D printing and manufacturing innovations.",
  alternates: { canonical: '/publications' }
};

export const revalidate = 60;

export default async function Publications() {
  const publications = await client.fetch(`*[_type == "publication"] | order(date desc)`);
  
  const fallbackPublications = [
    { title: "WHY GRP IS REPLACING TRADITIONAL MATERIALS IN MODERN ARCHITECTURE & INTERIORS", date: "March 23, 2026", desc: "GRP in Modern Architecture: The Material Architects Are Choosing Over Concrete & Metal", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/69c11736acc4342bbdbc3162_69439748885069d697d10c2e_bekky-bekks-8r4SsHVFMjo-unsplash.webp" },
    { title: "CUSTOMIZATION TAILORED 3D DESIGN", date: "October 28, 2025", desc: "Because every space deserves a unique identity.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/69003a4fbee1b280771cc6f6_Render%2002.png" },
    { title: "SUSTAINABLE 3D PRINTING: BUILDING THE FUTURE FROM RECYCLED PLASTICS", date: "October 20, 2025", desc: "Turning waste into art — the circular vision behind Insculp-3D’s creations.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68f5c3dd5070371cf53f05f5_insert-100-1024x683.jpg" },
    { title: "HOW 3D PRINTING ENABLES ORGANIC, FREE-FORM FURNITURE DESIGN", date: "October 20, 2025", desc: "When creativity meets precision — redefining what furniture can be.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68edc84602f0d225a62d2177_Blog%2006.jpg" },
    { title: "CHOOSIING THE RIGHT MATERIAL FOR LARGE FORMAT 3D PRINTED FURNITURE", date: "October 13, 2025", desc: "Strength, finish, and sustainability start with the right material.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68ecd6e90f83962d1f826da5_Blog%2004.jpg" },
    { title: "THE FUTURE OF GRP AND 3D PRINTING IN DUBAI: HOW INSCULP3D IS TRANSFORMING DESIGN & MANUFACTURING", date: "October 20, 2025", desc: "How Insculp3D is Transforming Design & Manufacturing", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68ecd7ae1aadb827f76a482f_GRP%20Furniture.jpg" },
    { title: "HOW INSCULP 3D IS REDEFINING PROPS & SCULPTURES", date: "September 3, 2025", desc: "How Insculp 3D is Redefining Props & Sculptures for Immersive Spaces", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/687e41be9eb04d9ed3089a1a_peacock-front.png" },
    { title: "FURNITURE REIMAGINED", date: "July 25, 2025", desc: "Where art Meets Function Through Large Format 3D Printing", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/687e3c9525e890d45e8438d6_Lounge%20chair%20min.png" },
    { title: "REIMAGINING INTERIOR SPACES", date: "July 25, 2025", desc: "Reimagining Interior Spaces", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/687e3a696cdc4f832143ac0b_vase%20min.png" },
  ];

  const displayPublications = publications.length > 0 ? publications : fallbackPublications;
  const featuredArticle = displayPublications[0];
  const gridArticles = displayPublications.slice(1);

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full text-center mb-16">
        <WordPullUp words="Editorial" className="text-5xl md:text-8xl font-heading font-black text-foreground mb-6 uppercase tracking-wider" />
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-2xl text-foreground/70 font-josefin font-light max-w-3xl mx-auto uppercase tracking-widest">
            Insights on 3D printing technology, sustainability, and manufacturing innovation.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Featured Article */}
        {featuredArticle && (
          <FadeIn delay={0.6} direction="up" className="w-full h-[60vh] md:h-[70vh] group cursor-pointer">
            <Link 
              href={featuredArticle.slug?.current ? `/publications/${featuredArticle.slug.current}` : `#`}
              className="relative w-full h-full rounded-3xl overflow-hidden block shadow-2xl border border-border/50 group-hover:border-primary/50 transition-colors duration-700"
            >
              <div className="absolute inset-0">
                <ParallaxImage 
                  src={featuredArticle.image?.asset ? urlForImage(featuredArticle.image).url() : featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full scale-100 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out object-cover" 
                  speed={1.05}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-90" />
              </div>
              
              <div className="absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-end z-10">
                <div className="mt-auto">
                  <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-josefin tracking-[0.2em] uppercase text-xs font-bold rounded-full shadow-2xl backdrop-blur-md mb-6 w-max border border-primary/20">
                    Featured • {featuredArticle.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase leading-tight mb-4 group-hover:text-white/90 transition-colors duration-500 drop-shadow-xl max-w-4xl line-clamp-4">
                    {toProperCase(featuredArticle.title)}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-white font-josefin font-normal leading-relaxed max-w-3xl line-clamp-2 md:line-clamp-3 drop-shadow-md">
                    {featuredArticle.description || featuredArticle.desc}
                  </p>
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {gridArticles.map((article: any, i: number) => {
            const href = article.slug?.current ? `/publications/${article.slug.current}` : `#`;
            // Make every 4th article span 2 columns if on large screens, creating a nice masonry feel
            const isWide = i % 5 === 0 || i % 5 === 3;
            
            return (
              <FadeIn 
                key={article.title} 
                delay={0.1 * (i % 3)} 
                direction="up" 
                className={`group cursor-pointer ${isWide ? 'md:col-span-2' : 'col-span-1'}`}
              >
                <Link href={href} className="flex flex-col h-full bg-muted/30 p-5 md:p-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors w-full shadow-lg">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-border/50">
                    <ParallaxImage 
                      src={article.image?.asset ? urlForImage(article.image).url() : article.image} 
                      alt={article.title} 
                      className="w-full h-full bg-border group-hover:scale-[1.05] transition-transform duration-700 ease-out object-cover" 
                      speed={1.05}
                    />
                    <div className="absolute top-4 left-4 z-10">
                       <span className="inline-block px-3 py-1 bg-background/90 text-foreground font-josefin tracking-[0.1em] uppercase text-[10px] font-bold rounded-full shadow-lg backdrop-blur-md border border-border">
                         {article.date}
                       </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 px-2">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors break-words uppercase leading-tight mb-4 flex-1">
                      {toProperCase(article.title)}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/90 font-josefin font-normal leading-relaxed break-words line-clamp-3 mb-6">
                      {article.description || article.desc}
                    </p>
                    <div className="mt-auto text-primary font-heading font-bold tracking-widest text-xs uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}