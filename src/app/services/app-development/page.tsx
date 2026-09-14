import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Smartphone, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  WifiOff,
  Fingerprint
} from 'lucide-react';

export const metadata: Metadata = {
  title: '📱 App Development // APERTURE STUDIOS',
  description: 'Native iOS & Android mobile applications engineered on React Native & Expo. Fluid 120Hz gesture physics, offline-first caching, and high-retention onboarding funnels.',
  keywords: ['mobile app development', 'React Native agency', 'iOS development', 'Android development', 'mobile UI UX design'],
};

const DELIVERABLES = [
  {
    icon: Smartphone,
    tag: 'NATIVE PERFORMANCE',
    title: 'Fluid 120Hz Gesture Physics',
    desc: 'Native iOS & Android interactions engineered with React Native Reanimated and Skia. Smooth 120FPS physics, zero frame drops, and tactile haptic feedback.',
    specs: ['React Native + Expo SDK', 'Skia 2D Canvas Engine', 'Haptic Touch Integration', 'Smooth Gesture Responders'],
    color: '#7ca8d2',
  },
  {
    icon: WifiOff,
    tag: 'ARCHITECTURE',
    title: 'Offline-First Local Sync Engine',
    desc: 'Local SQLite and WatermelonDB caching with background synchronization. Your users can browse, save, and create with zero connection latency.',
    specs: ['WatermelonDB / SQLite', 'Conflict Resolution Sync', 'Instant Local Mutation', 'Background Refresh'],
    color: '#d7dd44',
  },
  {
    icon: Fingerprint,
    tag: 'SECURITY & AUTH',
    title: 'Biometrics & Secure Enclave Keys',
    desc: 'Hardware-backed security using FaceID, TouchID, and Android Biometrics with encrypted token storage in Apple Keychain and Android Keystore.',
    specs: ['FaceID & TouchID Auth', 'Hardware Key Storage', 'Zero Plaintext Tokens', 'OWASP Mobile Compliant'],
    color: '#eaa0cd',
  },
  {
    icon: Zap,
    tag: 'COMMERCE & IAP',
    title: 'In-App Subscriptions & Payments',
    desc: 'Frictionless Apple App Store and Google Play billing pipelines via RevenueCat with automated entitlement syncing and churn mitigation.',
    specs: ['Apple In-App Purchases', 'Google Play Billing', 'RevenueCat Telemetry', 'Paywall A/B Testing'],
    color: '#00966e',
  },
  {
    icon: Layers,
    tag: 'GROWTH ENGINE',
    title: 'Smart Push & Retention Sequences',
    desc: 'Contextual, personalized push notifications and in-app messaging via OneSignal that re-engage dormant users and drive repeat session depth.',
    specs: ['Rich Media Push Alerts', 'Deep Link Routing', 'Behavioral Segments', 'Retention Heatmaps'],
    color: '#f09341',
  },
  {
    icon: ShieldCheck,
    tag: 'DEPLOYMENT',
    title: 'App Store Optimization & Submissions',
    desc: 'Turnkey App Store & Google Play approval management. We handle metadata, screenshots, review appeals, and fast-track submission cycles.',
    specs: ['App Store Approval SLA', 'Google Play Verification', 'Keyword Optimization (ASO)', 'TestFlight Beta Pipelines'],
    color: '#7ca8d2',
  },
];

