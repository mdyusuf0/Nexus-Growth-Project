import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight,
  Code2, 
  Cpu, 
  Zap, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Gauge, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import CodeEditorTerminal from '@/components/services/CodeEditorTerminal';
import WebDevelopmentTerminalCursor from '@/components/services/web-development/WebDevelopmentTerminalCursor';

export const metadata: Metadata = {
  title: '🌐 Website Development | APERTURE STUDIOS',
  description: 'Custom Next.js App Router & GSAP website engineering for high-growth brands. Sub-second performance, award-tier creative direction, and conversion architectures.',
  keywords: ['Next.js development', 'GSAP web animations', 'headless commerce', 'Awwwards portfolio', 'conversion rate optimization'],
};

const DELIVERABLES = [
  {
    icon: Code2,
    tag: 'ARCHITECTURE',
    title: 'Custom Next.js App Router Core',
    desc: 'Zero generic templates or bloated page builders. We engineer custom React 19 server component architectures that eliminate client-side JavaScript overhead and achieve sub-second Time to First Byte (TTFB).',
    specs: ['React Server Components', 'Vercel Edge Network', 'Zero Layout Shift', 'Automated Image Optimization'],
    color: '#d7dd44',
  },
  {
    icon: Sparkles,
    tag: 'MOTION & FEEL',
    title: 'Hardware-Accelerated GSAP & WebGL',
    desc: 'Scroll-driven storytelling with custom GSAP timelines, Lenis inertia scrolling, and interactive canvas elements that render at a locked 60FPS across desktop and mobile devices.',
    specs: ['ScrollTrigger Pinning', 'Lenis Smooth Scroll', '3D Model Viewers', 'Micro-Interactions'],
    color: '#eaa0cd',
  },
  {
    icon: Layers,
    tag: 'CONTENT & SCALE',
    title: 'Headless CMS & Commerce Pipelines',
    desc: 'Complete editorial independence through modern headless platforms like Sanity, Strapi, or Shopify Storefront API. Lightning-fast visual editing without touching source code.',
    specs: ['Sanity / Strapi CMS', 'Shopify Storefront API', 'Stripe Payments', 'Incremental Static Regeneration'],
    color: '#7ca8d2',
  },
  {
    icon: Gauge,
    tag: 'PERFORMANCE',
    title: 'Core Web Vitals 99+ Hardening',
    desc: 'We treat page speed as a primary conversion lever. Every millisecond saved directly lifts checkout rates. We guarantee top-tier mobile Lighthouse metrics before going live.',
    specs: ['FCP < 0.5s', 'LCP < 0.8s', 'CLS = 0.000', 'Perfect Mobile Score'],
    color: '#00966e',
  },
  {
    icon: Zap,
    tag: 'DATA & GROWTH',
    title: 'Conversion Tracking & Event Telemetry',
    desc: 'Custom server-side event tracking across GA4, Meta Conversions API (CAPI), and PostHog. Full visibility into user engagement, drop-offs, and micro-conversions.',
    specs: ['Server-Side CAPI', 'Custom DataLayer Events', 'PostHog / Mixpanel', 'Heatmap Ready'],
    color: '#f09341',
  },
  {
    icon: ShieldCheck,
    tag: 'RELIABILITY',
    title: 'Enterprise Security & CI/CD Pipelines',
    desc: 'Automated GitHub pull request preview deployments, static analysis, DDoS mitigation, and enterprise SSL on globally distributed edge networks.',
    specs: ['Automated CI/CD', 'Edge Middleware', 'DDoS Protection', 'SOC2 Compliant Hosting'],
    color: '#d7dd44',
  },
];

