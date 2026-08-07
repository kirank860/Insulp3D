"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, header, className = "" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      
      if (!container || !wrapper) return;

      // Use GSAP matchMedia to only apply scrub pinning on desktop (min-width: 768px)
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        // Calculate how far to scroll horizontally
        const scrollAmount = wrapper.scrollWidth - window.innerWidth;
        
        if (scrollAmount <= 0) return;

        gsap.to(wrapper, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            pin: true,
            scrub: 1, 
            invalidateOnRefresh: true,
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {header && <div className="w-full z-10 shrink-0">{header}</div>}
      <div 
        ref={wrapperRef} 
        className="flex flex-nowrap w-max md:w-max h-full items-center px-6 lg:px-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-8 md:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
}
