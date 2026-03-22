import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = "px-[28px] py-[12px] font-sans text-[14px] font-medium tracking-[0.15em] uppercase transition-colors duration-[0.4s] border border-black";
  
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black",
    secondary: "bg-white text-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
