import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <Image 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344683c_Group.svg" 
              alt="InSculp 3D Logo" 
              width={200}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          <p className="text-white/70 font-light max-w-sm">
            Leading provider of large-scale 3D printing and additive manufacturing in Dubai. Trusted by designers, architects, and engineers across the Europe, Middle East & Africa region.
          </p>
        </div>
        
        <div>
          <h4 className="font-cinzel font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about-us" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="text-white/70 hover:text-white transition-colors">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-3">
            <li className="text-white/70">Dubai, UAE</li>
            <li><Link href="/contact-us" className="text-white hover:text-white/80 transition-colors">Get in touch ➔</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} InSculp3D. All rights reserved.
      </div>
    </footer>
  );
}
