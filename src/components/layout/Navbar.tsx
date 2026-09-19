"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  ArrowRight,
  Terminal,
  Smartphone,
  Bot,
  Zap,
  Palette,
  Layers,
  Film,
  PenTool,
  Target,
  Share2,
  Search,
  GitMerge,
  Cpu,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import KineticNavigation from "./KineticNavigation";
import { gsap } from "@/lib/gsap";

export interface ServiceNavItem {
  id: string;
  name: string;
  href: string;
  tag: string;
  color: string;
  desc: string;
  flag?: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

export const NAV_SERVICE_CATEGORIES: {
  category: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ServiceNavItem[];
}[] = [
  {
    category: "ENGINEERING & AI",
    badge: "04 ENGINES",
    icon: Cpu,
    items: [
      {
        id: "01",
        name: "Website Development",
        href: "/services/web-development",
        tag: "NEXT.JS 16",
        color: "#FF1F1F",
        desc: "Sub-second Next.js 16 App Router & GSAP spatial architectures.",
        flag: "SPEC PROOF",
        icon: Terminal,
      },
      {
        id: "02",
        name: "App Development",
        href: "/services/app-development",
        tag: "MOBILE",
        color: "#CC1919",
        desc: "Native iOS & Android architectures built on React Native & Expo.",
        icon: Smartphone,
      },
      {
        id: "05",
        name: "AI Automation",
        href: "/services/ai-automation",
        tag: "AGENTS",
        color: "#FF1F1F",
        desc: "Autonomous LLM workflows, CRM webhooks & custom AI agents.",
        flag: "⚡ CYBER ENGINE",
        icon: Bot,
      },
      {
        id: "✦",
        name: "Technical Architecture Audit",
        href: "/contact?service=technical-audit",
        tag: "FREE SPRINT",
        color: "#FF1F1F",
        desc: "30-min codebase, conversion bottleneck & stack architecture review.",
        flag: "✦ DIRECT ACCESS",
        icon: Zap,
        featured: true,
      },
    ],
  },
  {
    category: "BRAND & CREATIVE",
    badge: "04 ENGINES",
    icon: Palette,
    items: [
      {
        id: "06",
        name: "Branding & Design",
        href: "/services/branding-design",
        tag: "IDENTITY",
        color: "#FF4444",
        desc: "Theatrical brand foundations, bespoke typecraft & visual design systems.",
        flag: "✦ JAPANESE UI",
        icon: Palette,
      },
      {
        id: "04",
        name: "Graphic Design",
        href: "/services/graphic-design",
        tag: "VISUAL",
        color: "#E60000",
        desc: "Tactile packaging, brutalist typography & high-impact collateral.",
        icon: Layers,
      },
      {
        id: "08",
        name: "Video Production & Editing",
        href: "/services/video-production-editing",
        tag: "FILM",
        color: "#CC1919",
        desc: "4K cinematic brand films & vertical retention reels engineered for scale.",
        flag: "✦ ENCHANTED CINEMA",
        icon: Film,
      },
      {
        id: "09",
        name: "Copywriting & Content Strategy",
        href: "/services/copywriting-content-strategy",
        tag: "WORDS",
        color: "#C9CCD1",
        desc: "High-conversion sales pages, brand manifestos & lifecycle flows.",
        icon: PenTool,
      },
    ],
  },
  {
    category: "PERFORMANCE & GROWTH",
    badge: "04 ENGINES",
    icon: TrendingUp,
    items: [
      {
        id: "07",
        name: "Google & Meta Ads",
        href: "/services/google-meta-ads",
        tag: "PAID",
        color: "#8B0000",
        desc: "High-ROAS paid acquisition campaigns with creative fatigue protection.",
        icon: Target,
      },
      {
        id: "03",
        name: "Social Media Management",
        href: "/services/social-media-management",
        tag: "ORGANIC",
        color: "#FF4444",
        desc: "Algorithmic short-form video production & high-retention viral funnels.",
        icon: Share2,
      },
      {
        id: "10",
        name: "SEO",
        href: "/services/seo",
        tag: "SEARCH",
        color: "#FF1F1F",
        desc: "Technical Core Web Vitals hardening & programmatic search clusters.",
        icon: Search,
      },
      {
        id: "11",
        name: "CRM & Sales Funnel Setup",
        href: "/services/crm-sales-funnel",
        tag: "CONVERT",
        color: "#E60000",
        desc: "Multi-step automated checkout pipelines & Klaviyo/HubSpot ops.",
        flag: "✦ PIPELINE FUNNEL UI",
        icon: GitMerge,
      },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(false);
  };

  // Close on route change or Escape
  useEffect(() => {
    setIsServicesOpen(false);
    setIsNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      const navElement = document.getElementById("main-nav");
      if (navElement) {
        if (currentScrollY > lastScrollY && currentScrollY > 120 && !isNavOpen && !isServicesOpen) {
          gsap.to(navElement, { yPercent: -150, duration: 0.35, ease: "power2.inOut" });
        } else {
          gsap.to(navElement, { yPercent: 0, duration: 0.35, ease: "power2.out" });
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavOpen, isServicesOpen]);


  return (
    <>
      <header
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 pointer-events-none transition-all duration-300"
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between pointer-events-auto rounded-2xl px-5 py-3 transition-all duration-300 border border-white/10 relative",
            isScrolled
              ? "bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(255,31,31,0.08)]"
              : "bg-[#0A0A0A]/80 backdrop-blur-md"
          )}
        >
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/logo-nexus-growth.png"
              alt="NEXUS Growth"
              width={180}
              height={48}
              className="h-10 w-auto object-contain group-hover:brightness-110 transition-all"
              priority
            />
          </Link>

          {/* Right Action Buttons & Nav */}
          <div className="flex items-center gap-3">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 mr-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80">
              {/* Interactive Services Hover Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center gap-1.5 py-2 hover:text-[#FF1F1F] transition-colors cursor-pointer select-none",
                    isServicesOpen && "text-[#FF1F1F]"
                  )}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isServicesOpen && "rotate-180 text-[#FF1F1F]"
                    )}
                  />
                </Link>
              </div>

              <Link href="/#work" className="hover:text-[#FF1F1F] transition-colors">
                Case Studies
              </Link>
              <Link href="/#process" className="hover:text-[#FF1F1F] transition-colors">
                Method
              </Link>
              <Link
                href="/services/web-development"
                className="text-[#FF1F1F] underline underline-offset-4 decoration-[#FF1F1F]/50"
              >
                Spec Proof
              </Link>
            </nav>

            <Link
              href="/contact"
              className="c-button hidden sm:inline-flex text-xs py-2.5 px-5"
            >
              Start Project <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-[#1A1A1A] px-3.5 py-2 text-xs font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] font-extrabold uppercase tracking-wider text-white shadow-[0_0_12px_rgba(255,31,31,0.1)] hover:shadow-[0_0_20px_rgba(255,31,31,0.25)] hover:border-[#FF1F1F]/30 transition-all pointer-events-auto"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-1 w-4">
                <span className="h-0.5 w-full bg-white block" />
                <span className="h-0.5 w-full bg-white block" />
                <span className="h-0.5 w-full bg-white block" />
              </span>
              <span>{isNavOpen ? "CLOSE" : "MENU"}</span>
            </button>
          </div>

          {/* Mega-Dropdown Hover Menu for all 11 Services */}
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.985 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-0 right-0 pt-3.5 z-50 pointer-events-auto"
              >
                <div className="relative rounded-2xl border border-white/15 bg-[#09090C]/98 backdrop-blur-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(255,31,31,0.12)] p-5 md:p-6 overflow-hidden max-h-[85vh] overflow-y-auto">
                  {/* Glowing Crimson Top Line Accent */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1F1F] to-transparent shadow-[0_0_15px_#FF1F1F]" />
                  {/* Subtle Background Radial Flares */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF1F1F]/10 blur-3xl" />
                  <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#FF1F1F]/5 blur-3xl" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

                  {/* Top Bar inside Dropdown */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      {/* Live Status Pill */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF1F1F]/15 border border-[#FF1F1F]/40 shadow-[0_0_15px_rgba(255,31,31,0.25)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F1F] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1F1F]" />
                        </span>
                        <span className="font-mono text-[10.5px] font-black uppercase tracking-wider text-white">
                          11 INTEGRATED DISCIPLINES
                        </span>
                      </div>

                      {/* Architecture Subtitle & Telemetry */}
                      <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#8E929A] uppercase tracking-wider">
                        <span className="text-white/20">//</span>
                        <span>Full-Stack Digital Growth Architecture</span>
                        <span className="text-white/20">//</span>
                        <span className="inline-flex items-center gap-1.5 text-white/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF1F1F]" />
                          LATENCY &lt; 0.2s
                        </span>
                      </div>
                    </div>

                    {/* Quick Action Link */}
                    <Link
                      href="/services"
                      onClick={closeDropdown}
                      className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-[#FF1F1F]/15 border border-white/10 hover:border-[#FF1F1F]/40 font-mono text-xs font-bold text-white hover:text-[#FF1F1F] shadow-[0_0_12px_rgba(255,31,31,0.08)] hover:shadow-[0_0_20px_rgba(255,31,31,0.25)] transition-all"
                    >
                      <span>EXPLORE MASTER HUB</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#FF1F1F] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* 3-Column Disciplines Grid */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {NAV_SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.category} className="flex flex-col">
                        {/* Category Header */}
                        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/[0.08]">
                          <div className="flex items-center gap-2">
                            <cat.icon className="h-3.5 w-3.5 text-[#FF1F1F]" />
                            <span className="font-mono text-[11px] font-black uppercase tracking-wider text-white">
                              {cat.category}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] text-[#8E929A] font-bold px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.02]">
                            {cat.badge}
                          </span>
                        </div>

                        {/* Category Items */}
                        <div className="flex flex-col gap-2.5">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={closeDropdown}
                              className={cn(
                                "group relative rounded-xl border p-3 transition-all duration-200 flex flex-col justify-between overflow-hidden",
                                item.featured
                                  ? "bg-gradient-to-br from-[#FF1F1F]/15 via-[#141417]/90 to-[#0A0A0C] border-[#FF1F1F]/40 hover:border-[#FF1F1F] shadow-[0_0_20px_rgba(255,31,31,0.15)] hover:shadow-[0_0_30px_rgba(255,31,31,0.3)]"
                                  : "bg-gradient-to-b from-[#131316]/90 to-[#0b0b0d]/95 border-white/[0.07] hover:border-[#FF1F1F]/40 hover:bg-[#181315] hover:shadow-[0_0_22px_rgba(255,31,31,0.16)]"
                              )}
                            >
                              {/* Left luminous accent line */}
                              <div
                                className={cn(
                                  "absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200",
                                  item.featured
                                    ? "bg-[#FF1F1F] shadow-[0_0_10px_#FF1F1F]"
                                    : "bg-transparent group-hover:bg-[#FF1F1F] group-hover:shadow-[0_0_10px_#FF1F1F]"
                                )}
                              />

                              {/* Card Top Light Reflection */}
                              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FF1F1F]/50 transition-all duration-300" />

                              {/* Card Hover Ambient Corner Flare */}
                              <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-[#FF1F1F]/0 group-hover:bg-[#FF1F1F]/15 blur-xl transition-all duration-300" />

                              {/* Top Row: Icon + Number on Left, Badges on Right */}
                              <div className="flex items-center justify-between gap-2 relative z-10">
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/70 group-hover:text-white group-hover:bg-[#FF1F1F]/15 group-hover:border-[#FF1F1F]/40 group-hover:shadow-[0_0_10px_rgba(255,31,31,0.3)] transition-all">
                                    <item.icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                                  </div>
                                  <span className="font-mono text-[10.5px] font-black text-white/50 group-hover:text-[#FF1F1F] transition-colors">
                                    #{item.id}
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  {item.flag && (
                                    <span className="font-mono text-[8.5px] font-black uppercase px-1.5 py-0.5 rounded bg-[#FF1F1F]/20 text-[#FF4444] border border-[#FF1F1F]/40 group-hover:bg-[#FF1F1F] group-hover:text-white group-hover:shadow-[0_0_10px_rgba(255,31,31,0.5)] transition-all">
                                      {item.flag}
                                    </span>
                                  )}
                                  <span className="font-mono text-[8.5px] font-bold uppercase px-1.5 py-0.5 rounded border border-white/10 bg-[#0A0A0A] text-white/60 group-hover:text-white/80 group-hover:border-white/20 transition-colors">
                                    {item.tag}
                                  </span>
                                </div>
                              </div>

                              {/* Middle Row: Name + Hover Arrow */}
                              <div className="flex items-center justify-between gap-2 mt-2 relative z-10">
                                <h4 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-[15px] font-extrabold uppercase leading-tight text-white group-hover:text-white group-hover:translate-x-0.5 transition-all">
                                  {item.name}
                                </h4>
                                <ArrowUpRight className="h-3.5 w-3.5 text-[#FF1F1F] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                              </div>

                              {/* Bottom Row: Description */}
                              <p className="mt-1 font-sans text-[11px] text-[#8E929A] group-hover:text-[#D1D5DB] leading-tight line-clamp-1 relative z-10 transition-colors">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Bar inside Dropdown */}
                  <div className="relative z-10 mt-4 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 bg-[#0d0d10] text-white -mx-5 md:-mx-6 -mb-5 md:-mb-6 px-5 md:px-6 py-3.5 rounded-b-xl">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-white/70">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F1F] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1F1F] shadow-[0_0_8px_#FF1F1F]" />
                      </span>
                      <span className="hidden sm:inline">
                        All 11 sprint capabilities operate under a unified, high-velocity roadmap.
                      </span>
                      <span className="sm:hidden">
                        11 Sprint Disciplines Active.
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/services"
                        onClick={closeDropdown}
                        className="font-mono text-xs font-bold text-white/70 hover:text-[#FF1F1F] flex items-center gap-1.5 transition-colors"
                      >
                        <span>Full Capabilities Matrix</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href="/contact"
                        onClick={closeDropdown}
                        className="c-button text-[11px] py-1.5 px-4 shadow-[0_0_18px_rgba(255,31,31,0.3)]"
                      >
                        Book Sprint ➔
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <KineticNavigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}
