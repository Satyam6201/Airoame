import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-semibold text-[#A0A0A0] uppercase mb-1.5">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-[#111111] text-white text-sm px-4 py-3 rounded-xl border border-[#2A2A2A] focus:border-[#EC1E79] focus:outline-none focus:ring-1 focus:ring-[#EC1E79] transition-all placeholder-[#71717A] ${className}`}
        {...props}
      />
      {error && <span className="text-[11px] text-red-400 mt-1 block">{error}</span>}
    </div>
  );
};

export default Input;
