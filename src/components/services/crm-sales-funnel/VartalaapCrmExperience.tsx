'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Send, 
  Phone, 
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
  ExternalLink
} from 'lucide-react';

interface ChannelTab {
  id: string;
  name: string;
  iconName: string;
  badge: string;
  color: string;
  description: string;
  stats: string;
  sampleMessage: {
    sender: string;
    text: string;
    time: string;
    aiReply: string;
    outcome: string;
  };
}

const CHANNELS: ChannelTab[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business API',
    iconName: 'Smartphone',
    badge: '98% OPEN RATE',
    color: '#25D366',
    description: 'Official Meta WhatsApp Business Cloud API with interactive buttons, product catalogs, and automated 1-click cart checkout.',
    stats: '2.4M Messages / Mo',
    sampleMessage: {
      sender: 'Marcus Chen (+1 415-***-9021)',
      text: 'Hey! Is the Horizon Pro watch still in stock in Obsidian Black? Need it before Friday.',
      time: '10:42 AM',
      aiReply: 'Yes Marcus! We have 4 units left at our San Francisco hub. I can hold one for you with complimentary 2-day express shipping.',
      outcome: '✓ 1-Click Stripe Link Dispatched ($289.00 Closed in 34s)',
    },
  },
  {
    id: 'instagram',
    name: 'Instagram DMs & Stories',
    iconName: 'Instagram',
    badge: 'VIRAL RETENTION',
    color: '#E1306C',
    description: 'Direct Story reply triggers, keyword comment auto-DM replies, and influencer funnel lead routing synchronized with CRM tags.',
    stats: '1.1M DMs Automated',
    sampleMessage: {
      sender: '@sophia_lifestyle (42k followers)',
      text: 'Dropped a comment "LINK" on your latest reel about the collagen peptide batch! Can I get the discount?',
      time: '11:15 AM',
      aiReply: 'Hey Sophia! Here is your exclusive 20% creator link + our clinical lab test PDF: nexusgrowth.co/vip-sophia',
      outcome: '✓ VIP Tag Added to Klaviyo + Attribution Logged to Campaign #REEL-09',
    },
  },
  {
    id: 'sms',
    name: 'RCS & Priority SMS',
    iconName: 'Radio',
    badge: '< 90S RESPONSE',
    color: '#38bdf8',
    description: 'Branded rich communication service (RCS) with verified business badges, carousels, and tier-1 SMS delivery routes.',
    stats: '99.4% Delivery SLA',
    sampleMessage: {
      sender: 'Elena Rostova (+44 7911-***82)',
      text: 'Can we reschedule our technical architecture session to Thursday 3 PM GMT?',
      time: '02:08 PM',
      aiReply: 'Thursday 3 PM GMT is open on Yusuf’s calendar! Updated your Google Calendar invite and notified the engineering team.',
      outcome: '✓ Calendar Synced + HubSpot Deal Stage Updated to "Discovery Confirmed"',
    },
  },
  {
    id: 'webchat',
    name: 'High-Intent Webchat',
    iconName: 'MessageSquare',
    badge: '0-LATENCY STREAM',
    color: '#6366f1',
    description: 'Lightweight WebGL/DOM chat widget that reads user browsing context, cart value, and cursor intent before initiating conversation.',
    stats: '4.2x Higher CRO',
    sampleMessage: {
      sender: 'Visitor on /services/ai-automation (Cart: $4,500)',
      text: 'Does the enterprise package include custom on-premise LLM vector weights?',
      time: '04:30 PM',
      aiReply: 'Yes. Our Enterprise tier includes private VPC deployment, isolated Qdrant vector memory, and custom LoRA fine-tuning.',
      outcome: '✓ Lead Scored 94/100 -> Instant Slack Alert Sent to Founder',
    },
  },
  {
    id: 'voice',
    name: 'Conversational Voice AI',
    iconName: 'Phone',
    badge: '400MS SPEECH LATENCY',
    color: '#00f2fe',
    description: 'Ultra-low latency telephony voice agents with natural human breath pauses, multilingual switching, and instant live agent transfer.',
    stats: '15,000 Call Hours / Mo',
    sampleMessage: {
      sender: 'Inbound Telephony Call (+1 212-***-4481)',
      text: '[Audio Input]: "I need to confirm whether my order #84920 has cleared customs in Zurich."',
      time: '05:12 PM',
      aiReply: '[Synthesized Voice]: "Order 84920 cleared Swiss customs 2 hours ago. Expected delivery is tomorrow before 1:00 PM CET."',
      outcome: '✓ Tracking SMS Dispatched + Ticket Resolved Automatically',
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
    title: 'NEXUS Astra // Autonomous Conversational Core',
    subtitle: 'Neural classification & instant intent resolution across 100k+ concurrent threads',
    category: '3D KINETIC AI DEMO',
    src: '/videos/vartalaap/ai-core-motion.mp4',
    duration: '00:45',
    metrics: [
      { stat: '0.4s', label: 'Inference Latency' },
      { stat: '94.8%', label: 'Intent Accuracy' },
      { stat: '100%', label: 'CRM Vector Sync' },
    ],
    description: 'Watch how NEXUS Astra processes unstructured customer dialogue in real time — extracting buyer sentiment, matching product SKUs, and triggering automated database events.',
  },
  {
    id: 'customer-journey',
    title: 'Omnichannel Velocity // From First DM to Closed Revenue',
    subtitle: 'High-conversion commercial reel showcasing live multi-platform customer acquisition',
    category: 'COMMERCIAL SHOWCASE',
    src: '/videos/vartalaap/customer-journey-reel.mp4',
    duration: '01:12',
    metrics: [
      { stat: '+34%', label: 'Conversion Lift' },
      { stat: '4.2X', label: 'Verified ROAS' },
      { stat: '12s', label: 'Avg Checkout Time' },
    ],
    description: 'High-energy demonstration of frictionless customer journeys. See how users transition from Instagram Story ad taps directly into WhatsApp checkout flows without leaving the chat.',
  },
  {
    id: 'voice-agent',
    title: 'Voice Telephony AI // Human-Grade Dialogue Pacing',
    subtitle: 'Studio audio fidelity and conversational phone workflows engineered for 24/7 operations',
    category: 'VOICE AGENT DEMO',
    src: '/videos/vartalaap/conversational-voice-demo.mp4',
    duration: '01:30',
    metrics: [
      { stat: '<450ms', label: 'Voice Response' },
      { stat: '97.2%', label: 'Caller Satisfaction' },
      { stat: '-62%', label: 'Support Overhead' },
    ],
    description: 'Listen to natural, human-grade conversational cadence. Our voice infrastructure handles interrupts, complex multi-part questions, and database lookups in under half a second.',
  },
  {
    id: 'enterprise-suite',
    title: 'Enterprise Architecture // Global Scale Operations',
    subtitle: 'Flagship brand film demonstrating multi-brand customer engagement and CRM governance',
    category: 'ENTERPRISE SUITE',
    src: '/videos/vartalaap/enterprise-omnichannel.mp4',
    duration: '01:45',
    metrics: [
      { stat: '1.28M', label: 'Daily Threads' },
      { stat: 'SOC2', label: 'Type II Compliant' },
      { stat: '99.99%', label: 'Uptime SLA' },
    ],
    description: 'Architected for global organizations managing millions of high-stakes interactions across disparate international markets, languages, and compliance jurisdictions.',
  },
];

