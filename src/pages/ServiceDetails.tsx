import React from 'react';
import { Accordion } from '../components/ui/Accordion';

const serviceSections = [
  {
    title: '1. Roadside Concierge & Emergency Breakdown Assistance',
    description: 'We provide 24/7 dedicated dispatch for mechanical assistance, flat tire changes, battery jumpstarts, and vehicle lockouts anywhere across the continental United States and Canada.',
  },
  {
    title: '2. Comprehensive Insurance Coverage & Deductible Options',
    description: 'Every rental includes standard state liability coverage. Upgrades include our Zero-Deductible Total Shield covering windshield road hazards, tire punctures, and third-party protection.',
  },
  {
    title: '3. Vehicle Preparation & Sanitary Outfitting Standards',
    description: 'Prior to each departure, vehicles undergo a 100-point mechanical inspection, complete ozone deep sanitation, fresh water tank flush, and inventory check of cookware and bedding.',
  },
  {
    title: '4. Airport VIP Delivery & Drop-off Service',
    description: 'Skip the depot shuttles with direct curb greeting at SEA, SFO, DEN, and LAS airport terminals with personalized walkthroughs from our team.',
  },
  {
    title: '5. Starlink Satellite High-Speed Internet Kit',
    description: 'Work and stream from anywhere with portable Starlink Satellite Mini terminals pre-configured for seamless unlimited Wi-Fi connectivity in deep wilderness areas.',
  },
  {
    title: '6. Custom Roadtrip Itinerary Curation & Campsite Booking',
    description: 'Our overland specialists can build customized day-by-day travel itineraries with verified boondocking spots and national park permit assistance.',
  },
];

export const ServiceDetails: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Promo Tag */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#EC1E79]/40 text-[#EC1E79] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Service Guarantees</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Service Details
          </h1>
          <p className="text-[#A0A0A0] text-sm sm:text-base mt-2">
            Detailed information on our service policies, maintenance standards, and add-on amenities.
          </p>
        </div>

        {/* Bulleted list of expandable sections */}
        <div className="space-y-3">
          {serviceSections.map((sec, idx) => (
            <Accordion
              key={idx}
              title={sec.title}
              description={sec.description}
              defaultOpen={idx === 0}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export { ServiceDetails as default, ServiceDetails as ServicesPage };
