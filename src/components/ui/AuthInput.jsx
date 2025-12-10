import '../../styles/ui/AuthInput.css';

const AuthInput = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  error = null
}) => {
  return (
    <div className="auth-input-wrapper" style={{ width: '100%' }}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`auth-input ${className} ${error ? 'input-error' : ''}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AuthInput;

