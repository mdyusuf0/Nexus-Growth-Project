'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Share2, 
  TrendingUp, 
  Flame, 
  Sparkles, 
  Calendar, 
  Play, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Music2, 
  Eye,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Simulated Social Feed Items
interface FeedItem {
  id: string;
  platform: 'tiktok' | 'instagram' | 'youtube' | 'linkedin';
  creator: string;
  avatar: string;
  caption: string;
  hookType: string;
  views: string;
  likes: string;
  shares: string;
  comments: string;
  audio: string;
  aspect: string;
  color: string;
  liked?: boolean;
}

const FEED_ITEMS: FeedItem[] = [
  {
    id: 'f1',
    platform: 'tiktok',
    creator: '@aperture.studios',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    caption: 'Why 99% of brand videos fail in the first 1.8 seconds. The 3 visual pattern interrupts you need in Q4.',
    hookType: 'VISUAL PATTERN INTERRUPT',
    views: '2.4M',
    likes: '342K',
    shares: '48.2K',
    comments: '1,829',
    audio: 'Aperture Sound Design // Original Mix 44.1kHz',
    aspect: 'aspect-[9/16]',
    color: '#00f2fe'
  },
  {
    id: 'f2',
    platform: 'instagram',
    creator: '@aperture.studios',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    caption: 'Inside our 120Hz mobile app deployment sprint. Seamless offline caching and biometric FaceID auth.',
    hookType: 'BEHIND-THE-SCENES // SPEC TEARDOWN',
    views: '890K',
    likes: '94K',
    shares: '12.4K',
    comments: '642',
    audio: 'Lo-Fi Tokyo Beats // Tape Cassette #04',
    aspect: 'aspect-[9/16]',
    color: '#e1306c'
  },
  {
    id: 'f3',
    platform: 'youtube',
    creator: 'Aperture Studios Official',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80',
    caption: '4K Commercial Color Grade Breakdown: Alexa 35 vs Red V-Raptor in low-light architectural sets.',
    hookType: 'AUTHORITY DEMONSTRATION',
    views: '1.8M',
    likes: '185K',
    shares: '29.1K',
    comments: '1,120',
    audio: 'Cinematic Orchestral Drone in D-Minor',
    aspect: 'aspect-[9/16]',
    color: '#ff0000'
  },
  {
    id: 'f4',
    platform: 'tiktok',
    creator: '@aperture.studios',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80',
    caption: 'How we turned a $40k commercial video into a $640k WhatsApp checkout pipeline in 30 days.',
    hookType: 'REVENUE PROOF CASE STUDY',
    views: '3.1M',
    likes: '412K',
    shares: '67.4K',
    comments: '2,490',
    audio: 'Trending Synths // Club Edit',
    aspect: 'aspect-[9/16]',
    color: '#fe2c55'
  }
];

const PLATFORMS = [
  { name: 'TikTok', count: '4.8M Views / mo', color: '#00f2fe', hoverGlow: 'shadow-[0_0_25px_rgba(0,242,254,0.4)]' },
  { name: 'Instagram Reels', count: '2.1M Views / mo', color: '#e1306c', hoverGlow: 'shadow-[0_0_25px_rgba(225,48,108,0.4)]' },
  { name: 'YouTube Shorts', count: '3.4M Views / mo', color: '#ff0000', hoverGlow: 'shadow-[0_0_25px_rgba(255,0,0,0.4)]' },
  { name: 'LinkedIn Video', count: '680K Impr / mo', color: '#0a66c2', hoverGlow: 'shadow-[0_0_25px_rgba(10,102,194,0.4)]' },
  { name: 'X (Twitter)', count: '1.2M Impr / mo', color: '#ffffff', hoverGlow: 'shadow-[0_0_25px_rgba(255,255,255,0.4)]' }
];