const SPRINTS = [
  {
    num: '01',
    phase: 'SPRINT 1',
    title: 'Architecture & Technical Wireframing',
    duration: 'Week 1',
    deliverable: 'Technical architecture document, route hierarchy, conversion funnel wireframes, and Core Web Vitals benchmark targets.',
    color: '#d7dd44',
  },
  {
    num: '02',
    phase: 'SPRINT 2',
    title: 'Interactive Design & Motion Choreography',
    duration: 'Week 2–3',
    deliverable: 'Complete Figma design system, kinetic component prototypes, typography scale, and responsive layout blueprints.',
    color: '#eaa0cd',
  },
  {
    num: '03',
    phase: 'SPRINT 3',
    title: 'Full-Stack Next.js Engineering',
    duration: 'Week 4–5',
    deliverable: 'Production codebase setup, custom GSAP ScrollTrigger timelines, responsive layouts, and Lenis inertia scroll integration.',
    color: '#00966e',
  },
  {
    num: '04',
    phase: 'SPRINT 4',
    title: 'Headless CMS & Telemetry Integration',
    duration: 'Week 6',
    deliverable: 'Content model schema in Sanity/Shopify, webhooks, server-side event telemetry, and multi-step inquiry form logic.',
    color: '#7ca8d2',
  },
  {
    num: '05',
    phase: 'SPRINT 5',
    title: 'Vitals Hardening, QA & Global Edge Launch',
    duration: 'Week 7',
    deliverable: 'Cross-browser verification, mobile Safari scroll audits, 99+ Lighthouse performance gate, and zero-downtime DNS deployment.',
    color: '#f09341',
  },
];

