'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  Users, 
  TrendingUp, 
  Layers, 
  Radio, 
  Activity, 
  Clock, 
  Sliders, 
  Mail, 
  Smartphone, 
  Cpu, 
  Compass, 
  DollarSign, 
  BarChart3, 
  RefreshCw,
  ExternalLink,
  MessageSquareCode,
  Headphones,
  Check,
  Send
} from 'lucide-react';

interface ChannelTab {
  id: string;
  name: string;
  iconSrc: string;
  badge: string;
  color: string;
  tagline: string;
  description: string;
  stats: string;
  sampleMessage: {
    sender: string;
    avatar: string;
    text: string;
    time: string;
    aiReply: string;
    outcome: string;
    revenue?: string;
  };
}

const CHANNELS: ChannelTab[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business API',
    iconSrc: '/vartalaap/hover-icons-1.svg',
    badge: '98% OPEN RATE',
    color: '#25D366',
    tagline: 'Direct-to-Pocket Conversational Checkout',
    description: 'Official Meta WhatsApp Cloud API with interactive quick-reply buttons, rich media catalogs, and native 1-click cart recovery flows.',
    stats: '2.4M Messages / Mo',
    sampleMessage: {
      sender: 'Camille Dubois (+33 612-***-90)',
      avatar: '/vartalaap/avatar_camille.webp',
      text: 'Hello! Is the Obsidian Matte Flask available in 750ml? Need it before our summit on Friday.',
      time: '10:42 AM',
      aiReply: 'Bonjour Camille! Yes, 4 units are reserved at our Paris hub. I have applied your 15% VIP code AURA15. Tap below to checkout via Apple Pay.',
      outcome: '✓ 1-Click Apple Pay Link Dispatched ($89.00 Closed in 22s)',
      revenue: '+$89.00',
    },
  },
  {
    id: 'instagram',
    name: 'Instagram Direct & Stories',
    iconSrc: '/vartalaap/hover-icons-2.svg',
    badge: 'VIRAL RETENTION',
    color: '#E1306C',
    tagline: 'Story Replies & Comment-to-DM Growth',
    description: 'Trigger instant private DMs from Story replies, keyword comments on Reels, and bio links with bi-directional CRM tag synchronization.',
    stats: '1.1M Automated DMs',
    sampleMessage: {
      sender: 'Elena Rostova (@elena_growth)',
      avatar: '/vartalaap/avatar_carla.webp',
      text: 'Dropped a comment "SCALE" on your latest pipeline breakdown reel! Where can I get the architectural blueprint?',
      time: '11:15 AM',
      aiReply: 'Hey Elena! Here is your private access link to the 2026 Omnichannel Funnel Playbook + our interactive ROI calculator: nexusgrowth.co/vip-elena',
      outcome: '✓ VIP Tag Synced to Klaviyo + Attribution Logged to Campaign #REEL-42',
      revenue: 'Lead Scored 96/100',
    },
  },
  {
    id: 'sms',
    name: 'RCS & Priority SMS',
    iconSrc: '/vartalaap/hover-icons-3.svg',
    badge: '< 90S RESPONSE',
    color: '#38bdf8',
    tagline: 'Carrier-Grade Verified Delivery',
    description: 'Branded Rich Communication Service (RCS) with verified business tick marks, interactive carousels, and Tier-1 SMS delivery fallbacks.',
    stats: '99.4% Delivery SLA',
    sampleMessage: {
      sender: 'Marcus Chen (+1 415-***-8821)',
      avatar: '/vartalaap/avatar_camille.webp',
      text: 'Can we reschedule our technical architecture discovery call to Thursday 3:00 PM EST?',
      time: '02:08 PM',
      aiReply: 'Thursday 3:00 PM EST is open on Yusuf’s executive calendar! Updated your Google Calendar invite and notified the engineering sprint team.',
      outcome: '✓ Calendar Synced + HubSpot Deal Stage Updated to "Discovery Confirmed"',
      revenue: 'Stage: Qualified Proposal',
    },
  },
  {
    id: 'webchat',
    name: 'High-Intent Webchat',
    iconSrc: '/vartalaap/hover-icons-4.svg',
    badge: '0-LATENCY STREAM',
    color: '#6366f1',
    tagline: 'Behavioral Cursor & Cart Intent Radar',
    description: 'Ultra-lightweight conversational widget that dynamically reads current URL path, cart dollar value, and dwell time before opening dialogue.',
    stats: '4.2x Higher CRO',
    sampleMessage: {
      sender: 'Visitor on /services/ai-automation (Cart: $4,500)',
      avatar: '/vartalaap/avatar_carla.webp',
      text: 'Does your enterprise tier include isolated VPC deployment with custom LoRA fine-tuning?',
      time: '04:30 PM',
      aiReply: 'Yes. Our Enterprise architecture includes private VPC hosting, isolated Qdrant vector memory, and custom LoRA fine-tuning tailored to your brand corpus.',
      outcome: '✓ High-Value Enterprise Lead Flagged -> Real-Time Alert Dispatched to Slack',
      revenue: 'Deal Est: $12,500',
    },
  },
  {
    id: 'voice',
    name: 'Conversational Voice AI',
    iconSrc: '/vartalaap/hover-icons-5.svg',
    badge: '400MS SPEECH LATENCY',
    color: '#00f2fe',
    tagline: 'Telephony Voice with Natural Cadence',
    description: 'Sub-second inbound and outbound telephony voice agents with natural human breath pauses, multilingual switching, and instant live rep escalation.',
    stats: '15,000 Call Hours / Mo',
    sampleMessage: {
      sender: 'Inbound Telephony (+1 212-***-4481)',
      avatar: '/vartalaap/avatar_camille.webp',
      text: '[Caller Audio]: "Hi, I need to check whether order #84920 has cleared customs in Zurich."',
      time: '05:12 PM',
      aiReply: '[Synthesized Telephony Voice]: "Order 84920 cleared Swiss customs 2 hours ago. Expected delivery is tomorrow before 1:00 PM CET."',
      outcome: '✓ Real-Time Tracking SMS Sent + Ticket Closed in 0.38s',
      revenue: 'Ticket Resolved',
    },
  },
];

