import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Info, HelpCircle, Shield, FileText, Wrench, KeyRound, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAboutDropdownOpen(false);
    setMobileAboutExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Plan', path: '/plan' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutDropdownItems = [
    { name: 'About Us', path: '/about', icon: <Info size={14} className="text-[#EC1E79]" /> },
    { name: 'F.A.Q.', path: '/faq', icon: <HelpCircle size={14} className="text-[#00E5FF]" /> },
    { name: 'Privacy Policy', path: '/privacy-policy', icon: <Shield size={14} className="text-[#2EE59D]" /> },
    { name: 'Terms & Conditions', path: '/terms', icon: <FileText size={14} className="text-[#FFB800]" /> },
    { name: 'Service Details', path: '/service-details', icon: <Wrench size={14} className="text-[#9900CC]" /> },
    { name: 'Reset Password', path: '/reset-password', icon: <KeyRound size={14} className="text-[#EC1E79]" /> },
    { name: 'Splash Preview', path: '/loading', icon: <Sparkles size={14} className="text-[#00E5FF]" /> },
  ];

  const isAboutActive = [
    '/about',
    '/faq',
    '/privacy-policy',
    '/privacy',
    '/terms',
    '/terms-and-conditions',
    '/service-details',
    '/services',
  ].includes(location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHomePage || isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-xl border-b border-[#242424] shadow-2xl py-3.5 sm:py-4'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl sm:text-3xl font-normal tracking-wide text-white lowercase group-hover:text-accent-pink transition-colors">
            airoame
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path === '/blogs' && location.pathname.startsWith('/blogs')) ||
              (link.path === '/plan' && (location.pathname === '/plan' || location.pathname === '/pricing'));
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-xs sm:text-sm font-medium transition-all flex items-center gap-1 py-1 ${
                  isActive
                    ? 'text-white font-bold border-b-2 border-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className={`relative text-xs sm:text-sm font-medium transition-all flex items-center gap-1 py-1 cursor-pointer ${
                isAboutActive
                  ? 'text-white font-bold border-b-2 border-white'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-expanded={isAboutDropdownOpen}
            >
              <span>About Us</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180 text-accent-pink' : 'opacity-70'}`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#181818]/95 backdrop-blur-2xl border border-[#2E2E2E] rounded-xl shadow-2xl py-2 z-50 transition-all duration-200 origin-top ${
                isAboutDropdownOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40 border-b border-[#242424] mb-1">
                Company & Legal
              </div>

              {aboutDropdownItems.map((item) => {
                const isItemActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium transition-colors ${
                      isItemActive
                        ? 'text-white bg-[#EC1E79]/15 font-bold border-l-2 border-[#EC1E79]'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-[#222222] border border-[#3A3A3A] text-white text-xs font-semibold hover:bg-[#2A2A2A] hover:border-white/30 transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white text-xs font-semibold shadow-[0_4px_16px_rgba(236,30,121,0.35)] hover:opacity-95 transition-all"
          >
            Register
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#2A2A2A] text-white hover:text-accent-pink transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#141414]/98 backdrop-blur-2xl border-b border-[#2A2A2A] px-5 py-5 space-y-2 animate-slideUp max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path === '/plan' && (location.pathname === '/plan' || location.pathname === '/pricing'));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-white font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-1">
            <button
              onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isAboutActive
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>About & Legal</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${mobileAboutExpanded ? 'rotate-180 text-accent-pink' : ''}`}
              />
            </button>

            {mobileAboutExpanded && (
              <div className="pl-4 pr-2 py-2 space-y-1.5 bg-[#1A1A1A] rounded-lg mt-1 border border-[#262626] animate-fadeIn">
                {aboutDropdownItems.map((item) => {
                  const isItemActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                        isItemActive
                          ? 'text-white bg-[#EC1E79]/20 font-bold'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="shrink-0">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#2A2A2A] grid grid-cols-2 gap-3">
            <Link
              to="/login"
              className="py-2.5 rounded-lg bg-[#222222] border border-[#3A3A3A] text-white text-xs font-semibold text-center hover:bg-[#2A2A2A] transition-all"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="py-2.5 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white text-xs font-semibold text-center shadow-brand-glow hover:opacity-95 transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
