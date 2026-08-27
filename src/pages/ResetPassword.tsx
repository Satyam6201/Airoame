import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Eye, EyeOff, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // Step 1: Request Code | Step 2: Set New Password | Step 3: Success
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [method, setMethod] = useState<'E-Mail Address' | 'Mobile Number'>('E-Mail Address');
  const [identifier, setIdentifier] = useState('demo@email.com');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: 'success',
        title: 'Verification Code Sent!',
        message: `A 6-digit recovery code has been sent to your ${method.toLowerCase()}.`,
      });
      setStep(2);
    }, 700);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      showToast({
        type: 'error',
        title: 'Passwords Do Not Match',
        message: 'Please ensure both passwords match before saving.',
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      showToast({
        type: 'success',
        title: 'Password Updated!',
        message: 'Your password has been changed. Redirecting to login...',
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 700);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#0A0D14]">
      
      {/* Full-bleed Aurora & Westfalia Campervan Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/aurora-westfalia.png"
          alt="Northern Lights Aurora over Westfalia Campervan"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Centered Frosted Glass Card */}
      <div className="relative z-10 w-full max-w-md my-8 animate-fadeIn">
        <div className="bg-[#181C20]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl space-y-6">
          
          {/* Logo & Title */}
          <div className="text-center space-y-2">
            <Link to="/" className="inline-block group">
              <span className="text-3xl sm:text-4xl font-normal tracking-wide text-white lowercase">
                airoame
              </span>
            </Link>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Reset Password
            </h2>
          </div>

          {/* STEP 1: Select delivery method & send code */}
          {step === 1 && (
            <form onSubmit={handleSendCode} className="space-y-4 pt-1">
              {/* Select One Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  Select One
                </label>
                <div className="relative">
                  <select
                    value={method}
                    onChange={(e) => {
                      const val = e.target.value as 'E-Mail Address' | 'Mobile Number';
                      setMethod(val);
                      setIdentifier(val === 'E-Mail Address' ? 'demo@email.com' : '+1 (555) 234-5678');
                    }}
                    className="w-full bg-[#12151A]/90 text-white text-sm px-4 py-3.5 pr-10 rounded-xl border border-white/10 focus:border-accent-pink focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="E-Mail Address">E-Mail Address</option>
                    <option value="Mobile Number">Mobile Number</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                </div>
              </div>

              {/* Dynamic Target Input */}
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  {method}
                </label>
                <input
                  type={method === 'E-Mail Address' ? 'email' : 'tel'}
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={method === 'E-Mail Address' ? 'demo@email.com' : '+1 (555) 234-5678'}
                  className="w-full bg-[#12151A]/90 text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:border-accent-pink focus:outline-none transition-all placeholder-white/30"
                />
              </div>

              {/* Send Password Code Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Sending Code...' : 'Send Password Code'}
                </button>
              </div>

              {/* Back to Login */}
              <p className="text-xs text-center text-white/70 pt-2">
                Remember your password?{' '}
                <Link to="/login" className="font-semibold text-white hover:text-accent-pink transition-colors">
                  Back to Login
                </Link>
              </p>
            </form>
          )}

          {/* STEP 2: Enter New Password & Confirm */}
          {step === 2 && (
            <form onSubmit={handleResetPassword} className="space-y-4 pt-1">
              {/* New Password */}
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••••••••••"
                    className="w-full bg-[#12151A]/90 text-white text-sm px-4 py-3.5 pr-10 rounded-xl border border-white/10 focus:border-accent-pink focus:outline-none transition-all placeholder-white/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                    aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                  >
                    {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••••••••"
                    className="w-full bg-[#12151A]/90 text-white text-sm px-4 py-3.5 pr-10 rounded-xl border border-white/10 focus:border-accent-pink focus:outline-none transition-all placeholder-white/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Reset Password Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Updating Password...' : 'Reset Password'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-white/70 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="hover:text-accent-pink flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={13} /> Change delivery method
                </button>
                <Link to="/login" className="hover:text-accent-pink transition-colors">
                  Back to Login
                </Link>
              </div>
            </form>
          )}

          {/* STEP 3: Success Screen */}
          {step === 3 && (
            <div className="text-center py-6 space-y-4 animate-slideUp">
              <div className="w-14 h-14 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center mx-auto border border-accent-teal/40 shadow-teal-glow">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Password Changed!</h3>
              <p className="text-xs text-white/70">
                Your password has been successfully updated. Redirecting you to login...
              </p>
              <div className="pt-2">
                <Link
                  to="/login"
                  className="inline-block px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  Go to Login Now
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default ResetPassword;