interface VideoReel {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
  duration: string;
  metrics: {
    stat: string;
    label: string;
  }[];
  description: string;
}

const VIDEO_SHOWCASES: VideoReel[] = [
  {
    id: 'ai-core',
    title: 'NEXUS Astra // Autonomous Neural Core',
    subtitle: 'Real-time classification, vector memory recall & instant outcome execution across 100k+ concurrent threads',
    category: '3D KINETIC AI DEMO',
    src: '/videos/vartalaap/ai-core-motion.mp4',
    duration: '00:45',
    metrics: [
      { stat: '0.4s', label: 'Inference Latency' },
      { stat: '94.8%', label: 'Intent Accuracy' },
      { stat: '100%', label: 'CRM Vector Sync' },
    ],
    description: 'Watch how NEXUS Astra parses messy, conversational customer inquiries — extracting buyer sentiment, verifying live warehouse inventory, and triggering instant checkout events.',
  },
  {
    id: 'customer-journey',
    title: 'Omnichannel Velocity // From First DM to Closed Revenue',
    subtitle: 'High-energy commercial reel showcasing live multi-platform customer acquisition and frictionless checkouts',
    category: 'COMMERCIAL SHOWCASE',
    src: '/videos/vartalaap/customer-journey-reel.mp4',
    duration: '01:12',
    metrics: [
      { stat: '+34%', label: 'Conversion Lift' },
      { stat: '4.2X', label: 'Verified ROAS' },
      { stat: '12s', label: 'Avg Checkout Time' },
    ],
    description: 'Witness frictionless conversational conversion in action. See how users transition seamlessly from an Instagram Reel tap directly into a WhatsApp 1-click checkout flow.',
  },
  {
    id: 'voice-agent',
    title: 'Voice Telephony AI // Studio Audio Cadence',
    subtitle: 'Human-grade phone dialogue engineered with sub-500ms voice synthesis and intelligent interruptibility',
    category: 'VOICE AGENT DEMO',
    src: '/videos/vartalaap/conversational-voice-demo.mp4',
    duration: '01:30',
    metrics: [
      { stat: '< 450ms', label: 'Voice Response' },
      { stat: '97.2%', label: 'Caller Satisfaction' },
      { stat: '-62%', label: 'Support Overhead' },
    ],
    description: 'Listen to human-grade conversational cadence. Our telephony voice stack handles natural pauses, interruptions, and live database lookups without mechanical latency.',
  },
  {
    id: 'enterprise-suite',
    title: 'Enterprise Architecture // Global Scale Governance',
    subtitle: 'Flagship brand film demonstrating multi-brand customer engagement and compliance pipelines',
    category: 'ENTERPRISE SUITE',
    src: '/videos/vartalaap/enterprise-omnichannel.mp4',
    duration: '01:45',
    metrics: [
      { stat: '1.28M', label: 'Daily Threads' },
      { stat: 'SOC2', label: 'Type II Compliant' },
      { stat: '99.99%', label: 'Uptime SLA' },
    ],
    description: 'Architected for enterprise brands managing millions of high-stakes interactions across disparate global territories, currencies, and strict regulatory standards.',
  },
];

interface UseCaseItem {
  id: string;
  tag: string;
  title: string;
  cursiveAccent: string;
  subtitle: string;
  imageSrc: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  metric: string;
  metricLabel: string;
  badge: string;
}

const USE_CASES: UseCaseItem[] = [
  {
    id: 'd2c',
    tag: 'D2C & E-COMMERCE',
    title: 'Scale orders, eradicate',
    cursiveAccent: 'returns.',
    subtitle: 'Automate post-purchase tracking, size verification, and abandoned cart recovery directly on WhatsApp and SMS.',
    imageSrc: '/vartalaap/card-img-1.webp',
    bullet1: '1-Click WhatsApp Apple Pay link generation with automated discount rules',
    bullet2: 'Proactive shipping tracking updates that reduce "Where Is My Order" tickets by 72%',
    bullet3: 'Conversational size & fit assistance that cuts return rates in half',
    metric: '+38% AOV',
    metricLabel: 'Average Cart Lift via Conversational Upsells',
    badge: 'HIGH-VELOCITY D2C',
  },
  {
    id: 'creators',
    tag: 'CREATOR ECONOMY & COHORTS',
    title: 'Monetize audiences without losing your',
    cursiveAccent: 'authentic voice.',
    subtitle: 'Turn Instagram comments, YouTube clicks, and Twitter DMs into high-ticket course enrollments and mastermind members.',
    imageSrc: '/vartalaap/card-img-2.webp',
    bullet1: 'Automated comment-to-DM triggers delivering free resources in under 3 seconds',
    bullet2: 'Conversational qualification that separates high-ticket buyers from freebie seekers',
    bullet3: 'Personalized audio memos with your voice cadence that feel bespoke',
    metric: '4.8X',
    metricLabel: 'DM-to-Checkout Funnel Velocity',
    badge: 'CREATOR FAVORITE',
  },
  {
    id: 'real-estate',
    tag: 'LUXURY REAL ESTATE & HIGH-TICKET',
    title: 'Book private site visits while you',
    cursiveAccent: 'sleep.',
    subtitle: 'Prequalify high-net-worth buyers, verify mortgage criteria, and instantly book VIP property tours directly into broker calendars.',
    imageSrc: '/vartalaap/card-img-3.webp',
    bullet1: 'Automated buyer timeline questionnaire directly in WhatsApp',
    bullet2: 'Dynamic property brochure dispatch with trackable PDF engagement telemetry',
    bullet3: 'Calendar scheduling synced with broker availability and gate access codes',
    metric: '82%',
    metricLabel: 'Show-Up Rate on Verified Tours',
    badge: 'HIGH-TICKET PROOF',
  },
  {
    id: 'enterprise',
    tag: 'ENTERPRISE & HEALTHCARE',
    title: 'Enterprise AI operations at unlimited',
    cursiveAccent: 'scale.',
    subtitle: 'Deploy multi-agent customer operations with strict role-based access control, HIPAA/SOC2 compliance, and dedicated bi-directional CRM pipelines.',
    imageSrc: '/vartalaap/card-img-4.webp',
    bullet1: 'Sub-second data lookup across Salesforce, HubSpot, Zendesk, and SAP',
    bullet2: 'Automated sentiment escalation: high-friction accounts routed instantly to senior managers',
    bullet3: 'Encrypted audit logs with PII masking and zero LLM training retention',
    metric: '68%',
    metricLabel: 'Tier-1 Support Tickets Resolved Instantly',
    badge: 'SOC2 COMPLIANT',
  },
];

