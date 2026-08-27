import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onFinish?: () => void;
  minDuration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onFinish,
  minDuration = 1200,
}) => {
  const [progress, setProgress] = useState(15);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 180);

    const finishTimeout = setTimeout(() => {
      setProgress(100);
      setIsFadingOut(true);
      setTimeout(() => {
        onFinish?.();
      }, 500);
    }, minDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
    };
  }, [minDuration, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0D0D] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Full-bleed background photo (mountain road campervan) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-mountain-road.png"
          alt="Airoome Loading Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/80 backdrop-blur-sm" />
      </div>

      {/* Centered Loading Brand Content */}
      <div className="relative z-10 text-center max-w-sm px-6 animate-fadeIn">
        
        {/* Brand Logo with Glow */}
        <div className="inline-block mb-4 relative">
          <div className="text-4xl sm:text-5xl font-black tracking-tight text-white capitalize">
            airoome<span className="text-accent-pink">.</span>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-pink/20 to-accent-purple/20 blur-xl -z-10 rounded-full" />
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-content-secondary mb-6 flex items-center justify-center gap-1.5 font-medium">
          <Sparkles size={14} className="text-accent-teal animate-spin" style={{ animationDuration: '4s' }} />
          <span>Curating your wilderness escape...</span>
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-teal rounded-full transition-all duration-300 shadow-brand-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="text-[11px] font-mono text-content-muted">
          {progress}%
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
