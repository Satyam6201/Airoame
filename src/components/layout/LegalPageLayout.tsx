import React from 'react';
import { Card } from '../ui/Card';

interface LegalPageLayoutProps {
  title: string;
  promoTag: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  promoTag,
  lastUpdated = 'August 2026',
  children,
}) => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Promo Tag */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#EC1E79]/40 text-[#EC1E79] text-xs font-bold uppercase tracking-wider mb-3">
            <span>{promoTag}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-[#71717A] mt-2">
            Last Updated: {lastUpdated} • Effective for all travelers
          </p>
        </div>

        {/* Long-form Content Card */}
        <Card className="p-8 sm:p-12 space-y-8 shadow-card leading-relaxed">
          {children}
        </Card>

      </div>
    </div>
  );
};

export default LegalPageLayout;
