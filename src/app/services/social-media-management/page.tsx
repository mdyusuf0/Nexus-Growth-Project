import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Share2, 
  TrendingUp, 
  Video, 
  Users, 
  Flame, 
  Sparkles, 
  Calendar, 
  Play, 
  BarChart3 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '📲 Social Media Management // NEXUS Growth',
  description: 'Algorithmic short-form video production, TikTok & Instagram growth systems, viral hook engineering, and active community building for consumer & B2B brands.',
  keywords: ['social media management', 'TikTok growth agency', 'Instagram reels agency', 'short form video production', 'viral content strategy'],
};

const DELIVERABLES = [
  {
    icon: Flame,
    tag: 'HOOK ENGINEERING',
    title: 'First-3-Second Viral Hook Systems',
    desc: 'Algorithmic short-form content engineered to stop the scroll. We script, test, and refine psychological visual and audio patterns that trigger platform recommendation engines.',
    specs: ['Hook Testing Matrix', 'High-Retention Pacing', 'Sound Design Triggers', 'Pattern Interrupts'],
    color: '#eaa0cd',
  },
  {
    icon: Video,
    tag: 'PRODUCTION',
    title: 'High-Volume Studio Video Production',
    desc: 'Turnkey weekly batches of polished 4K vertical videos (Reels, TikTok, YouTube Shorts). Professional lighting, dynamic captions, grading, and sound effects.',
    specs: ['30–60 Assets / Month', 'Kinetic Typography Captions', 'Native Trend Adapters', 'B-Roll Library'],
    color: '#d7dd44',
  },
  {
    icon: Calendar,
    tag: 'CALENDAR OPS',
    title: 'Omnichannel Publishing & Scheduling',
    desc: 'Daily optimized publishing across TikTok, Instagram, YouTube Shorts, LinkedIn, and X. Peak audience timing, localized copy, and automated cross-syndication.',
    specs: ['Daily Peak Scheduling', 'Platform-Native Copy', 'Cross-Platform Syndication', 'Asset Archive'],
    color: '#7ca8d2',
  },
  {
    icon: Users,
    tag: 'COMMUNITY',
    title: 'Active Community Moderation & DMs',
    desc: 'Converting casual viewers into loyal brand advocates. We manage inbound comments, craft conversational responses, and turn story replies into qualified buyer leads.',
    specs: ['Sub-15m Response SLAs', 'DM Lead Qualification', 'Crisis Management', 'Brand Voice Guidelines'],
    color: '#00966e',
  },
  {
    icon: TrendingUp,
    tag: 'GROWTH LOOPS',
    title: 'Creator & Micro-Influencer Seeding',
    desc: 'Curated seeding campaigns targeting authentic niche creators. We handle gifting outreach, contract negotiation, and content repurposing rights for paid ads.',
    specs: ['Creator Discovery & Vetting', 'Product Gifting Ops', 'Usage Rights Licensing', 'Whitelisting Access'],
    color: '#f09341',
  },
  {
    icon: BarChart3,
    tag: 'ANALYTICS',
    title: 'Weekly Retention & Attribution Telemetry',
    desc: 'Transparent reporting on view-through rates, profile visit conversion, link-in-bio clicks, and downstream revenue impact with zero vanity metric fluff.',
    specs: ['Watch-Time Retention Audits', 'Profile Visit Attribution', 'Competitor Benchmarking', 'Weekly Action Plan'],
    color: '#eaa0cd',
  },
];

const VIRAL_HOOK_MATRIX = [
  { time: '0.0s – 1.5s', action: 'Visual Pattern Interrupt + Contrarian Kicker', stat: '84% Retention Gate' },
  { time: '1.5s – 7.0s', action: 'Core Problem Statement & High-Stakes Tension', stat: '68% Retention' },
  { time: '7.0s – 25.0s', action: 'The High-Speed Tactical Demonstration', stat: '52% Retention' },
  { time: '25.0s – 35.0s', action: 'Surprising Payoff + Seamless Loop Trigger', stat: '41% Complete & Replay' },
];