interface UseCaseItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
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
    title: 'Scale Orders, Eradicate Returns',
    subtitle: 'Automate post-purchase tracking, size recommendations, and abandoned cart recovery directly on WhatsApp and SMS.',
    bullet1: '1-Click WhatsApp payment link generation with automated discount rules',
    bullet2: 'Proactive shipping tracking updates that reduce "Where Is My Order" tickets by 72%',
    bullet3: 'Conversational size & fit assistance that cuts return rates in half',
    metric: '+38% AOV',
    metricLabel: 'Average Cart Lift via Conversational Upsells',
    badge: 'TOP CONVERTER',
  },
  {
    id: 'creators',
    tag: 'CREATOR ECONOMY & EDU',
    title: 'Monetize Audiences Without Losing Your Authentic Voice',
    subtitle: 'Turn Instagram comments, YouTube clicks, and Twitter DMs into course enrollments and cohort memberships with zero manual DM fatigue.',
    bullet1: 'Automated comment-to-DM triggers that deliver free resources within 3 seconds',
    bullet2: 'Conversational qualification that separates high-ticket coaching buyers from freebie seekers',
    bullet3: 'Personalized voice memo follow-ups that feel bespoke and human',
    metric: '4.8X',
    metricLabel: 'DM-to-Checkout Funnel Velocity',
    badge: 'CREATOR FAVORITE',
  },
  {
    id: 'real-estate',
    tag: 'REAL ESTATE & HIGH-TICKET',
    title: 'Book Private Site Visits While You Sleep',
    subtitle: 'Prequalify high-net-worth buyers, verify financing criteria, and instantly book VIP property tours directly into sales team calendars.',
    bullet1: 'Automated mortgage budget & timeline questionnaire in WhatsApp',
    bullet2: 'Dynamic property brochure dispatch with trackable PDF engagement',
    bullet3: 'Calendar scheduling synced with broker availability and gate access codes',
    metric: '82%',
    metricLabel: 'Show-Up Rate on Verified Tours',
    badge: 'HIGH-TICKET PROOF',
  },
  {
    id: 'enterprise',
    tag: 'ENTERPRISE & HEALTHCARE',
    title: 'Enterprise AI Operations at Unlimited Scale',
    subtitle: 'Deploy multi-agent customer operations with strict role-based access control, HIPAA/SOC2 compliance, and dedicated bi-directional CRM pipelines.',
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
    q: 'What makes NEXUS Vartalaap different from basic chatbots?',
    a: 'Traditional chatbots rely on rigid decision trees and brittle if/then keywords that frustrate users. NEXUS Vartalaap is an autonomous conversational operating system powered by deep multi-agent LLM reasoning, sub-second vector memory, and bi-directional CRM synchronizations. It doesn’t just output canned text — it checks real-time inventory, calculates shipping, schedules calendar slots, and executes payment checkouts directly inside the messaging interface.',
  },
  {
    q: 'Which messaging channels are supported?',
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
  const [orbState, setOrbState] = useState<'idle' | 'listening' | 'speaking'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isNavServicesOpen, setIsNavServicesOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play active video when changed
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
    else if (orbState === 'listening') setOrbState('speaking');
    else setOrbState('idle');
  };

  const currentChannel = CHANNELS.find(c => c.id === activeChannel) || CHANNELS[0];
  const currentVideo = VIDEO_SHOWCASES.find(v => v.id === activeVideo) || VIDEO_SHOWCASES[0];
  const currentUseCase = USE_CASES.find(u => u.id === activeUseCase) || USE_CASES[0];

  return (
    <div className="relative min-h-screen bg-[#080c14] text-[#f8fafc] selection:bg-[#00f2fe] selection:text-black overflow-x-hidden font-sans">
      
      {/* ========================================================================= */}
      {/* 1. ATMOSPHERIC NEON EDGE GLOW & AMBIENT RADIAL LIGHTING */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#00c6ff]/15 via-[#0072ff]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[25%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-[#3b82f6]/15 via-[#6366f1]/10 to-transparent blur-[160px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#00f2fe]/10 via-[#3b82f6]/10 to-transparent blur-[180px]" />
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. SLEEK FROSTED PILL NAVBAR */}
      {/* ========================================================================= */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full bg-[#080c14]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,242,254,0.15)]">
          
          {/* Logo & Platform Tag */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                <div className="w-full h-full bg-[#080c14] rounded-[6px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00f2fe] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="font-mono font-bold tracking-wider text-sm text-white flex items-center gap-1.5">
                NEXUS <span className="text-[#00f2fe]">VARTALAAP</span>
              </span>
            </Link>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              SERVICE 11 // CRM &amp; FUNNELS
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-gray-300">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Astra AI</a>
            <a href="#conversions" className="hover:text-cyan-400 transition-colors">Conversions</a>
            <a href="#omnichannel" className="hover:text-cyan-400 transition-colors">Omnichannel</a>
            <a href="#video-showcase" className="hover:text-cyan-400 transition-colors">Reels &amp; Video</a>
            <a href="#verticals" className="hover:text-cyan-400 transition-colors">Use Cases</a>
            <a href="#bento-metrics" className="hover:text-cyan-400 transition-colors">Outcomes</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Sprints</a>
          </nav>

          {/* Right Action & All 11 Services Flyout */}
          <div className="flex items-center gap-3 relative">
            <div className="relative">
              <button
                onClick={() => setIsNavServicesOpen(!isNavServicesOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-200 transition-all"
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
                    className="absolute right-0 top-full mt-3 w-80 md:w-96 rounded-2xl bg-[#090e1a]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.2)] p-4 z-50"
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
                        className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium"
                      >
                        <span className="flex items-center gap-2">
                          <Bot className="w-3.5 h-3.5 text-cyan-400" />
                          11 CRM &amp; Sales Funnel
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
                      <span>Ready to deploy a custom pipeline?</span>
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
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-black font-bold text-xs shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.7)] transition-all hover:scale-105"
            >
              Deploy Funnel
            </Link>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION: MEET ASTRA // CONVERSATIONAL REVENUE OPERATING SYSTEM */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Pill Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-cyan-300 text-xs font-mono mb-8 shadow-[0_0_25px_rgba(0,242,254,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>NEXUS VARTALAAP // AUTONOMOUS CONVERSATIONAL ENGINE</span>
          </motion.div>

          {/* Interactive Holographic 3D Orb & Voice Assistant Trigger */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onClick={cycleOrbState}
            className="relative cursor-pointer group mb-10"
            title="Click to interact with Astra AI"
          >
            {/* Outer Glow Halo */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-600/30 to-purple-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
            
            {/* Rotating Orbital Rings */}
            <div className="absolute -inset-4 rounded-full border border-cyan-500/20 border-dashed animate-spin [animation-duration:35s]" />
            <div className="absolute -inset-2 rounded-full border border-blue-400/25 border-dotted animate-spin [animation-duration:20s] [animation-direction:reverse]" />

            {/* Central Holographic Orb Box */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-[#003b73] via-[#0072ff] to-[#00f2fe] p-1 shadow-[0_0_50px_rgba(0,242,254,0.5),inset_0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#080c14] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                
                {/* Internal dynamic wave graphic */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-blue-900/40" />
                
                <Bot className="w-12 h-12 text-[#00f2fe] mb-2 drop-shadow-[0_0_12px_rgba(0,242,254,0.8)] group-hover:scale-110 transition-transform" />
                
                {/* Voice Status Pill */}
                <span className="font-mono text-[11px] font-bold tracking-widest text-cyan-300 uppercase">
                  {orbState === 'idle' && 'Meet Astra Core'}
                  {orbState === 'listening' && 'Listening...'}
                  {orbState === 'speaking' && 'Synthesizing...'}
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

            {/* Orbiting Telemetry Badges */}
            <div className="absolute -left-12 top-8 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0d1526]/90 border border-cyan-500/30 text-[11px] font-mono text-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>0.4s AI Latency</span>
            </div>

            <div className="absolute -right-12 bottom-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0d1526]/90 border border-blue-500/30 text-[11px] font-mono text-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Bi-Directional CRM Sync</span>
            </div>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl text-white leading-[1.1]"
          >
            Your business operating system for{' '}
            <span className="bg-gradient-to-r from-[#00c6ff] via-[#38bdf8] to-[#0072ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
              revenue, support,
            </span>{' '}
            and conversations.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            NEXUS Vartalaap’s autonomous conversational AI turns every incoming message into a high-ticket sale, resolved ticket, or qualified sales pipeline deal in under 400 milliseconds.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact?service=crm-sales-funnel"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#3b82f6] text-black font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:shadow-[0_0_50px_rgba(0,242,254,0.7)] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Deploy Autonomous Pipeline</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#video-showcase"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span>Watch Live Architecture Reel</span>
            </a>
          </motion.div>

          {/* Trust Telemetry Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl w-full"
          >
            <div>
              <div className="text-2xl font-bold text-white font-mono">1.28M+</div>
              <div className="text-xs text-gray-400 mt-0.5">Conversations / Day</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 font-mono">+34%</div>
              <div className="text-xs text-gray-400 mt-0.5">Checkout Conversion Lift</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 font-mono">68%</div>
              <div className="text-xs text-gray-400 mt-0.5">Zero-Human Auto-Resolution</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 font-mono">&lt; 400ms</div>
              <div className="text-xs text-gray-400 mt-0.5">Omnichannel Speech Latency</div>
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
              Every conversation,{' '}
              <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                a conversion.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              NEXUS Vartalaap turns every incoming WhatsApp message, Instagram DM, and website session into an instant checkout, qualified CRM pipeline deal, or resolved support ticket.
            </p>
          </div>

          {/* Interactive 3-Track Live Conversion Funnel Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Track 1: D2C E-Commerce 1-Click Purchase */}
            <div className="rounded-2xl bg-[#0a101f] border border-cyan-500/20 p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.1)] hover:border-cyan-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    TRACK 01 // E-COMMERCE
                  </span>
                  <span>WhatsApp Business</span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">CUSTOMER INQUIRY</div>
                    &quot;Is the Cold Brew Nitro 12-pack in stock? Can I order with the weekend discount?&quot;
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-100">
                    <div className="text-[10px] font-mono text-cyan-400 mb-1 flex items-center gap-1">
                      <Bot className="w-3 h-3" /> ASTRA REVENUE BOT
                    </div>
                    &quot;Yes! 6 boxes reserved at our local warehouse. Applied 15% VIP discount code NITRO15. Tap below to checkout via Apple Pay.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-lg font-mono font-bold text-green-400">$43,817.16</div>
                  <div className="text-[10px] text-gray-400">Attributed Monthly Revenue</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-bold">
                  ✓ PAID IN 14s
                </div>
              </div>
            </div>

            {/* Track 2: B2B High-Ticket Qualification */}
            <div className="rounded-2xl bg-[#0a101f] border border-blue-500/20 p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    TRACK 02 // B2B PIPELINE
                  </span>
                  <span>HubSpot / Close Sync</span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">FOUNDER / VP LEAD</div>
                    &quot;We have 65 sales reps and need automated WhatsApp deal routing into Salesforce.&quot;
                  </div>

                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-100">
                    <div className="text-[10px] font-mono text-blue-400 mb-1 flex items-center gap-1">
                      <Bot className="w-3 h-3" /> ASTRA QUALIFIER
                    </div>
                    &quot;Qualified Enterprise Tier. Synced team size, verified domain, and reserved an architecture slot on Yusuf’s executive calendar for Tuesday.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-lg font-mono font-bold text-blue-400">$18,500 MRR</div>
                  <div className="text-[10px] text-gray-400">Pipeline Deal Value</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                  ✓ DEMO BOOKED
                </div>
              </div>
            </div>

            {/* Track 3: High-Touch Support Ticket Resolution */}
            <div className="rounded-2xl bg-[#0a101f] border border-purple-500/20 p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-purple-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-purple-400">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    TRACK 03 // 24/7 SUPPORT
                  </span>
                  <span>Omnichannel Resolver</span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">ENTERPRISE CLIENT</div>
                    &quot;Our webhook endpoint received a 504 error during peak flash sale traffic.&quot;
                  </div>

                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-100">
                    <div className="text-[10px] font-mono text-purple-400 mb-1 flex items-center gap-1">
                      <Bot className="w-3 h-3" /> ASTRA TRIAGE
                    </div>
                    &quot;Isolated rate limit spike on legacy server. Automatically spun up redundant Redis queue worker and rerouted traffic. All 1,420 queued events delivered.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-lg font-mono font-bold text-purple-400">0.4s Latency</div>
                  <div className="text-[10px] text-gray-400">Average Resolution Time</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold">
                  ✓ 100% RESOLVED
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OMNICHANNEL WORKFLOW TABS: "FROM MESSAGE TO OUTCOME IN SECONDS" */}
      {/* ========================================================================= */}
      <section id="omnichannel" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                UNIFIED MESSAGING LAYER
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
                From message to outcome{' '}
                <span className="text-[#00f2fe]">in seconds.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400">
              One unified intelligence brain connected to your customers’ favorite communication endpoints. No disparate inboxes. No dropped leads.
            </p>
          </div>

          {/* Interactive Channel Selector Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {CHANNELS.map(ch => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                  activeChannel === ch.id
                    ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-black font-bold shadow-[0_0_25px_rgba(0,242,254,0.4)] scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                }`}
              >
                <span>{ch.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeChannel === ch.id ? 'bg-black text-cyan-300 font-bold' : 'bg-white/10 text-gray-400'}`}>
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {currentChannel.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      {currentChannel.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-bold transition-all"
                    >
                      <span>Integrate {currentChannel.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Live Conversation Simulation Card */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl bg-[#060a12] border border-white/10 p-5 md:p-6 shadow-2xl relative">
                    
                    {/* Fake App Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="text-gray-400 ml-2">LIVE THREAD SIMULATION</span>
                      </div>
                      <span className="text-green-400 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    {/* Chat Stream */}
                    <div className="space-y-4">
                      {/* Incoming Customer Message */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white shrink-0">
                          MC
                        </div>
                        <div className="max-w-md rounded-2xl rounded-tl-none bg-white/10 border border-white/10 p-3.5 text-xs text-white">
                          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                            <span>{currentChannel.sampleMessage.sender}</span>
                            <span>{currentChannel.sampleMessage.time}</span>
                          </div>
                          <p>{currentChannel.sampleMessage.text}</p>
                        </div>
                      </div>

                      {/* AI Response Message */}
                      <div className="flex items-start gap-3 justify-end">
                        <div className="max-w-md rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-cyan-500/40 p-3.5 text-xs text-cyan-100 shadow-[0_0_20px_rgba(0,242,254,0.15)]">
                          <div className="flex items-center justify-between text-[10px] text-cyan-400 mb-1">
                            <span className="flex items-center gap-1 font-mono font-bold">
                              <Sparkles className="w-3 h-3" /> ASTRA AI WORKFORCE
                            </span>
                            <span>Just now (0.32s)</span>
                          </div>
                          <p>{currentChannel.sampleMessage.aiReply}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-black shrink-0">
                          <Bot className="w-4 h-4 text-black" />
                        </div>
                      </div>

                      {/* Automated CRM Outcome Banner */}
                      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-xs font-mono flex items-center justify-between">
                        <span className="flex items-center gap-2 font-bold">
                          <Zap className="w-4 h-4 text-green-400 shrink-0" />
                          {currentChannel.sampleMessage.outcome}
                        </span>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
                See the platform{' '}
                <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                  in action.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400">
              Interactive high-definition video reels showcasing autonomous intent resolution, telephony voice response, and enterprise omnichannel routing.
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {VIDEO_SHOWCASES.map(v => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(v.id)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  activeVideo === v.id
                    ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-[0_0_30px_rgba(0,242,254,0.2)]'
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
          <div className="rounded-3xl bg-[#090e1a] border border-cyan-500/30 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(0,242,254,0.2)]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

              {/* Top Header Information */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white pointer-events-auto">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{currentVideo.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-gray-300" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                </div>
              </div>

              {/* Center Large Play/Pause overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,242,254,0.8)] transition-all hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>
              </div>

              {/* Bottom Video Metadata Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto text-xs font-mono">
                <div>
                  <h4 className="text-base font-bold text-white font-sans">{currentVideo.title}</h4>
                  <p className="text-gray-300 text-xs mt-0.5 font-sans hidden sm:block">{currentVideo.subtitle}</p>
                </div>

                <div className="flex items-center gap-4">
                  {currentVideo.metrics.map((m, idx) => (
                    <div key={idx} className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-cyan-400 font-bold text-sm">{m.stat}</div>
                      <div className="text-[9px] text-gray-400 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Description Footnote */}
            <div className="p-6 bg-[#060a12] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-gray-300">
              <p className="max-w-3xl leading-relaxed">
                {currentVideo.description}
              </p>
              <Link
                href="/contact?service=crm-sales-funnel"
                className="shrink-0 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono font-bold transition-all flex items-center gap-2"
              >
                <span>Request Custom Pipeline Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. IMPACT VERTICALS / USE CASES (D2C, CREATORS, REAL ESTATE, ENTERPRISE) */}
      {/* ========================================================================= */}
      <section id="verticals" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              INDUSTRY ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
              Where Vartalaap creates{' '}
              <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                tangible impact.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Tailored autonomous workflows engineered for high-volume conversion ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveUseCase(item.id)}
                className={`p-6 rounded-2xl bg-[#0a101f] border transition-all cursor-pointer flex flex-col justify-between ${
                  activeUseCase === item.id
                    ? 'border-cyan-500 shadow-[0_0_35px_rgba(0,242,254,0.25)] scale-[1.02]'
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

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-300">
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

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-xl font-mono font-bold text-cyan-300">{item.metric}</div>
                  <div className="text-[10px] text-gray-400">{item.metricLabel}</div>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
                Real outcomes from teams{' '}
                <span className="text-[#00f2fe]">using Vartalaap.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400">
              Battle-tested at high concurrency across hundreds of thousands of daily consumer transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: 1.28M Daily Conversations */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-cyan-500/20 relative overflow-hidden shadow-[0_0_40px_rgba(0,242,254,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>CONVERSATIONS HANDLED</span>
                  <span className="text-green-400 font-bold">+18% vs LAST WEEK</span>
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-tight">
                  1.28M
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-2 uppercase tracking-widest">
                  Daily Autonomous Messages Processed
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10">
                Handled across WhatsApp Cloud API, Instagram DMs, SMS, and Webchat with zero queuing bottlenecks.
              </p>
            </div>

            {/* Bento Card 2: +34% Conversion Lift */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-blue-500/20 relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>SALES CONVERSION VELOCITY</span>
                  <span className="text-cyan-400 font-bold">VERIFIED ATTRIBUTION</span>
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-cyan-300 tracking-tight">
                  +34%
                </div>
                <div className="text-xs font-mono text-blue-400 mt-2 uppercase tracking-widest">
                  Lift Across Omnichannel Funnels
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10">
                1-click interactive checkout links sent in under 20 seconds eliminate cart abandonment friction.
              </p>
            </div>

            {/* Bento Card 3: 68% Tickets Auto-Resolved */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-purple-500/20 relative overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>TIER-1 &amp; TIER-2 RESOLUTION</span>
                  <span className="text-purple-400 font-bold">&lt; 0.4S RESPONSE</span>
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-purple-300 tracking-tight">
                  68%
                </div>
                <div className="text-xs font-mono text-purple-400 mt-2 uppercase tracking-widest">
                  Resolved Without Human Reps
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10">
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
              Clear, transparent{' '}
              <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                sprint plans.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              No endless retainers. We architect, integrate, and stress-test your autonomous conversation engine with a dedicated engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Plan 1: Launchpad */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-gray-400 mb-2">TIER 01 // FOUNDATION</div>
                <h3 className="text-2xl font-bold text-white">Starter Funnel Launchpad</h3>
                <div className="text-4xl font-extrabold font-mono text-white mt-4">$3,800</div>
                <div className="text-xs text-gray-400 mt-1">One-time sprint delivery (10 business days)</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-300">
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
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0e172a] to-[#090e1a] border-2 border-cyan-500 relative flex flex-col justify-between shadow-[0_0_50px_rgba(0,242,254,0.3)]">
              <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-cyan-400 text-black font-mono font-bold text-[10px] tracking-wider uppercase">
                MOST POPULAR
              </div>

              <div>
                <div className="text-xs font-mono text-cyan-400 mb-2">TIER 02 // SCALE ENGINE</div>
                <h3 className="text-2xl font-bold text-white">Omnichannel Growth Engine</h3>
                <div className="text-4xl font-extrabold font-mono text-cyan-300 mt-4">$6,500 <span className="text-base text-gray-400">/ mo</span></div>
                <div className="text-xs text-gray-400 mt-1">Full engineering team + continuous optimization</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-200">
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
                <h3 className="text-2xl font-bold text-white">Enterprise Architecture</h3>
                <div className="text-4xl font-extrabold font-mono text-purple-300 mt-4">$12,500</div>
                <div className="text-xs text-gray-400 mt-1">Custom VPC / On-Prem / Unlimited Threads</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-300">
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
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
                  <span className="text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4"
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

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl mx-auto">
            Ready to turn every conversation into revenue?
          </h2>

          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto">
            Book a 20-minute technical architecture call with our lead engineering team. We’ll map your CRM topology and show you live ROI projections.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=crm-sales-funnel"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#3b82f6] text-black font-bold text-sm shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:shadow-[0_0_50px_rgba(0,242,254,0.8)] transition-all flex items-center justify-center gap-2"
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
      <footer className="relative bg-[#04060a] border-t border-white/10 px-4 py-12 md:px-8 z-10 text-xs font-mono text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
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
