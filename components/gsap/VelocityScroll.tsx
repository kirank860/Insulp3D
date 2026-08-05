"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VelocityScrollProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // How much it skews/stretches based on velocity (default: 1)
}

export function VelocityScroll({ children, className = "", intensity = 1 }: VelocityScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create a quickSetter for high performance updates
      const skewSetter = gsap.quickSetter(containerRef.current, "skewY", "deg");
      const proxy = { skew: 0 };
      
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Calculate skew based on velocity. 
          // Divide by a constant to tone it down. 
          let skew = self.getVelocity() / -300 * intensity;
          
          // Clamp the skew so it doesn't break the layout at extreme speeds
          skew = gsap.utils.clamp(-15, 15, skew);
          
          // Only update if there is a noticeable difference to save cycles
          if (Math.abs(skew - proxy.skew) > 0.1) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3.out",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={containerRef} className={`origin-center will-change-transform ${className}`}>
      {children}
    </div>
  );
}