export default function SocialMediaExperience() {
  const [activePlatformFilter, setActivePlatformFilter] = useState<string>('all');
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({});
  const [poppingHeart, setPoppingHeart] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse spring cursor
  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isCoarse);

    if (!isCoarse) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const toggleLike = (id: string) => {
    setLikedCards(prev => ({ ...prev, [id]: !prev[id] }));
    setPoppingHeart(id);
    setTimeout(() => setPoppingHeart(null), 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-[#fe2c55] selection:text-white overflow-hidden">
      {/* 1. Heart / Like-Icon Custom Cursor */}
      {!isTouch && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          style={{ x: mouseX, y: mouseY }}
        >
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fe2c55] to-[#fd1d1d] flex items-center justify-center shadow-[0_0_20px_rgba(254,44,85,0.8)] border border-white/50"
          >
            <Heart className="w-4 h-4 text-white fill-white" />
          </motion.div>
        </motion.div>
      )}

      {/* 2. Multi-Platform Gradient Blend (Instagram sunrise + TikTok cyan/red wash) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/15 to-[#fcb045]/15 blur-[140px] will-change-transform"
        />
        <motion.div 
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.95, 1.15, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#00f2fe]/15 via-[#fe2c55]/15 to-transparent blur-[140px] will-change-transform"
        />
      </div>

      {/* Header Breadcrumbs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fe2c55] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#fe2c55] font-bold">
              DISCIPLINE 03 // ALGORITHMIC VIRAL RETENTION
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400">
            <span>30–60 ASSETS / MO</span>
            <span>•</span>
            <span>SUB-1.8s HOOK TESTING</span>
            <span>•</span>
            <span>OMNICHANNEL SYNC</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 font-mono text-xs">
            <Flame className="w-3.5 h-3.5" />
            <span>Engineered for Platform Recommendation Algorithms</span>
          </div>

          <h1 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.86] text-white">
            Stop The Scroll.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#fe2c55] to-[#fcb045]">
              Dominate Short-Form Feeds.
            </span>
          </h1>

          <p className="font-mono text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            We produce high-volume batches of 4K vertical video assets engineered with psychological pattern interrupts, dynamic captions, and sound design triggers that turn casual swipers into loyal community advocates.
          </p>
        </div>

        {/* Platform Badges with Native Lighting */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {PLATFORMS.map((plat) => (
            <div
              key={plat.name}
              className={cn(
                "p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/30 cursor-pointer group",
                plat.hoverGlow
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: plat.color }} />
                <Share2 className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <p className="font-bold text-sm text-white">{plat.name}</p>
              <p className="font-mono text-xs text-gray-400 mt-1">{plat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simulated Social Feed Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#fe2c55] font-bold">
              FEED MATRIX &amp; PROTOTYPES
            </span>
            <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
              High-Retention Feed Simulator
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Tap cards to test like heart animations and inspect engagement metrics.
          </p>
        </div>

        {/* Vertical Feed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEED_ITEMS.map((item, idx) => {
            const isLiked = likedCards[item.id];
            const isPopping = poppingHeart === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative rounded-3xl border border-white/15 bg-[#12131a] p-4 flex flex-col justify-between overflow-hidden shadow-2xl transition-all hover:border-white/30"
              >
                {/* Floating Heart Pop on Click */}
                <AnimatePresence>
                  {isPopping && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1, y: 0 }}
                      animate={{ scale: [0.5, 2.5, 3], opacity: [1, 0.9, 0], y: -60 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
                    >
                      <Heart className="w-16 h-16 text-[#fe2c55] fill-[#fe2c55] drop-shadow-[0_0_20px_rgba(254,44,85,0.9)]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card Video Mock Frame */}
                <div className="relative w-full h-80 rounded-2xl bg-gradient-to-b from-gray-900 to-black overflow-hidden border border-white/10 flex flex-col justify-between p-4">
                  {/* Top Bar with Platform Badge */}
                  <div className="flex items-center justify-between z-10">
                    <span 
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 border border-white/20 text-white backdrop-blur-md"
                      style={{ color: item.color }}
                    >
                      {item.platform}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  </div>

                  {/* Center Hook Overlay */}
                  <div className="text-center z-10 space-y-1 my-auto">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold bg-black/80 px-2 py-0.5 rounded border border-emerald-500/30 inline-block">
                      {item.hookType}
                    </span>
                    <p className="font-bold text-sm text-white px-2 drop-shadow-md">
                      {item.caption}
                    </p>
                  </div>

                  {/* Audio Track Bar */}
                  <div className="z-10 flex items-center gap-2 font-mono text-[10px] text-white/80 bg-black/60 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10">
                    <Music2 className="w-3 h-3 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
                    <span className="truncate">{item.audio}</span>
                  </div>
                </div>

                {/* Creator Profile & Action Buttons */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <Image src={item.avatar} alt={item.creator} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-white leading-none">{item.creator}</p>
                        <p className="font-mono text-[10px] text-gray-400 mt-0.5">Verified Partner</p>
                      </div>
                    </div>

                    {/* Interactive Like Button */}
                    <button
                      onClick={() => toggleLike(item.id)}
                      className={cn(
                        "w-9 h-9 rounded-xl border flex items-center justify-center transition-all",
                        isLiked 
                          ? "bg-[#fe2c55]/20 border-[#fe2c55] text-[#fe2c55] shadow-[0_0_15px_rgba(254,44,85,0.4)]" 
                          : "border-white/10 hover:border-white/30 text-gray-400"
                      )}
                    >
                      <Heart className={cn("w-4 h-4", isLiked && "fill-[#fe2c55]")} />
                    </button>
                  </div>

                  {/* Live Metrics Row */}
                  <div className="grid grid-cols-4 gap-1 pt-2 border-t border-white/10 text-center font-mono">
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">VIEWS</span>
                      <span className="text-xs font-bold text-white block">{item.views}</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">LIKES</span>
                      <span className="text-xs font-bold text-white block">{item.likes}</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">SHARES</span>
                      <span className="text-xs font-bold text-white block">{item.shares}</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">COMMS</span>
                      <span className="text-xs font-bold text-white block">{item.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Sprint Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-r from-pink-950/40 via-red-950/30 to-black p-8 md:p-14 relative overflow-hidden shadow-[0_0_60px_rgba(254,44,85,0.15)]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#fe2c55] font-bold">
              ORGANIC ATTENTION SPRINTS
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-5xl font-black uppercase text-white leading-none">
              Scale Your Organic Video Engine.
            </h3>
            <p className="font-mono text-sm text-gray-300 leading-relaxed">
              We handle end-to-end short-form video operations: scripting viral hooks, 4K production, kinetic captioning, multi-platform publishing, and community DM conversions.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#fe2c55] hover:bg-[#e0264b] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(254,44,85,0.6)] transition-all"
              >
                <span>Initiate Social Sprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-gray-400">
                Monthly video batches • Zero algorithmic guesswork
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
