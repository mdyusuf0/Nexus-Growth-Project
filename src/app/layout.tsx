import type { Metadata } from "next";
import { fontSans, fontSerif, fontMono, fontDisplay, fontGrotesk } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "APERTURE STUDIOS | Full-Service Creative Production Agency",
  description: "We build brands that convert. An award-winning full-service growth agency specializing in digital products, branding, high-velocity engineering, and acquisition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable} ${fontGrotesk.variable}`}
    >
      <body className="antialiased bg-[#f4f4f0] text-[#141414] min-h-screen flex flex-col selection:bg-[#d7dd44] selection:text-black">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-[var(--nav-offset)]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
