import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Users, Bed, Fuel, Gauge, Star, CheckCircle, ShieldCheck, 
  MapPin, Wifi, ArrowLeft, Heart, Share2, Info, ChevronRight, Sparkles 
} from 'lucide-react';
import { vehiclesData } from '../data/vehicles';
import { BookingModal } from '../components/vehicles/BookingModal';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { useToast } from '../components/ui/Toast';

export const VehicleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const vehicle = vehiclesData.find((v) => v.id === id) || vehiclesData[0];
  const gallery = vehicle.gallery || [vehicle.image];
  const similarVehicles = vehiclesData.filter((v) => v.id !== vehicle.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast({
        type: 'success',
        title: 'Link Copied!',
        message: `${vehicle.name} link has been copied to your clipboard.`,
      });
    }
  };

  const handleLike = () => {
    const nextState = !liked;
    setLiked(nextState);
    showToast({
      type: 'info',
      title: nextState ? 'Saved to Favorites' : 'Removed from Favorites',
      message: `${vehicle.name} has been ${nextState ? 'added to' : 'removed from'} your saved list.`,
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6 text-xs text-content-secondary">
          <div className="flex items-center gap-2">
            <Link to="/vehicles" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft size={14} /> Back to Fleet
            </Link>
            <span>/</span>
            <span className="text-content-muted">{vehicle.category}</span>
            <span>/</span>
            <span className="text-white font-medium">{vehicle.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`p-2 rounded-full border transition-all ${
                liked
                  ? 'bg-accent-pink/20 border-accent-pink text-accent-pink shadow-brand-glow'
                  : 'bg-surface-card border-border text-content-secondary hover:text-white'
              }`}
              aria-label="Save to favorites"
            >
              <Heart size={16} className={liked ? 'fill-accent-pink' : ''} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-surface-card border border-border text-content-secondary hover:text-white transition-colors"
              aria-label="Share vehicle"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Badge variant="gradient">{vehicle.category}</Badge>
              {vehicle.badge && <Badge variant="teal">{vehicle.badge}</Badge>}
              <div className="flex items-center gap-1 text-xs text-white bg-surface-card px-2.5 py-1 rounded-full border border-border">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span className="font-bold">{vehicle.rating}</span>
                <span className="text-content-secondary">({vehicle.reviewsCount} reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {vehicle.name}
            </h1>
            <p className="text-sm text-content-secondary mt-1 flex items-center gap-1.5">
              <MapPin size={14} className="text-accent-pink" />
              <span>Available at: {vehicle.location}</span>
            </p>
          </div>

          <div className="flex items-baseline gap-2 bg-surface-card border border-border px-5 py-3 rounded-2xl shadow-card">
            <span className="text-3xl font-black text-white">${vehicle.pricePerDay}</span>
            <span className="text-xs text-content-secondary">/ day</span>
            {vehicle.originalPrice && (
              <span className="text-xs text-content-muted line-through ml-1">
                ${vehicle.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
          {/* Main Large Image */}
          <div className="lg:col-span-9 aspect-[16/10] rounded-2xl overflow-hidden border border-border relative bg-surface shadow-2xl">
            <img
              src={gallery[activeImageIndex] || vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover transition-all duration-500 ease-out"
            />
          </div>

          {/* Vertical Thumbnail Strip */}
          <div className="lg:col-span-3 grid grid-cols-4 lg:grid-cols-1 gap-3">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                  activeImageIndex === idx
                    ? 'border-accent-pink ring-2 ring-accent-pink/40 scale-[1.02] shadow-brand-glow'
                    : 'border-border opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* MAIN BODY: 2 COLUMNS (SPECS & INCLUSIONS vs BOOKING WIDGET) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Description, Specs, Amenities */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Key Highlights */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
              <h2 className="text-xl font-bold text-white mb-3">Vehicle Overview</h2>
              <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
                {vehicle.description}
              </p>

              {/* Core Features Quick Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
                <div className="p-3.5 rounded-xl bg-surface border border-border/80 text-center">
                  <Users className="w-5 h-5 text-accent-pink mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">{vehicle.passengers} Passengers</span>
                  <span className="text-[10px] text-content-muted">Seatbelts</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface border border-border/80 text-center">
                  <Bed className="w-5 h-5 text-accent-purple mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">{vehicle.sleeps} Sleeps</span>
                  <span className="text-[10px] text-content-muted">Memory Foam</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface border border-border/80 text-center">
                  <Gauge className="w-5 h-5 text-accent-teal mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">{vehicle.transmission}</span>
                  <span className="text-[10px] text-content-muted">Easy Drive</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface border border-border/80 text-center">
                  <Fuel className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">{vehicle.fuelType}</span>
                  <span className="text-[10px] text-content-muted">High Range</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications Sheet */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex justify-between py-2.5 border-b border-border/80">
                  <span className="text-content-secondary">Engine & Powertrain</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.engine}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-border/80">
                  <span className="text-content-secondary">Fuel Tank Capacity</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.fuelTank}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-border/80">
                  <span className="text-content-secondary">Fresh Water Tank</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.freshWater}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-border/80">
                  <span className="text-content-secondary">Grey Water Tank</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.greyWater}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-border/80">
                  <span className="text-content-secondary">Solar & Battery Bank</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.solarPower}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-border/80">
                  <span className="text-content-secondary">Cabin Climate Heating</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.acHeater}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-border/80 sm:col-span-2">
                  <span className="text-content-secondary">Bed Dimensions</span>
                  <span className="text-white font-semibold text-right">{vehicle.specs.bedDimensions}</span>
                </div>
              </div>
            </div>

            {/* Included Amenities & Living Gear */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-bold text-white mb-4">Included Outfitted Gear</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border/60">
                    <CheckCircle className="w-4 h-4 text-accent-teal shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking / Action Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-surface-card border border-border rounded-2xl p-6 shadow-2xl space-y-6">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-2xl font-black text-white">${vehicle.pricePerDay}</span>
                  <span className="text-xs text-accent-teal font-semibold flex items-center gap-1">
                    <Sparkles size={12} /> Instant Hold
                  </span>
                </div>
                <p className="text-xs text-content-secondary">Includes unlimited standard mileage & kitchen cookware kit</p>
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Reserve This Rig
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  size="md"
                  onClick={() => navigate('/contact')}
                >
                  Ask Depot Concierge
                </Button>
              </div>

              {/* Guarantees List */}
              <div className="pt-4 border-t border-border space-y-2.5 text-xs text-content-secondary">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent-teal" />
                  <span>Free cancellation up to 14 days before</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi size={16} className="text-accent-pink" />
                  <span>Starlink Satellite Wi-Fi compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info size={16} className="text-accent-purple" />
                  <span>Depot pickup hours: 8:30 AM - 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Similar Vehicles Grid */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Other Adventures You Might Like</h3>
            <Link to="/vehicles" className="text-xs font-semibold text-accent-pink hover:underline flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {similarVehicles.map((v) => (
              <Card key={v.id} className="p-0 overflow-hidden flex flex-col justify-between group shadow-card hover:border-border-bright transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 left-3"><Badge variant="teal">{v.category}</Badge></div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-accent-pink transition-colors">
                      <Link to={`/vehicles/${v.id}`}>{v.name}</Link>
                    </h4>
                    <p className="text-xs text-content-secondary">${v.pricePerDay} / day</p>
                  </div>
                  <Link to={`/vehicles/${v.id}`}>
                    <Button variant="primary" size="sm">Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        vehicle={vehicle}
      />
    </div>
  );
};

export default VehicleDetailPage;
