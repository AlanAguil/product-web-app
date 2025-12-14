import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, loading, getUserRole, hasAnyRole } = useAuth();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            color: '#667eea',
            fontWeight: '600',
          }}
        >
          Cargando...
        </div>
      </div>
    );
  }

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Validar roles si están especificados
  if (allowedRoles && allowedRoles.length > 0) {
    const userRole = getUserRole();

    // Verificar que el usuario tenga un rol válido
    if (!userRole) {
      return <Navigate to="/login" replace />;
    }

    // Verificar que el rol del usuario esté en la lista de roles permitidos
    if (!hasAnyRole(allowedRoles)) {
      // Redirigir según el rol del usuario a su página principal correspondiente
      const roleRedirectMap = {
        PATIENT: '/home-usuario',
        DOCTOR: '/home-medico',
        MANAGEMENT: '/home-direccion',
        ADMIN: '/home-administrativo',
        ADMINISTRATIVE_STAFF: '/home-administrativo',
      };

      const redirectPath = roleRedirectMap[userRole] || '/login';
      return <Navigate to={redirectPath} replace />;
    }
  }

  return children;
};

export default ProtectedRoute;