import React from 'react';
import { Hero } from './home/Hero';
import { BookCarForm } from './home/BookCarForm';
import { RentalFleet } from './home/RentalFleet';
import { FeatureStrip } from './home/FeatureStrip';
import { PricingPlan } from './home/PricingPlan';
import { FaqSection } from './home/FaqSection';
import { Testimonials } from './home/Testimonials';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#171717] min-h-screen text-white overflow-hidden">
      <Hero />
      <BookCarForm />
      <RentalFleet />
      <FeatureStrip />
      <PricingPlan />
      <FaqSection />
      <Testimonials />
    </div>
  );
};

export default Home;
