import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-white/70 text-xs border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl sm:text-3xl font-normal tracking-wide text-white lowercase">
                airoame
              </span>
            </Link>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              Premium overland campervans and motorhomes engineered for modern digital nomads, nature explorers, and highway dreamers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] flex items-center justify-center text-white/70 hover:text-white hover:border-[#EC1E79] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] flex items-center justify-center text-white/70 hover:text-white hover:border-[#EC1E79] transition-all"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] flex items-center justify-center text-white/70 hover:text-white hover:border-[#EC1E79] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] flex items-center justify-center text-white/70 hover:text-white hover:border-[#EC1E79] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="hover:text-white transition-colors">
                  Fleet & Vehicles
                </Link>
              </li>
              <li>
                <Link to="/plan" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="hover:text-white transition-colors">
                  Service Details
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition-colors">
                  Travel Journal & Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Help & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/reset-password" className="hover:text-white transition-colors">
                  Account Recovery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#EC1E79] shrink-0 mt-0.5" />
                <span className="text-white/60">Tipu Sultan Road Motijhil, Dhaka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#EC1E79] shrink-0" />
                <span className="text-white/60">+44 7856 148907</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#EC1E79] shrink-0" />
                <span className="text-white/60">demo@example.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Airoame Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
