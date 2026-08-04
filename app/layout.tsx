import type { Metadata } from "next";
import { Montserrat, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });
const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.insculp3d.ae'),
  title: {
    default: "InSculp 3D | Leading Large-Scale 3D Printing in Dubai & EMEA",
    template: "%s | InSculp 3D",
  },
  description: "InSculp 3D is the premier large-format 3D printing and additive manufacturing facility in Dubai, serving the EMEA region. We specialize in custom 3D printed architecture, art, and industrial models.",
  keywords: ["3D Printing Dubai", "Large Scale 3D Printing", "Additive Manufacturing UAE", "3D Printed Architecture", "Custom 3D Models", "InSculp 3D"],
  authors: [{ name: "InSculp 3D" }],
  creator: "InSculp 3D",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.insculp3d.ae",
    title: "InSculp 3D | Leading Large-Scale 3D Printing in Dubai",
    description: "InSculp 3D is the premier large-format 3D printing facility in Dubai. Crafting forms with unmatched precision and innovation.",
    siteName: "InSculp 3D",
    images: [{
      url: "https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344683c_Group.svg",
      width: 1200,
      height: 630,
      alt: "InSculp 3D Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InSculp 3D | Leading Large-Scale 3D Printing in Dubai",
    description: "InSculp 3D is the premier large-format 3D printing facility in Dubai. Crafting forms with unmatched precision and innovation.",
    images: ["https://cdn.prod.website-files.com/66da0818e9f24d66d344680f/66da0818e9f24d66d344683c_Group.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${josefin.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <Navbar />
        <PageTransition>
          <main className="flex-1">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
