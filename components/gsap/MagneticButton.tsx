"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // How far it pulls. Default 40px.
}

export function MagneticButton({ children, className = "", strength = 40 }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Use GSAP quickTo for highly optimized, smooth cursor tracking
    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from center, normalized to [-1, 1]
      const distanceX = (clientX - centerX) / (width / 2);
      const distanceY = (clientY - centerY) / (height / 2);
      
      // Only pull if mouse is near/inside (distance < ~1.5)
      if (Math.abs(distanceX) < 1.5 && Math.abs(distanceY) < 1.5) {
        xTo(distanceX * strength);
        yTo(distanceY * strength);
      } else {
        // Return to center if mouse moves too fast outside bounding box
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={buttonRef} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  );
}
