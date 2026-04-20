import React from 'react';
import '../styles/overlay.panel.css';
import AuthButton from '@/components/ui/Button';

interface OverlayPanelProps {
  onToggleToLogin: () => void;
  onToggleToRegister: () => void;
  isActive?: boolean;
}

const OverlayPanel: React.FC<OverlayPanelProps> = ({ onToggleToLogin, onToggleToRegister }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>¡Hola amigo!</h1>
          <p>Registrate con tus datos personales para usar todas las funcionalidades del sitio.</p>
          <AuthButton
            variant="outline"
            type="button"
            onClick={onToggleToLogin}
            className="hidden"
          >
            Iniciar sesión
          </AuthButton>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>¡Bienvenido de nuevo!</h1>
          <p>Ingresa con tus correo y contraseña para usar todas las funcionalidades del sitio.</p>
          <AuthButton
            variant="outline"
            type="button"
            onClick={onToggleToRegister}
            className="hidden"
          >
            Registrarse
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default OverlayPanel;
