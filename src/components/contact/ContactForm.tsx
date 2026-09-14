'use client';

import React, { useState } from 'react';
import { 
  Check, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Terminal, 
  AlertCircle,
  Copy,
  RefreshCw
} from 'lucide-react';

const DISCIPLINES = [
  { id: 'web-dev', label: 'Web Development (Next.js / Headless)', color: '#d7dd44' },
  { id: 'app-dev', label: 'Mobile App Development (React Native / iOS)', color: '#7ca8d2' },
  { id: 'ai-automation', label: 'AI Automation & Custom Agents', color: '#00966e' },
  { id: 'branding', label: 'Branding & Visual Identity System', color: '#eaa0cd' },
  { id: 'paid-ads', label: 'Paid Acquisition (Google & Meta Ads)', color: '#f09341' },
  { id: 'video-prod', label: 'High-Impact Video & Motion Design', color: '#d7dd44' },
  { id: 'social-growth', label: 'Social Media Management & Virality', color: '#eaa0cd' },
  { id: 'graphic-design', label: 'Graphic Design & Packaging', color: '#7ca8d2' },
  { id: 'seo-dominance', label: 'Technical SEO & Search Dominance', color: '#00966e' },
  { id: 'crm-funnels', label: 'CRM & High-Conversion Sales Funnels', color: '#f09341' },
  { id: 'full-growth', label: 'Full-Service Growth Partner (All-in-One)', color: '#d7dd44' },
];

const BUDGET_TIERS = [
  { id: 'under-10k', label: '< $10,000', sub: 'Targeted Fast Sprint' },
  { id: '10k-25k', label: '$10K – $25K', sub: 'Growth Acceleration' },
  { id: '25k-60k', label: '$25K – $60K', sub: 'Flagship Transformation' },
  { id: '60k-plus', label: '$60,000+', sub: 'Full Ecosystem Overhaul' },
];

const TIMELINE_OPTIONS = [
  { id: 'immediate', label: 'Immediate Sprint (< 2 Wks)', badge: 'URGENT' },
  { id: 'month', label: 'Within 30 Days', badge: 'OPTIMAL' },
  { id: 'quarter', label: 'Next Quarter', badge: 'PLANNED' },
  { id: 'flexible', label: 'Flexible / Discovery', badge: 'EXPLORING' },
];

