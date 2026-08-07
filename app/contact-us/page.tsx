

import { WordPullUp } from "@/components/ui/word-pull-up";
import { FadeIn } from "@/components/ui/fade-in";
import { TextReveal } from "@/components/gsap/TextReveal";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClientHashScroll } from "@/components/ClientHashScroll";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | InSculp 3D",
  description: "Get in touch with InSculp 3D in Dubai. Transform your visions into remarkable 3D printed realities with our expert team.",
  alternates: { canonical: '/contact-us' }
};

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <ClientHashScroll />
      <div id="contact-form" className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 scroll-mt-32 mb-24">
        <FadeIn delay={0.4} direction="right" className="space-y-8">
          <TextReveal>
            <h2 className="text-4xl font-heading font-bold text-foreground">Contact us</h2>
          </TextReveal>
          <p className="text-lg text-foreground/70 font-josefin font-light leading-relaxed">
            We thrive on creation, innovation and collaboration. Do you have a detailed design, or simply a vision? Let our team handle it for you. Get in touch with us today or visit us to craft your form.
          </p>
          <div className="space-y-4 pt-8">
            <p className="text-foreground font-josefin font-light"><strong>Email:</strong> info@insculp3d.com</p>
            <p className="text-foreground font-josefin font-light"><strong>Phone:</strong> +971 55 2313 447</p>
            <p className="text-foreground font-josefin font-light"><strong>Address:</strong> YS International WH 05, Dubai Investment Park, DIP, Dubai, UAE</p>
          </div>
          <div className="space-y-4 pt-8 border-t border-border/50">
            <h3 className="text-xl font-heading font-bold text-primary">Business Hours:</h3>
            <p className="text-foreground font-josefin font-light">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-foreground font-josefin font-light">Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-foreground font-josefin font-light">Sunday: Closed</p>
          </div>
          <div className="space-y-4 pt-8 border-t border-border/50">
            <h3 className="text-xl font-heading font-bold text-primary">Follow Us:</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform"><Image src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446895_facebook%20(1).png" alt="Facebook" width={32} height={32} className="opacity-80 hover:opacity-100" /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Image src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446894_instagram%20(1).png" alt="Instagram" width={32} height={32} className="opacity-80 hover:opacity-100" /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Image src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d3446893_linkedin%20(3).png" alt="LinkedIn" width={32} height={32} className="opacity-80 hover:opacity-100" /></a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="left" className="bg-muted p-10 rounded-3xl shadow-2xl border border-border/50">
          <ContactForm />
        </FadeIn>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-32">
        <WordPullUp words="Share your vision, and let us craft it for you" className="text-5xl md:text-6xl font-heading text-foreground mb-8 uppercase" />
        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center gap-8">
            <Image src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/6798bc3f5f28106b27f69b66_75252de1259e2a79bd20bc62fca24c51_POT.png" alt="Custom 3D Printing" width={800} height={800} className="w-64 h-auto rounded-3xl shadow-xl" />
            <p className="text-xl text-foreground/80 font-josefin font-light max-w-3xl mx-auto leading-relaxed">
              A passion for creation, innovation, and collaboration fuels us. Whether you have a bold design or just the seeds of an idea, we specialise in transforming visions into remarkable realities. Don&apos;t let your creativity sit on the sidelines—join us in crafting something exceptional! Contact us today to start a journey to elevate your ideas beyond your wildest expectations. Let&apos;s create something extraordinary together!
            </p>
          </div>
        </FadeIn>
      </div>
      <WhatsAppButton />
    </div>
  );
}