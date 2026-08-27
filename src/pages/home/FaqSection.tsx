import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How do I book a vehicle on Airoame?',
    answer: 'Simply choose your pickup and return locations, select your dates, and browse our available campervans or luxury RVs. You can reserve instantly with zero deposit.',
  },
  {
    id: 2,
    question: 'What is included in the rental price?',
    answer: 'Every rental includes comprehensive insurance, standard cookware, fresh bed linens, 24/7 roadside assistance, and unlimited miles for long-distance cruising.',
  },
  {
    id: 3,
    question: 'What driving license do I need to drive an RV?',
    answer: 'A standard valid Class C automobile driver license held for at least 1 year is all that is required for all our campervans and class-C motorhomes.',
  },
  {
    id: 4,
    question: 'Can I pick up and drop off in different cities?',
    answer: 'Yes! We offer flexible one-way roadtrip routes between all our primary hub cities including Seattle, San Francisco, Denver, and Las Vegas.',
  },
  {
    id: 5,
    question: 'What is your cancellation and refund policy?',
    answer: 'We offer 100% free cancellation up to 7 days before your scheduled pickup date with immediate refund processing to your original payment method.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#171717] pb-24 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent mb-20" />

        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#1F1F1F] border border-[#2A2A2A] border-l-4 border-l-[#EC1E79] rounded-xl overflow-hidden shadow-lg transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#121212] border border-[#333333] flex items-center justify-center text-white/80 shrink-0">
                    {isOpen ? <Minus size={14} className="text-[#EC1E79]" /> : <Plus size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-[#262626]/80 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;