import '@/components/layout/styles/layout.css';
import OverlayPanel from '@/features/auth/components/OverlayPanel';

const Layout = ({ isActive, onToggleToLogin, onToggleToRegister, children }) => {
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

export default Layout;

