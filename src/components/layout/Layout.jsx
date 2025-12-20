import './styles/layout.css';
import OverlayPanel from '@/features/auth/components/OverlayPanel';

const Layout = ({ isActive, onToggleToLogin, onToggleToRegister, children }) => {
  return (
    <div className={`layout-card ${isActive ? 'active' : ''}`}>
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

