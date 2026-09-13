import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Palette, 
  Layers, 
  Sparkles, 
  Box, 
  Maximize2, 
  Grid, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '🎨 Graphic Design // NEXUS Growth',
  description: 'Brutalist, tactile, and editorial graphic design systems. Packaging, bespoke merchandise, 3D typography, and high-impact digital collateral.',
  keywords: ['graphic design agency', 'brand collateral design', 'packaging design', 'editorial typography', 'tactile branding'],
};

const DELIVERABLES = [
  {
    icon: Box,
    tag: 'PHYSICAL PRODUCT',
    title: 'Tactile Packaging & Unboxing',
    desc: 'Physical packaging architecture engineered for unboxing moments. Custom die-lines, embossing specs, sustainable paper stocks, and tactile foils.',
    specs: ['Custom Die-Lines & Prototypes', 'Foil & Embossing Specs', 'Sustainable Material Audits', 'Vendor-Ready Print Files'],
    color: '#f09341',
  },
  {
    icon: Maximize2,
    tag: 'LARGE FORMAT',
    title: 'Out-Of-Home & Billboard Campaigns',
    desc: 'High-contrast typography and minimalist compositions that command instant recognition at 60mph on highways and transit hubs.',
    specs: ['Highway & Transit Billboards', 'Subway & Street Takeovers', 'High-DPI Vector Scaling', 'Color Profile Calibration'],
    color: '#d7dd44',
  },
  {
    icon: Grid,
    tag: 'DIGITAL ASSETS',
    title: 'Marketing Collateral & Pitch Decks',
    desc: 'Investor pitch decks, sales one-pagers, and conference collateral designed to turn complex business models into clear visual hierarchies.',
    specs: ['Fundraising Pitch Decks', 'Interactive Sales One-Sheets', 'Whitepaper Layouts', 'Keynote & Figma Templates'],
    color: '#7ca8d2',
  },
  {
    icon: Palette,
    tag: 'TYPOGRAPHY',
    title: 'Custom Lettering & Type Systems',
    desc: 'Bespoke variable type treatments, editorial wordmarks, and custom display character sets that set you apart from stock font libraries.',
    specs: ['Bespoke Display Glyphs', 'Variable Weight Tuning', 'Kerning & Optical Alignment', 'Web & App Font Licenses'],
    color: '#eaa0cd',
  },
  {
    icon: FileText,
    tag: 'MERCHANDISE',
    title: 'Apparel & Brand Merchandise',
    desc: 'Streetwear-inspired capsule collections, heavyweight garment curation, screen-print color separation, and hangtag architecture.',
    specs: ['Custom Garment Specs', 'Direct-to-Film & Screen-Print', 'Woven Labels & Hangtags', 'Tech-Pack Documentation'],
    color: '#00966e',
  },
  {
    icon: Layers,
    tag: 'SYSTEMS',
    title: 'Comprehensive Design Asset Hub',
    desc: 'Every vector, raster, 3D asset, and social template organized in a structured, cloud-accessible Figma and Google Drive system.',
    specs: ['Organized Figma Libraries', 'SVG Icon Master Sets', 'Export Automation Presets', 'Internal Brand Portal'],
    color: '#f09341',
  },
];

export default function GraphicDesignPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#f09341] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#f09341] text-black rotate-[-2deg]">
              ✦ SERVICE 04 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              TACTILE ASSETS &amp; EDITORIAL DESIGN
            </span>
            <span className="sticker-badge bg-[#d7dd44] text-black">
              PACKAGING // PRINT // 3D TYPE
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              VISUAL ASSETS THAT COMMAND VALUE.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Cheap design signals cheap products. We craft tactile, editorial, and brutalist graphic identities that justify enterprise pricing and turn physical packaging into collector artifacts.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=graphic-design"
                className="c-button c-button-orange text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate Design Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Print DPI Quality</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                1200 DPI
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#f09341] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Asset Turnaround</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                48-HR SPRINT
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Deliverable Formats</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                VECTOR + 3D
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Print Rejection Rate</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                0.0% FLAWLESS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — TACTILE PACKAGING & MASONRY COLLAGE */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#f09341] text-black mb-2">PORTFOLIO COLLAGE MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Tactile Print &amp; Digital Exhibition
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Every collateral piece is designed with physical grain, optical balance, and aggressive negative space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tactile-card p-4 bg-white rotate-[-1.5deg]">
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-black mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80"
                  alt="Packaging Design Sample"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-xs font-bold text-black block">DIE-CUT UNBOXING SYSTEM</span>
              <span className="font-mono text-[10px] text-[#5c5b5b]">Foil Stamp // 450GSM Cotton Board</span>
            </div>

            <div className="tactile-card p-4 bg-[#f09341] rotate-[2deg]">
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-black mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&q=80"
                  alt="Editorial Typography Exhibition"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-xs font-bold text-black block">EDITORIAL BILLBOARD SUITE</span>
              <span className="font-mono text-[10px] text-black">Ultra-Wide Vector Formats</span>
            </div>

            <div className="tactile-card p-4 bg-white rotate-[-1deg]">
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-black mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
                  alt="Digital Asset Tokens"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-xs font-bold text-black block">BRAND MERCHANDISE TECHPACK</span>
              <span className="font-mono text-[10px] text-[#5c5b5b]">Heavyweight Screen-Print Specs</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#f09341] text-black mb-3">
              SCOPE SPECIFICATION
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Physical &amp; Digital Collateral
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Production-ready vector files, print vendor coordination, and complete digital design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="tactile-card p-6 md:p-8 flex flex-col justify-between"
                style={{ borderTopWidth: '8px', borderTopColor: item.color }}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b-2 border-black/10 mb-4">
                    <div className="h-10 w-10 rounded-xl border-2 border-black bg-white flex items-center justify-center text-black shadow-[-2px_2px_0px_#000]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="sticker-badge text-[9px] py-0.5 px-2 bg-white text-black shadow-none">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase leading-none text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#5c5b5b] leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black/10">
                  <ul className="space-y-1.5 font-mono text-xs text-black">
                    {item.specs.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full border border-black" style={{ backgroundColor: item.color }} />
                        <span className="font-semibold">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 max-w-6xl mx-auto my-12">
        <div className="rounded-3xl border-4 border-black bg-[#f09341] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6">
            <Sparkles className="h-4 w-4 text-black" /> DESIGN STUDIO SPRINT OPENINGS
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            READY FOR BESPOKE VISUALS?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Tell us what you're launching. We'll reply within 24 hours with design moodboards and a sprint estimate.
          </p>

          <Link
            href="/contact?service=graphic-design"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Start Design Project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
