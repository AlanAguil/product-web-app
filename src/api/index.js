// Exportación centralizada de todas las APIs
export { authApi } from './auth/auth';
export { userApi } from './user/user';
export { appointmentApi } from './appointment/appointment';
export { whatsappApi } from './whatsapp/whatsapp';
export { reportApi } from './report/report';

// Re-exportar config para acceso directo si es necesario
export { default as API_URL, getAuthHeaders, handleResponse, handleBlobResponse } from './config';
