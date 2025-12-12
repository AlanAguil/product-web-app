export const requestInterceptor = (config) => {
    // Aquí puedes inyectar el token de autenticación automáticamente
    const token = localStorage.getItem('token'); // O obtenerlo de un Context/Zustand

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Puedes hacer logs aquí para depuración
    console.log('Enviando petición:', config);

    return config;
};

export const requestErrorInterceptor = (error) => {
    return Promise.reject(error);
};

export const responseInterceptor = (response) => {
    // Si la respuesta es exitosa (status 200-299), simplemente la devolvemos
    // A veces conviene devolver response.data directamente para ahorrar código
    return response;
};

export const responseErrorInterceptor = (error) => {
    // MANEJO CENTRALIZADO DE ERRORES
    if (error.response) {
        const status = error.response.status;

        switch (status) {
            case 401:
                // No autorizado: El token venció o es inválido
                console.error('Sesión expirada. Redirigiendo al login...');
                localStorage.removeItem('token');
                // Opcional: Redirigir forzadamente
                window.location.href = '/login';
                break;

            case 403:
                // Prohibido: No tienes permisos para este recurso
                console.error('No tienes permisos para realizar esta acción.');
                break;

            case 404:
                console.error('Recurso no encontrado.');
                break;

            case 500:
                console.error('Error interno del servidor. Intenta más tarde.');
                break;

            default:
                console.error(`Error desconocido: ${status}`);
        }
    } else if (error.request) {
        // La petición se hizo pero no hubo respuesta (ej. servidor caído / sin internet)
        console.error('No hubo respuesta del servidor. Verifica tu conexión.');
    } else {
        console.error('Error al configurar la petición:', error.message);
    }

    return Promise.reject(error);
};
