import '../../styles/layout/AuthLayout.css';
import OverlayPanel from './OverlayPanel';

const AuthLayout = ({ isActive, onToggleToLogin, onToggleToRegister, children }) => {
  return (
    <div className={`auth-container ${isActive ? 'active' : ''}`}>
      {children}
      <OverlayPanel
        isActive={isActive}
        onToggleToLogin={onToggleToLogin}
        onToggleToRegister={onToggleToRegister}
      />
    </div>
  );
};

export default AuthLayout;

