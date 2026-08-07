"use client";

import { usePathname } from 'next/navigation';
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import React from 'react';

export default function LayoutWrapper({ 
  children,
  navbar,
  footer
}: { 
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Disable Navbar, Footer, and SmoothScroll for the Sanity Studio route
  if (pathname.startsWith('/studio')) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      {navbar}
      <PageTransition>
        <main className="flex-1">
          {children}
        </main>
      </PageTransition>
      {footer}
    </SmoothScroll>
  );
}
