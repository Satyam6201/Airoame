import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, Navigation, MessageSquare, User, FileText } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

const locations = [
  {
    id: 'dhaka',
    name: 'Dhaka HQ',
    address: 'Tipu Sultan Road Motijhil, Dhaka',
    mapUrl: 'https://maps.google.com/maps?q=Tipu%20Sultan%20Road,%20Motijheel,%20Dhaka&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'seattle',
    name: 'Seattle Depot',
    address: '1420 5th Ave, Seattle, WA 98101',
    mapUrl: 'https://maps.google.com/maps?q=Seattle%20Depot%20WA&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'sf',
    name: 'San Francisco Hub',
    address: 'Fisherman\'s Wharf, San Francisco, CA',
    mapUrl: 'https://maps.google.com/maps?q=San%20Francisco%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'denver',
    name: 'Denver Rockies Hub',
    address: '1701 Wynkoop St, Denver, CO 80202',
    mapUrl: 'https://maps.google.com/maps?q=Denver%20CO&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
];

export const ContactUs: React.FC = () => {
  const { showToast } = useToast();

  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast({
        type: 'success',
        title: 'Message Sent Successfully!',
        message: `Thank you ${formData.name || 'Explorer'}, our concierge team will respond within 2 hours.`,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 bg-[#141414] text-white overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#EC1E79]/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-[#9900CC]/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1F1F] border border-[#333333] text-xs font-semibold text-white/90 mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#2EE59D] animate-ping" />
            <span className="text-[#2EE59D]">●</span>
            <span>Live 24/7 Roadside & Concierge Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3">
            Contact Us
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Contact Us</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-24 max-w-6xl mx-auto">
          <div className="lg:col-span-6 bg-[#1D1D1D] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#383838] transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent-pink/10 to-transparent pointer-events-none rounded-tr-2xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#EC1E79]" />
                  <span>Send us a Message</span>
                </h3>
                <span className="text-[11px] text-[#2EE59D] flex items-center gap-1">
                  <CheckCircle2 size={13} /> Avg reply: 15 mins
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                      <User size={13} className="text-white/50" />
                      <span>Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-[#2A2A2A] focus:border-[#EC1E79] focus:ring-1 focus:ring-[#EC1E79] focus:outline-none transition-all placeholder-[#555555]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                      <Mail size={13} className="text-white/50" />
                      <span>E-Mail Address</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="demo@example.com"
                      className="w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-[#2A2A2A] focus:border-[#EC1E79] focus:ring-1 focus:ring-[#EC1E79] focus:outline-none transition-all placeholder-[#555555]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                    <FileText size={13} className="text-white/50" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Fleet Inquiry / Trip Customization"
                    className="w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-[#2A2A2A] focus:border-[#EC1E79] focus:ring-1 focus:ring-[#EC1E79] focus:outline-none transition-all placeholder-[#555555]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                    <MessageSquare size={13} className="text-white/50" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your upcoming journey dates, questions, or vehicle requests..."
                    className="w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-[#2A2A2A] focus:border-[#EC1E79] focus:ring-1 focus:ring-[#EC1E79] focus:outline-none transition-all placeholder-[#555555] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[160px] float-right py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(236,30,121,0.4)] hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#1D1D1D] border border-[#2A2A2A] rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#383838] transition-all">
            <div className="flex items-center justify-between gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
              <div className="flex items-center gap-1.5">
                <Navigation size={15} className="text-[#00E5FF] shrink-0" />
                <span className="text-xs font-bold text-white">Hub Location:</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeLocation.id === loc.id
                        ? 'bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white shadow-brand-glow'
                        : 'bg-[#141414] text-white/70 hover:text-white border border-[#2A2A2A]'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-[320px] sm:h-[360px] lg:h-[380px] rounded-xl overflow-hidden border border-[#2E2E2E] bg-[#111111] relative shadow-inner">
              <iframe
                title={`Map for ${activeLocation.name}`}
                src={activeLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.88] hue-rotate-180 brightness-95 contrast-95 opacity-90 hover:opacity-100 transition-opacity"
              />
              
              <div className="absolute bottom-3 left-3 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-lg px-3.5 py-2 text-xs flex items-center gap-2 pointer-events-none">
                <MapPin size={14} className="text-[#EC1E79]" />
                <span className="text-white font-medium">{activeLocation.address}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#2EE59D]" />
                <span>Depot Hours: Mon – Sun: 7:00 AM – 9:00 PM</span>
              </div>
              <span className="text-accent-teal font-medium hidden sm:inline-block">Free Airport Shuttle</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Contact Information
            </h2>
            <p className="text-xs text-white/50 mt-1">Get in touch with our global customer experience hubs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+447856148907"
              className="group bg-[#1D1D1D] border border-[#2A2A2A] hover:border-[#EC1E79]/60 rounded-2xl p-6 flex items-center gap-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(236,30,121,0.15)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#121212] border border-[#2A2A2A] group-hover:border-[#EC1E79] group-hover:shadow-[0_0_15px_rgba(236,30,121,0.4)] flex items-center justify-center text-white shrink-0 transition-all">
                <Phone size={18} className="group-hover:scale-110 transition-transform text-[#EC1E79]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Direct Call</span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#EC1E79] transition-colors">Phone</h4>
                <p className="text-xs text-white/70 font-mono">+44 7856 148907</p>
              </div>
            </a>

            <a
              href="mailto:demo@example.com"
              className="group bg-[#1D1D1D] border border-[#2A2A2A] hover:border-[#9900CC]/60 rounded-2xl p-6 flex items-center gap-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(153,0,204,0.15)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#121212] border border-[#2A2A2A] group-hover:border-[#9900CC] group-hover:shadow-[0_0_15px_rgba(153,0,204,0.4)] flex items-center justify-center text-white shrink-0 transition-all">
                <Mail size={18} className="group-hover:scale-110 transition-transform text-[#9900CC]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Online Support</span>
                <h4 className="text-sm font-bold text-white group-hover:text-accent-pink transition-colors">Email</h4>
                <p className="text-xs text-white/70 font-mono">demo@example.com</p>
              </div>
            </a>

            <div className="group bg-[#1D1D1D] border border-[#2A2A2A] hover:border-[#00E5FF]/60 rounded-2xl p-6 flex items-center gap-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)]">
              <div className="w-12 h-12 rounded-full bg-[#121212] border border-[#2A2A2A] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center justify-center text-white shrink-0 transition-all">
                <MapPin size={18} className="group-hover:scale-110 transition-transform text-[#00E5FF]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Main Office</span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">Address</h4>
                <p className="text-xs text-white/70">Tipu Sultan Road Motijhil, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
