import type { Metadata } from "next";
import { fontSans, fontSerif, fontMono, fontDisplay, fontGrotesk, fontAccent } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollingTileGridUnderlay from "@/components/ui/ScrollingTileGridUnderlay";

export const metadata: Metadata = {
  title: "NEXUS Growth | Full-Service Creative Production Agency",
  description: "Ideas Into Impact. An award-winning full-service growth agency specializing in digital products, branding, high-velocity engineering, and acquisition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable} ${fontGrotesk.variable} ${fontAccent.variable}`}
    >
      <body className="antialiased bg-[#0A0A0A] text-white min-h-screen flex flex-col selection:bg-[#FF1F1F] selection:text-white relative">
        <ScrollingTileGridUnderlay />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 flex-grow pt-[var(--nav-offset)]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
