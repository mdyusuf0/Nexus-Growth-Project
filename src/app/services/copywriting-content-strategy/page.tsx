import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  PenTool, 
  FileText, 
  Sparkles, 
  Mail, 
  Target, 
  Zap, 
  CheckCircle2, 
  Quote 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '✍️ Copywriting & Content Strategy // NEXUS Growth',
  description: 'High-converting sales pages, brand positioning manifestos, and email lifecycle sequences that turn readers into loyal buyers.',
  keywords: ['conversion copywriting', 'direct response copywriting', 'content strategy agency', 'sales landing page copy', 'brand manifesto writer'],
};

const DELIVERABLES = [
  {
    icon: FileText,
    tag: 'CONVERSION COPY',
    title: 'High-Conversion Landing Page Copy',
    desc: 'Word-by-word direct response sales pages engineered around customer pain, objections, proof mechanisms, and irreversible guarantees.',
    specs: ['Hero Hook Variations', 'Objection Teardown Framework', 'Risk Reversal Guarantee Copy', 'Micro-Copy & CTA Optimization'],
    color: '#7ca8d2',
  },
  {
    icon: Quote,
    tag: 'POSITIONING',
    title: 'Brand Manifestos & Foundational Voice',
    desc: 'The defining narrative that establishes your company as the obvious market leader. Uncompromising, sharp, and impossible to forget.',
    specs: ['Foundational Brand Manifesto', 'Tone-Of-Voice Rulebook', 'Do & Do-Not Say Guidelines', 'Executive Bio Narrative'],
    color: '#d7dd44',
  },
  {
    icon: Mail,
    tag: 'LIFECYCLE',
    title: 'Automated Email Funnel Sequences',
    desc: 'High-open-rate welcome flows, abandoned checkout recovery, customer win-backs, and weekly storytelling newsletters that generate cash on autopilot.',
    specs: ['7-Part Welcome Onboarding', 'High-Recovery Abandoned Cart', 'VIP Post-Purchase Ascension', 'Weekly Story-Driven Campaigns'],
    color: '#eaa0cd',
  },
  {
    icon: Target,
    tag: 'PAID COPY',
    title: 'Ad Copywriting & Hook Libraries',
    desc: '50+ direct response ad copy variations across Meta, Google Search, and LinkedIn. Designed to maintain high CTRs and pre-qualify buyer intent.',
    specs: ['Long-Form Story Ads', 'Short-Punch Pattern Interrupts', 'Google Search RSA Matrix', 'Ad Hook Testing Spreadsheets'],
    color: '#00966e',
  },
  {
    icon: PenTool,
    tag: 'AUTHORITY',
    title: 'Executive Ghostwriting & Thought Leadership',
    desc: 'High-impact LinkedIn and X content written for founders and CEOs. We transform technical product insights into viral industry discussions.',
    specs: ['Weekly LinkedIn Columns', 'Viral X Threads', 'Keynote Speech Drafting', 'Substack Editorial Strategy'],
    color: '#f09341',
  },
  {
    icon: Zap,
    tag: 'SEO CONTENT',
    title: 'High-Intent Programmatic SEO Articles',
    desc: 'In-depth, non-generic technical articles targeting high-intent buyer searches with zero AI-slop fluff and maximum factual depth.',
    specs: ['High-Intent Keyword Focus', 'Proprietary Research Anchors', 'Interactive Diagram Snippets', 'Internal Linking Architecture'],
    color: '#7ca8d2',
  },
];

export default function CopywritingPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#7ca8d2] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#7ca8d2] text-black rotate-[-2deg]">
              ✦ SERVICE 09 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              CONVERSION COPYWRITING &amp; STRATEGY
            </span>
            <span className="sticker-badge bg-[#d7dd44] text-black">
              WORDS THAT PRINT REVENUE
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              WORDS THAT SHIFT TRAJECTORIES.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most agency copy sounds like a sterile corporate whitepaper written by committee. We write bold, direct-response words that dismantle skepticism, create urgent desire, and turn visitors into high-LTV buyers.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=copywriting-content-strategy"
                className="c-button c-button-blue text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate Copy Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Page Conversion Lift</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                +48% AVG
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#7ca8d2] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Email Open Rates</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                52% AVG
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">AI Slop Content</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                0% HUMAN
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Copy Delivery Speed</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                5-DAY SPRINT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — TEAR-SHEET COPY COMPARISON */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#7ca8d2] text-black mb-2">COPYWRITING MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Generic Corporate vs. NEXUS Conversion Copy
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Notice the contrast between passive buzzwords and high-stakes direct-response clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="tactile-card p-6 md:p-8 bg-white border-2 border-red-500">
              <span className="sticker-badge bg-red-100 text-red-700 text-[10px] mb-3">GENERIC AI / CORPORATE COPY</span>
              <h4 className="font-serif text-2xl text-black mb-3 italic">
                "We leverage synergy to deliver enterprise-grade omnichannel solutions for modern teams."
              </h4>
              <p className="font-sans text-xs text-[#5c5b5b] leading-relaxed">
                Says nothing. Ignored in 0.2 seconds. Triggers immediate skepticism and bounces visitors before they ever scroll.
              </p>
            </div>

            <div className="tactile-card p-6 md:p-8 bg-[#d7dd44]">
              <span className="sticker-badge bg-black text-white text-[10px] mb-3">NEXUS CONVERSION SPEC</span>
              <h4 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase text-black mb-3 leading-none">
                "Stop burning \$40k/month on ads that crawl. We build sub-second web applications that triple your checkout conversions."
              </h4>
              <p className="font-sans text-xs text-black font-medium leading-relaxed">
                Specific problem. Verifiable metric. Irresistible outcome. Commands respect and action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#7ca8d2] text-black mb-3">
              COPY DELIVERABLES
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              What We Write For You
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Every word engineered for reader psychology, cognitive ease, and conversion velocity.
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
        <div className="rounded-3xl border-4 border-black bg-[#7ca8d2] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6">
            <Sparkles className="h-4 w-4 text-black" /> COPY SPRINT DATES OPEN
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            READY TO UPGRADE YOUR WORDS?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Send us your current landing page or pitch. We'll reply within 24 hours with a brutal teardown and conversion rewrite roadmap.
          </p>

          <Link
            href="/contact?service=copywriting-content-strategy"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Start Copywriting Sprint <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
