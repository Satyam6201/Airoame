import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-36 lg:pb-44 px-4 sm:px-8 lg:px-14 overflow-hidden text-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-mountain-road.png"
          alt="Luxury Camper Van on Scenic Mountain Road"
          className="w-full h-full object-cover object-[center_35%] scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-[#171717] pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D0D0D]/50 to-[#0D0D0D]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center animate-fadeIn flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg text-center">
          Luxury Car Rent<br />From $19 Only
        </h1>

        <p className="text-white/80 text-xs sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mx-auto">
          <Link
            to="/about"
            className="min-w-[130px] sm:min-w-[140px] h-11 sm:h-12 px-7 rounded-lg bg-[#181818]/90 border border-[#333333] hover:border-white/50 text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center transition-all duration-300 hover:bg-[#222222]"
          >
            Learn more
          </Link>
          <Link
            to="/vehicles"
            className="min-w-[130px] sm:min-w-[140px] h-11 sm:h-12 px-7 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center shadow-[0_4px_18px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all duration-300"
          >
            Book Ride
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;