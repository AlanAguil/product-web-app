import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authApi } from '@/modules/auth/services/auth';
import { UserService } from '@/modules/user/services/user.service';

interface User {
  role?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<any>;
  register: (userData: any) => Promise<any>;
  logout: () => void;
  getCurrentUser: () => User | null;
  isAuthenticated: boolean;
  getUserRole: () => string | null;
  hasRole: (role: string) => boolean;
  hasAnyRole: (roles: string[]) => boolean;
  updateUser: (userData: Partial<User>) => User;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Función para cargar el usuario desde localStorage
  const loadUserFromStorage = useCallback(() => {
    try {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (token && storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        return { token, user: parsedUser };
      }
      return null;
    } catch (error) {
      console.error('Error loading user from storage:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return null;
    }
  }, []);

  // Verificar si hay un usuario autenticado al cargar la app
  useEffect(() => {
    loadUserFromStorage();
    setLoading(false);
  }, [loadUserFromStorage]);

  // Función para guardar datos de autenticación
  const saveAuthData = useCallback((token: string, userData: User) => {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error('Error saving auth data:', error);
      setError('Error al guardar los datos de autenticación');
    }
  }, []);

  // Función para limpiar datos de autenticación
  const clearAuthData = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setError(null);
  }, []);

  // Login
  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const data = await authApi.login(email, password);

      // El backend retorna access_token, no token
      if (data.access_token) {
        saveAuthData(data.access_token, data.user);
      } else {
        throw new Error('No se recibió el token de acceso');
      }

      return data;
    } catch (error: any) {
      const errorMessage = error.message || 'Error al iniciar sesión';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register
  const register = async (userData: any) => {
    try {
      setError(null);
      setLoading(true);
      const data = await UserService.register(userData);
      return data;
    } catch (error: any) {
      const errorMessage = error.message || 'Error al registrar usuario';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = useCallback(() => {
    clearAuthData();
  }, [clearAuthData]);

  // Obtener usuario actual
  const getCurrentUser = useCallback(() => {
    if (user) return user;
    return loadUserFromStorage()?.user || null;
  }, [user, loadUserFromStorage]);

  // Verificar si está autenticado
  const isAuthenticated = useCallback(() => {
    const token = localStorage.getItem('token');
    const hasUser = !!user || !!localStorage.getItem('user');
    return !!(token && hasUser);
  }, [user]);

  // Obtener el rol del usuario
  const getUserRole = useCallback(() => {
    return user?.role || null;
  }, [user]);

  // Verificar si el usuario tiene un rol específico
  const hasRole = useCallback((role: string) => {
    return getUserRole() === role;
  }, [getUserRole]);

  // Verificar si el usuario tiene alguno de los roles especificados
  const hasAnyRole = useCallback((roles: string[]) => {
    const userRole = getUserRole();
    return userRole ? roles.includes(userRole) : false;
  }, [getUserRole]);

  // Actualizar información del usuario
  const updateUser = useCallback((userData: Partial<User>) => {
    try {
      const updatedUser = { ...user, ...userData };
      const token = localStorage.getItem('token');
      if (token) saveAuthData(token, updatedUser);
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Error al actualizar la información del usuario');
      throw error;
    }
  }, [user, saveAuthData]);

  const value = {
    // Estado
    user,
    loading,
    error,

    // Métodos de autenticación
    login,
    register,
    logout,

    // Utilidades
    getCurrentUser,
    isAuthenticated: isAuthenticated(),
    getUserRole,
    hasRole,
    hasAnyRole,
    updateUser,

    // Helpers
    clearError: () => setError(null),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
