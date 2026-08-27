import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, RotateCw, AlertCircle } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [email, setEmail] = useState('demo@email.com');
  const [password, setPassword] = useState('password123');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('264155');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  // Generate random 6-character captcha
  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Captcha (case-insensitive for convenience)
    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setCaptchaError(true);
      showToast({
        type: 'error',
        title: 'Invalid Captcha Code',
        message: 'Please re-enter the code shown in the blue security box.',
      });
      return;
    }

    setIsLoading(true);
    setCaptchaError(false);

    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: 'success',
        title: 'Login Successful!',
        message: 'Welcome back to Airoome.',
      });
      navigate('/');
    }, 700);
  };

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-[#1A1A1A]">
      
      {/* LEFT COLUMN: Vintage VW Campervans Photo (Full height & width) */}
      <div className="relative hidden lg:block h-full w-full overflow-hidden border-r border-[#2A2A2A] bg-[#111111]">
        <img
          src="/login-campervans.png"
          alt="Airome Vintage VW Campervans in Nature"
          className="w-full h-full object-cover object-center"
        />
        {/* Vignette edge-blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* RIGHT COLUMN: Minimalist Dark Login Form */}
      <div className="h-full overflow-y-auto flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 bg-[#1F1F1F]">
        <div className="w-full max-w-md space-y-6 my-auto animate-fadeIn">
          
          {/* Logo at top */}
          <div className="text-center">
            <Link to="/" className="inline-block group">
              <span className="text-3xl sm:text-4xl font-normal tracking-wide text-white lowercase">
                airoame
              </span>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            
            {/* Username or E-mail Field */}
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Username or E-mail
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@email.com"
                className="w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3 pr-10 rounded-lg border border-[#2A2A2A] focus:border-accent-pink focus:outline-none transition-all placeholder-[#555555]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="flex items-center justify-between text-xs text-white/70">
              <label className="flex items-center gap-2 cursor-pointer select-none hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded bg-[#121212] border-[#333333] accent-accent-pink cursor-pointer"
                />
                <span>Remember me</span>
              </label>
              <Link
                to="/reset-password"
                className="hover:text-accent-pink transition-colors font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* CAPTCHA SECTION */}
            <div className="space-y-2 pt-1">
              
              {/* Neon Cyan Stylized CAPTCHA Box */}
              <div className="relative flex items-center justify-between px-5 py-3 rounded-lg bg-[#06101E] border border-[#123055] overflow-hidden select-none">
                {/* Wavy Background Noise */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:8px_8px]" />
                
                {/* Stylized Security Characters */}
                <div className="flex items-center gap-3 tracking-widest text-xl sm:text-2xl font-mono font-black text-[#00E5FF] drop-shadow-[0_0_12px_rgba(0,229,255,0.75)]">
                  {captchaCode.split('').map((char, index) => {
                    const rotations = [-8, 6, -12, 10, -5, 8];
                    return (
                      <span
                        key={index}
                        style={{
                          transform: `rotate(${rotations[index % rotations.length]}deg) translateY(${index % 2 === 0 ? '-2px' : '2px'})`,
                          display: 'inline-block',
                        }}
                        className="select-none font-serif italic"
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>

                {/* Regenerate Button */}
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-[#00E5FF]/70 hover:text-[#00E5FF] p-1.5 rounded-full hover:bg-white/5 transition-all"
                  title="Generate new code"
                >
                  <RotateCw size={15} />
                </button>
              </div>

              {/* Enter Code Input */}
              <div>
                <input
                  type="text"
                  required
                  value={captchaInput}
                  onChange={(e) => {
                    setCaptchaInput(e.target.value);
                    if (captchaError) setCaptchaError(false);
                  }}
                  placeholder="Enter Code"
                  className={`w-full bg-[#121212] text-white text-xs sm:text-sm px-4 py-3 rounded-lg border focus:outline-none transition-all placeholder-[#555555] text-center tracking-widest ${
                    captchaError
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-[#2A2A2A] focus:border-accent-pink'
                  }`}
                />
                {captchaError && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center justify-center gap-1">
                    <AlertCircle size={12} /> Code does not match the image.
                  </p>
                )}
              </div>
            </div>

            {/* Pink Login Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_20px_rgba(236,30,121,0.35)] hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Login'}
              </button>
            </div>

            {/* Footer switch to Register */}
            <p className="text-xs text-center text-white/70 pt-2">
              New here?{' '}
              <Link to="/register" className="font-semibold text-white hover:text-accent-pink transition-colors">
                Create an account
              </Link>
            </p>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Login;
