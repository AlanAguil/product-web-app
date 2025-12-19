import './styles/button.css';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = ''
}) => {
  const buttonClass = `auth-button auth-button-${variant} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

