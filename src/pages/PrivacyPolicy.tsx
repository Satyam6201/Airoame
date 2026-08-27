import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#171717] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Breadcrumb */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Privacy Policy</span>
          </div>
        </div>

        {/* Bulleted Content Sections */}
        <div className="space-y-10 text-sm leading-relaxed max-w-4xl mx-auto">
          
          {/* Section 1 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>What information do we collect?</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              We gather data from you when you register on our site, submit a request, buy any services, react to an overview, or round out a structure. At the point when requesting any assistance or enrolling on our site, as suitable, you might be approached to enter your: name, email address, or telephone number. You may, nonetheless, visit our site anonymously.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>How do we protect your information?</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              All provided delicate/credit data is sent through Stripe. After an exchange, your private data (credit cards, social security numbers, financials, and so on) won't be put away on our workers.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>Do we disclose any information to outside parties?</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              We don't sell, exchange, or in any case move to outside gatherings by and by recognizable data. This does exclude confided in outsiders who help us in working our site, leading our business, or adjusting you, since those gatherings consent to keep this data private. We may likewise deliver your data when we accept discharge is suitable to follow the law, implement our site strategies, or ensure our own or others' rights, property, or wellbeing.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>Children's Online Privacy Protection Act Compliance</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              We are consistent with the prerequisites of COPPA (Children's Online Privacy Protection Act), we don't gather any data from anybody under 13 years old. Our site, items, and administrations are completely coordinated to individuals who are in any event 13 years of age or more established.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>Changes to our Privacy Policy</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              If we decide to change our privacy policy, we will post those changes on this page.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>How long we retain your information?</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              At the point when you register for our site, we cycle and keep your information we have about you however long you don't erase the record or withdraw yourself (subject to laws and guidelines).
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
              <span className="text-white text-xl leading-none select-none">•</span>
              <span>What we don't do with your data?</span>
            </h2>
            <p className="text-[#A3A3A3] text-xs sm:text-sm pl-4 leading-relaxed">
              We don't and will never share, unveil, sell, or in any case give your information to different organizations for the promoting of their items or administrations.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
