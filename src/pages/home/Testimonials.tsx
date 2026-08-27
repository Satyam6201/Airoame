import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Watson',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Our 10-day roadtrip down Highway 1 in the Camper X4 was nothing short of magical. The solar setup and hot shower made camping in Big Sur feel like a boutique hotel on wheels.',
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'Outdoor Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'As a photographer chasing sunrises in the Rockies, having a self-contained warm cabin with off-grid power for all my gear was unmatched. Customer service was flawless.',
  },
  {
    id: 3,
    name: 'Sarah & Liam Vance',
    role: 'Travel Bloggers',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'Seamless booking, spotlessly clean van, and intuitive controls. Booking through Airoame was the best decision for our annual family road expedition!',
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Software Architect',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'The WiFi connectivity and ergonomic workspace inside the van allowed me to work remotely while parked beside emerald lakes in Banff. Unforgettable experience.',
  },
];

export const Testimonials: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#171717] pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#2E2E2E]">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Happy Customers Say
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Real experiences from modern nomads and adventurers on the road.
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#333333] hover:border-[#EC1E79] text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#333333] hover:border-[#EC1E79] text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-6 flex flex-col justify-between shadow-lg relative group transition-all duration-300 hover:border-[#383838]"
              >
                <div className="space-y-4">
                  <Quote size={24} className="text-[#EC1E79]/50" />
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-[#222222]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#333333] shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {item.name}
                    </h4>
                    <span className="text-xs text-white/50 block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  startIndex % testimonials.length === idx ? 'w-6 bg-[#EC1E79]' : 'w-2 bg-[#3A3A3A]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
