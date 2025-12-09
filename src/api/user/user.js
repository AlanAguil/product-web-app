import API_URL, { getAuthHeaders, handleResponse } from '../config';

const USER_URL = `${API_URL}/user`;

export const userApi = {
  // GET /user/all - Obtener todos los usuarios
  getAll: async () => {
    const response = await fetch(`${USER_URL}/all`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /user/all-active-doctors - Obtener todos los doctores activos
  getAllActiveDoctors: async () => {
    const response = await fetch(`${USER_URL}/all-active-doctors`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /user/:id - Obtener usuario por ID
  getById: async (id) => {
    const response = await fetch(`${USER_URL}/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // POST /user/create - Crear nuevo usuario
  create: async (userData) => {
    const response = await fetch(`${USER_URL}/create`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  // PUT /user/update - Actualizar usuario
  update: async (userData) => {
    const response = await fetch(`${USER_URL}/update`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  // POST /user/register - Registrar nuevo usuario cliente (público)
  register: async (userData) => {
    const response = await fetch(`${USER_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  // POST /user/reset-password - Resetear contraseña
  resetPassword: async (resetData) => {
    const response = await fetch(`${USER_URL}/reset-password`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(resetData),
    });
    return handleResponse(response);
  },

  // POST /user/send-code/:id - Enviar código de verificación por email (público)
  sendCodeEmail: async (email) => {
    const response = await fetch(`${USER_URL}/send-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return handleResponse(response);
  },

  // POST /user/reset-password-with-code - Resetear contraseña con código (público)
  resetPasswordWithCode: async (resetData) => {
    const response = await fetch(`${USER_URL}/reset-password-with-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resetData),
    });
    return handleResponse(response);
  },

  // POST /user/send-verification-code - Enviar código por WhatsApp
  sendVerificationCode: async (id) => {
    const response = await fetch(`${USER_URL}/send-verification-code`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ id }),
    });
    return handleResponse(response);
  },

  // POST /user/verify-code - Verificar código y cambiar contraseña
  verifyCodeAndSetPassword: async (verifyData) => {
    const response = await fetch(`${USER_URL}/verify-code`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(verifyData),
    });
    return handleResponse(response);
  },

  // DELETE /user/delete/:id - Eliminar usuario
  delete: async (id) => {
    const response = await fetch(`${USER_URL}/delete/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // POST /user/find-by-email - Buscar usuario por email (público, para recuperación de contraseña)
  findByEmail: async (email) => {
    const response = await fetch(`${USER_URL}/find-by-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return handleResponse(response);
  },
};

export default userApi;
