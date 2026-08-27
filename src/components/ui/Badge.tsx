import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'gradient' | 'teal' | 'outline' | 'surface' | 'pink';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gradient',
  children,
  className,
  icon
}) => {
  const variantStyles = {
    gradient: 'bg-brand-gradient text-white shadow-sm font-semibold',
    teal: 'bg-accent-teal/15 text-accent-teal border border-accent-teal/30 font-medium',
    pink: 'bg-accent-pink/15 text-accent-pink border border-accent-pink/30 font-semibold',
    outline: 'border border-border text-content-secondary font-normal',
    surface: 'bg-surface-card border border-border/80 text-content-primary font-medium',
  };

  return (
    <span
      className={twMerge(clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs tracking-wide uppercase',
        variantStyles[variant],
        className
      ))}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
