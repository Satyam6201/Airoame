import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';

export const BookCarForm: React.FC = () => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState('BMW');
  const [seats, setSeats] = useState('4 seater');
  const [model, setModel] = useState('Sports');
  const [minPrice, setMinPrice] = useState('$199');
  const [maxPrice, setMaxPrice] = useState('$499');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/vehicles?brand=${encodeURIComponent(brand)}&model=${encodeURIComponent(model)}&seats=${encodeURIComponent(seats)}`);
  };

  return (
    <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 lg:-mt-24">
      <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 lg:p-10 border border-gray-100 text-[#1F1F1F]">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] tracking-tight mb-2">
            Book a Car
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-3.5 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Brand
              </label>
              <div className="relative">
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-[#F5F5F5] text-gray-800 text-xs sm:text-sm px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC1E79] focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Audi">Audi</option>
                  <option value="Volkswagen">Volkswagen</option>
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Number of Seats
              </label>
              <div className="relative">
                <select
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  className="w-full bg-[#F5F5F5] text-gray-800 text-xs sm:text-sm px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC1E79] focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="2 seater">2 seater</option>
                  <option value="4 seater">4 seater</option>
                  <option value="6 seater">6 seater</option>
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Model
              </label>
              <div className="relative">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-[#F5F5F5] text-gray-800 text-xs sm:text-sm px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC1E79] focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Sports">Sports</option>
                  <option value="Luxury Coach">Luxury Coach</option>
                  <option value="Overland 4x4">Overland 4x4</option>
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Minimum Price
              </label>
              <input
                type="text"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full bg-[#F5F5F5] text-gray-800 text-xs sm:text-sm px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC1E79] focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Maximum Price
              </label>
              <input
                type="text"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full bg-[#F5F5F5] text-gray-800 text-xs sm:text-sm px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC1E79] focus:outline-none transition-all"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-1 pt-1 sm:pt-0">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Search size={15} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookCarForm;
