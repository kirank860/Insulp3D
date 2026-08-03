"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "PUBLICATIONS", href: "/publications" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <Image 
              src="https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344683c_Group.svg" 
              alt="InSculp 3D Logo" 
              width={200}
              height={40}
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[13px] font-josefin font-semibold tracking-[0.15em] uppercase transition-all duration-300 relative py-2",
                      pathname === item.href ? "text-primary" : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div 
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="px-8 py-3 bg-primary text-primary-foreground font-josefin font-bold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2 text-foreground z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Fullscreen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col space-y-8 items-center text-center">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-2xl font-cinzel font-bold tracking-widest transition-colors",
                      pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (navItems.length * 0.1), ease: "easeOut" }}
                className="pt-8"
              >
                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block px-10 py-4 bg-primary text-primary-foreground font-josefin font-bold tracking-[0.2em] rounded-full transition-all"
                >
                  CONTACT US
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
