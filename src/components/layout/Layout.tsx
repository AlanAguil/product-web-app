import React, { type ReactNode } from 'react';
import './styles/layout.css';
import OverlayPanel from '@/modules/auth/components/OverlayPanel';

interface LayoutProps {
  isActive: boolean;
  onToggleToLogin: () => void;
  onToggleToRegister: () => void;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isActive, onToggleToLogin, onToggleToRegister, children }) => {
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
