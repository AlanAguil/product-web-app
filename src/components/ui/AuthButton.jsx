import '../../styles/ui/AuthButton.css';

const AuthButton = ({
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

export default AuthButton;

