import React, { useState } from 'react';
import { Calendar, MapPin, Check, ShieldCheck, Wifi, PawPrint, Bike, Sparkles } from 'lucide-react';
import { Vehicle } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, vehicle }) => {
  const [pickupDate, setPickupDate] = useState('2026-09-10');
  const [returnDate, setReturnDate] = useState('2026-09-17');
  const [pickupCity, setPickupCity] = useState('Seattle Depot');
  const [returnCity, setReturnCity] = useState('Seattle Depot');
  const [insurancePlan, setInsurancePlan] = useState<'standard' | 'premium'>('premium');
  const [addOns, setAddOns] = useState({ starlink: true, petFee: false, bikeRack: false });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!vehicle) return null;

  const days = Math.max(1, Math.round((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / 86400000));
  const basePrice = vehicle.pricePerDay * days;
  const insurancePrice = insurancePlan === 'premium' ? 29 * days : 0;
  const starlinkPrice = addOns.starlink ? 15 * days : 0;
  const petPrice = addOns.petFee ? 75 : 0;
  const bikeRackPrice = addOns.bikeRack ? 45 : 0;
  const prepFee = 85;
  const totalPrice = basePrice + insurancePrice + starlinkPrice + petPrice + bikeRackPrice + prepFee;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      onClose();
    }, 3000);
  };

  const depots = [
    'Seattle Depot (WA)',
    'San Francisco Hub (CA)',
    'Denver Depot (CO)',
    'Salt Lake City (UT)',
    'Las Vegas Depot (NV)',
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={bookingSuccess ? 'Booking Confirmed!' : `Reserve ${vehicle.name}`}
      maxWidth="2xl"
    >
      {bookingSuccess ? (
        <div className="py-8 text-center space-y-4 animate-slideUp">
          <div className="w-16 h-16 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center mx-auto border border-accent-teal/40">
            <Check className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-white">Your Adventure Is Booked!</h4>
          <p className="text-content-secondary text-sm max-w-md mx-auto">
            Confirmation email with reservation code <strong className="text-accent-pink">#AIR-89421</strong> and depot pickup check-in instructions has been sent to your inbox.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={onClose}>Done & Return to Fleet</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleConfirm} className="space-y-5">
          {/* Top Vehicle Summary */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border">
            <img src={vehicle.image} alt={vehicle.name} className="w-20 h-16 object-cover rounded-lg" />
            <div>
              <h4 className="font-bold text-white text-base">{vehicle.name}</h4>
              <p className="text-xs text-content-secondary">{vehicle.category} • ${vehicle.pricePerDay}/day</p>
              <div className="text-[11px] text-accent-teal font-medium mt-1 flex items-center gap-1">
                <Sparkles size={12} /> Unlimited Mileage Included
              </div>
            </div>
          </div>

          {/* Location & Dates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-content-secondary uppercase mb-1.5 flex items-center gap-1.5">
                <MapPin size={14} className="text-accent-pink" /> Pickup Location
              </label>
              <select
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-surface text-white text-sm px-4 py-2.5 rounded-xl border border-border focus:border-accent-pink focus:outline-none"
              >
                {depots.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-secondary uppercase mb-1.5 flex items-center gap-1.5">
                <MapPin size={14} className="text-accent-teal" /> Return Location
              </label>
              <select
                value={returnCity}
                onChange={(e) => setReturnCity(e.target.value)}
                className="w-full bg-surface text-white text-sm px-4 py-2.5 rounded-xl border border-border focus:border-accent-teal focus:outline-none"
              >
                {depots.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-secondary uppercase mb-1.5 flex items-center gap-1.5">
                <Calendar size={14} className="text-accent-purple" /> Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-surface text-white text-sm px-4 py-2.5 rounded-xl border border-border focus:border-accent-purple focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-secondary uppercase mb-1.5 flex items-center gap-1.5">
                <Calendar size={14} className="text-accent-purple" /> Return Date ({days} Nights)
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-surface text-white text-sm px-4 py-2.5 rounded-xl border border-border focus:border-accent-purple focus:outline-none"
              />
            </div>
          </div>

          {/* Insurance Selector */}
          <div>
            <label className="block text-xs font-semibold text-content-secondary uppercase mb-2">
              Protection & Insurance Plan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setInsurancePlan('standard')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  insurancePlan === 'standard' ? 'border-accent-pink bg-accent-pink/10' : 'border-border bg-surface hover:border-border-bright'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white text-sm">Basic Shield</span>
                  <span className="text-xs text-content-secondary">Included ($0)</span>
                </div>
                <p className="text-xs text-content-secondary leading-snug">Standard state liability with $2,500 deductible.</p>
              </div>

              <div
                onClick={() => setInsurancePlan('premium')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  insurancePlan === 'premium' ? 'border-accent-teal bg-accent-teal/10' : 'border-border bg-surface hover:border-border-bright'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white text-sm flex items-center gap-1">
                    <ShieldCheck size={14} className="text-accent-teal" /> Full Protection
                  </span>
                  <span className="text-xs text-accent-teal font-semibold">+$29/day</span>
                </div>
                <p className="text-xs text-content-secondary leading-snug">$0 Deductible, windshield, tire & 24/7 towing coverage.</p>
              </div>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-content-secondary uppercase mb-1">
              Adventure Gear Add-ons
            </label>
            <label className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border cursor-pointer hover:border-border-bright">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addOns.starlink}
                  onChange={(e) => setAddOns({ ...addOns, starlink: e.target.checked })}
                  className="rounded text-accent-pink focus:ring-accent-pink w-4 h-4 bg-background"
                />
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <Wifi size={16} className="text-accent-pink" />
                  <span>Starlink Satellite Mini (Unlimited Wi-Fi)</span>
                </div>
              </div>
              <span className="text-xs text-content-secondary font-semibold">+$15 / day</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border cursor-pointer hover:border-border-bright">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addOns.petFee}
                  onChange={(e) => setAddOns({ ...addOns, petFee: e.target.checked })}
                  className="rounded text-accent-pink focus:ring-accent-pink w-4 h-4 bg-background"
                />
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <PawPrint size={16} className="text-accent-teal" />
                  <span>Pet Cleaning Kit & Authorization</span>
                </div>
              </div>
              <span className="text-xs text-content-secondary font-semibold">+$75 one-time</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border cursor-pointer hover:border-border-bright">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addOns.bikeRack}
                  onChange={(e) => setAddOns({ ...addOns, bikeRack: e.target.checked })}
                  className="rounded text-accent-pink focus:ring-accent-pink w-4 h-4 bg-background"
                />
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <Bike size={16} className="text-accent-purple" />
                  <span>2-Bike Heavy Duty Hitch Rack</span>
                </div>
              </div>
              <span className="text-xs text-content-secondary font-semibold">+$45 one-time</span>
            </label>
          </div>

          {/* Pricing Summary */}
          <div className="p-4 rounded-xl bg-[#111111] border border-border space-y-2 text-sm">
            <div className="flex justify-between text-content-secondary text-xs">
              <span>{vehicle.name} (${vehicle.pricePerDay} x {days} nights)</span>
              <span className="text-white font-medium">${basePrice}</span>
            </div>
            {insurancePrice > 0 && (
              <div className="flex justify-between text-content-secondary text-xs">
                <span>Full Cover Protection ($29 x {days} nights)</span>
                <span className="text-white font-medium">${insurancePrice}</span>
              </div>
            )}
            {starlinkPrice > 0 && (
              <div className="flex justify-between text-content-secondary text-xs">
                <span>Starlink Satellite Wi-Fi ($15 x {days} nights)</span>
                <span className="text-white font-medium">${starlinkPrice}</span>
              </div>
            )}
            {petPrice > 0 && (
              <div className="flex justify-between text-content-secondary text-xs">
                <span>Pet Sanitation</span>
                <span className="text-white font-medium">${petPrice}</span>
              </div>
            )}
            {bikeRackPrice > 0 && (
              <div className="flex justify-between text-content-secondary text-xs">
                <span>Bike Hitch Rack</span>
                <span className="text-white font-medium">${bikeRackPrice}</span>
              </div>
            )}
            <div className="flex justify-between text-content-secondary text-xs">
              <span>Vehicle Prep & Kitchen Outfitting Fee</span>
              <span className="text-white font-medium">${prepFee}</span>
            </div>

            <div className="pt-3 border-t border-border flex justify-between items-baseline">
              <span className="font-bold text-white text-base">Estimated Total</span>
              <div className="text-right">
                <span className="text-2xl font-black text-gradient">${totalPrice}</span>
                <span className="block text-[10px] text-content-muted">Taxes & fees included</span>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex items-center gap-3 pt-2">
            <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              Confirm & Request Hold
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default BookingModal;
