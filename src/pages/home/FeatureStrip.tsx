import React from 'react';

const features = [
  {
    title: 'Expert Drivers',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'No Hidden Charges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Friendly Behavior',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
];

export const FeatureStrip: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative h-72 sm:h-80 lg:h-96 overflow-hidden group select-none"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-snug">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureStrip;
