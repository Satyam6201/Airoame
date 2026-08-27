import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Sparkles, Zap, HelpCircle } from 'lucide-react';
import { vehiclesData } from '../data/vehicles';
import { BookingModal } from '../components/vehicles/BookingModal';
import { Vehicle } from '../types';

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
      { name: 'Camp Kitchen & Cookware Kit', included: false },
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
      { name: 'Camp Kitchen & Linen Kit Included', included: true },
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
      { name: 'All Gear, Solar Kit & Linens Included', included: true },
      { name: 'Zero Security Deposit Guaranteed', included: true },
    ],
  },
];

const planFaqs = [
  {
    q: 'Are there any hidden booking fees or taxes?',
    a: 'No. All listed prices include standard taxes, vehicle preparation fees, and state licensing costs. What you see is what you pay.',
  },
  {
    q: 'Can I extend my rental duration during the trip?',
    a: 'Yes, you can extend your rental anytime via our concierge app or customer service line, subject to fleet availability.',
  },
  {
    q: 'What deposit is required upon vehicle pickup?',
    a: 'A standard refundable security authorization of $250 is placed on your card for Company A and B plans, and $0 for Company C.',
  },
];

export const PricingPage: React.FC = () => {
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1F1F] border border-[#333333] text-xs font-semibold text-white/90 mb-4 shadow-lg">
            <Sparkles size={14} className="text-[#00E5FF]" />
            <span>Transparent All-Inclusive Pricing • 0% Hidden Fees</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3">
            Pricing Plan
          </h1>
          
          <div className="flex items-center justify-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Pricing Plan</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-24">
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
                  <div className="flex items-center justify-between mb-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          <div className="bg-[#1D1D1D] border border-[#2A2A2A] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#333333] flex items-center justify-center text-[#2EE59D] shrink-0">
              <Shield size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Full Insurance Included</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Drive worry-free with comprehensive collision and liability coverage standard on all rentals.
              </p>
            </div>
          </div>

          <div className="bg-[#1D1D1D] border border-[#2A2A2A] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#333333] flex items-center justify-center text-[#EC1E79] shrink-0">
              <Zap size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Instant Online Booking</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Pick your hub, select dates, and receive instant digital confirmation in under 60 seconds.
              </p>
            </div>
          </div>

          <div className="bg-[#1D1D1D] border border-[#2A2A2A] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#333333] flex items-center justify-center text-[#00E5FF] shrink-0">
              <HelpCircle size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">24/7 Roadside Assist</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Whether in mountain passes or desert trails, our certified fleet mechanics are always on call.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#1D1D1D] border border-[#2A2A2A] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-6 text-center">
            Pricing Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {planFaqs.map((faq, i) => (
              <div key={i} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                  <span className="text-[#EC1E79] font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-white/70 leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={Boolean(bookingVehicle)}
        onClose={() => setBookingVehicle(null)}
        vehicle={bookingVehicle}
      />
    </div>
  );
};

export default PricingPage;