export function ContactForm() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Web Development (Next.js / Headless)'
  ]);
  const [budget, setBudget] = useState<string>('$10K – $25K');
  const [timeline, setTimeline] = useState<string>('Within 30 Days');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [isTestMode, setIsTestMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleDiscipline = (label: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(label)
        ? prev.length > 1
          ? prev.filter((item) => item !== label)
          : prev
        : [...prev, label]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';
    const isPlaceholder = !accessKey || accessKey.includes('YOUR_WEB3FORMS_ACCESS_KEY');
    setIsTestMode(isPlaceholder);

    const generatedTicket = `TICK-NG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);

    const payload = {
      access_key: accessKey,
      subject: `[NEW BRIEF] ${formData.company || formData.fullName} — ${budget}`,
      from_name: formData.fullName || 'APERTURE STUDIOS Prospect',
      email: formData.email,
      name: formData.fullName,
      company: formData.company,
      website: formData.website,
      phone: formData.phone,
      disciplines: selectedDisciplines.join(', '),
      budget: budget,
      timeline: timeline,
      message: formData.message,
      ticket_id: generatedTicket,
    };

    // If placeholder key, gracefully simulate realistic network delay and give immediate test success
    if (isPlaceholder) {
      setTimeout(() => {
        setStatus('success');
      }, 900);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Submission could not be completed. Please reach us directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setResponseMsg('Network connection error. Please email us directly at hello@aperturestudios.co');
    }
  };

  const copyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      email: '',
      company: '',
      website: '',
      phone: '',
      message: '',
    });
  };

  if (status === 'success') {
    return (
      <div className="tactile-card p-8 md:p-12 bg-white relative overflow-hidden border-3 border-black shadow-[-8px_12px_0px_#000]">
        {/* Top Perforated Ticket Style Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-dashed border-black pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#00966e] text-white border-2 border-black flex items-center justify-center font-bold text-xl shadow-[-2px_2px_0px_#000]">
              ✓
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#5c5b5b]">
                Transmission Acknowledged
              </span>
              <h3 className="font-['Roboto_Flex'] text-2xl font-black uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
                Project Sprint Ticket Issued
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg border-2 border-black bg-[#d7dd44] shadow-[-2px_2px_0px_#000]">
              {ticketId}
            </div>
            <button
              onClick={copyTicket}
              className="p-1.5 border-2 border-black rounded-lg bg-white hover:bg-black hover:text-white transition-colors"
              title="Copy Ticket ID"
            >
              <Copy className="h-4 w-4" />
            </button>
            {copied && (
              <span className="font-mono text-[10px] uppercase font-bold text-[#00966e]">
                Copied!
              </span>
            )}
          </div>
        </div>

        {isTestMode && (
          <div className="mb-6 p-4 rounded-xl border-2 border-black bg-[#d7dd44]/30 flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-[#141414] shrink-0 mt-0.5" />
            <div className="font-mono text-xs text-black">
              <strong className="uppercase font-bold">Preview / Dev Mode Active:</strong> Form submission simulation passed. Once you drop your production Web3Forms key into <code className="bg-white px-1.5 py-0.5 border border-black rounded">.env.local</code>, submissions will ping your client inbox directly.
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border-2 border-black bg-[#ecebe4] space-y-4">
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="font-mono text-xs uppercase text-[#5c5b5b]">Client / Representative</span>
              <span className="font-bold text-sm text-black">{formData.fullName} ({formData.company || 'Direct Founder'})</span>
            </div>
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="font-mono text-xs uppercase text-[#5c5b5b]">Priority Email</span>
              <span className="font-mono text-sm font-bold text-black">{formData.email}</span>
            </div>
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="font-mono text-xs uppercase text-[#5c5b5b]">Allocated Scope</span>
              <span className="font-mono text-xs font-bold text-black text-right max-w-xs truncate">
                {selectedDisciplines.join(', ')}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="font-mono text-xs uppercase text-[#5c5b5b]">Target Investment</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#d7dd44] border border-black rounded">
                {budget}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase text-[#5c5b5b]">Deployment Window</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#eaa0cd] border border-black rounded">
                {timeline}
              </span>
            </div>
          </div>

          {/* SLA Guarantee Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border-2 border-black bg-white shadow-[-3px_4px_0px_#000] flex items-center gap-3">
              <Clock className="h-6 w-6 text-[#00966e]" />
              <div>
                <div className="font-bold text-xs uppercase">24-Hour SLA Guarantee</div>
                <div className="text-[11px] text-[#5c5b5b]">First strategic diagnostic sent within 1 business day.</div>
              </div>
            </div>
            <div className="p-4 rounded-xl border-2 border-black bg-white shadow-[-3px_4px_0px_#000] flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#7ca8d2]" />
              <div>
                <div className="font-bold text-xs uppercase">Mutual IP Protection</div>
                <div className="text-[11px] text-[#5c5b5b]">All disclosures protected under bilateral NDA terms.</div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase underline underline-offset-4 hover:text-[#00966e] transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Submit Another Brief
            </button>
            <a
              href="mailto:hello@aperturestudios.co"
              className="c-button c-button-emerald text-sm"
            >
              Direct Executive Channel <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="tactile-card p-6 md:p-10 bg-white border-3 border-black shadow-[-8px_12px_0px_#000] space-y-10">
      {/* SECTION 1: REQUIRED DISCIPLINES */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full border-2 border-black bg-[#d7dd44] text-black font-black text-xs flex items-center justify-center">
              1
            </span>
            <h3 className="font-['Roboto_Flex'] text-xl font-bold uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
              Select Required Capabilities
            </h3>
          </div>
          <span className="font-mono text-[11px] uppercase text-[#5c5b5b]">
            Multi-select enabled ({selectedDisciplines.length} selected)
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {DISCIPLINES.map((item) => {
            const isSelected = selectedDisciplines.includes(item.label);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleDiscipline(item.label)}
                className={`text-xs font-mono font-bold px-3.5 py-2.5 rounded-xl border-2 border-black transition-all flex items-center gap-2 text-left ${
                  isSelected
                    ? 'bg-[#141414] text-white shadow-[-3px_4px_0px_#d7dd44] -translate-y-0.5'
                    : 'bg-[#f4f4f0] text-black hover:bg-[#ecebe4] shadow-[-2px_2px_0px_#000]'
                }`}
              >
                <span
                  className={`h-3.5 w-3.5 rounded border border-black flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#d7dd44] text-black' : 'bg-white'
                  }`}
                >
                  {isSelected && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: BUDGET BRACKET */}
      <div className="space-y-4 border-t-2 border-black/10 pt-8">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full border-2 border-black bg-[#eaa0cd] text-black font-black text-xs flex items-center justify-center">
            2
          </span>
          <h3 className="font-['Roboto_Flex'] text-xl font-bold uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
            Target Investment Bracket
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BUDGET_TIERS.map((tier) => {
            const isSelected = budget === tier.label;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setBudget(tier.label)}
                className={`p-4 rounded-xl border-2 border-black text-left transition-all ${
                  isSelected
                    ? 'bg-[#d7dd44] text-black shadow-[-4px_5px_0px_#000] -translate-y-1'
                    : 'bg-[#f4f4f0] text-black hover:bg-white shadow-[-2px_3px_0px_#000]'
                }`}
              >
                <div className="font-['Roboto_Flex'] text-xl font-black [font-variation-settings:'wdth'_33] [font-stretch:33%] uppercase">
                  {tier.label}
                </div>
                <div className="font-mono text-[10px] uppercase text-[#5c5b5b] mt-0.5">
                  {tier.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: TIMELINE & URGENCY */}
      <div className="space-y-4 border-t-2 border-black/10 pt-8">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full border-2 border-black bg-[#7ca8d2] text-black font-black text-xs flex items-center justify-center">
            3
          </span>
          <h3 className="font-['Roboto_Flex'] text-xl font-bold uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
            Deployment Timeline
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TIMELINE_OPTIONS.map((opt) => {
            const isSelected = timeline === opt.label;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTimeline(opt.label)}
                className={`p-3.5 rounded-xl border-2 border-black text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#141414] text-white shadow-[-3px_4px_0px_#7ca8d2] -translate-y-0.5'
                    : 'bg-[#f4f4f0] text-black hover:bg-white shadow-[-2px_2px_0px_#000]'
                }`}
              >
                <span className="font-mono text-xs font-bold">{opt.label}</span>
                <span
                  className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border border-black ${
                    isSelected ? 'bg-[#7ca8d2] text-black' : 'bg-white text-black'
                  }`}
                >
                  {opt.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 4: CONTACT & DETAILS */}
      <div className="space-y-5 border-t-2 border-black/10 pt-8">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full border-2 border-black bg-[#00966e] text-white font-black text-xs flex items-center justify-center">
            4
          </span>
          <h3 className="font-['Roboto_Flex'] text-xl font-bold uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
            Founder & Company Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block font-mono text-xs uppercase font-bold text-black">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Alexander Vance"
              className="w-full px-4 py-3 rounded-xl border-2 border-black bg-[#f4f4f0] text-sm font-sans placeholder:text-[#8a8a90] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[-2px_2px_0px_#000]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block font-mono text-xs uppercase font-bold text-black">
              Corporate / Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="alexander@company.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-black bg-[#f4f4f0] text-sm font-sans placeholder:text-[#8a8a90] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[-2px_2px_0px_#000]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block font-mono text-xs uppercase font-bold text-black">
              Company / Brand Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="e.g. Apex Spatial Labs"
              className="w-full px-4 py-3 rounded-xl border-2 border-black bg-[#f4f4f0] text-sm font-sans placeholder:text-[#8a8a90] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[-2px_2px_0px_#000]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block font-mono text-xs uppercase font-bold text-black">
              Current Website / URL
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://apexlabs.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-black bg-[#f4f4f0] text-sm font-sans placeholder:text-[#8a8a90] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[-2px_2px_0px_#000]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block font-mono text-xs uppercase font-bold text-black">
            Phone / WhatsApp (Optional for urgent sprint dispatch)
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 019-2834"
            className="w-full px-4 py-3 rounded-xl border-2 border-black bg-[#f4f4f0] text-sm font-sans placeholder:text-[#8a8a90] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[-2px_2px_0px_#000]"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block font-mono text-xs uppercase font-bold text-black">
              Project Objective & Bottleneck <span className="text-red-500">*</span>
            </label>
            <span className="font-mono text-[10px] text-[#5c5b5b]">
              What is the #1 metric you need to 3x?
            </span>
          </div>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us what you are building, your current conversion or scaling roadblocks, and what success looks like in 90 days..."
            className="w-full px-4 py-3 rounded-xl border-2 border-black bg-[#f4f4f0] text-sm font-sans placeholder:text-[#8a8a90] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[-2px_2px_0px_#000]"
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-xl border-2 border-black bg-red-100 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <div className="font-mono text-xs text-black">
            <strong>Submission Notice:</strong> {responseMsg}
          </div>
        </div>
      )}

      {/* SUBMISSION BAR */}
      <div className="border-t-2 border-black pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[#5c5b5b]">
          <span className="h-2 w-2 rounded-full bg-[#00966e] animate-pulse" />
          <span>Average Strategic Turnaround: &lt; 24h</span>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="c-button c-button-ink text-base px-8 py-4 disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <span className="inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" /> Transmitting Brief...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              Transmit Project Brief <Send className="h-4 w-4 text-[#d7dd44]" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
