"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";
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
}

export const NAV_SERVICE_CATEGORIES: {
  category: string;
  badge: string;
  items: ServiceNavItem[];
}[] = [
  {
    category: "ENGINEERING & AI",
    badge: "03 DISCIPLINES",
    items: [
      {
        id: "01",
        name: "Website Development",
        href: "/services/web-development",
        tag: "NEXT.JS",
        color: "#d7dd44",
        desc: "Sub-second Next.js 16 App Router & GSAP spatial architectures.",
        flag: "SPEC PROOF",
      },
      {
        id: "02",
        name: "App Development",
        href: "/services/app-development",
        tag: "MOBILE",
        color: "#7ca8d2",
        desc: "Native iOS & Android architectures built on React Native & Expo.",
      },
      {
        id: "05",
        name: "AI Automation",
        href: "/services/ai-automation",
        tag: "AGENTS",
        color: "#d7dd44",
        desc: "Autonomous LLM workflows, CRM webhooks & custom AI agents.",
        flag: "⚡ CYBER ENGINE",
      },
    ],
  },
  {
    category: "BRAND & CREATIVE",
    badge: "04 DISCIPLINES",
    items: [
      {
        id: "06",
        name: "Branding & Design",
        href: "/services/branding-design",
        tag: "IDENTITY",
        color: "#eaa0cd",
        desc: "Theatrical brand foundations, bespoke typecraft & visual design systems.",
        flag: "✦ JAPANESE UI",
      },
      {
        id: "04",
        name: "Graphic Design",
        href: "/services/graphic-design",
        tag: "VISUAL",
        color: "#f09341",
        desc: "Tactile packaging, brutalist typography & high-impact collateral.",
      },
      {
        id: "08",
        name: "Video Production & Editing",
        href: "/services/video-production-editing",
        tag: "FILM",
        color: "#f09341",
        desc: "4K cinematic brand films & vertical retention reels engineered for scale.",
        flag: "✦ ENCHANTED CINEMA",
      },
      {
        id: "09",
        name: "Copywriting & Content Strategy",
        href: "/services/copywriting-content-strategy",
        tag: "WORDS",
        color: "#7ca8d2",
        desc: "High-conversion sales pages, brand manifestos & lifecycle flows.",
      },
    ],
  },
  {
    category: "PERFORMANCE & GROWTH",
    badge: "04 DISCIPLINES",
    items: [
      {
        id: "07",
        name: "Google & Meta Ads",
        href: "/services/google-meta-ads",
        tag: "PAID",
        color: "#00966e",
        desc: "High-ROAS paid acquisition campaigns with creative fatigue protection.",
      },
      {
        id: "03",
        name: "Social Media Management",
        href: "/services/social-media-management",
        tag: "ORGANIC",
        color: "#eaa0cd",
        desc: "Algorithmic short-form video production & high-retention viral funnels.",
      },
      {
        id: "10",
        name: "SEO",
        href: "/services/seo",
        tag: "SEARCH",
        color: "#00966e",
        desc: "Technical Core Web Vitals hardening & programmatic search clusters.",
      },
      {
        id: "11",
        name: "CRM & Sales Funnel Setup",
        href: "/services/crm-sales-funnel",
        tag: "CONVERT",
        color: "#d7dd44",
        desc: "Multi-step automated checkout pipelines & Klaviyo/HubSpot ops.",
        flag: "✦ PIPELINE FUNNEL UI",
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

  const isSuppressed = Boolean(
    pathname?.startsWith('/services/branding-design') || 
    pathname?.startsWith('/services/ai-automation') || 
    pathname?.startsWith('/services/video-production-editing') ||
    pathname?.startsWith('/services/crm-sales-funnel')
  );

  if (isSuppressed) {
    return null;
  }

  return (
    <>
      <header
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 pointer-events-none transition-all duration-300"
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between pointer-events-auto rounded-2xl px-5 py-3 transition-all duration-300 border-2 border-black relative",
            isScrolled
              ? "bg-[#f4f4f0]/95 backdrop-blur-md shadow-[-4px_6px_0px_#000]"
              : "bg-[#f4f4f0] shadow-[-3px_4px_0px_#000]"
          )}
        >
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 w-10 rounded-xl border-2 border-black bg-[#d7dd44] flex items-center justify-center font-black text-xl shadow-[-2px_3px_0px_#000] group-hover:rotate-6 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-['Roboto_Flex'] uppercase font-extrabold text-xl tracking-tight leading-none [font-variation-settings:'wdth'_33] [font-stretch:33%]">
                NEXUS GROWTH
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5c5b5b]">
                Full-Service Agency
              </span>
            </div>
          </Link>

          {/* Right Action Buttons & Nav */}
          <div className="flex items-center gap-3">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 mr-2 font-mono text-xs font-bold uppercase tracking-wider text-black">
              {/* Interactive Services Hover Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center gap-1.5 py-2 hover:text-[#00966e] transition-colors cursor-pointer select-none",
                    isServicesOpen && "text-[#00966e]"
                  )}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isServicesOpen && "rotate-180 text-[#00966e]"
                    )}
                  />
                </Link>
              </div>

              <Link href="/#work" className="hover:text-[#00966e] transition-colors">
                Case Studies
              </Link>
              <Link href="/#process" className="hover:text-[#00966e] transition-colors">
                Method
              </Link>
              <Link
                href="/services/web-development"
                className="text-[#00966e] underline underline-offset-4"
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

            {/* Tactile Menu Toggle */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-3.5 py-2 text-xs font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] font-extrabold uppercase tracking-wider shadow-[-3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all pointer-events-auto"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-1 w-4">
                <span className="h-0.5 w-full bg-black block" />
                <span className="h-0.5 w-full bg-black block" />
                <span className="h-0.5 w-full bg-black block" />
              </span>
              <span>{isNavOpen ? "CLOSE" : "MENU"}</span>
            </button>
          </div>

          {/* Mega-Dropdown Hover Menu for all 11 Services */}
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-0 right-0 pt-3 z-50 pointer-events-auto"
              >
                <div className="rounded-2xl border-2 border-black bg-[#f4f4f0] shadow-[-8px_10px_0px_#000] p-5 md:p-6 overflow-hidden">
                  {/* Top Bar inside Dropdown */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-black">
                    <div className="flex items-center gap-2.5">
                      <span className="sticker-badge bg-[#d7dd44] text-black text-[10px] py-0.5 px-2">
                        11 INTEGRATED DISCIPLINES
                      </span>
                      <span className="font-mono text-xs font-bold text-black uppercase tracking-wider hidden sm:inline-block">
                        Full-Stack Digital Growth Architecture
                      </span>
                    </div>
                    <Link
                      href="/services"
                      onClick={closeDropdown}
                      className="font-mono text-xs font-bold text-black hover:text-[#00966e] flex items-center gap-1.5 group bg-white border border-black rounded-lg px-2.5 py-1 shadow-[-2px_2px_0px_#000] hover:shadow-none hover:translate-x-[-1px] hover:translate-y-[1px] transition-all"
                    >
                      <span>Explore Master Hub</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* 3-Column Disciplines Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {NAV_SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.category} className="flex flex-col">
                        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-black/20">
                          <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                            {cat.category}
                          </span>
                          <span className="font-mono text-[9px] text-[#5c5b5b] font-bold">
                            {cat.badge}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2">
                          {cat.items.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={closeDropdown}
                              className="group rounded-xl border border-black/15 hover:border-black bg-white/70 hover:bg-white p-2.5 shadow-none hover:shadow-[-3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex flex-col justify-between"
                              style={{ borderLeftWidth: "4px", borderLeftColor: item.color }}
                            >
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className="font-mono text-[10px] font-black text-black">
                                  #{item.id}
                                </span>
                                <div className="flex items-center gap-1">
                                  {item.flag && (
                                    <span className="font-mono text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-black text-[#d7dd44]">
                                      {item.flag}
                                    </span>
                                  )}
                                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded border border-black/20 bg-[#f4f4f0] font-bold text-black">
                                    {item.tag}
                                  </span>
                                </div>
                              </div>

                              <h4 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-base font-extrabold uppercase leading-tight text-black group-hover:text-[#00966e] transition-colors">
                                {item.name}
                              </h4>

                              <p className="mt-1 font-sans text-[11px] text-[#5c5b5b] leading-tight line-clamp-1">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Bar inside Dropdown */}
                  <div className="mt-4 pt-3 border-t-2 border-black flex flex-wrap items-center justify-between gap-3 bg-black text-white -mx-5 md:-mx-6 -mb-5 md:-mb-6 px-5 md:px-6 py-3">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-white/90">
                      <span className="h-2 w-2 rounded-full bg-[#00966e] animate-pulse shrink-0" />
                      <span className="hidden sm:inline">
                        All 11 sprint capabilities operate under a unified roadmap.
                      </span>
                      <span className="sm:hidden">
                        11 Sprint Disciplines Active.
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/services"
                        onClick={closeDropdown}
                        className="font-mono text-xs font-bold text-[#d7dd44] hover:underline flex items-center gap-1"
                      >
                        <span>Full Index</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href="/contact"
                        onClick={closeDropdown}
                        className="c-button-emerald c-button text-[11px] py-1 px-3 shadow-[-2px_2px_0px_#fff]"
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
