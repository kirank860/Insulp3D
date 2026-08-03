import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" });

export const metadata: Metadata = {
  title: "INSCULP 3D | Innovative 3D Printing & Architectural Model Solutions in Dubai",
  description: "Looking for 3D printing in Dubai? Insculp 3D specializes in large-format printing, prototypes, and models that bring your vision to life with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefin.variable}`} suppressHydrationWarning>
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
