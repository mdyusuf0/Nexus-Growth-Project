import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Globe, 
  Link2, 
  Cpu, 
  CheckCircle2, 
  BarChart2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '🔍 Search Engine Optimization (SEO) // APERTURE STUDIOS',
  description: 'Technical Core Web Vitals optimization, programmatic search clusters, and high-authority link acquisition architectures for organic market dominance.',
  keywords: ['SEO agency', 'technical SEO', 'programmatic SEO', 'Core Web Vitals agency', 'organic search growth'],
};

const DELIVERABLES = [
  {
    icon: Cpu,
    tag: 'TECHNICAL EXCELLENCE',
    title: 'Core Web Vitals & Crawl Budget Hardening',
    desc: 'Eliminating render-blocking assets, JavaScript bloat, and layout shifts. We guarantee a 99+ mobile Lighthouse score that Google algorithms favor.',
    specs: ['Sub-500ms TTFB at Edge', 'Zero Cumulative Layout Shift (CLS)', 'Structured Schema Markup', 'XML & Indexing Audits'],
    color: '#00966e',
  },
  {
    icon: Globe,
    tag: 'SCALE ARCHITECTURE',
    title: 'Programmatic SEO Page Clusters',
    desc: 'Generating hundreds of high-ranking, dynamic landing pages using custom Next.js static generation pipelines tied to real customer search intent.',
    specs: ['Next.js Dynamic ISR Pages', 'Database-Driven Landing Pages', 'Localized City/Category Clusters', 'Zero Duplicate Content Penalties'],
    color: '#d7dd44',
  },
  {
    icon: Link2,
    tag: 'AUTHORITY',
    title: 'High-Authority Editorial Link Building',
    desc: 'Bespoke digital PR and high-DR editorial placements on Forbes, TechCrunch, and industry publications. Zero spammy link farms.',
    specs: ['DR70+ Verified Backlinks', 'Digital PR Story Pitches', 'Unlinked Brand Mention Claims', 'Broken Resource Reclaim'],
    color: '#7ca8d2',
  },
  {
    icon: Search,
    tag: 'RESEARCH',
    title: 'Buyer-Intent Keyword Architecture',
    desc: 'Targeting keywords with high commercial intent and clear purchase readiness, rather than chasing high-volume vanity keywords that never convert.',
    specs: ['Commercial Intent Clustering', 'Search Competitor Gap Matrix', 'Featured Snippet Steal Plans', 'Negative Keyword Exclusions'],
    color: '#eaa0cd',
  },
  {
    icon: BarChart2,
    tag: 'TELEMETRY',
    title: 'Daily Rank Tracking & Search Console Audits',
    desc: 'Real-time keyword position tracking, crawl anomaly alerts, and organic revenue attribution dashboards synced to your Google Search Console.',
    specs: ['Daily Keyword Position Tracking', 'GSC Indexation Error Monitors', 'Organic Revenue Attribution', 'Monthly Strategic Reviews'],
    color: '#f09341',
  },
  {
    icon: TrendingUp,
    tag: 'CONVERSION',
    title: 'Organic Search Conversion Rate Optimization',
    desc: 'Ensuring organic visitors convert into leads. We optimize page layout, sticky CTAs, and in-content contextual lead magnets.',
    specs: ['Contextual In-Article CTAs', 'Sticky Header Conversion Bar', 'Exit-Intent Lead Magnets', 'A/B Tested Page Layouts'],
    color: '#00966e',
  },
];

export default function SEOPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#00966e] selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#00966e] text-white rotate-[-2deg]">
              ✦ SERVICE 10 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              ORGANIC DOMINANCE &amp; TECHNICAL SEO
            </span>
            <span className="sticker-badge bg-[#d7dd44] text-black">
              VITALS 99+ // PROGRAMMATIC CLUSTERS
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              OWN THE FIRST PAGE OF GOOGLE.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most SEO agencies sell you monthly blog posts that no one reads and blame Google core updates when traffic flatlines. We engineer technical vitals, programmatic clusters, and digital PR backlink systems that build permanent organic search equity.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=seo"
                className="c-button c-button-emerald text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate SEO Audit <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Organic Traffic Lift</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                +420% AVG
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#00966e] p-4 text-center shadow-[-4px_5px_0px_#000] text-white">
              <span className="font-mono text-xs text-white/90 font-bold block">Google Lighthouse</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                100/100 SCORE
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Page 1 Placements</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                740+ TERMS
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Backlink Authority</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                DR70+ PR
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — SERP PREVIEW SIMULATOR */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#00966e] text-white mb-2">ORGANIC SEARCH MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Google SERP Dominance Simulator
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Every page is calibrated with high-CTR meta titles, rich schema snippets, and sitelink extensions.
            </p>
          </div>

          <div className="tactile-card p-6 md:p-8 bg-white max-w-4xl mx-auto space-y-4">
            <div className="pb-3 border-b-2 border-black flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-black">GOOGLE SEARCH // POSITION #1 SNIPPET</span>
              <span className="sticker-badge text-[9px] bg-[#d7dd44] text-black shadow-none font-mono">RICH RESULTS VERIFIED</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#5c5b5b]">
                <span className="h-4 w-4 rounded-full bg-[#00966e] text-white flex items-center justify-center text-[10px] font-bold">G</span>
                <span>https://aperturestudios.co/services/web-development</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#1a0dab] hover:underline cursor-pointer">
                Web Development Agency // Sub-Second Next.js &amp; GSAP Flagships
              </h3>
              <p className="font-sans text-xs text-[#4d5156] leading-relaxed">
                Custom Next.js App Router website engineering for high-growth brands. Sub-second performance, award-tier creative direction, Core Web Vitals 99+ guaranteed...
              </p>
            </div>

            <div className="pt-3 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
              <span className="p-2 rounded border border-black bg-[#f4f4f0] font-bold">★ 4.9 (42 Reviews)</span>
              <span className="p-2 rounded border border-black bg-[#f4f4f0] font-bold">1-Wk Sprints</span>
              <span className="p-2 rounded border border-black bg-[#f4f4f0] font-bold">100% Vitals</span>
              <span className="p-2 rounded border border-black bg-[#f4f4f0] font-bold">Sanity CMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#00966e] text-white mb-3">
              ORGANIC DELIVERABLES
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Comprehensive SEO Execution
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Everything your company needs to capture high-intent search traffic and outrank entrenched legacy competitors.
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
            <Sparkles className="h-4 w-4 text-[#00966e]" /> SEO AUDIT CALENDAR OPEN
          </div>

          <h2 className="u-title-100 text-white leading-none mb-6">
            READY TO RANK ON PAGE ONE?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-white font-medium mb-8">
            Tell us your domain. We'll run a comprehensive technical crawl and competitive keyword gap teardown within 24 hours.
          </p>

          <Link
            href="/contact?service=seo"
            className="c-button text-base py-4 px-10 bg-[#d7dd44] text-black shadow-[-4px_6px_0px_#fff]"
          >
            Claim Free Technical SEO Audit <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
