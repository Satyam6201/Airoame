import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Car, DoorClosed, Users, Disc } from 'lucide-react';
import { vehiclesData } from '../../data/vehicles';
import { BookingModal } from '../../components/vehicles/BookingModal';
import { Vehicle } from '../../types';

const fleetShowcase = [
  {
    id: 'camper-x4-sports-2',
    name: 'Camper X4 Sports 2',
    model: 'X',
    doors: '4',
    seats: '3',
    transmission: 'Auto',
    price: '$199.00',
    unit: '/day',
    mainImage: '/camper-x4-sports.png',
    thumbnails: [
      '/camper-x4-sports.png',
      '/camper-white-edition.png',
      '/camper-x4-sports.png',
      '/camper-white-edition.png',
    ],
  },
  {
    id: 'camper-white-edition',
    name: 'Camper White edition',
    model: 'Coach Pro',
    doors: '5',
    seats: '4',
    transmission: 'Auto',
    price: '$199.00',
    unit: '/day',
    mainImage: '/camper-white-edition.png',
    thumbnails: [
      '/camper-white-edition.png',
      '/camper-x4-sports.png',
      '/camper-white-edition.png',
      '/camper-x4-sports.png',
    ],
  },
];

export const RentalFleet: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  const currentVehicle = fleetShowcase[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? fleetShowcase.length - 1 : prev - 1));
    setSelectedThumbIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === fleetShowcase.length - 1 ? 0 : prev + 1));
    setSelectedThumbIndex(0);
  };

  return (
    <section className="bg-[#171717] pt-14 sm:pt-20 pb-16 sm:pb-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Our Rental Fleet
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#1F1F1F] border border-[#2A2A2A] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl">
          <div className="lg:col-span-2 flex lg:flex-col gap-2.5 sm:gap-3 justify-center order-2 lg:order-1 overflow-x-auto lg:overflow-visible py-1 no-scrollbar">
            {currentVehicle.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedThumbIndex(idx)}
                className={`w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-white/90 p-1.5 border transition-all shrink-0 ${
                  selectedThumbIndex === idx
                    ? 'border-[#EC1E79] ring-2 ring-[#EC1E79]/40 scale-105 opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-6 flex items-center justify-center p-4 bg-white/95 rounded-xl min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] order-1 lg:order-2 shadow-inner">
            <img
              src={currentVehicle.thumbnails[selectedThumbIndex] || currentVehicle.mainImage}
              alt={currentVehicle.name}
              className="max-h-[200px] sm:max-h-[280px] lg:max-h-[320px] w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-3 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-1 sm:mb-2">
                {currentVehicle.name}
              </h3>
            </div>

            <div className="space-y-2.5 sm:space-y-3 py-2 border-y border-[#2E2E2E]">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Car size={15} className="text-[#2EE59D]" />
                  <span>Model:</span>
                </div>
                <span className="font-semibold text-white">{currentVehicle.model}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <DoorClosed size={15} className="text-[#2EE59D]" />
                  <span>Doors:</span>
                </div>
                <span className="font-semibold text-white">{currentVehicle.doors}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Users size={15} className="text-[#2EE59D]" />
                  <span>Seats:</span>
                </div>
                <span className="font-semibold text-white">{currentVehicle.seats}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Disc size={15} className="text-[#2EE59D]" />
                  <span>Transmission:</span>
                </div>
                <span className="font-semibold text-white">{currentVehicle.transmission}</span>
              </div>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">{currentVehicle.price}</span>
              <span className="text-xs text-white/50">{currentVehicle.unit}</span>
            </div>

            <button
              onClick={() => setBookingVehicle(vehiclesData[0])}
              className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-[#242424] hover:bg-[#303030] text-white flex items-center justify-center transition-colors"
            aria-label="Previous Vehicle"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {fleetShowcase.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-[#EC1E79]' : 'w-2.5 bg-[#3A3A3A]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#242424] hover:bg-[#303030] text-white flex items-center justify-center transition-colors"
            aria-label="Next Vehicle"
          >
            <ChevronRight size={18} />
          </button>
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

export default RentalFleet;