import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  size = 'md',
  icon
}) => {
  const baseClasses = 'font-poppins font-medium rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-7 py-3 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] text-white hover:brightness-110 focus:ring-[#4a54c7]',
    secondary: 'bg-[#f8f9fa] text-[#4a54c7] border border-gray-200 hover:bg-gray-100 focus:ring-[#4a54c7]',
    outline: 'bg-transparent border-2 border-[#4a54c7] text-[#4a54c7] hover:bg-[#4a54c7]/10 focus:ring-[#4a54c7]'
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;