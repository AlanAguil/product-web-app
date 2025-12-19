import './styles/input.css';

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  error = null,
  maxLength = null,
  minLength = null,
}) => {
  return (
    <div className="auth-input-wrapper">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`auth-input ${className} ${error ? 'input-error' : ''}`}
        maxLength={maxLength}
        minLength={minLength}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;

