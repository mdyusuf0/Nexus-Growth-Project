import React from 'react';
import type { Metadata } from 'next';
import { VartalaapCrmExperience } from '@/components/services/crm-sales-funnel/VartalaapCrmExperience';

export const metadata: Metadata = {
  title: '📈 CRM & Conversational Sales Funnels // NEXUS Vartalaap',
  description: 'Turn every WhatsApp message, Instagram DM, SMS, and webchat into a high-ticket sale, qualified lead, or auto-resolved ticket in under 400ms.',
  keywords: [
    'Vartalaap',
    'AI customer engagement platform',
    'conversational sales funnel',
    'WhatsApp Business automation',
    'HubSpot sales CRM setup',
    'omnichannel messaging AI',
    'NEXUS Growth'
  ],
};

export default function CrmSalesFunnelPage() {
  return (
    <div className="-mt-[var(--nav-offset)] w-full min-h-screen bg-[#080c14] text-white">
      <VartalaapCrmExperience />
    </div>
  );
}