const SPRINTS = [
  {
    num: '01',
    phase: 'SPRINT 1',
    title: 'Mobile Architecture & UX Wireframes',
    duration: 'Week 1–2',
    deliverable: 'Complete user journeys, tap-target ergonomics, navigation state machine, and data schema architecture.',
    color: '#7ca8d2',
  },
  {
    num: '02',
    phase: 'SPRINT 2',
    title: 'Visual Design & Interactive Prototype',
    duration: 'Week 3–4',
    deliverable: 'Figma high-fidelity mobile design system, 120Hz gesture motion prototypes, and dark/light theme tokens.',
    color: '#eaa0cd',
  },
  {
    num: '03',
    phase: 'SPRINT 3',
    title: 'Core App Engineering & Reanimated Physics',
    duration: 'Week 5–7',
    deliverable: 'Production React Native application, local database setup, offline caching, and responsive screen builds.',
    color: '#d7dd44',
  },
  {
    num: '04',
    phase: 'SPRINT 4',
    title: 'API Integration, Auth & In-App Subscriptions',
    duration: 'Week 8',
    deliverable: 'RevenueCat subscription paywalls, biometric security, push notifications, and analytics instrumentation.',
    color: '#00966e',
  },
  {
    num: '05',
    phase: 'SPRINT 5',
    title: 'Device Matrix QA & App Store Approval',
    duration: 'Week 9–10',
    deliverable: 'Real-device testing on 20+ iOS and Android form factors, TestFlight beta distribution, and live Store release.',
    color: '#f09341',
  },
];

