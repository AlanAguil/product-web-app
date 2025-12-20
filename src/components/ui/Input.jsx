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
