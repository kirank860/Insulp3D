"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// We only register ScrollTrigger on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Higher is a stronger effect. Default 1.
}

export function ParallaxImage({ src, alt, className = "", speed = 1 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Use GSAP matchMedia to disable parallax on mobile if it gets too heavy, 
    // but for now we apply it everywhere.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -15 * speed },
        {
          yPercent: 15 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* We make the image container taller than the wrapper to allow scrolling space without revealing edges */}
      <div className="absolute top-[-20%] left-0 w-full h-[140%]">
        <Image 
          ref={imageRef}
          src={src} 
          alt={alt} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