export default function AppDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#d7dd44] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#7ca8d2] text-black rotate-[-2deg]">
              ✦ SERVICE 02 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              MOBILE PRODUCT &amp; NATIVE SYSTEMS
            </span>
            <span className="sticker-badge bg-[#d7dd44] text-black">
              REACT NATIVE // 120HZ PHYSICS
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              NATIVE APPS BUILT FOR OBSESSION.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most mobile apps feel sluggish, burn battery, and get uninstalled within 48 hours. We build native iOS &amp; Android platforms with sub-16ms touch responses, offline resilience, and addictive onboarding flows.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=app-development"
                className="c-button text-sm py-3.5 px-7 bg-[#7ca8d2] shadow-[-4px_6px_0px_#000]"
              >
                Initiate App Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Touch Latency</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                &lt; 16MS TOUCH
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#7ca8d2] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Rendering Target</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                120 FPS FLUID
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#eaa0cd] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Platform Parity</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                IOS &amp; ANDROID
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Crash-Free Users</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                99.9% RATE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — INTERACTIVE DEVICE FRAME SHOWCASE */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#7ca8d2] text-black mb-2">SIGNATURE MOBILE MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Physical Device Frame Architecture
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Every application is prototyped in real physical viewport constraints with gesture-aware physics and haptic telemetry.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-6">
            {/* Phone Frame Mockup */}
            <div className="relative w-[300px] sm:w-[340px] h-[640px] rounded-[48px] border-4 border-black bg-[#141414] p-4 shadow-[-10px_14px_0px_#000] overflow-hidden flex flex-col justify-between">
              {/* Dynamic Island */}
              <div className="w-28 h-6 bg-black rounded-full mx-auto z-20 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#00966e] animate-pulse" />
              </div>

              {/* Inside Screen Content */}
              <div className="relative my-4 rounded-[32px] overflow-hidden bg-[#f4f4f0] p-4 h-full flex flex-col justify-between border-2 border-black">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-black">
                    <span className="font-mono text-[10px] font-bold text-black">APERTURE NATIVE CORE</span>
                    <span className="sticker-badge text-[8px] py-0.5 px-1.5 bg-[#d7dd44] text-black">120HZ</span>
                  </div>
                  <h4 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl font-black uppercase text-black mt-4 leading-none">
                    High-Retention Feed
                  </h4>
                  <p className="text-[11px] font-sans text-[#5c5b5b] mt-1 font-medium">
                    Gesture physics responder synchronized with phone refresh rate.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl border border-black bg-white shadow-[-2px_2px_0px_#000] text-[10px] font-mono">
                    <span className="text-[#00966e] font-bold">✓ OFFLINE SYNC ACTIVE</span>
                  </div>
                  <div className="p-2.5 rounded-xl border border-black bg-[#d7dd44] shadow-[-2px_2px_0px_#000] text-[10px] font-mono font-bold text-black flex items-center justify-between">
                    <span>BIOMETRICS SECURED</span>
                    <Fingerprint className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="w-32 h-1 bg-white/40 rounded-full mx-auto" />
            </div>

            {/* Architecture Details Column */}
            <div className="max-w-md space-y-4">
              <div className="tactile-card p-6 bg-white">
                <span className="sticker-badge bg-[#d7dd44] text-black text-[10px] mb-2">REANIMATED 3.0</span>
                <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl font-black uppercase text-black">
                  Zero Thread-Blocking Physics
                </h3>
                <p className="font-sans text-xs text-[#5c5b5b] mt-2 font-medium">
                  Animations run directly on the native UI thread, bypassing JavaScript bridge serialization for authentic 120FPS fluidity.
                </p>
              </div>

              <div className="tactile-card p-6 bg-white">
                <span className="sticker-badge bg-[#eaa0cd] text-black text-[10px] mb-2">OFFLINE DB</span>
                <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl font-black uppercase text-black">
                  Instant Local Mutation
                </h3>
                <p className="font-sans text-xs text-[#5c5b5b] mt-2 font-medium">
                  Actions resolve locally in under 5ms, syncing seamlessly to backend Postgres/Supabase endpoints when internet connectivity resumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SCOPE OF DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#7ca8d2] text-black mb-3">
              DELIVERABLE SPECIFICATION
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Included in Mobile Production
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Complete full-lifecycle mobile engineering from initial wireframes through App Store launch and continuous live operations.
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

      {/* SECTION 4: 5 MOBILE SPRINTS */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 bg-[#ecebe4] border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="sticker-badge bg-[#eaa0cd] text-black mb-3">
              MOBILE TIMELINE
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              5 Sprints to App Store Release
            </h2>
            <p className="mt-2 font-sans text-sm text-[#5c5b5b]">
              Weekly TestFlight test builds, automated CI/CD deployment pipelines, and zero surprise delays.
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

      {/* SECTION 5: CONCEPT CASE STUDY */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="sticker-badge bg-[#7ca8d2] text-black mb-3">
              CAPABILITY LAB SHOWCASE
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Case Study: VERVE Creative Suite
            </h2>
          </div>
          <span className="hidden md:inline-flex sticker-badge bg-white text-black font-mono">
            ● CONCEPT CAPABILITY SPEC
          </span>
        </div>

        <div className="tactile-card p-6 md:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border-2 border-black group">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
              alt="VERVE Mobile App Mockup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-md p-3 border-2 border-black">
              <span className="font-mono text-xs font-bold text-black">iOS &amp; Android Creative Suite</span>
              <span className="sticker-badge text-[10px] bg-[#7ca8d2] text-black shadow-none">React Native + Skia</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00966e] font-bold">
              Product Growth &amp; Architecture
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold uppercase text-black leading-none">
              Scaling to 42k active mobile creators in under 90 days.
            </h3>
            <p className="font-sans text-xs text-[#5c5b5b] font-medium leading-relaxed">
              VERVE needed a high-performance content creation canvas with offline cloud sync and one-tap viral exports. We architected a React Native application with zero frame drops, achieving an App Store 4.9 rating across 3,000+ reviews.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-black">
              <div className="rounded-xl border-2 border-black bg-[#7ca8d2] p-3 text-center shadow-[-2px_3px_0px_#000]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-black block">
                  42K MAU
                </span>
                <span className="font-mono text-[10px] text-black uppercase font-bold">90-Day Growth</span>
              </div>
              <div className="rounded-xl border-2 border-black bg-white p-3 text-center shadow-[-2px_3px_0px_#000]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-black block">
                  4.9 ★
                </span>
                <span className="font-mono text-[10px] text-[#5c5b5b] uppercase font-bold">Store Rating</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?service=app-development"
                className="c-button text-xs py-3 px-6 bg-[#7ca8d2]"
              >
                Inquire About Native Mobile Apps <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING CTA */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 max-w-6xl mx-auto my-12">
        <div className="rounded-3xl border-4 border-black bg-[#7ca8d2] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6">
            <Sparkles className="h-4 w-4 text-black" /> PRODUCTION SPRINT OPENINGS
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            HAVE A MOBILE APP IN MIND?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Let's build a mobile experience that stays on your users' home screens. We'll reply within 24 hours with an architecture roadmap and sprint estimate.
          </p>

          <Link
            href="/contact?service=app-development"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Start App Discussion <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
