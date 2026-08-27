import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'teal' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 cursor-pointer gap-2';
  const sizes = { sm: 'px-4 py-1.5 text-xs', md: 'px-6 py-2.5 text-sm', lg: 'px-8 py-3.5 text-base' };
  const variants = {
    primary: 'bg-gradient-to-r from-[#EC1E79] to-[#7B2FF7] text-white shadow-lg hover:shadow-[0_0_25px_rgba(236,30,121,0.5)] hover:-translate-y-0.5',
    secondary: 'bg-[#1A1A1A] border border-[#2A2A2A] text-white hover:border-[#383838]',
    teal: 'bg-gradient-to-r from-[#2FE6C9] to-[#7B2FF7] text-white font-bold hover:shadow-[0_0_20px_rgba(47,230,201,0.4)]',
    outline: 'bg-transparent border border-[#2A2A2A] text-white hover:border-[#EC1E79] hover:text-[#EC1E79]',
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`} {...props}>
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
