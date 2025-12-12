// src/api/axiosInstance.js
import axios from 'axios';
import { requestInterceptor, requestErrorInterceptor, responseInterceptor, responseErrorInterceptor } from '../interceptors/api.interceptor';

// 1. Crear la instancia con configuración base
const axiosInstance = axios.create({
    // Es buena práctica usar variables de entorno
    baseURL: import.meta.env.VITE_API_URL || 'https://manos-mexicanas-core.duckdns.org/api',
    timeout: 10000, // 10 segundos de espera antes de cancelar
    headers: {
        'Content-Type': 'application/json',
    },
});

// 2. Interceptor de SOLICITUD (Request)
axiosInstance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

// 3. Interceptor de RESPUESTA (Response)
axiosInstance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default axiosInstance;