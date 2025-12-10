import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../common/Button';
import '../../styles/Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">CitApp</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
          
          {isAuthenticated && (
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          )}

          <div className="navbar-actions">
            {isAuthenticated ? (
              <div className="user-section">
                <span className="user-name">Hola, {user?.name || 'Usuario'}</span>
                <Button variant="outline" size="small" onClick={handleLogout}>
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="small">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="small">
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
