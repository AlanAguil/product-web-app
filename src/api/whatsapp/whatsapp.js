import API_URL, { getAuthHeaders, handleResponse } from '../config';

const WHATSAPP_URL = `${API_URL}/whatsapp`;

export const whatsappApi = {
  // POST /whatsapp/send-message - Enviar mensaje de WhatsApp
  sendMessage: async (phone, message) => {
    const response = await fetch(`${WHATSAPP_URL}/send-message`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ phone, message }),
    });
    return handleResponse(response);
  },

  // POST /whatsapp/send-bulk-message - Enviar mensaje masivo de WhatsApp
  sendBulkMessage: async (phones, message) => {
    const response = await fetch(`${WHATSAPP_URL}/send-bulk-message`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ phones, message }),
    });
    return handleResponse(response);
  },

  // GET /whatsapp/qr - Obtener código QR para conectar WhatsApp
  getQRCode: async () => {
    const response = await fetch(`${WHATSAPP_URL}/qr`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // POST /whatsapp/force-logout - Forzar cierre de sesión de WhatsApp
  forceLogout: async () => {
    const response = await fetch(`${WHATSAPP_URL}/force-logout`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

export default whatsappApi;
