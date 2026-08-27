import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  title: string;
  description: string;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, description, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-surface-card border rounded-2xl overflow-hidden mb-3 transition-all duration-300 ${
      isOpen ? 'border-accent-pink/40 shadow-brand-glow/10' : 'border-border hover:border-border-bright'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left text-white font-medium text-sm sm:text-base hover:text-accent-pink transition-colors gap-4"
        aria-expanded={isOpen}
      >
        <span className="leading-snug">{title}</span>
        <span className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
          isOpen ? 'bg-gradient-to-r from-accent-pink to-accent-purple text-white rotate-180' : 'bg-surface text-content-secondary'
        }`}>
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-content-secondary leading-relaxed border-t border-border/60 animate-fadeIn">
          {description}
        </div>
      )}
    </div>
  );
};

export default Accordion;
