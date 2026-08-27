import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { vehiclesData } from '../../data/vehicles';
import { BookingModal } from '../../components/vehicles/BookingModal';
import { Vehicle } from '../../types';

const plans = [
  {
    company: 'Company A',
    tier: 'Weekend Getaway',
    price: '$250',
    unit: '/ride',
    duration: '4 Days',
    recommended: false,
    accentColor: '#9900CC',
    bgAccent: 'bg-[#9900CC]',
    features: [
      { name: 'Unlimited Mileage', included: true },
      { name: 'Free GPS Navigation', included: true },
      { name: 'Standard Collision Coverage', included: true },
      { name: '24/7 Roadside Assistance', included: false },
      { name: 'Zero Security Deposit', included: false },
    ],
  },
  {
    company: 'Company B',
    tier: 'Weekly Nomad Explorer',
    price: '$450',
    unit: '/ride',
    duration: '7 Days',
    recommended: true,
    accentColor: '#00E5FF',
    bgAccent: 'bg-[#00E5FF]',
    features: [
      { name: 'Unlimited Mileage', included: true },
      { name: 'Free GPS Navigation & Off-grid Maps', included: true },
      { name: 'Full Comprehensive Insurance', included: true },
      { name: '24/7 Priority Roadside Support', included: true },
      { name: 'Zero Security Deposit', included: false },
    ],
  },
  {
    company: 'Company C',
    tier: 'Expedition Master',
    price: '$850',
    unit: '/ride',
    duration: '14 Days',
    recommended: false,
    accentColor: '#00E5FF',
    bgAccent: 'bg-[#00E5FF]',
    features: [
      { name: 'Unlimited Mileage', included: true },
      { name: 'Starlink Satellite Internet Ready', included: true },
      { name: 'Full Comprehensive Insurance + Glass', included: true },
      { name: '24/7 Priority Roadside Support', included: true },
      { name: 'Zero Security Deposit Guaranteed', included: true },
    ],
  },
];

export const PricingPlan: React.FC = () => {
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  return (
    <section id="pricing" className="bg-[#171717] pt-20 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1F1F] border border-[#333333] text-xs font-semibold text-white/90 mb-3 shadow-lg">
            <Sparkles size={14} className="text-[#00E5FF]" />
            <span>Transparent All-Inclusive Pricing • 0% Hidden Fees</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Pricing Plan
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-14">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                plan.recommended ? 'ring-2 ring-[#00E5FF]' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-[#00E5FF] text-gray-900 text-[11px] font-bold uppercase tracking-widest text-center py-1.5 z-20">
                  Most Popular Choice
                </div>
              )}

              <div className="bg-white text-[#1F1F1F] p-7 sm:p-8 flex-grow flex flex-col justify-between rounded-t-2xl z-10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#1F1F1F]">
                      {plan.company}
                    </h3>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      {plan.tier}
                    </span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#1F1F1F]">
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{plan.unit}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium block mt-0.5">
                      {plan.duration}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-center gap-2.5 ${
                          feat.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'
                        }`}
                      >
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check size={11} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                            <X size={11} strokeWidth={3} />
                          </div>
                        )}
                        <span>{feat.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`${plan.bgAccent} p-3.5 text-center z-10`}>
                <button
                  onClick={() => setBookingVehicle(vehiclesData[idx % vehiclesData.length])}
                  className={`w-full py-2.5 text-center font-bold text-xs sm:text-sm uppercase tracking-wider transition-opacity hover:opacity-90 ${
                    plan.accentColor === '#9900CC' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Book Now
                </button>
              </div>

              <div
                className={`absolute inset-0 ${plan.bgAccent} opacity-30 blur-lg -z-10 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform`}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/plan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1F1F] border border-[#333333] hover:border-[#00E5FF] text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-all shadow-lg hover:scale-105"
          >
            <span>View Full Plan Comparison & Fleet Inclusion Matrix</span>
            <ArrowRight size={14} className="text-[#00E5FF]" />
          </Link>
        </div>
      </div>

      <BookingModal
        isOpen={Boolean(bookingVehicle)}
        onClose={() => setBookingVehicle(null)}
        vehicle={bookingVehicle}
      />
    </section>
  );
};

export default PricingPlan;
