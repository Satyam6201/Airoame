import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-[#383838] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