const FAQS = [
  {
    q: 'What makes NEXUS Vartalaap different from traditional chatbots?',
    a: 'Traditional chatbots rely on brittle if/then keywords and rigid decision trees that alienate customers. NEXUS Vartalaap is an autonomous conversational operating system powered by deep multi-agent LLM reasoning, sub-second vector memory, and bi-directional CRM synchronizations. It doesn’t just output canned text — it checks real-time inventory, calculates shipping, schedules calendar slots, and executes payment checkouts directly inside the messaging interface.',
  },
  {
    q: 'Which messaging channels are officially supported?',
    a: 'We provide native, official API integrations across WhatsApp Business Cloud API, Instagram Direct Messages, Facebook Messenger, Apple Business Chat, RCS, 2-Way SMS, Live Webchat, and Telephony Voice Calling. All conversations merge into a unified, centralized intelligence layer.',
  },
  {
    q: 'Can NEXUS Vartalaap integrate with our existing CRM and tech stack?',
    a: 'Yes! We build bi-directional pipelines with HubSpot, Salesforce, Klaviyo, Shopify, WooCommerce, Close, Zoho, Stripe, and custom PostgreSQL/REST backends. When a customer confirms an address or purchases an item, your CRM and ERP are updated in under 400 milliseconds.',
  },
  {
    q: 'How fast is the Voice AI telephony agent?',
    a: 'Our voice telephony agents operate with an end-to-end voice latency of under 450 milliseconds. This includes speech-to-text transcription, neural reasoning, database query lookup, and neural voice synthesis. The result is fluid, human-cadence dialogue with natural pauses and full interruptibility.',
  },
  {
    q: 'What is the setup timeline for a production rollout?',
    a: 'Our typical Sprint Launchpad takes 10 to 14 business days from contract signing to live production deployment. This includes channel verification, CRM topology mapping, custom knowledge vector ingestion, tone-of-voice alignment, and end-to-end red-teaming.',
  },
];