const TECH_STACK = [
  { name: 'Next.js 16', role: 'Full-Stack Framework', color: '#d7dd44' },
  { name: 'React 19', role: 'Server Components', color: '#eaa0cd' },
  { name: 'TypeScript', role: 'Strict Type Safety', color: '#7ca8d2' },
  { name: 'GSAP 3', role: 'Choreographed Motion', color: '#00966e' },
  { name: 'Tailwind CSS v4', role: 'Design Tokens', color: '#f09341' },
  { name: 'Lenis', role: 'Smooth Inertia Scroll', color: '#d7dd44' },
  { name: 'Three.js / WebGL', role: '3D Spatial Stages', color: '#eaa0cd' },
  { name: 'Vercel Edge', role: 'Low-Latency CDN', color: '#00966e' },
  { name: 'Sanity CMS', role: 'Headless Content', color: '#7ca8d2' },
  { name: 'Shopify Storefront', role: 'Headless Commerce', color: '#f09341' },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#d7dd44] selection:text-black">
      {/* Terminal Block Custom Cursor */}
      <WebDevelopmentTerminalCursor />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          {/* Sticker Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#d7dd44] text-black rotate-[-2deg]">
              ✦ SERVICE 01 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              DIGITAL PRODUCT &amp; ENGINEERING
            </span>
            <span className="sticker-badge bg-[#eaa0cd] text-black">
              NEXT.JS 16 // GSAP 3 // TURBOPACK
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              WEBSITES ENGINEERED TO CONVERT.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most agency websites are heavy templates that look pretty but crawl on mobile. We build custom Next.js web applications with hardware-accelerated GSAP animation, sub-second TTFB, and conversion architectures designed for aggressive revenue growth.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=web-development"
                className="c-button text-sm py-3.5 px-7"
              >
                Initiate Web Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Benchmark Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Core Web Vitals</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                99+ MOBILE
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">First Paint (FCP)</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                &lt; 0.40s
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#eaa0cd] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Motion Engine</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                GSAP 3 + LENIS
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Deployment Tier</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                VERCEL EDGE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — INTERACTIVE CODE TERMINAL */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#00966e] text-white mb-2">
              ENGINEERING MOTIF SPEC
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Inspect the Production Architecture
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Switch between source code specifications, animation choreography, and live simulated Google Lighthouse audit scores below.
            </p>
          </div>

          <CodeEditorTerminal />
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES / SCOPE OF WORK */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#d7dd44] text-black mb-3">
              SCOPE OF DELIVERABLES
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              What's Included in Every Build
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            No junior outsourced code. Every web application is built ground-up by senior full-stack creative engineers.
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

      {/* SECTION 4: 5-SPRINT METHODOLOGY */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 bg-[#ecebe4] border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="sticker-badge bg-[#eaa0cd] text-black mb-3">
              PRODUCTION TIMELINE
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              5 Sprints to Global Deployment
            </h2>
            <p className="mt-2 font-sans text-sm text-[#5c5b5b]">
              Clear weekly milestones, real-time preview staging URLs, and rigorous Core Web Vitals gates from day one.
            </p>
          </div>

          <div className="space-y-4">
            {SPRINTS.map((sprint) => (
              <div
                key={sprint.num}
                className="tactile-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-6">
                  <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl font-black text-black">
                    {sprint.num}.
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="sticker-badge text-[10px] py-0.5 px-2"
                        style={{ backgroundColor: sprint.color, color: '#000' }}
                      >
                        {sprint.phase}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#5c5b5b]">{sprint.duration}</span>
                    </div>
                    <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase text-black mt-2">
                      {sprint.title}
                    </h3>
                  </div>
                </div>

                <div className="md:max-w-md text-xs font-sans text-[#5c5b5b] font-medium border-l-2 border-black pl-4 md:pl-6">
                  <span className="font-mono text-[10px] text-black font-bold uppercase block mb-1">Key Deliverable</span>
                  {sprint.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONCEPT CASE STUDY — AURA WEARABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="sticker-badge bg-[#d7dd44] text-black mb-3">
              FEATURED CAPABILITY SHOWCASE
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Case Study: AURA Wearables
            </h2>
          </div>
          <span className="hidden md:inline-flex sticker-badge bg-white text-black font-mono">
            ● CONCEPT LAB SPEC
          </span>
        </div>

        <div className="tactile-card p-6 md:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border-2 border-black group">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="AURA Wearables Digital Flagship Mockup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-md p-3 border-2 border-black">
              <span className="font-mono text-xs font-bold text-black">Spatial Hardware Flagship</span>
              <span className="sticker-badge text-[10px] bg-[#d7dd44] text-black shadow-none">Next.js + Three.js</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00966e] font-bold">
              Challenge &amp; Execution
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold uppercase text-black leading-none">
              Turning a 4.2-second Shopify store into a 0.38-second sales engine.
            </h3>
            <p className="font-sans text-xs text-[#5c5b5b] font-medium leading-relaxed">
              AURA needed an experience that showcased spatial audio hardware with interactive 3D exploded views without degrading mobile checkout speed. We architected a headless Next.js storefront backed by Shopify Storefront GraphQL, reducing cart abandonment by 42%.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-black">
              <div className="rounded-xl border-2 border-black bg-[#d7dd44] p-3 text-center shadow-[-2px_3px_0px_#000]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-black block">
                  +340%
                </span>
                <span className="font-mono text-[10px] text-black uppercase font-bold">Conversion Lift</span>
              </div>
              <div className="rounded-xl border-2 border-black bg-white p-3 text-center shadow-[-2px_3px_0px_#000]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-black block">
                  0.38s
                </span>
                <span className="font-mono text-[10px] text-[#5c5b5b] uppercase font-bold">First Contentful Paint</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?service=web-development"
                className="c-button text-xs py-3 px-6"
              >
                Inquire About Custom Web Flagships <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TECH STACK MATRIX */}
      <section className="relative px-4 py-20 md:px-8 border-t-4 border-black bg-[#ecebe4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="sticker-badge bg-[#f09341] text-black mb-2">ENGINEERING STACK</span>
            <h2 className="u-title-200 tracking-tight text-black">Production Technologies</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TECH_STACK.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-3px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <p className="font-mono text-xs font-black uppercase text-black">{tech.name}</p>
                <p className="font-mono text-[10px] text-[#5c5b5b] mt-1 uppercase font-medium">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CALL TO ACTION */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 max-w-6xl mx-auto my-12">
        <div className="rounded-3xl border-4 border-black bg-[#d7dd44] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6">
            <Sparkles className="h-4 w-4 text-[#00966e]" /> READY TO SHIP NEXT-LEVEL TECH
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            HAVE A WEBSITE PROJECT IN MIND?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Let's engineer a digital flagship that your competitors can't ignore. We'll reply within 24 hours with an architecture roadmap and sprint estimate.
          </p>

          <Link
            href="/contact?service=web-development"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Start Web Discussion <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
