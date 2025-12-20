import axiosInstance from '@/api/config/axios.instance';

export const cartApi = {
    // POST /cart - Crear carrito
    createCart: async () => {
        const response = await axiosInstance.post('/cart');
        return response.data;
    },
};

export default cartApi;
