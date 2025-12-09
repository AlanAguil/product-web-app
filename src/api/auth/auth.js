import API_URL, { handleResponse } from '../config';

const AUTH_URL = `${API_URL}/auth`;

export const authApi = {
  // POST /auth/login - Iniciar sesión
  login: async (email, password) => {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },
};

export default authApi;
