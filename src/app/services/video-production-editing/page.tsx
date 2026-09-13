import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Film, 
  Video, 
  Sparkles, 
  Scissors, 
  Volume2, 
  Clapperboard, 
  CheckCircle2, 
  Play 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '🎥 Video Production & Editing // NEXUS Growth',
  description: 'Full-bleed cinematic brand films, high-energy product commercials, timeline scrubbers, and vertical short-form video suites engineered for maximum retention.',
  keywords: ['video production agency', 'commercial video editing', 'cinematic brand film', 'social video editing', 'motion graphics agency'],
};

const DELIVERABLES = [
  {
    icon: Film,
    tag: 'CINEMATIC SUITE',
    title: 'Flagship 4K Brand Commercials',
    desc: 'Bespoke high-production commercials for website headers, YouTube prerolls, and television spots. Direction, cinematography, lighting, and sound stages.',
    specs: ['RED / ARRI Cinema Cameras', 'Bespoke Lighting Design', 'Professional Actor Casting', '4K Color Grading & Mastering'],
    color: '#f09341',
  },
  {
    icon: Scissors,
    tag: 'POST-PRODUCTION',
    title: 'High-Velocity Post & Sound Design',
    desc: 'Aggressive editing pacing, kinetic match-cuts, customized sound design risers, and Foley effects that grip viewer subconscious attention.',
    specs: ['DaVinci Resolve Color Grade', 'Spatial Foley Sound Effects', 'Rhythm & Match Cut Pacing', 'Deliverables in 16:9, 9:16, 1:1'],
    color: '#d7dd44',
  },
  {
    icon: Volume2,
    tag: 'AUDIO ENGINEERING',
    title: 'Custom Audio Identity & Sonic Branding',
    desc: 'Original music score composition, bespoke sonic brand logos, and audio mastering engineered to stand out across phone speakers and AirPods.',
    specs: ['Original Score Composition', 'Signature Sonic Brand Logo', '-14 LUFS Audio Normalization', 'Custom Voiceover Licensing'],
    color: '#7ca8d2',
  },
  {
    icon: Clapperboard,
    tag: 'PRODUCT TRAILERS',
    title: '3D Spatial Hardware Commercials',
    desc: 'Photorealistic 3D product renders, CAD animation, and exploded component reveals showcasing your hardware or software craftsmanship.',
    specs: ['CAD to Cinema 4D Mesh', 'Photorealistic Octane Shaders', 'Exploded Mechanism Motion', 'Alpha Channel WebGL Exports'],
    color: '#eaa0cd',
  },
  {
    icon: Video,
    tag: 'VERTICAL VIRAL',
    title: 'Viral Social Short-Form Batches',
    desc: 'High-speed vertical reels scripted and edited for TikTok, Instagram Reels, and YouTube Shorts with animated captions and sound effects.',
    specs: ['Kinetic Captions Styling', 'B-Roll Montage Packs', 'Trending Audio Integration', 'Exported in 4K 60FPS HDR'],
    color: '#00966e',
  },
  {
    icon: Sparkles,
    tag: 'VFX & COMPOSITING',
    title: 'Visual Effects & Motion Graphics',
    desc: 'Subtle CGI integrations, clean UI tracking onto physical devices, screen replacements, and animated kinetic title cards.',
    specs: ['After Effects 3D Camera Track', 'UI Screen Compositing', 'Kinetic 3D Typography', 'Clean Plate Paint-Outs'],
    color: '#f09341',
  },
];

export default function VideoProductionPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#f09341] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#f09341] text-black rotate-[-2deg]">
              ✦ SERVICE 08 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              CINEMATIC FILM &amp; PRODUCTION LABS
            </span>
            <span className="sticker-badge bg-[#141414] text-white">
              4K CINEMA // SOUND // 3D VFX
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              STORIES THAT DEMAND YOUR FULL GAZE.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most corporate video is slow, generic, and uninspired. We produce cinematic brand commercials and high-energy vertical video that look and sound like A24 film trailers, engineered to convert viewers into lifelong advocates.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=video-production-editing"
                className="c-button c-button-orange text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate Film Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Video Retention</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                68% COMPLETE
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#f09341] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Cinema Standard</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                4K HDR 10-BIT
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Turnaround Time</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                10-DAY CUT
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Audio Normalization</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                -14 LUFS MASTER
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — TIMELINE SCRUBBER SHOWCASE */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#f09341] text-black mb-2">CINEMATIC TIMELINE MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Choreographed Timeline Scrubber
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              Frame-by-frame sound and visual rhythm alignment ensuring zero dead air or audience drop-off.
            </p>
          </div>

          <div className="tactile-card p-6 md:p-8 bg-black text-white max-w-5xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border-2 border-white/20 mb-6 group">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&q=80"
                alt="Cinema Camera Stage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-white bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-1" />
                </div>
              </div>
            </div>

            {/* Timeline Scrubber Bar */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#d7dd44]">
                <span>TIMELINE // 00:01:24:18</span>
                <span>4K PRORES 422 HQ // 60FPS</span>
              </div>
              <div className="relative h-4 w-full rounded-full border border-white/30 bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-[#f09341]" />
              </div>
              <div className="flex justify-between text-[#8a8a90] text-[10px]">
                <span>00:00:00 (HOOK)</span>
                <span>00:00:30 (ELEVATION)</span>
                <span>00:01:00 (PAYOFF)</span>
                <span>00:01:30 (CTA)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#f09341] text-black mb-3">
              FILM PRODUCTION SCOPE
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              What We Produce in Studio
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            From initial treatment scripting and live shooting through sound engineering and final multi-format export.
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
            <Sparkles className="h-4 w-4 text-black" /> PRODUCTION DATES AVAILABLE
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            READY TO SHOOT YOUR FILM?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Tell us about your product or brand message. We'll reply within 24 hours with a visual treatment and production estimate.
          </p>

          <Link
            href="/contact?service=video-production-editing"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Start Video Project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
