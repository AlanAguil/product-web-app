import '../../styles/layout/layout.css';
import OverlayPanel from './OverlayPanel';

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

