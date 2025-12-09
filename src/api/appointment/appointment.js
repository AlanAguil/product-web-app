import API_URL, { getAuthHeaders, handleResponse } from '../config';

const APPOINTMENT_URL = `${API_URL}/appointment`;

export const appointmentApi = {
  // GET /appointment/all - Obtener todas las citas
  getAll: async () => {
    const response = await fetch(`${APPOINTMENT_URL}/all`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/active - Obtener citas activas
  getAllActive: async () => {
    const response = await fetch(`${APPOINTMENT_URL}/active`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/active/:id - Obtener cita activa por ID
  getActiveById: async (id) => {
    const response = await fetch(`${APPOINTMENT_URL}/active/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/:id - Obtener cita por ID
  getById: async (id) => {
    const response = await fetch(`${APPOINTMENT_URL}/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/user/:userId - Obtener citas por usuario
  getByUser: async (userId) => {
    const response = await fetch(`${APPOINTMENT_URL}/user/${userId}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/status/:status - Obtener citas por estado
  getByStatus: async (status) => {
    const response = await fetch(`${APPOINTMENT_URL}/status/${status}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/type/:type - Obtener citas por tipo de consulta
  getByType: async (type) => {
    const response = await fetch(`${APPOINTMENT_URL}/type/${encodeURIComponent(type)}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /appointment/date-range - Obtener citas por rango de fechas
  getByDateRange: async (startDate, endDate) => {
    const params = new URLSearchParams({ startDate, endDate });
    console.log('📡 [API] getByDateRange llamado:', { startDate, endDate, url: `${APPOINTMENT_URL}/date-range?${params}` });
    const response = await fetch(`${APPOINTMENT_URL}/date-range?${params}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    const result = await handleResponse(response);
    console.log('📡 [API] getByDateRange respuesta:', result);
    return result;
  },

  // GET /appointment/available-slots/:medicId - Obtener slots disponibles
  getAvailableSlots: async (medicId, date) => {
    const params = date ? new URLSearchParams({ date }) : '';
    const url = date
      ? `${APPOINTMENT_URL}/available-slots/${medicId}?${params}`
      : `${APPOINTMENT_URL}/available-slots/${medicId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // POST /appointment/create - Crear nueva cita
  create: async (appointmentData) => {
    const response = await fetch(`${APPOINTMENT_URL}/create`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(appointmentData),
    });
    return handleResponse(response);
  },

  // POST /appointment/create-admin - Crear nueva cita desde admin (crea paciente si no existe)
  createAdmin: async (appointmentData) => {
    const response = await fetch(`${APPOINTMENT_URL}/create-admin`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(appointmentData),
    });
    return handleResponse(response);
  },

  // PUT /appointment/update - Actualizar cita
  update: async (appointmentData) => {
    const response = await fetch(`${APPOINTMENT_URL}/update`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(appointmentData),
    });
    return handleResponse(response);
  },

  // PUT /appointment/status/:id - Actualizar estado de cita
  updateStatus: async (statusData) => {
    const response = await fetch(`${APPOINTMENT_URL}/status/${statusData.id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(statusData),
    });
    return handleResponse(response);
  },

  // POST /appointment/cancel/:id - Cancelar cita
  cancel: async (id) => {
    const response = await fetch(`${APPOINTMENT_URL}/cancel/${id}`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // POST /appointment/restore/:id - Restaurar cita eliminada
  restore: async (id) => {
    const response = await fetch(`${APPOINTMENT_URL}/restore/${id}`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // DELETE /appointment/delete/:id - Eliminar cita
  delete: async (id) => {
    const response = await fetch(`${APPOINTMENT_URL}/delete/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // Helper: Obtener tipos de consulta estándar (los 3 tipos válidos)
  getConsultationTypes: async () => {
    // Siempre devolver los 3 tipos estándar para mantener consistencia
    return [
      'Cirugía Refractiva',
      'Control de Glaucoma',
      'Revisión General'
    ];
  },

  // GET /appointment/doctor/agenda - Consultar agenda del médico
  getDoctorAgenda: async (monthYear, type) => {
    const params = new URLSearchParams({ monthYear });
    if (type) params.append('type', type);
    
    const response = await fetch(`${APPOINTMENT_URL}/doctor/agenda?${params}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

export default appointmentApi;
