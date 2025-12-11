import React from 'react';
import '../../styles/ui/Button.css';

/**
 * Common Button component
 * @param {string} variant - 'primary', 'outline-success', etc.
 * @param {string} type - 'button', 'submit', 'reset'
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional classes
 * @param {object} props - Other props
 */
const Button = ({ 
  variant = 'primary', 
  type = 'button', 
  onClick, 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
