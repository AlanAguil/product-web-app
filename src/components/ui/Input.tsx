import React, { type ChangeEvent } from 'react';
import './styles/input.css';

interface InputProps {
  type?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | null;
  maxLength?: number;
  minLength?: number;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  error = null,
  maxLength,
  minLength,
}) => {
  return (
    <div className="form-input-wrapper">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`form-input ${className} ${error ? 'input-error' : ''}`}
        maxLength={maxLength}
        minLength={minLength}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
