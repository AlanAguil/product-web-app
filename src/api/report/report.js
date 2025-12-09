import API_URL, { getAuthHeaders, handleResponse, handleBlobResponse } from '../config';

const REPORTS_URL = `${API_URL}/reports`;

export const reportApi = {
  // POST /reports/generate - Generar reporte administrativo (devuelve PDF)
  generate: async (filters) => {
    const response = await fetch(`${REPORTS_URL}/generate`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(filters),
    });
    return handleBlobResponse(response);
  },

  // GET /reports/history - Obtener historial de reportes
  getHistory: async () => {
    const response = await fetch(`${REPORTS_URL}/history`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // GET /reports/download/:fileName - Descargar reporte existente (devuelve PDF)
  download: async (fileName) => {
    const response = await fetch(`${REPORTS_URL}/download/${encodeURIComponent(fileName)}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleBlobResponse(response);
  },

  // DELETE /reports/:fileName - Eliminar reporte
  delete: async (fileName) => {
    const response = await fetch(`${REPORTS_URL}/${encodeURIComponent(fileName)}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // Helper para descargar PDF como archivo
  downloadAsFile: async (fileName) => {
    const blob = await reportApi.download(fileName);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  },

  // Helper para generar y descargar reporte
  generateAndDownload: async (filters, customFileName) => {
    const blob = await reportApi.generate(filters);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = customFileName || `reporte_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    return blob;
  },
};

export default reportApi;
