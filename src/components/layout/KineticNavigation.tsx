"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

interface KineticNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  { id: "01", name: "Website Development", href: "/services/web-development", color: "#d7dd44", tag: "CODE" },
  { id: "02", name: "App Development", href: "/services/app-development", color: "#7ca8d2", tag: "MOBILE" },
  { id: "03", name: "Social Media Management", href: "/services/social-media-management", color: "#eaa0cd", tag: "ORGANIC" },
  { id: "04", name: "Graphic Design", href: "/services/graphic-design", color: "#f09341", tag: "VISUAL" },
  { id: "05", name: "AI Automation", href: "/services/ai-automation", color: "#d7dd44", tag: "AGENTS" },
  { id: "06", name: "Branding & Design", href: "/services/branding-design", color: "#eaa0cd", tag: "IDENTITY" },
  { id: "07", name: "Google & Meta Ads", href: "/services/google-meta-ads", color: "#00966e", tag: "PAID" },
  { id: "08", name: "Video Production & Editing", href: "/services/video-production-editing", color: "#f09341", tag: "FILM" },
  { id: "09", name: "Copywriting & Content Strategy", href: "/services/copywriting-content-strategy", color: "#7ca8d2", tag: "WORDS" },
  { id: "10", name: "SEO", href: "/services/seo", color: "#00966e", tag: "ORGANIC" },
  { id: "11", name: "CRM & Sales Funnel Setup", href: "/services/crm-sales-funnel", color: "#d7dd44", tag: "CONVERT" },
];

export default function KineticNavigation({ isOpen, onClose }: KineticNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const mainLinks = [
    { num: "01", name: "HOME", href: "/" },
    { num: "02", name: "MANIFESTO", href: "/#about" },
    { num: "03", name: "CAPABILITIES", href: "/#services" },
    { num: "04", name: "CASE STUDIES", href: "/#work" },
    { num: "05", name: "GET IN TOUCH", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden pointer-events-auto">
          {/* Gate Curtain Left (Paper beige with ink typography) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="w-full lg:w-1/2 h-full bg-[#f4f4f0] border-r-4 border-black p-8 md:p-16 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header / Brand in Menu */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-[#d7dd44] border-2 border-black" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">APERTURE NAVIGATION GATE</span>
              </div>
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-xl border-2 border-black bg-white shadow-[-2px_2px_0px_#000]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Links in Compressed Editorial Display */}
            <nav className="my-10 flex flex-col gap-3">
              {mainLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-4 text-black hover:text-[#00966e] transition-colors"
                  >
                    <span className="font-mono text-sm font-bold text-[#8a8a90] group-hover:text-black">
                      ({link.num})
                    </span>
                    <span className="u-title-200 tracking-tight group-hover:italic group-hover:translate-x-2 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile-Only Capabilities Quick Index */}
            <div className="lg:hidden my-6 pt-6 border-t-2 border-black">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-black">
                  11 SPRINT DISCIPLINES
                </span>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="font-mono text-[11px] font-bold text-[#00966e] flex items-center gap-1"
                >
                  <span>All Specs</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={srv.href}
                    onClick={onClose}
                    className="p-2 rounded-lg border border-black bg-white text-left font-mono text-[11px] font-bold text-black flex items-center justify-between hover:bg-[#d7dd44] transition-colors"
                  >
                    <span className="truncate pr-1">#{srv.id} {srv.name}</span>
                    <span className="text-[9px] px-1 rounded bg-[#f4f4f0] border border-black shrink-0">
                      {srv.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Info Tape */}
            <div className="pt-6 border-t-2 border-black flex flex-wrap items-center justify-between text-xs font-mono gap-4">
              <span>APERTURE STUDIOS © 2026</span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#00966e]" /> HIGH-VELOCITY DIGITAL LABS
              </span>
            </div>
          </motion.div>

          {/* Gate Curtain Right (Decathlon-Style Cassette / Ticket Services Index) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="hidden lg:flex lg:w-1/2 h-full bg-[#ecebe4] p-12 md:p-16 flex-col justify-between overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b-2 border-black">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-black">
                11 CAPABILITIES DIRECTORY
              </span>
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-1.5 font-mono text-xs font-bold uppercase shadow-[-3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <X className="h-4 w-4" /> CLOSE
              </button>
            </div>

            {/* Cassette / Ticket Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              {SERVICES.map((srv, idx) => (
                <motion.div
                  key={srv.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                >
                  <Link
                    href={srv.href}
                    onClick={onClose}
                    className="group block rounded-xl border-2 border-black bg-white p-3.5 shadow-[-3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    style={{ borderLeftWidth: "8px", borderLeftColor: srv.color }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black">
                        #{srv.id}
                      </span>
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border border-black bg-[#f4f4f0] font-bold">
                        {srv.tag}
                      </span>
                    </div>
                    <p className="mt-1 font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-lg font-bold uppercase leading-none text-black group-hover:text-[#00966e] transition-colors">
                      {srv.name}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Direct CTA */}
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-5 shadow-[-4px_5px_0px_#000] flex items-center justify-between">
              <div>
                <p className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-xl font-bold uppercase text-black leading-none">
                  Need a tailored engagement?
                </p>
                <p className="font-mono text-xs text-black mt-1">Book a 30-min growth sprint consult.</p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="c-button-emerald c-button text-xs py-2 px-4 shadow-[-2px_3px_0px_#000]"
              >
                Book Call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
