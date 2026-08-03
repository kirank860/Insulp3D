

import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | InSculp 3D",
  description: "Read our latest publications, news, and insights into the world of large-format 3D printing and manufacturing innovations.",
  alternates: { canonical: '/publications' }
};

export default function Publications() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <WordPullUp words="OUR PUBLICATIONS" className="text-5xl md:text-7xl font-cinzel text-foreground mb-8" />
        <FadeIn delay={0.4}>
          <p className="text-xl text-foreground/80 font-josefin font-light max-w-2xl mx-auto">
            Stay updated with our latest thoughts on 3D printing technology, sustainability, and manufacturing innovation.
          </p>
        </FadeIn>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {[
          { title: "WHY GRP IS REPLACING TRADITIONAL MATERIALS IN MODERN ARCHITECTURE & INTERIORS", date: "March 23, 2026", desc: "GRP in Modern Architecture: The Material Architects Are Choosing Over Concrete & Metal", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/69c11736acc4342bbdbc3162_69439748885069d697d10c2e_bekky-bekks-8r4SsHVFMjo-unsplash.webp" },
          { title: "CUSTOMIZATION TAILORED 3D DESIGN", date: "October 28, 2025", desc: "Because every space deserves a unique identity.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/69003a4fbee1b280771cc6f6_Render%2002.png" },
          { title: "SUSTAINABLE 3D PRINTING: BUILDING THE FUTURE FROM RECYCLED PLASTICS", date: "October 20, 2025", desc: "Turning waste into art — the circular vision behind Insculp-3D’s creations.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68f5c3dd5070371cf53f05f5_insert-100-1024x683.jpg" },
          { title: "HOW 3D PRINTING ENABLES ORGANIC, FREE-FORM FURNITURE DESIGN", date: "October 20, 2025", desc: "When creativity meets precision — redefining what furniture can be.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68edc84602f0d225a62d2177_Blog%2006.jpg" },
          { title: "CHOOSIING THE RIGHT MATERIAL FOR LARGE FORMAT 3D PRINTED FURNITURE", date: "October 13, 2025", desc: "Strength, finish, and sustainability start with the right material.", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68ecd6e90f83962d1f826da5_Blog%2004.jpg" },
          { title: "THE FUTURE OF GRP AND 3D PRINTING IN DUBAI: HOW INSCULP3D IS TRANSFORMING DESIGN & MANUFACTURING", date: "October 20, 2025", desc: "How Insculp3D is Transforming Design & Manufacturing", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/68ecd7ae1aadb827f76a482f_GRP%20Furniture.jpg" },
          { title: "HOW INSCULP 3D IS REDEFINING PROPS & SCULPTURES", date: "September 3, 2025", desc: "How Insculp 3D is Redefining Props & Sculptures for Immersive Spaces", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/687e41be9eb04d9ed3089a1a_peacock-front.png" },
          { title: "FURNITURE REIMAGINED", date: "July 25, 2025", desc: "Where art Meets Function Through Large Format 3D Printing", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/687e3c9525e890d45e8438d6_Lounge%20chair%20min.png" },
          { title: "REIMAGINING INTERIOR SPACES", date: "July 25, 2025", desc: "Reimagining Interior Spaces", image: "https://cdn.prod.website-files.com/66da0818e9f24d66d3446816/687e3a696cdc4f832143ac0b_vase%20min.png" },
        ].map((article, i) => (
          <FadeIn key={article.title} delay={0.05 * i} direction="left" className="group cursor-pointer">
            <article className="flex flex-col md:flex-row gap-8 items-center bg-muted p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-full md:w-1/3 aspect-video bg-border rounded-2xl relative overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div className="flex items-center gap-4 text-sm font-josefin tracking-widest text-primary">
                  <span className="text-foreground/50">{article.date}</span>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-foreground/70 font-josefin font-light leading-relaxed">
                  {article.desc}
                </p>
                <div className="pt-2 text-primary font-cinzel font-bold tracking-widest text-sm uppercase">Read More ➔</div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}