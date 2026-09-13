import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Filter, 
  GitBranch, 
  Sparkles, 
  Database, 
  CreditCard, 
  CheckCircle2, 
  AlertTriangle, 
  Layers 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '📈 CRM & Sales Funnel Setup // NEXUS Growth',
  description: 'Automated conversion architecture, multi-step sales funnels, HubSpot & Klaviyo lifecycle ops, and pipeline tracking that prints cash 24/7.',
  keywords: ['sales funnel agency', 'CRM automation agency', 'HubSpot setup', 'Klaviyo lifecycle marketing', 'conversion rate optimization funnel'],
};

const DELIVERABLES = [
  {
    icon: Filter,
    tag: 'FUNNEL ARCHITECTURE',
    title: 'Multi-Step High-Conversion Funnel UI',
    desc: 'Custom Next.js interactive quiz and assessment funnels that pre-qualify buyer intent, collect valuable zero-party data, and lift checkout conversion by 3x.',
    specs: ['Interactive Quiz Funnel UI', 'Zero-Party Data Collection', 'Dynamic Conditional Branches', 'Instant Stripe/Shopify Checkout'],
    color: '#d7dd44',
  },
  {
    icon: Database,
    tag: 'CRM OPERATIONS',
    title: 'HubSpot & Salesforce Lifecycle Systems',
    desc: 'Complete architecture of pipeline deal stages, automated lead scoring, rep assignment rules, and automated calendar follow-ups.',
    specs: ['HubSpot & Salesforce Setup', 'Custom Lead Scoring Algorithms', 'Automated Deal Stage Routing', 'SLA Response Enforcers'],
    color: '#eaa0cd',
  },
  {
    icon: CreditCard,
    tag: 'CHECKOUT & UPSELL',
    title: '1-Click Post-Purchase Upsell Engines',
    desc: 'Maximizing Average Order Value (AOV) with frictionless 1-click upsells, order bumps, and subscription upgrade mechanics built right into checkout.',
    specs: ['1-Click Post-Purchase Bumps', 'Cart Drawer Upsell Modules', 'Dynamic Free Shipping Bars', 'AOV Expansion Framework'],
    color: '#7ca8d2',
  },
  {
    icon: GitBranch,
    tag: 'AUTOMATION',
    title: 'Abandoned Cart & Pipeline Recovery',
    desc: 'Multi-channel recovery sequences combining SMS, WhatsApp, and email to win back abandoned checkouts and lost high-value sales deals.',
    specs: ['Omnichannel SMS & Email Recovery', 'Dynamic Discount Triggers', 'Rep Automated Outreach Alerts', '34% Average Cart Recovery'],
    color: '#00966e',
  },
  {
    icon: Layers,
    tag: 'ATTRIBUTION',
    title: 'End-To-End Closed-Loop Tracking',
    desc: 'Tracking every marketing dollar from initial ad click through pipeline stages, contract signing, and lifetime subscription renewal.',
    specs: ['First-Touch & Last-Touch Models', 'Server-Side Event Telemetry', 'Cohort Retention Graphs', 'LTV:CAC Ratio Dashboards'],
    color: '#f09341',
  },
  {
    icon: Sparkles,
    tag: 'CHURN MITIGATION',
    title: 'Customer Onboarding & Retention Flows',
    desc: 'Systematic post-purchase onboarding sequences, product education triggers, and proactive churn intervention before renewal drop-off.',
    specs: ['Automated Onboarding Cadence', 'Product Usage Milestones', 'Proactive Cancellation Deflection', 'VIP Referral Rewards'],
    color: '#d7dd44',
  },
];

const FUNNEL_LEAK_STEPS = [
  { stage: 'TRAFFIC INGEST', normal: '100,000 Visitors', nexus: '100,000 Visitors', status: 'Optimal' },
  { stage: 'PRE-QUALIFY QUIZ', normal: '12% Completion (Old)', nexus: '42% Completion (NEXUS)', status: '+250% Lift' },
  { stage: 'CART INITIATION', normal: '4% Add-to-Cart (Old)', nexus: '11% Add-to-Cart (NEXUS)', status: '+175% Lift' },
  { stage: '1-CLICK UPSELL', normal: '0% (Non-Existent)', nexus: '28% Take Rate (NEXUS)', status: '+$34 AOV' },
];

