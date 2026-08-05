"use client";
import { useEffect } from 'react';

export function ClientHashScroll() {
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          // Delay to allow PageTransition and initial GSAP fades to settle
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 800);
        }
      }
    };

    handleHash();

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return null;
}
