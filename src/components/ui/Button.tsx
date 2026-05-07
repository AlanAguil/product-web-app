import React, { type ReactNode, type MouseEvent } from 'react';
import './styles/button.css';

interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false
}) => {
  const buttonClass = `btn btn-${variant} ${className} ${disabled ? 'btn-disabled' : ''}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
