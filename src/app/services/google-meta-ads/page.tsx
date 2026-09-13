import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart, 
  RefreshCw 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '📢 Google & Meta Ads // NEXUS Growth',
  description: 'Data-driven paid media acquisition campaigns on Meta, Google Performance Max, and YouTube with creative fatigue protection and verified 4.2x average ROAS.',
  keywords: ['paid ads agency', 'Meta ads management', 'Google Performance Max agency', 'ROAS optimization', 'DTC performance marketing'],
};

const DELIVERABLES = [
  {
    icon: Target,
    tag: 'STRATEGY & ARCHITECTURE',
    title: 'Full-Funnel Campaign Architecture',
    desc: 'Prospecting, retargeting, and retention ad sets mapped with zero audience cannibalization. Dynamic budget allocation maximizing blended CAC.',
    specs: ['Meta Advantage+ Setup', 'Google Search & PMax', 'Zero Audience Overlap', 'Blended CAC Modeling'],
    color: '#00966e',
  },
  {
    icon: RefreshCw,
    tag: 'CREATIVE VELOCITY',
    title: 'High-Volume Creative Testing Matrix',
    desc: 'Deploying 15–30 fresh static, motion, and UGC video ad variations every 2 weeks to eliminate ad fatigue and identify breakout winners before spend decays.',
    specs: ['Dynamic Product Ads (DPA)', 'UGC Video Variations', 'Rapid Hook Iteration', 'Fatigue Alert Triggers'],
    color: '#d7dd44',
  },
  {
    icon: ShieldCheck,
    tag: 'TRACKING & CAPI',
    title: 'Server-Side CAPI & Offline Events',
    desc: 'Defeating iOS tracking loss with server-side Meta Conversions API (CAPI) and Google Enhanced Conversions with 95%+ event match quality.',
    specs: ['Server-Side Meta CAPI', 'Google Enhanced Conversions', '95%+ Match Quality Score', 'Offline CRM Purchase Sync'],
    color: '#7ca8d2',
  },
  {
    icon: DollarSign,
    tag: 'BUDGET SCALING',
    title: 'Algorithmic Budget Scaling Sprints',
    desc: 'Systematic 20% budget scale triggers applied to winning ad sets with real-time ROAS guardrails to prevent margin compression.',
    specs: ['Automated Rule Scaling', 'Hourly ROAS Monitoring', 'Dayparting Optimization', 'Margin-First Bidding'],
    color: '#eaa0cd',
  },
  {
    icon: BarChart,
    tag: 'TELEMETRY',
    title: 'Blended MER & Real-Time Dashboard',
    desc: 'Live cloud reporting dashboard tracking Marketing Efficiency Ratio (MER), blended customer acquisition cost, customer LTV, and net profit.',
    specs: ['Live Looker / Northbeam View', 'Triple Whale Data Sync', 'Blended MER Attribution', 'Weekly Executive Sync'],
    color: '#f09341',
  },
  {
    icon: TrendingUp,
    tag: 'LANDING PAGES',
    title: 'Custom Pre-Purchase Advertorials',
    desc: 'High-converting custom Next.js landing pages and listicles built specifically for paid ad traffic, lifting pre-cart conversion by 35%+',
    specs: ['Dedicated Advertorials', 'Next.js Sub-Second Speed', 'VWO A/B Testing Gate', 'Direct Cart Injections'],
    color: '#00966e',
  },
];

export default function GoogleMetaAdsPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#00966e] selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#00966e] text-white rotate-[-2deg]">
              ✦ SERVICE 07 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              PAID MEDIA &amp; PERFORMANCE ACQUISITION
            </span>
            <span className="sticker-badge bg-[#d7dd44] text-black">
              META // GOOGLE PMAX // CAPI
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              PROFITABLE SCALE. ZERO EXCUSES.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most ad agencies burn your budget on broad targeting and blame the algorithm when sales dip. We treat paid media as an algorithmic mathematical science: high-velocity creative testing, server-side CAPI tracking, and aggressive budget scaling.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=google-meta-ads"
                className="c-button c-button-emerald text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate Ads Audit <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Average Client ROAS</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                4.2X BLENDED
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#00966e] p-4 text-center shadow-[-4px_5px_0px_#000] text-white">
              <span className="font-mono text-xs text-white/90 font-bold block">Ad Spend Managed</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                $18M+ TOTAL
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Event Match Quality</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                95%+ CAPI
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Creative Testing</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                30 ADS/MO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — LIVE ROAS DASHBOARD METRIC */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#00966e] text-white mb-2">PAID ENGINE MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Algorithmic Telemetry &amp; ROAS Guardrails
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Live attribution model measuring ad dollar in against bottom-line cash collected.
            </p>
          </div>

          <div className="tactile-card p-6 md:p-8 bg-white max-w-4xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b-2 border-black">
              <span className="font-mono text-xs font-bold text-black">NEXUS MEDIA OS // CLIENT PORTAL</span>
              <span className="sticker-badge text-[9px] bg-[#d7dd44] text-black shadow-none font-mono">LIVE SPEND ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
              <div className="p-4 rounded-xl border-2 border-black bg-[#f4f4f0]">
                <span className="font-mono text-xs text-[#5c5b5b] block">30-Day Ad Spend</span>
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold text-black block mt-1">$142,500</span>
              </div>
              <div className="p-4 rounded-xl border-2 border-black bg-[#00966e] text-white">
                <span className="font-mono text-xs text-white/90 block">Attributed Revenue</span>
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold text-white block mt-1">$612,750</span>
              </div>
              <div className="p-4 rounded-xl border-2 border-black bg-[#d7dd44] text-black">
                <span className="font-mono text-xs text-black font-bold block">Blended ROAS</span>
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold text-black block mt-1">4.30X MER</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-black bg-white flex items-center justify-between font-mono text-xs">
              <span className="text-black font-bold">AUTOMATED SCALING RULE:</span>
              <span className="text-[#00966e] font-bold">ACTIVE (SCALE 20% EVERY 48H IF ROAS &gt; 3.5X)</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#00966e] text-white mb-3">
              PAID MEDIA SCOPE
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Complete Performance Deliverables
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Full creative production, daily bid optimization, server-side CAPI tracking, and dedicated pre-purchase landing pages.
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
        <div className="rounded-3xl border-4 border-black bg-[#00966e] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center text-white">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6 text-black">
            <Sparkles className="h-4 w-4 text-[#00966e]" /> PAID MEDIA AD SPRINT OPENINGS
          </div>

          <h2 className="u-title-100 text-white leading-none mb-6">
            READY TO SCALE PROFITABLY?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-white font-medium mb-8">
            Stop guessing with your ad budget. We'll audit your account, identify budget leaks, and build a scaling roadmap within 24 hours.
          </p>

          <Link
            href="/contact?service=google-meta-ads"
            className="c-button text-base py-4 px-10 bg-[#d7dd44] text-black shadow-[-4px_6px_0px_#fff]"
          >
            Claim Paid Ads Audit <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
