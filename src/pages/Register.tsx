import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'United States',
    countryCode: '+1',
    mobileNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const countryCodes = [
    { country: 'United States', code: '+1' },
    { country: 'India', code: '+91' },
    { country: 'United Kingdom', code: '+44' },
    { country: 'Canada', code: '+1' },
    { country: 'Australia', code: '+61' },
    { country: 'Germany', code: '+49' },
    { country: 'France', code: '+33' },
  ];

  const handleCountryChange = (countryName: string) => {
    const found = countryCodes.find((c) => c.country === countryName);
    setFormData((prev) => ({
      ...prev,
      country: countryName,
      countryCode: found ? found.code : '+1',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      showToast({
        type: 'error',
        title: 'Passwords Do Not Match',
        message: 'Please make sure both passwords match before registering.',
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: 'success',
        title: 'Account Created Successfully!',
        message: `Welcome to Airoome, ${formData.firstName || 'Traveler'}! You can now sign in.`,
      });
      navigate('/login');
    }, 700);
  };

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-[#1A1A1A]">
      
      {/* LEFT COLUMN: Forest Campfire Photo (Full height & width) */}
      <div className="relative hidden lg:block h-full w-full overflow-hidden border-r border-[#2A2A2A] bg-[#111111]">
        <img
          src="/signup-campers.png"
          alt="Campers around campfire in redwood forest"
          className="w-full h-full object-cover object-center"
        />
        {/* Vignette edge-blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* RIGHT COLUMN: 2-Column Dark Signup Form */}
      <div className="h-full overflow-y-auto flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 bg-[#1F1F1F]">
        <div className="w-full max-w-lg space-y-4 my-auto animate-fadeIn py-4">
          
          {/* Logo at top */}
          <div className="text-center mb-1">
            <Link to="/" className="inline-block group">
              <span className="text-3xl sm:text-4xl font-normal tracking-wide text-white lowercase">
                airoame
              </span>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 pt-1">
            
            {/* ROW 1: First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="John"
                  className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Doe"
                  className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                />
              </div>
            </div>

            {/* ROW 2: Country & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  Country
                </label>
                <div className="relative">
                  <select
                    value={formData.country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 pr-10 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.country} value={c.country}>
                        {c.country}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  Mobile Number
                </label>
                <div className="flex rounded-lg overflow-hidden border border-[#2A2A2A] focus-within:border-accent-pink transition-all bg-[#121212]">
                  <span className="px-3 py-2.5 bg-[#1C1C1C] text-white/80 text-xs font-semibold border-r border-[#2A2A2A] select-none flex items-center justify-center shrink-0">
                    {formData.countryCode}
                  </span>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="9994585226"
                    className="w-full bg-transparent text-white text-xs sm:text-sm px-3 py-2.5 focus:outline-none placeholder-[#555555]"
                  />
                </div>
              </div>
            </div>

            {/* ROW 3: Username & E-Mail Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="Username"
                  className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="E-mail Address"
                  className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                />
              </div>
            </div>

            {/* ROW 4: Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password"
                    className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 pr-9 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                    className="w-full bg-[#121212] text-white text-xs sm:text-sm px-3.5 py-2.5 pr-9 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Pink Register Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_20px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {isLoading ? 'Creating account...' : 'Register'}
              </button>
            </div>

            {/* Footer switch to Sign In */}
            <p className="text-xs text-center text-white/70 pt-1">
              Already have an Account?{' '}
              <Link to="/login" className="font-semibold text-white hover:text-accent-pink transition-colors">
                Sign In
              </Link>
            </p>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Register;
