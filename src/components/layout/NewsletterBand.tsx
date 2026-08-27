import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useToast } from '../ui/Toast';

export const NewsletterBand: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    showToast({
      type: 'success',
      title: 'Subscribed Successfully!',
      message: 'Thank you for joining the Airoame overland community.',
    });
    setEmail('');
  };

  return (
    <section className="bg-[#171717] py-16 border-t border-[#242424] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto mb-8">
          Get exclusive route guides, campervan discounts, and off-grid tips directly in your inbox.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1F1F] border border-[#2EE59D]/50 text-[#2EE59D] text-xs sm:text-sm font-semibold animate-fadeIn">
            <CheckCircle2 size={16} />
            <span>You are subscribed! Watch your inbox for secret roadtrip drops.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#121212] border border-[#2E2E2E] focus:border-[#EC1E79] focus:outline-none text-xs sm:text-sm text-white placeholder-white/40 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EC1E79] to-[#9900CC] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-brand-glow hover:opacity-90 active:scale-95 transition-all shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterBand;
