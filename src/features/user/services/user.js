import axiosInstance from '@/api/config/axios.instance';

export const userApi = {
  // GET /users/profile
  getProfile: async () => {
    const response = await axiosInstance.get('/users/profile');
    return response.data;
  },

  // PUT /users/profile
  updateProfile: async (data) => {
    const response = await axiosInstance.put('/users/profile', data);
    return response.data;
  },
  
  // POST /users/register (o /auth/register dependiendo del backend, asumiendo User resource creation)
  register: async (userData) => {
      // Ajustar la URL si es /auth/register
      const response = await axiosInstance.post('/users', userData); 
      return response.data;
  }
};

export default userApi;