export default function CRMSalesFunnelPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f0] text-[#141414] paper-canvas selection:bg-[#d7dd44] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#d7dd44] text-black rotate-[-2deg]">
              ✦ SERVICE 11 / 11
            </span>
            <span className="sticker-badge bg-white text-black rotate-[1.5deg]">
              CONVERSION ARCHITECTURE &amp; SALES FUNNELS
            </span>
            <span className="sticker-badge bg-[#00966e] text-white">
              HUBSPOT // STRIPE // KLAVIYO
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-black">
              FUNNELS THAT PRINT CASH 24/7.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-black leading-tight">
              Most businesses send expensive ad traffic straight to generic homepages where 97% of visitors leave forever. We architect automated multi-step quiz funnels, 1-click upsells, and CRM lifecycle sequences that maximize every lead.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=crm-sales-funnel"
                className="c-button text-sm py-3.5 px-7 shadow-[-4px_6px_0px_#000]"
              >
                Initiate Funnel Audit <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-black mt-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Checkout Conversion</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                3.2X LIFT
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#d7dd44] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Average Order Value</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                +$42 AOV
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#eaa0cd] p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-black font-bold block">Abandoned Cart Recovery</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-black block mt-1">
                34% WON BACK
              </span>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-4 text-center shadow-[-4px_5px_0px_#000]">
              <span className="font-mono text-xs text-[#5c5b5b] block">Pipeline Leakage</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#00966e] block mt-1">
                0% LEAK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — FUNNEL LEAK VISUALIZER */}
      <section className="relative px-4 py-16 md:px-8 bg-[#ecebe4] border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#d7dd44] text-black mb-2">FUNNEL DIAGNOSTIC MOTIF</span>
            <h2 className="u-title-200 tracking-tight text-black">
              Funnel Leak Audit &amp; Repair Architecture
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#5c5b5b]">
              See where traditional websites bleed visitors versus how NEXUS multi-step funnels retain and monetize them.
            </p>
          </div>

          <div className="tactile-card p-6 md:p-8 bg-white max-w-4xl mx-auto">
            <div className="space-y-4">
              {FUNNEL_LEAK_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border-2 border-black bg-[#f4f4f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[-2px_3px_0px_#000]"
                >
                  <div>
                    <span className="font-mono text-xs text-[#5c5b5b] uppercase block">STAGE 0{i + 1}</span>
                    <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl font-black uppercase text-black">
                      {step.stage}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-xs">
                    <span className="text-[#8a8a90] line-through">{step.normal}</span>
                    <span className="text-black font-bold bg-[#d7dd44] px-2 py-0.5 rounded border border-black">{step.nexus}</span>
                    <span className="sticker-badge text-[9px] bg-[#00966e] text-white shadow-none">{step.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#d7dd44] text-black mb-3">
              FUNNEL SCOPE SPECIFICATION
            </span>
            <h2 className="u-title-200 tracking-tight text-black">
              Complete Funnel Deliverables
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5c5b5b] max-w-md">
            Full-funnel design, technical webhook integration, CRM lifecycle setup, and continuous checkout optimization.
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
        <div className="rounded-3xl border-4 border-black bg-[#d7dd44] p-8 md:p-16 shadow-[-10px_14px_0px_#000] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase shadow-[-2px_2px_0px_#000] mb-6">
            <Sparkles className="h-4 w-4 text-[#00966e]" /> FUNNEL AUDIT CALENDAR OPEN
          </div>

          <h2 className="u-title-100 text-black leading-none mb-6">
            READY TO PLUG YOUR FUNNEL LEAKS?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-black font-medium mb-8">
            Send us your current customer journey. We'll map every drop-off bottleneck and deliver a high-converting multi-step funnel architecture within 24 hours.
          </p>

          <Link
            href="/contact?service=crm-sales-funnel"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[-4px_6px_0px_#fff]"
          >
            Claim Funnel Teardown <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