export function VartalaapCrmExperience() {
  const [activeChannel, setActiveChannel] = useState<string>('whatsapp');
  const [activeUseCase, setActiveUseCase] = useState<string>('d2c');
  const [activeVideo, setActiveVideo] = useState<string>('ai-core');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [orbState, setOrbState] = useState<'idle' | 'listening' | 'synthesizing'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isNavServicesOpen, setIsNavServicesOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const cycleOrbState = () => {
    if (orbState === 'idle') setOrbState('listening');
    else if (orbState === 'listening') setOrbState('synthesizing');
    else setOrbState('idle');
  };

  const currentChannel = CHANNELS.find(c => c.id === activeChannel) || CHANNELS[0];
  const currentVideo = VIDEO_SHOWCASES.find(v => v.id === activeVideo) || VIDEO_SHOWCASES[0];

  return (
    <div className="relative min-h-screen bg-[#080c14] text-[#f8fafc] selection:bg-[#00f2fe] selection:text-black overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. ATMOSPHERIC NEON EDGE GLOW & AMBIENT RADIAL LIGHTING */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-[#00c6ff]/15 via-[#0072ff]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[25%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-[#3b82f6]/15 via-[#6366f1]/10 to-transparent blur-[160px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-[#00f2fe]/10 via-[#3b82f6]/10 to-transparent blur-[180px]" />
        
        {/* Subtle decorative grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#00f2fe 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. ASYMMETRIC FUTURISTIC CYBER-CAPSULE NAVBAR */}
      {/* ========================================================================= */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full bg-[#080c14]/85 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_4px_35px_rgba(0,0,0,0.6),0_0_30px_rgba(0,242,254,0.2)]">
          
          {/* Logo with Mixed Typography */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00c6ff] via-[#0072ff] to-[#38bdf8] flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(0,242,254,0.6)] group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00f2fe]" />
                </div>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Syne'] font-extrabold tracking-tight text-base text-white">
                  NEXUS
                </span>
                <span className="font-serif italic text-lg text-cyan-300 font-normal">
                  Vartalaap
                </span>
              </div>
            </Link>
            
            {/* Live Audio Frequency Meter in Nav */}
            <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10 text-[10px] font-mono text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-bold">ONLINE</span>
              <div className="flex items-center gap-0.5 ml-1">
                <span className="w-0.5 h-2.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                <span className="w-0.5 h-4 bg-cyan-300 rounded-full animate-bounce [animation-delay:0.25s]" />
                <span className="w-0.5 h-5 bg-[#00f2fe] rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-0.5 h-3 bg-blue-400 rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
              <span className="text-gray-500">400ms SLA</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-gray-300">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Neural Core</a>
            <a href="#conversions" className="hover:text-cyan-400 transition-colors">Conversions</a>
            <a href="#omnichannel" className="hover:text-cyan-400 transition-colors">Omnichannel</a>
            <a href="#video-showcase" className="hover:text-cyan-400 transition-colors">Architecture Reels</a>
            <a href="#verticals" className="hover:text-cyan-400 transition-colors">Use Cases</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Sprint Plans</a>
          </nav>

          {/* Right Actions & All 11 Services Flyout */}
          <div className="flex items-center gap-3 relative">
            <div className="relative">
              <button
                onClick={() => setIsNavServicesOpen(!isNavServicesOpen)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-200 transition-all"
              >
                <span>All 11 Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isNavServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              <AnimatePresence>
                {isNavServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-3 w-80 md:w-96 rounded-2xl bg-[#090e1a]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(0,242,254,0.25)] p-4 z-50"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                      <span className="text-gray-400">NEXUS CAPABILITIES</span>
                      <Link href="/services" className="text-cyan-400 hover:underline">
                        Master Index ➔
                      </Link>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <Link
                        href="/services/crm-sales-funnel"
                        className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-200 font-medium shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                      >
                        <span className="flex items-center gap-2">
                          <Bot className="w-3.5 h-3.5 text-cyan-400" />
                          11 CRM &amp; Sales Funnels
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-400 text-black font-bold">
                          ✦ ACTIVE UI
                        </span>
                      </Link>

                      <Link
                        href="/services/video-production-editing"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-gray-300 transition-colors"
                      >
                        <span>08 Video Production &amp; Editing</span>
                        <span className="text-[10px] font-mono text-indigo-400">✦ ENCHANTED</span>
                      </Link>

                      <Link
                        href="/services/branding-design"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-gray-300 transition-colors"
                      >
                        <span>06 Branding &amp; Design</span>
                        <span className="text-[10px] font-mono text-pink-400">✦ JAPANESE UI</span>
                      </Link>

                      <Link
                        href="/services/ai-automation"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-gray-300 transition-colors"
                      >
                        <span>05 AI Automation</span>
                        <span className="text-[10px] font-mono text-red-400">⚡ CYBER ENGINE</span>
                      </Link>

                      <Link
                        href="/services/web-development"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-gray-300 transition-colors"
                      >
                        <span>01 Website Development</span>
                        <span className="text-[10px] font-mono text-lime-400">SPEC PROOF</span>
                      </Link>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                      <span>Ready to deploy an autonomous pipeline?</span>
                      <Link href="/contact?service=crm-sales-funnel" className="text-cyan-400 font-bold hover:underline">
                        Book Sprint ➔
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact?service=crm-sales-funnel"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#38bdf8] text-black font-bold text-xs tracking-wide shadow-[0_0_25px_rgba(0,242,254,0.5)] hover:shadow-[0_0_35px_rgba(0,242,254,0.8)] transition-all hover:scale-105 flex items-center gap-1.5"
            >
              <span>Deploy Funnel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION: ASYMMETRIC EDITORIAL WITH DYNAMIC WAVE & FLOATING CARDS */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-4 md:px-8 z-10 overflow-hidden">
        
        {/* Dynamic Vartalaap Hero Wave Background */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[140vw] max-w-[1920px] h-[550px] pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
          <Image
            src="/vartalaap/hero-wave.webp"
            alt="Hero Wave Energy"
            width={1920}
            height={888}
            priority
            className="w-full h-full object-cover animate-pulse [animation-duration:8s]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Asymmetric Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-cyan-300 text-xs font-mono mb-8 shadow-[0_0_25px_rgba(0,242,254,0.25)] rotate-[-1deg]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-widest uppercase">SERVICE 11 // CRM &amp; CONVERSATIONAL SALES FUNNELS</span>
          </motion.div>

          {/* Central Interactive Holographic Orb with Floating Dialogue Avatars */}
          <div className="relative my-4 flex items-center justify-center w-full max-w-4xl">
            
            {/* Floating Dialogue Card 1 (Left - Camille) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -left-4 lg:left-8 top-4 md:top-8 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-cyan-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(0,242,254,0.2)] rotate-[-3deg] hover:rotate-0 transition-transform max-w-[280px] text-left"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.5)]">
                <Image
                  src="/vartalaap/avatar_camille.webp"
                  alt="Camille VIP Buyer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 mb-0.5">
                  <span>Camille D.</span>
                  <span className="text-green-400 font-bold">+$89.00</span>
                </div>
                <p className="text-gray-200 text-[11px] leading-tight">
                  &quot;Is the Obsidian Flask available?&quot;
                </p>
                <div className="text-[9px] font-mono text-cyan-400/90 mt-1 flex items-center gap-1">
                  <Check className="w-2.5 h-2.5 text-green-400" />
                  <span>Paid in 18s via Apple Pay</span>
                </div>
              </div>
            </motion.div>

            {/* Central Holographic 3D Orb */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={cycleOrbState}
              className="relative cursor-pointer group my-2 z-10"
              title="Click to interact with Astra AI"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-600/35 to-purple-600/25 blur-3xl group-hover:blur-[70px] transition-all duration-500 animate-pulse" />
              
              {/* Rotating Orbital Rings */}
              <div className="absolute -inset-5 rounded-full border border-cyan-500/30 border-dashed animate-spin [animation-duration:35s]" />
              <div className="absolute -inset-3 rounded-full border border-blue-400/35 border-dotted animate-spin [animation-duration:20s] [animation-direction:reverse]" />

              {/* Central Holographic Orb Box */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#003b73] via-[#0072ff] to-[#00f2fe] p-1 shadow-[0_0_60px_rgba(0,242,254,0.6),inset_0_0_35px_rgba(255,255,255,0.4)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#080c14] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  
                  {/* Internal dynamic wave graphic */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-blue-950/60" />
                  
                  <Bot className="w-12 h-12 text-[#00f2fe] mb-2 drop-shadow-[0_0_15px_rgba(0,242,254,0.9)] group-hover:scale-110 transition-transform" />
                  
                  {/* Voice Status Pill */}
                  <span className="font-mono text-[11px] font-bold tracking-widest text-cyan-300 uppercase">
                    {orbState === 'idle' && 'Meet Astra Core'}
                    {orbState === 'listening' && 'Listening...'}
                    {orbState === 'synthesizing' && 'Synthesizing...'}
                  </span>

                  {/* Animated sound wave bars */}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-1 h-5 bg-cyan-300 rounded-full animate-bounce [animation-delay:0.3s]" />
                    <span className="w-1 h-7 bg-[#00f2fe] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-4 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    <span className="w-1 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                  </div>

                  <span className="text-[9px] font-mono text-gray-400 mt-2">
                    Click bubble to test
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Dialogue Card 2 (Right - Carla) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -right-4 lg:right-8 bottom-4 md:bottom-8 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-blue-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(59,130,246,0.2)] rotate-[2.5deg] hover:rotate-0 transition-transform max-w-[290px] text-left"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                <Image
                  src="/vartalaap/avatar_carla.webp"
                  alt="Carla Enterprise VP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-blue-300 mb-0.5">
                  <span>Carla M. (Enterprise VP)</span>
                  <span className="text-cyan-400 font-bold">$18.5k MRR</span>
                </div>
                <p className="text-gray-200 text-[11px] leading-tight">
                  &quot;Sync 65 reps to Salesforce.&quot;
                </p>
                <div className="text-[9px] font-mono text-blue-400/90 mt-1 flex items-center gap-1">
                  <Check className="w-2.5 h-2.5 text-blue-400" />
                  <span>VIP Tour Booked on Calendar</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Mixed Typography Master Title (Syne + Instrument Serif Italic) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-5xl"
          >
            <h1 className="font-['Syne'] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-white leading-[1.05]">
              Every customer dialogue,
              <span className="block mt-1 font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] via-[#38bdf8] to-[#0072ff] tracking-normal drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
                a living conversion.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with Large-Small Text Mixup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-3xl text-gray-300 leading-relaxed text-base sm:text-xl font-sans"
          >
            Your business operating system for{' '}
            <span className="font-serif italic text-cyan-300 text-2xl sm:text-3xl font-normal">
              frictionless revenue,
            </span>{' '}
            24/7 autonomous support, and{' '}
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/40 inline-block align-middle font-bold">
              Omnichannel CRM Routing
            </span>{' '}
            executed in under 400 milliseconds.
          </motion.div>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact?service=crm-sales-funnel"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#38bdf8] text-black font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(0,242,254,0.5)] hover:shadow-[0_0_55px_rgba(0,242,254,0.8)] transition-all flex items-center justify-center gap-2 group hover:scale-105"
            >
              <span>Deploy Autonomous Pipeline</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#video-showcase"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span>Watch Architecture Reel</span>
            </a>
          </motion.div>

          {/* Trust Telemetry Bar with Large Numeric Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl w-full"
          >
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-white font-mono">1.28M+</div>
              <div className="text-xs text-gray-400 mt-1">Daily Conversations Processed</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-cyan-400 font-mono">+34%</div>
              <div className="text-xs text-gray-400 mt-1">Verified Checkout Conversion Lift</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-blue-400 font-mono">68%</div>
              <div className="text-xs text-gray-400 mt-1">Zero-Human Ticket Auto-Resolution</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-purple-400 font-mono">&lt; 400ms</div>
              <div className="text-xs text-gray-400 mt-1">Omnichannel Inference Latency</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM SHEET: "EVERY CONVERSATION, A CONVERSION" FUNNEL SIMULATOR */}
      {/* ========================================================================= */}
      <section id="conversions" className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              CONVERSION TOPOLOGY
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Every incoming message,{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                an engineered outcome.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              NEXUS Vartalaap’s AI workforce turns unstructured chat into qualified sales deals, completed Stripe checkouts, or resolved customer tickets in real time.
            </p>
          </div>

          {/* Asymmetric 3-Track Grid with Real Vartalaap Images & Artistic Frames */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Track 1: D2C E-Commerce 1-Click Purchase */}
            <div className="rounded-3xl bg-[#0a101f] border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,242,254,0.15)] group hover:border-cyan-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    TRACK 01 // D2C CHECKOUT
                  </span>
                  <span>WhatsApp Cloud API</span>
                </div>

                <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
                  <Image
                    src="/vartalaap/card-img-5.webp"
                    alt="Conversational Checkout UI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-gray-300">Live Cart Token #8492</span>
                    <span className="text-green-400 font-bold">$43,817.16 REV</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">INCOMING CUSTOMER MESSAGE</div>
                    &quot;Is the Cold Brew Nitro 12-pack in stock? Can I order with the weekend discount?&quot;
                  </div>

                  <div className="p-3.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-100">
                    <div className="text-[10px] font-mono text-cyan-400 mb-1 flex items-center gap-1 font-bold">
                      <Bot className="w-3.5 h-3.5" /> ASTRA REVENUE WORKFORCE
                    </div>
                    &quot;Yes! 6 boxes reserved at our local warehouse. Applied 15% VIP discount code NITRO15. Tap below to checkout via Apple Pay.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Syne'] text-2xl font-bold text-green-400 font-mono">$43,817.16</div>
                  <div className="text-[10px] text-gray-400">Attributed Monthly Revenue</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-xs font-mono font-bold">
                  ✓ PAID IN 14s
                </div>
              </div>
            </div>

            {/* Track 2: B2B High-Ticket Pipeline Lead Qualification */}
            <div className="rounded-3xl bg-[#0a101f] border border-blue-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] group hover:border-blue-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    TRACK 02 // B2B PIPELINE
                  </span>
                  <span>HubSpot / Close Sync</span>
                </div>

                <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
                  <Image
                    src="/vartalaap/card-img-6.webp"
                    alt="B2B CRM Pipeline UI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-gray-300">Salesforce Pipeline Router</span>
                    <span className="text-blue-400 font-bold">$18,500 MRR</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">ENTERPRISE LEAD INQUIRY</div>
                    &quot;We have 65 sales reps and need automated WhatsApp deal routing into Salesforce.&quot;
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-100">
                    <div className="text-[10px] font-mono text-blue-400 mb-1 flex items-center gap-1 font-bold">
                      <Bot className="w-3.5 h-3.5" /> ASTRA QUALIFIER
                    </div>
                    &quot;Qualified Enterprise Tier. Synced team size, verified domain, and reserved an architecture slot on Yusuf’s executive calendar for Tuesday.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Syne'] text-2xl font-bold text-blue-400 font-mono">$18,500 MRR</div>
                  <div className="text-[10px] text-gray-400">Pipeline Deal Value</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold">
                  ✓ DEMO BOOKED
                </div>
              </div>
            </div>

            {/* Track 3: Tier-1 & Tier-2 Support Auto-Triage */}
            <div className="rounded-3xl bg-[#0a101f] border border-purple-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] group hover:border-purple-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    TRACK 03 // 24/7 SUPPORT
                  </span>
                  <span>Omnichannel Resolver</span>
                </div>

                <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
                  <Image
                    src="/vartalaap/img-product-5.webp"
                    alt="Support Automation Hub"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-gray-300">Telemetry SLA Enforcer</span>
                    <span className="text-purple-400 font-bold">0.38S RESPONSE</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">FLASH-SALE TRAFFIC SPIKE</div>
                    &quot;Our webhook endpoint received a 504 error during peak flash sale traffic.&quot;
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-100">
                    <div className="text-[10px] font-mono text-purple-400 mb-1 flex items-center gap-1 font-bold">
                      <Bot className="w-3.5 h-3.5" /> ASTRA RESOLVER
                    </div>
                    &quot;Isolated rate limit spike on legacy node. Automatically spun up redundant Redis queue workers and rerouted traffic. All 1,420 queued events delivered.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Syne'] text-2xl font-bold text-purple-400 font-mono">0.38s Latency</div>
                  <div className="text-[10px] text-gray-400">Average Resolution Speed</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-400 text-xs font-mono font-bold">
                  ✓ 100% RESOLVED
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OMNICHANNEL COMMAND CENTER (TABS & INTERACTIVE SIMULATION) */}
      {/* ========================================================================= */}
      <section id="omnichannel" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                UNIFIED MESSAGING LAYER
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                From message to outcome{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                  in seconds.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-sans">
              One unified intelligence brain connected across all major communication endpoints. No disparate inboxes, no manual copy-pasting, zero dropped leads.
            </p>
          </div>

          {/* Interactive Channel Selector Pills with Artistic Icons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {CHANNELS.map(ch => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs font-mono transition-all border ${
                  activeChannel === ch.id
                    ? 'bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#38bdf8] text-black font-bold border-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.4)] scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                }`}
              >
                <div className="w-5 h-5 relative shrink-0">
                  <Image
                    src={ch.iconSrc}
                    alt={ch.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span>{ch.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeChannel === ch.id ? 'bg-black text-cyan-300 font-bold' : 'bg-white/10 text-gray-400'}`}>
                  {ch.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Active Channel Detailed Interactive Workspace */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChannel.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#0a101f] border border-cyan-500/30 p-6 md:p-10 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7),0_0_40px_rgba(0,242,254,0.15)]"
            >
              {/* Background ambient lighting */}
              <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: currentChannel.color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Channel Specs & Features */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: currentChannel.color }}>
                      <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentChannel.color }} />
                      <span>{currentChannel.stats}</span>
                    </div>
                    
                    <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
                      {currentChannel.name}
                    </h3>

                    <div className="font-serif italic text-cyan-300 text-lg mt-1 font-normal">
                      {currentChannel.tagline}
                    </div>

                    <p className="mt-3 text-sm text-gray-300 leading-relaxed font-sans">
                      {currentChannel.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Zero-latency webhook event dispatch</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Automatic intent recognition &amp; sentiment routing</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Full conversation telemetry stored in vector memory</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact?service=crm-sales-funnel"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold transition-all hover:scale-105"
                    >
                      <span>Integrate {currentChannel.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Live Conversation Simulation Card with Real Avatar */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl bg-[#060a12] border border-white/10 p-5 md:p-6 shadow-2xl relative">
                    
                    {/* Fake App Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="text-gray-400 ml-2">CONVERSATIONAL CHANNEL RUNTIME</span>
                      </div>
                      <span className="text-green-400 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    {/* Chat Stream with Real Avatars */}
                    <div className="space-y-4">
                      {/* Incoming Customer Message */}
                      <div className="flex items-start gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20">
                          <Image
                            src={currentChannel.sampleMessage.avatar}
                            alt={currentChannel.sampleMessage.sender}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="max-w-md rounded-2xl rounded-tl-none bg-white/10 border border-white/10 p-4 text-xs text-white">
                          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1 font-mono">
                            <span>{currentChannel.sampleMessage.sender}</span>
                            <span>{currentChannel.sampleMessage.time}</span>
                          </div>
                          <p className="leading-relaxed">{currentChannel.sampleMessage.text}</p>
                        </div>
                      </div>

                      {/* AI Response Message */}
                      <div className="flex items-start gap-3 justify-end">
                        <div className="max-w-md rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-cyan-500/40 p-4 text-xs text-cyan-100 shadow-[0_0_25px_rgba(0,242,254,0.15)]">
                          <div className="flex items-center justify-between text-[10px] text-cyan-400 mb-1">
                            <span className="flex items-center gap-1 font-mono font-bold">
                              <Sparkles className="w-3 h-3" /> ASTRA CONVERSATIONAL WORKFORCE
                            </span>
                            <span className="font-mono">Just now (0.32s)</span>
                          </div>
                          <p className="leading-relaxed">{currentChannel.sampleMessage.aiReply}</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-black shrink-0 shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                          <Bot className="w-4 h-4 text-black" />
                        </div>
                      </div>

                      {/* Automated CRM Outcome Banner */}
                      <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-xs font-mono flex items-center justify-between">
                        <span className="flex items-center gap-2 font-bold">
                          <Zap className="w-4 h-4 text-green-400 shrink-0" />
                          {currentChannel.sampleMessage.outcome}
                        </span>
                        {currentChannel.sampleMessage.revenue && (
                          <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-extrabold">
                            {currentChannel.sampleMessage.revenue}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE VIDEO SHOWCASE (CLIENT VIDEOS INTEGRATED) */}
      {/* ========================================================================= */}
      <section id="video-showcase" className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                FIELD ARCHITECTURE DEMOS
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                See the platform{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                  in living motion.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-sans">
              Interactive high-definition video reels showcasing autonomous intent resolution, telephony voice response, and enterprise omnichannel routing.
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {VIDEO_SHOWCASES.map(v => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(v.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  activeVideo === v.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_30px_rgba(0,242,254,0.3)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-400'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1">{v.category}</div>
                <div className="text-xs font-bold text-white line-clamp-1">{v.title}</div>
                <div className="text-[10px] text-gray-400 mt-1 font-mono">{v.duration}</div>
              </button>
            ))}
          </div>

          {/* Main Video Cinema Theater Card */}
          <div className="rounded-3xl bg-[#090e1a] border border-cyan-500/30 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.85),0_0_45px_rgba(0,242,254,0.25)]">
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                src={currentVideo.src}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted={isMuted}
              />

              {/* Video Overlay Controls & Specs */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50 pointer-events-none" />

              {/* Top Header Information */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white pointer-events-auto">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{currentVideo.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-gray-300" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                </div>
              </div>

              {/* Center Large Play/Pause overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-[0_0_35px_rgba(0,242,254,0.9)] transition-all hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>
              </div>

              {/* Bottom Video Metadata Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto text-xs font-mono">
                <div>
                  <h4 className="text-base font-bold text-white font-['Syne']">{currentVideo.title}</h4>
                  <p className="text-gray-300 text-xs mt-0.5 font-sans hidden sm:block">{currentVideo.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  {currentVideo.metrics.map((m, idx) => (
                    <div key={idx} className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-cyan-400 font-bold text-sm font-mono">{m.stat}</div>
                      <div className="text-[9px] text-gray-400 uppercase font-sans">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Description Footnote */}
            <div className="p-6 bg-[#060a12] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-gray-300">
              <p className="max-w-3xl leading-relaxed font-sans">
                {currentVideo.description}
              </p>
              <Link
                href="/contact?service=crm-sales-funnel"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-mono font-bold transition-all flex items-center gap-2"
              >
                <span>Request Custom Pipeline Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ASYMMETRIC IMPACT VERTICALS WITH ARTISTIC IMAGES */}
      {/* ========================================================================= */}
      <section id="verticals" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              INDUSTRY ARCHITECTURES
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Where Vartalaap creates{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                tangible impact.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
              Tailored autonomous workflows engineered for high-volume conversion ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveUseCase(item.id)}
                className={`p-6 rounded-3xl bg-[#0a101f] border transition-all cursor-pointer flex flex-col justify-between ${
                  activeUseCase === item.id
                    ? 'border-cyan-400 shadow-[0_0_40px_rgba(0,242,254,0.3)] scale-[1.02]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-3">
                    <span>{item.tag}</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 font-bold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Feature Image Artwork from Vartalaap assets */}
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  </div>

                  <h3 className="font-['Syne'] text-base font-bold text-white mb-1 leading-snug">
                    {item.title}{' '}
                    <span className="font-serif italic text-cyan-300 font-normal">
                      {item.cursiveAccent}
                    </span>
                  </h3>

                  <p className="text-xs text-gray-400 mb-4 leading-relaxed font-sans">
                    {item.subtitle}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-300 font-sans">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{item.bullet1}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{item.bullet2}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{item.bullet3}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <div>
                    <div className="font-['Syne'] text-xl font-bold text-cyan-300 font-mono">{item.metric}</div>
                    <div className="text-[10px] text-gray-400">{item.metricLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PERFORMANCE STATS BENTO GRID ("REAL OUTCOMES FROM TEAMS") */}
      {/* ========================================================================= */}
      <section id="bento-metrics" className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                PROVEN RESULTS
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                Real outcomes from teams{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                  using Vartalaap.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-sans">
              Battle-tested at high concurrency across hundreds of thousands of daily consumer transactions and enterprise deal pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: 1.28M Daily Conversations */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-cyan-500/30 relative overflow-hidden shadow-[0_0_45px_rgba(0,242,254,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>CONVERSATIONS HANDLED</span>
                  <span className="text-green-400 font-bold">+18% vs LAST WEEK</span>
                </div>
                <div className="font-['Syne'] text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  1.28M
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-2 uppercase tracking-widest">
                  Daily Autonomous Messages Processed
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10 font-sans leading-relaxed">
                Handled across WhatsApp Cloud API, Instagram DMs, SMS, and Webchat with zero queuing bottlenecks.
              </p>
            </div>

            {/* Bento Card 2: +34% Conversion Lift */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-blue-500/30 relative overflow-hidden shadow-[0_0_45px_rgba(59,130,246,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>SALES CONVERSION VELOCITY</span>
                  <span className="text-cyan-400 font-bold">VERIFIED ATTRIBUTION</span>
                </div>
                <div className="font-['Syne'] text-5xl sm:text-6xl font-extrabold text-cyan-300 tracking-tight">
                  +34%
                </div>
                <div className="text-xs font-mono text-blue-400 mt-2 uppercase tracking-widest">
                  Lift Across Omnichannel Funnels
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10 font-sans leading-relaxed">
                1-click interactive checkout links sent in under 20 seconds eliminate cart abandonment friction.
              </p>
            </div>

            {/* Bento Card 3: 68% Tickets Auto-Resolved */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-purple-500/30 relative overflow-hidden shadow-[0_0_45px_rgba(168,85,247,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>TIER-1 &amp; TIER-2 RESOLUTION</span>
                  <span className="text-purple-400 font-bold">&lt; 0.4S RESPONSE</span>
                </div>
                <div className="font-['Syne'] text-5xl sm:text-6xl font-extrabold text-purple-300 tracking-tight">
                  68%
                </div>
                <div className="text-xs font-mono text-purple-400 mt-2 uppercase tracking-widest">
                  Resolved Without Human Reps
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10 font-sans leading-relaxed">
                Instant order status, address adjustments, and refund policy guidance with human handoff fallback.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SPRINT DEPLOYMENT PACKAGES & PRICING */}
      {/* ========================================================================= */}
      <section id="pricing" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              DEPLOYMENT SPRINTS
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Clear, transparent{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                sprint plans.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
              No endless retainers. We architect, integrate, and stress-test your autonomous conversation engine with a dedicated engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Plan 1: Launchpad */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-gray-400 mb-2">TIER 01 // FOUNDATION</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">Starter Funnel Launchpad</h3>
                <div className="font-['Syne'] text-4xl font-extrabold text-white mt-4">$3,800</div>
                <div className="text-xs text-gray-400 mt-1 font-mono">One-time sprint delivery (10 business days)</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>WhatsApp Business Cloud API setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>HubSpot or Klaviyo lifecycle synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>3 core conversion flows (Lead, Cart, Support)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>14-day post-launch telemetry monitoring</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?service=crm-sales-funnel&plan=starter"
                className="mt-8 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-xs text-center transition-all"
              >
                Select Starter ➔
              </Link>
            </div>

            {/* Plan 2: Omnichannel Growth (Featured) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0e172a] to-[#090e1a] border-2 border-cyan-400 relative flex flex-col justify-between shadow-[0_0_55px_rgba(0,242,254,0.35)]">
              <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-cyan-400 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.8)]">
                MOST POPULAR
              </div>

              <div>
                <div className="text-xs font-mono text-cyan-400 mb-2">TIER 02 // SCALE ENGINE</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">Omnichannel Growth Engine</h3>
                <div className="font-['Syne'] text-4xl font-extrabold text-cyan-300 mt-4">$6,500 <span className="text-base text-gray-400 font-sans font-normal">/ mo</span></div>
                <div className="text-xs text-gray-400 mt-1 font-mono">Full engineering team + continuous optimization</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-200 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>WhatsApp, Instagram DMs, SMS &amp; Webchat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Astra Conversational Voice AI Telephony</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Bi-directional Salesforce / HubSpot / Shopify</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Dynamic 1-click cart recovery &amp; checkout links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Dedicated Slack channel with founding team</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?service=crm-sales-funnel&plan=growth"
                className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-black font-mono font-bold text-xs text-center shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all hover:scale-105"
              >
                Launch Growth Engine ➔
              </Link>
            </div>

            {/* Plan 3: Enterprise */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-400 mb-2">TIER 03 // ENTERPRISE</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">Enterprise Architecture</h3>
                <div className="font-['Syne'] text-4xl font-extrabold text-purple-300 mt-4">$12,500</div>
                <div className="text-xs text-gray-400 mt-1 font-mono">Custom VPC / On-Prem / Unlimited Threads</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Private isolated vector memory &amp; fine-tuned LLMs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>SOC2 Type II &amp; HIPAA compliance architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>99.99% uptime guarantee with 15-min SLA response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Custom legacy ERP / database integrations</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?service=crm-sales-funnel&plan=enterprise"
                className="mt-8 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-xs text-center transition-all"
              >
                Inquire Enterprise ➔
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Everything you need to know.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0a101f] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-bold text-white font-['Syne']">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 font-sans"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. 24/7 SUPPORT & FAST BOOKING CTA */}
      {/* ========================================================================= */}
      <section className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-gradient-to-b from-[#060a12] to-[#04060a]">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-cyan-900/30 via-blue-900/20 to-purple-900/30 border border-cyan-500/40 p-8 md:p-14 text-center relative overflow-hidden shadow-[0_0_80px_rgba(0,242,254,0.15)]">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>24/7 SUPPORT FROM REAL SYSTEM ARCHITECTS — 97% SATISFACTION</span>
          </div>

          <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Ready to turn every conversation into{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
              revenue?
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto font-sans">
            Book a 20-minute technical architecture call with our lead engineering team. We’ll map your CRM topology and show you live ROI projections.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=crm-sales-funnel"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#38bdf8] text-black font-bold text-sm shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:shadow-[0_0_50px_rgba(0,242,254,0.8)] transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All 11 Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. VARTALAAP FOOTER & TELEMETRY */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#04060a] border-t border-white/10 px-4 py-12 md:px-8 z-10 text-xs font-mono text-gray-400 overflow-hidden">
        
        {/* Luminous Footer Glow Image Asset */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[300px] pointer-events-none opacity-50 mix-blend-screen">
          <Image
            src="/vartalaap/footer-glow.webp"
            alt="Footer Glow"
            width={1920}
            height={1210}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-bold">NEXUS GROWTH // VARTALAAP CRM LABS</span>
            <span className="text-gray-500 hidden md:inline">| Service 11 Platform Suite</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Agency Home
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services Directory
            </Link>
            <Link href="/services/video-production-editing" className="hover:text-white transition-colors">
              Video Production
            </Link>
            <Link href="/services/ai-automation" className="hover:text-white transition-colors">
              AI Automation
            </Link>
            <Link href="/contact" className="text-cyan-400 hover:underline font-bold">
              Book Project ➔
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
