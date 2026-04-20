import axiosInstance from '@/api/config/axios.instance';

export const authApi = {
  // POST /auth/login - Iniciar sesión
  login: async (email: string, password: string): Promise<any> => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  },
};

export default authApi;
