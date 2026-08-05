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

      // Calculate how far to scroll horizontally
      // We subtract the window width so the last item stops at the right edge
      const scrollAmount = wrapper.scrollWidth - window.innerWidth;
      
      // If content doesn't overflow, don't pin
      if (scrollAmount <= 0) return;

      gsap.to(wrapper, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          pin: true,
          scrub: 1, // Add 1s smoothing to the scrub
          invalidateOnRefresh: true, // Recalculate on resize
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {header && <div className="w-full z-10 shrink-0">{header}</div>}
      <div ref={wrapperRef} className="flex flex-nowrap w-max will-change-transform h-full items-center px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
