import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, SlidersHorizontal, Car, Disc, Fuel, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { vehiclesData } from '../data/vehicles';
import { BookingModal } from '../components/vehicles/BookingModal';
import { Vehicle } from '../types';

export const AllVehicles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeats, setSelectedSeats] = useState('2 Seater');
  const [selectedModel, setSelectedModel] = useState('Audi');
  const [minPrice, setMinPrice] = useState('$199');
  const [maxPrice, setMaxPrice] = useState('$599');
  const [activePage, setActivePage] = useState(1);
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredVehicles = useMemo(() => {
    return vehiclesData.filter((v) => {
      if (searchQuery.trim() && !v.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header & Breadcrumbs */}
        <div className="text-center mb-8 sm:mb-14 animate-fadeIn">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            All Vehicles
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">All Vehicles</span>
          </div>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1F1F1F] border border-[#2A2A2A] text-white text-xs font-semibold hover:border-accent-pink transition-colors"
          >
            <Filter size={15} className="text-accent-pink" />
            <span>{mobileFilterOpen ? 'Hide Filters' : 'Show Filters & Search Options'}</span>
            <ChevronDown size={14} className={`transform transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* 2-Column Grid: Left Filter Card + Right Vehicle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT SIDEBAR: Filter Box */}
          <aside className={`lg:col-span-3 bg-[#1F1F1F] border border-[#2A2A2A] rounded-2xl p-5 sm:p-6 shadow-xl space-y-5 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                <SlidersHorizontal size={15} className="text-accent-pink" />
                <span>Filter</span>
              </h2>
            </div>

            {/* Number of Seats */}
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">
                Number Of Seats
              </label>
              <div className="relative">
                <select
                  value={selectedSeats}
                  onChange={(e) => setSelectedSeats(e.target.value)}
                  className="w-full bg-[#121212] text-white text-xs px-3.5 py-3 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="2 Seater">2 Seater</option>
                  <option value="4 Seater">4 Seater</option>
                  <option value="6 Seater">6 Seater</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Model */}
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">
                Model
              </label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-[#121212] text-white text-xs px-3.5 py-3 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Audi">Audi</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Ford">Ford</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Minimum Price & Maximum Price */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-white/70 mb-1.5">
                  Minimum Price
                </label>
                <input
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full bg-[#121212] text-white text-xs px-3 py-2.5 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none text-center"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-white/70 mb-1.5">
                  Maximum Price
                </label>
                <input
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-[#121212] text-white text-xs px-3 py-2.5 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none text-center"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-3 px-4 rounded-lg border border-[#EC1E79] text-[#EC1E79] hover:bg-[#EC1E79] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_12px_rgba(236,30,121,0.15)]"
              >
                Search
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: Search Bar + 2-Column Grid of 8 Vehicles */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar: Search for vehicle name & Sort button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:max-w-xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for vehicle name"
                  className="w-full bg-[#1F1F1F] text-white text-xs pl-4 pr-10 py-3 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none placeholder-white/40"
                />
                <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
              </div>

              <button className="flex items-center gap-2 text-xs font-medium text-white/80 bg-[#1F1F1F] border border-[#2A2A2A] px-4 py-3 rounded-lg hover:text-white hover:border-white/20 transition-all self-end sm:self-auto">
                <SlidersHorizontal size={14} className="text-white/60" />
                <span>Sort</span>
              </button>
            </div>

            {/* 2-per-row Grid of 8 Vehicle Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-[#1F1F1F] border border-[#2A2A2A] hover:border-[#383838] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Studio Vehicle Image */}
                    <div className="relative aspect-[16/10] bg-[#FAFAFA] flex items-center justify-center p-4 overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-white group-hover:text-accent-pink transition-colors">
                        <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                      </h3>
                      
                      <div className="flex items-baseline gap-1 mt-1 mb-4">
                        <span className="text-lg font-black text-white">${vehicle.pricePerDay}.00</span>
                        <span className="text-xs text-white/50">/day</span>
                      </div>

                      {/* 3 Green Spec Badges: SUV, Auto, Petrol */}
                      <div className="grid grid-cols-3 gap-2 py-2.5 border-t border-[#2A2A2A] text-xs">
                        <div className="flex items-center justify-center gap-1.5 text-[#2EE59D] font-medium">
                          <Car size={14} />
                          <span className="text-white/80 text-[11px]">SUV</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-[#2EE59D] font-medium">
                          <Disc size={14} />
                          <span className="text-white/80 text-[11px]">Auto</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-[#2EE59D] font-medium">
                          <Fuel size={14} />
                          <span className="text-white/80 text-[11px]">Petrol</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pink BOOK NOW Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setBookingVehicle(vehicle)}
                      className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination at bottom: < 1 2 3 4 5 ........ 30 > */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-8 sm:pt-10 select-none text-xs flex-wrap">
              <button
                onClick={() => setActivePage(Math.max(1, activePage - 1))}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft size={16} />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all ${
                    activePage === page
                      ? 'bg-[#2A2A2A] text-white border border-[#3A3A3A]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="text-white/40 px-1 sm:px-2 tracking-widest text-xs">...</span>

              <button
                onClick={() => setActivePage(30)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all ${
                  activePage === 30
                    ? 'bg-[#2A2A2A] text-white border border-[#3A3A3A]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                30
              </button>

              <button
                onClick={() => setActivePage(Math.min(30, activePage + 1))}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </main>

        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={Boolean(bookingVehicle)}
        onClose={() => setBookingVehicle(null)}
        vehicle={bookingVehicle}
      />
    </div>
  );
};

export default AllVehicles;
