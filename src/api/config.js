const API_URL = import.meta.env.BASE_API_URL || 'https://manos-mexicanas-core.duckdns.org/api';

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error('API Error:', {
      status: response.status,
      url: response.url,
      //message: response.message,
      error
    });
    // Manejar 401 - Token expirado o inválido
    if (response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  
  // El backend envuelve respuestas en { data, status, message }
  // Extraer automáticamente el data interno
  return json.data !== undefined ? json.data : json;
};

export const handleBlobResponse = async (response) => {
  if (!response.ok) {
    // Intentar leer el error como JSON
    const errorText = await response.text();
    let errorMessage = `HTTP error! status: ${response.status}`;

    try {
      const errorJson = JSON.parse(errorText);
      errorMessage = errorJson.message || errorMessage;
    } catch {
      // Si no es JSON, usar el texto directamente
      if (errorText) errorMessage = errorText;
    }

    console.error('API Blob Error:', {
      status: response.status,
      url: response.url,
      message: errorMessage
    });

    // Manejar 401 - Token expirado o invalido
    if (response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    throw new Error(errorMessage);
  }
  return response.blob();
};

export default API_URL;
