"use client";

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Disable Navbar, Footer, and SmoothScroll for the Sanity Studio route
  if (pathname.startsWith('/studio')) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <Navbar />
      <PageTransition>
        <main className="flex-1">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </SmoothScroll>
  );
}
