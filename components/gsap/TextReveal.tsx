"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function TextReveal({ children, className = "" }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { 
          y: 100, 
          opacity: 0, 
          rotateX: -45, 
          transformOrigin: "0% 50% -50" 
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%", // Trigger when top of element hits 85% of viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`overflow-hidden perspective-1000 ${className}`}>
      <div ref={textRef}>
        {children}
      </div>
    </div>
  );
}
