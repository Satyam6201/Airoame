import React from 'react';
import { Link } from 'react-router-dom';

const galleryPhotos = [
  'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
];

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1) Title & Breadcrumbs */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">About Us</span>
          </div>
        </div>

        {/* 2) Centered Intro Paragraph 1 */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
            The Best Deals You Will Ever Find
          </h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
            Sit amet consectetur adipisicing elit. Alias molestias dolore commodi soluta iusto, suscipit laboriosam, ullam sunt sed fugit vero, quibusdam incidunt numquam eligendi dicta dolor officiis porro voluptates. Lorem Ipsum dolor sit amet consectetur adipisicing elit. Illo vitae eveniet soluta cumque? Iure porro, vel temporibus dolores ab laborum vitae! Necessitatibus vel culpa debitis excepturi perspiciatis modi quibusdam dolores?
          </p>
        </div>

        {/* 3) First 2-Column Section: Mountain Ridge Van Photo (Left) + Text (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 max-w-6xl mx-auto">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-2xl border border-[#2A2A2A] bg-[#111111]">
            <img
              src="/about-ridge-van.png"
              alt="Campervan in Wildflower Mountain Ridge"
              className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              The Best Deals You Will Ever Find
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
              Sit amet consectetur adipisicing elit. Alias molestias dolore commodi soluta iusto, suscipit laboriosam, ullam sunt sed fugit vero, quibusdam incidunt numquam eligendi dicta dolor officiis porro voluptates. Lorem Ipsum dolor sit amet consectetur adipisicing elit. Illo vitae eveniet soluta cumque? Iure porro, vel temporibus dolores ab laborum vitae! Necessitatibus vel culpa debitis excepturi perspiciatis modi quibusdam dolores?
            </p>
          </div>
        </div>

        {/* 4) Centered Intro Paragraph 2 */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
            The Best Deals You Will Ever Find
          </h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
            Sit amet consectetur adipisicing elit. Alias molestias dolore commodi soluta iusto, suscipit laboriosam, ullam sunt sed fugit vero, quibusdam incidunt numquam eligendi dicta dolor officiis porro voluptates. Lorem Ipsum dolor sit amet consectetur adipisicing elit. Illo vitae eveniet soluta cumque? Iure porro, vel temporibus dolores ab laborum vitae! Necessitatibus vel culpa debitis excepturi perspiciatis modi quibusdam dolores?
          </p>
        </div>

        {/* 5) 10-Photo Gallery Grid (2 rows x 5 columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-24 max-w-6xl mx-auto">
          {galleryPhotos.map((src, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-xl overflow-hidden border border-[#2A2A2A] shadow-md group bg-[#121212]"
            >
              <img
                src={src}
                alt={`Vanlife Moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* 6) Second 2-Column Section: Text (Left) + Starry Night RV Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              The Best Deals You Will Ever Find
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
              Sit amet consectetur adipisicing elit. Alias molestias dolore commodi soluta iusto, suscipit laboriosam, ullam sunt sed fugit vero, quibusdam incidunt numquam eligendi dicta dolor officiis porro voluptates. Lorem Ipsum dolor sit amet consectetur adipisicing elit. Illo vitae eveniet soluta cumque? Iure porro, vel temporibus dolores ab laborum vitae! Necessitatibus vel culpa debitis excepturi perspiciatis modi quibusdam dolores?
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-2xl border border-[#2A2A2A] bg-[#111111] order-1 lg:order-2">
            <img
              src="/about-night-rv.png"
              alt="Luxury Motorhome Under Starry Night Sky"
              className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
