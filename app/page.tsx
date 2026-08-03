

import Link from "next/link";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "InSculp 3D is the premier large-format 3D printing and additive manufacturing facility in Dubai. We specialize in custom 3D printed architecture, art, and industrial models.",
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "InSculp 3D",
    "image": "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344683c_Group.svg",
    "@id": "https://www.insculp3d.ae",
    "url": "https://www.insculp3d.ae",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "description": "Leading provider of large-scale 3D printing and additive manufacturing in Dubai."
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-8">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/herobanner.mp4" type="video/mp4" />
        </video>
        
        {/* Blend Overlay for Text Legibility and Transition */}
        <div className="absolute inset-0 bg-background/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-0" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
          <WordPullUp 
            words="Leading 3D printing in the EMEA Region" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground font-cinzel leading-tight md:leading-[1.1]"
          />
          <FadeIn delay={0.6}>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl font-josefin font-light leading-relaxed">
              As the first dedicated large format 3D Printing facility in the EMEA region, InSculp is equipped to handle small to large 3D printing jobs. Crafting forms with unmatched precision and innovation.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row items-center gap-4 pt-4 md:pt-8 w-full sm:w-auto">
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-cinzel font-bold tracking-widest rounded-full transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              LEARN MORE
            </Link>
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-cinzel font-bold tracking-widest rounded-full transition-all hover:bg-foreground hover:text-background hover:scale-105 active:scale-95"
            >
              CONTACT US
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 px-6 lg:px-8 bg-muted relative">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-foreground mb-4 md:mb-6">Advanced Large Format 3D printing</h2>
              <p className="text-base md:text-lg text-foreground/70 font-josefin font-light leading-relaxed">
                From large sculptures to scale models, we use our state-of-the-art large format 3D printing technology to push the size limitation offered by traditional 3D printing companies. Crafting forms by combining design, technology and innovation.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="w-full aspect-square bg-border rounded-3xl overflow-hidden relative shadow-2xl">
                <img src="/assets/3d1.png" alt="3D Printer" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn direction="right" delay={0.2} className="order-2 lg:order-1">
              <div className="w-full aspect-square bg-border rounded-3xl overflow-hidden relative shadow-2xl">
                <img src="/assets/3d2.png" alt="Sustainability" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-foreground mb-4 md:mb-6">Merging sustainability and affordability</h2>
              <p className="text-base md:text-lg text-foreground/70 font-josefin font-light leading-relaxed">
                Our solutions are sustainable, and affordable. We are a part of the circular economy that brings your creative ambitions to life.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-foreground mb-4 md:mb-6">UAE based manufacturing, serving globally.</h2>
              <p className="text-base md:text-lg text-foreground/70 font-josefin font-light leading-relaxed">
                We are a home grown company based in Dubai; Rely on our local expertise for your global challenges. We ensure that every solution provided reflects our commitment to quality.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="w-full aspect-square bg-border rounded-3xl overflow-hidden relative shadow-2xl">
                <img src="/assets/3d3.png" alt="Global Network" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
          <FadeIn delay={0.1}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-2 md:mb-4">26k+</div>
            <div className="text-primary-foreground/80 font-josefin tracking-wider uppercase text-xs md:text-sm">Happy Customers</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-2 md:mb-4">700+</div>
            <div className="text-primary-foreground/80 font-josefin tracking-wider uppercase text-xs md:text-sm">Projects Completed</div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-2 md:mb-4">20k+</div>
            <div className="text-primary-foreground/80 font-josefin tracking-wider uppercase text-xs md:text-sm">Pellets Used</div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-2 md:mb-4">6k+</div>
            <div className="text-primary-foreground/80 font-josefin tracking-wider uppercase text-xs md:text-sm">Industry Experience</div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 md:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-6 md:mb-8">Why choose us?</h2>
            <p className="text-lg md:text-xl text-foreground/70 font-josefin font-light">
              At Insculp, we harness the power of advanced technology to deliver our 3D printing solutions. Here’s how our innovative approach sets us apart from traditional 3D printing companies:
            </p>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: "Advanced Pellet Printers", desc: "Our state-of-the-art pellet printers offer unmatched precision and quality, enabling the creation of intricate and robust large format 3D prints." },
            { title: "Large Format Capabilities", desc: "Our customizable large format 3D printers can handle projects up to 3 meters in height, perfect for ambitious and sizable designs." },
            { title: "Top-of-the-Line Printers", desc: "For smaller elements, we use high-precision FDM 3D printers to ensure meticulous detail and superior quality." },
            { title: "Expert Team", desc: "Our talented designers and fabricators bring expertise and creativity to every project, ensuring exceptional results from start to finish." },
          ].map((feature, i) => (
            <FadeIn key={feature.title} delay={0.1 * i} direction="up" className="bg-muted p-6 md:p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-cinzel font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-foreground/70 font-josefin font-light leading-relaxed">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-20 md:py-32 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-10 md:mb-16 text-center">Our Services</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Advanced 3D Print Solutions", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc3f5f28106b27f69b66_75252de1259e2a79bd20bc62fca24c51_POT.png" },
              { title: "Bespoke Design Solution", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc1ba1a6bbd3ca34f680_WhatsApp%20Image%202024-09-24%20at%2015.29.04_1a69ca40.jpg" },
              { title: "Scale Model Design", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bb6bca15c9ef87f7bcc0_WhatsApp%20Image%202024-07-16%20at%201.31.05%20PM-4.jpeg" },
              { title: "Architectural Elements", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc627e12990f3b50f80b_ac9efa2625400959a43aa6a8483660dd_ID.png" },
              { title: "3D Printed Furniture", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc764063727d590a1b1c_IMG_1062.JPG" },
              { title: "Retail Displays", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bbc1818843b7e0a75d6c_820f1eac47e65ca457ad567c07691576_IMG-20241105-WA0039.avif" },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={0.1 * i} direction="up" className="group cursor-pointer">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                    <h3 className="text-xl md:text-2xl font-cinzel font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="w-full py-20 md:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-10 md:mb-16 text-center">Our Industries of Expertise</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Art & Figurines", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/679c83dc9d826171b90153b8_greger.png" },
              { title: "Sculptures", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798d60700323216feaa583d_0284f828223d6f3f5000536e9914d54b_PEACOCK%20FRONT.png" },
              { title: "Scale Models", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bb6bca15c9ef87f7bcc0_WhatsApp%20Image%202024-07-16%20at%201.31.05%20PM-4.jpeg" },
              { title: "Retail Display", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/679b72388458dc748e83e1bc_b2aa567d67b672de17f0dd53ae3b0416_GISOU%20NY%20SIDE.png" },
            ].map((industry, i) => (
              <FadeIn key={industry.title} delay={0.1 * i} className="group relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
                <img src={industry.img} alt={industry.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-xl font-cinzel font-bold text-white text-center px-4">{industry.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 md:py-32 px-6 lg:px-8 bg-muted text-center">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg md:text-xl text-foreground/70 font-josefin font-light mb-12 md:mb-16 uppercase tracking-widest">Your vision, our process</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
            {[
              { step: "01", title: "Talk to us", desc: "Let us know what you have in your mind, and we can suggest the best solution." },
              { step: "02", title: "Share Design", desc: "Select from our vast library or share your custom design." },
              { step: "03", title: "3D Printing", desc: "We ensure each print reflects superior quality and precision." },
              { step: "04", title: "Perfect Details", desc: "Our post processing team ensures every detail is perfected." },
              { step: "05", title: "Delivered", desc: "Your vision is now a reality and will be shipped to you shortly." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={0.1 * i} direction="up" className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-cinzel font-bold text-xl mb-4 md:mb-6 relative">
                  {item.step}
                  {i < 4 && <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30 -z-10 -translate-y-1/2" />}
                </div>
                <h3 className="text-lg font-cinzel font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70 font-josefin">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}