export default function SocialMediaManagementPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#eaa0cd] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#eaa0cd] text-black rotate-[-2deg]">
              ✦ SERVICE 03 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              ORGANIC DISTRIBUTION &amp; VIRAL SYSTEMS
            </span>
            <span className="sticker-badge bg-[#d7dd44] text-black">
              TIKTOK // REELS // SHORTS
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              ATTENTION THAT ACTUALLY CONVERTS.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most social media agencies post boring corporate graphics that get zero reach. We engineer algorithmic short-form video systems and conversational funnels that turn casual scrollers into paying customers.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=social-media-management"
                className="c-button c-button-pink text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate Social Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Organic Reach Lift</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                +890% AVG
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#eaa0cd] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Monthly Production</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                45+ VIDEOS
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Hook Completion</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                84% PASSED
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Downstream Pipeline</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                3.4X BIO CLICKS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — VIRAL RETENTION HOOK ARCHITECTURE */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#eaa0cd] text-black mb-2">SIGNATURE CONTENT MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Algorithmic Retention Architecture
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Every script is mapped second-by-second against TikTok and Instagram Reels algorithmic watch-time gates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VIRAL_HOOK_MATRIX.map((stage, i) => (
              <div
                key={i}
                className="tactile-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                    <span className="font-mono text-xs font-black text-black">PHASE 0{i + 1}</span>
                    <span className="sticker-badge text-[9px] py-0.5 px-2 bg-[#eaa0cd] text-black shadow-none font-mono">
                      {stage.time}
                    </span>
                  </div>
                  <h4 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl font-black uppercase text-black mt-4 leading-none">
                    {stage.action}
                  </h4>
                </div>

                <div className="mt-6 pt-3 border-t border-black/10 font-mono text-xs font-bold text-[#00966e]">
                  {stage.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#eaa0cd] text-black mb-3">
              SCOPE OF ENGAGEMENT
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              What We Deliver Every Month
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Full-service short-form production, organic distribution, community moderation, and revenue attribution.
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

      {/* SECTION 4: CONCEPT CASE STUDY */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto bg-[#ecebe4] border-y-4 border-black">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="sticker-badge bg-[#eaa0cd] text-black mb-3">
              VIRAL CAPABILITY CASE STUDY
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Case Study: SOLSTICE Coffee Roasters
            </h2>
          </div>
          <span className="hidden md:inline-flex sticker-badge bg-white text-black font-mono">
            ● ORGANIC GROWTH SPEC
          </span>
        </div>

        <div className="tactile-card p-6 md:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border-2 border-black group">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
              alt="SOLSTICE Coffee Campaign"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-md p-3 border-2 border-black">
              <span className="font-mono text-xs font-bold text-black">Organic Video Distribution Hub</span>
              <span className="sticker-badge text-[10px] bg-[#eaa0cd] text-black shadow-none">TikTok + Reels Engine</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00966e] font-bold">
              Organic Virality to Subscription Revenue
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold uppercase text-black leading-none">
              From zero short-form footprint to 14M organic views.
            </h3>
            <p className="font-sans text-xs text-[#5c5b5b] font-medium leading-relaxed">
              SOLSTICE wanted to bypass expensive paid ads by establishing an editorial TikTok &amp; Reels presence. We engineered a daily short-form video batching workflow and contrarian coffee education hooks that drove a 340% increase in DTC coffee subscriptions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-black">
              <div className="rounded-xl border-2 border-black bg-[#eaa0cd] p-3 text-center shadow-[-2px_3px_0px_#000]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-black block">
                  +890%
                </span>
                <span className="font-mono text-[10px] text-black uppercase font-bold">Engagement Lift</span>
              </div>
              <div className="rounded-xl border-2 border-black bg-white p-3 text-center shadow-[-2px_3px_0px_#000]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-black block">
                  14.2M
                </span>
                <span className="font-mono text-[10px] text-[#5c5b5b] uppercase font-bold">Organic Impressions</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?service=social-media-management"
                className="c-button c-button-pink text-xs py-3 px-6"
              >
                Inquire About Viral Video Systems <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 max-w-6xl mx-auto my-12">
        <div className="rounded-3xl border-4 border-black bg-[#eaa0cd] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6">
            <Sparkles className="h-4 w-4 text-black" /> ORGANIC PIPELINE OPENINGS
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            READY TO OWN YOUR FEED?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Stop wasting hours on posts that reach 40 people. Let's build a short-form video machine that commands your industry's attention.
          </p>

          <Link
            href="/contact?service=social-media-management"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Start Social Sprint <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
