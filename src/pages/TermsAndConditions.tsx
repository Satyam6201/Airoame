import React from 'react';
import { LegalPageLayout } from '../components/layout/LegalPageLayout';

export const TermsAndConditions: React.FC = () => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      promoTag="Rental Agreement & Legal Terms"
      lastUpdated="August 20, 2026"
    >
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Terms & Conditions for Users</h2>
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          By accessing this website and booking an Airoome vehicle, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. The primary renter must be at least 21 years of age with an unexpired driver’s license held for at least one year.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Support</h2>
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          Airoome provides 24/7 emergency roadside support to all active renters. Our dispatch desk can be reached anytime via telephone or through the digital traveler portal. Non-emergency customer support is provided during normal business depot hours (8:30 AM to 5:30 PM local time).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Ownership</h2>
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          All vehicles, outfitting camping gear, onboard technology systems, website assets, photographs, and branding logos remain the exclusive intellectual and physical property of Airoome Travel Technologies Inc. The customer is granted a temporary, revocable lease of the designated vehicle for the agreed rental duration.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Warranty</h2>
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          All vehicles undergo our rigorous 100-point mechanical inspection prior to handoff. While Airoome strives to ensure optimal vehicle performance, travel rigs are mechanical products and subject to road hazards. In the rare event of mechanical failure not caused by renter negligence, Airoome will arrange immediate mobile repair or a substitute vehicle.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Unauthorized Legal Usage</h2>
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          Operating Airoome vehicles under the influence of alcohol, drugs, or medications is strictly prohibited. Driving 2WD campervans on unpaved sand dunes, riverbeds, beaches, or unmaintained boulder crawl paths is strictly forbidden. Only designated 4x4 models are permitted on graded Forest Service and BLM trails.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Payment/Refund Policy</h2>
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          Full payment is required to confirm reservation dates. Cancellations made 14 days or more before the scheduled pickup date are eligible for a 100% full cash refund. Cancellations made between 7 and 14 days prior receive a 75% credit voucher. Security deposits are released within 7 business days following vehicle return inspection.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export { TermsAndConditions as default, TermsAndConditions as TermsPage };
