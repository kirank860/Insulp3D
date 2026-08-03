

import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | InSculp 3D",
  description: "Learn about InSculp 3D, the visionary leaders in large-format 3D printing and additive manufacturing in Dubai. Discover our core values and team.",
  alternates: { canonical: '/about-us' }
};

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="space-y-8">
            <WordPullUp words="Our Story" className="text-left text-5xl md:text-7xl font-cinzel text-foreground mb-4" />
            <h2 className="text-3xl font-cinzel font-bold text-primary">Crafting the Future with 3D Printing</h2>
            <p className="text-lg text-foreground/80 font-josefin font-light leading-relaxed">
              We are artists, creators, and innovators, and we understand the power of creativity. With over two decades of experience, we have mastered sculpting innovation and pushed the limits of large-format 3D printing while incorporating artistic finesse into our work. <br/><br/>
              Our expertise spans a diverse range of materials, manufacturing techniques, and methods, aided by technology and skilled artisans who work tirelessly to bring our clients&apos; visions to life. Our commitment to unlocking our clients&apos; creative vision and transforming it into a tangible, awe-inspiring reality is unwavering. <br/><br/>
              From groundbreaking art sculptures to stunning architectural pieces and visionary art installations, we strive to redefine the limitless potential of art.
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.2}>
          <div className="aspect-[4/5] bg-border rounded-3xl relative overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468b6_fb7ba5ab760b3084f89e4cfc22c7f70c_web%20render_edited-min.png" 
              alt="top 3D printed chair by INSCULP3D at Dubai" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </FadeIn>
      </section>

      {/* Our Vision */}
      <section className="w-full bg-primary text-primary-foreground py-24 px-6 lg:px-8 mb-32 relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-6">OUR VISION</h2>
            <p className="text-xl font-josefin font-light text-center max-w-3xl mx-auto mb-16 text-primary-foreground/90">
              Setting global standards in digital fabrication, we transform spaces with pioneering 3D printing technologies.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Architecture", desc: "Transforming spaces through the creation of practical and innovative architectural elements, like wall and ceiling panels, using the power of large-format digital fabrication." },
              { title: "Art", desc: "Creating one-of-a-kind 3D printed art sculptures, installation signages, furniture, lighting, decor elements, and captivating retail displays that transform artistic visions into reality." },
              { title: "Innovation", desc: "Developing custom bespoke pieces using advanced 3D printing techniques to showcase new possibilities." },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={0.1 * i} direction="up" className="bg-background/10 p-8 rounded-3xl backdrop-blur-sm border border-primary-foreground/20">
                <img src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446845_Vector.svg" alt="icon" className="w-12 h-12 mb-6 opacity-80" style={{ filter: 'brightness(0) invert(1)' }} />
                <h3 className="text-2xl font-cinzel font-bold mb-4">{v.title}</h3>
                <p className="font-josefin font-light text-primary-foreground/80 leading-relaxed">{v.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-6 lg:px-8 mb-32 max-w-4xl mx-auto text-center">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-8">OUR MISSION</h2>
          <p className="text-lg font-josefin font-light text-foreground/80 leading-relaxed">
            Our mission is to unleash the full potential of creativity and bring it to life in breathtaking ways. Through cutting-edge technology and skilled artisans, we are committed to excellence, creating awe-inspiring works of art that transform perceptions. <br/><br/>
            We aim to inspire others to embrace their creativity and strive for greatness, making the world a more beautiful and uplifting place for all. To be the pioneers of creativity and innovation in art and design, challenging the boundaries of possibility and igniting the imagination to create a brighter future for everyone.
          </p>
        </FadeIn>
      </section>

      {/* Our Values & Code of Conduct */}
      <section className="px-6 lg:px-8 mb-32 max-w-5xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-4xl font-cinzel font-bold text-foreground text-center mb-6">OUR VALUES & CODE OF CONDUCT</h2>
          <p className="text-center font-josefin font-light text-foreground/70 mb-12">
            As pioneers in the realms of creativity and innovation in art and design, we uphold the following principles.
          </p>
        </FadeIn>
        
        <div className="space-y-6">
          {[
            { title: "Visionary Thinking", desc: "We commit to challenging the boundaries of what is perceived as possible, fostering a culture of bold ideas and adventurous experimentation." },
            { title: "Inspiration", desc: "We aspire to challenge the boundaries of what is perceived as possible and inspire and encourage others to embrace their creativity through our work." },
            { title: "Collaboration", desc: "We believe in the power of cooperation, recognising that diverse perspectives fuel our creativity and lead to innovative solutions." },
            { title: "Integrity", desc: "We uphold a standard of integrity in our practices, ensuring that our creativity is groundbreaking and respectful of others and their values." },
          ].map((v, i) => (
            <FadeIn key={v.title} delay={0.1 * i} direction="left" className="flex flex-col md:flex-row gap-4 md:gap-12 p-8 bg-muted rounded-2xl border border-border/50 hover:border-primary/50 transition-colors items-center md:items-start">
              <h3 className="w-full md:w-1/3 text-2xl font-cinzel font-bold text-primary whitespace-nowrap">{v.title}</h3>
              <p className="w-full md:w-2/3 font-josefin font-light text-foreground/80">{v.desc}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4} className="mt-12">
          <p className="text-center font-josefin font-light text-foreground/70">
            By living these values, we aim to cultivate an environment where creativity thrives, and innovation flourishes, paving the way for future generations.
          </p>
        </FadeIn>
      </section>

      {/* Our Core Values */}
      <section className="px-6 lg:px-8 mb-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="space-y-8">
          <h2 className="text-4xl font-cinzel font-bold text-foreground mb-8">Our Core Values</h2>
          <div className="space-y-6">
            {[
              { title: "Innovation", desc: "Pushing boundaries with every project." },
              { title: "Trustworthiness", desc: "From consultation to delivery, our clients rely on the integrity, quality, and reliability that Insculp represents." },
              { title: "Versatility", desc: "Adapting to each project’s unique needs, we serve a wide range of industries, demonstrating our ability to handle any challenge." },
              { title: "Visionary Thinking", desc: "We see endless possibilities, turning innovative ideas into reality and pushing the limits of large format 3D printing." },
              { title: "Creativity", desc: "Turning visions into reality." },
              { title: "Sustainability", desc: "We are dedicated to eco-friendly processes, prioritizing sustainability at every step" },
              { title: "Craftsmanship", desc: "We transform designs into forms, showcasing our dedication to quality in every piece." },
            ].map((v, i) => (
              <div key={v.title} className="border-b border-border pb-4">
                <h3 className="text-xl font-cinzel font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">▸</span> {v.title}
                </h3>
                <p className="font-josefin font-light text-foreground/70 pl-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.2}>
          <div className="aspect-[3/4] bg-border rounded-3xl relative overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bbc1818843b7e0a75d6c_820f1eac47e65ca457ad567c07691576_IMG-20241105-WA0039.avif" 
              alt="Pellets" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </FadeIn>
      </section>

      {/* Our Visionaries */}
      <section className="w-full bg-muted py-24 px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-16 text-foreground">OUR VISIONARIES</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Subramani Balakrishnan", role: "Founder", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468be_cc52d902f75f1f0fa9221180513fa632_IMG_8766.png", quote: "The visionary mindset transforms the realm of 3D printing, inspiring us to redefine possibilities and break through barriers to what we can achieve." },
              { name: "Devna Subramani", role: "Co-Founder", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468bd_c44840c6c9ac3242f750f9f9f781655d_IMG_8824-min.png", quote: "3D printing has promoted significant growth in manufacturing by emphasising sustainable practices and innovative solutions that benefit both people and the environment." },
              { name: "Bindu Subramani", role: "Managing Director", img: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d34468c2_f4ef3785a4956a9ce3de7cff1e6bcd94_20240529_115643-min.png", quote: "3D printing represents a significant advancement at the intersection of technology and design, fostering new opportunities for innovation." },
            ].map((person, i) => (
              <FadeIn key={person.name} delay={0.1 * i} direction="up" className="flex flex-col items-center text-center space-y-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-foreground">{person.name}</h3>
                  <p className="font-josefin font-bold text-primary tracking-widest uppercase text-sm mt-1 mb-4">{person.role}</p>
                  <p className="font-josefin font-light text-foreground/80 italic">&quot;{person.quote}&quot;</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 lg:px-8 mb-32 max-w-7xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-6 text-foreground">WHY CHOOSE US?</h2>
          <p className="text-center font-josefin font-light text-foreground/80 max-w-4xl mx-auto mb-16">
            In an industry where traditional manufacturing and standard 3D printing often fall short, InSculp excels by addressing key pain points such as customization constraints, scalability issues, sustainability concerns, and extended lead times. We leverage large format 3D printing to transform these challenges into opportunities for innovation and excellence:
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            { title: "Advanced Pellet Printers", desc: "Our state-of-the-art pellet printers offer unmatched precision and quality, enabling the creation of intricate and robust large format 3D prints." },
            { title: "Top-of-the-Line 3D Printers", desc: "For smaller elements, we use high-precision FDM 3D printers to ensure meticulous detail and superior quality." },
            { title: "Sustainable Practices", desc: "Committed to sustainability, we incorporate recycling into our manufacturing processes, minimizing our carbon footprint and supporting a circular economy." },
            { title: "Post Processing", desc: "Beyond 3D printing, we handle every aspect of post-processing, from cutting and painting to finishing, ensuring each piece meets our exacting standards." },
            { title: "Large Format Capabilities", desc: "Our customizable large format 3D printers can handle projects up to 3 meters in height, perfect for ambitious and sizable designs." },
            { title: "Rapid Production", desc: "Our fast production capabilities ensure quick turnaround times, allowing you to meet tight deadlines without sacrificing quality." },
            { title: "Versatility", desc: "Our technology supports a wide range of applications, from architectural elements and sculptures to intricate decorative pieces, ensuring versatility in every project." },
            { title: "Expert Team", desc: "Our talented designers and fabricators bring expertise and creativity to every project, ensuring exceptional results." },
          ].map((v, i) => (
            <FadeIn key={v.title} delay={0.05 * i} direction="up" className="flex gap-4 items-start">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">✓</div>
              <div>
                <strong className="font-cinzel font-bold text-foreground block mb-1">{v.title}:</strong>
                <span className="font-josefin font-light text-foreground/70">{v.desc}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-foreground text-background py-24 px-6 lg:px-8 mb-32 relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <p className="text-center font-josefin tracking-widest text-primary uppercase text-sm mb-2">KIND-WORDS</p>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-16">CLIENTS</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "I recently had the pleasure of commissioning a bespoke sculpture for a landscape project from INSCULP 3D. From start to finish, the process was seamless and exceeded our expectations in every way.",
              "As a restaurateur striving to create a unique dining experience, I turned to INSCULP 3D for their expertise in 3D-printed interior design. The innovative approach to blending technology with craftsmanship has truly transformed the place into a one-of-a-kind destination.",
              "I had the pleasure of working with INSCULP 3D to create custom props for our game show, and I couldn't be more impressed with the outcome.",
              "We recently worked with INSCULP 3D to create awards for our annual ceremony, and they were nothing short of exceptional. A demonstration of unparalleled creativity, professionalism, and attention to detail.",
              "Even though we are a 3D printing company, our core competency is in crafting forms."
            ].map((quote, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up" className="bg-background/10 p-8 rounded-3xl backdrop-blur-sm border border-background/20">
                <div className="text-primary text-4xl font-cinzel mb-4">&quot;</div>
                <p className="font-josefin font-light text-background/90 leading-relaxed italic">{quote}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="px-6 lg:px-8 mb-24 max-w-7xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-6 text-foreground">Our Technology</h2>
          <p className="text-center font-josefin font-light text-foreground/80 max-w-3xl mx-auto mb-16 italic">
            We harness cutting-edge 3D printing technologies to deliver exceptional quality and precision. Our capabilities extend from large format 3D printing to post processing.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Large Format 3D Printing", desc: "Our printers can handle projects up to 3 meters in height, ideal for creating grand architectural elements to large artistic sculptures with exceptional detail." },
            { title: "Pellet Printing", desc: "Using pellet-fed printers, we achieve material efficiency and cost-effectiveness. This method reduces costs and allows for the use of a wide range of materials, including recycled plastics." },
            { title: "Sustainable 3D Printing", desc: "We focus on sustainability by using biodegradable materials, energy-efficient processes, and recycling systems for 3D print waste, supporting a circular economy." },
          ].map((tech, i) => (
            <FadeIn key={tech.title} delay={0.1 * i} direction="up" className="bg-muted p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-cinzel font-bold text-primary mb-4">{tech.title}</h3>
              <p className="font-josefin font-light text-foreground/80 leading-relaxed">{tech.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}