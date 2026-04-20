import axiosInstance from '@/api/config/axios.instance';

export const cartApi = {
    // GET /cart - Obtener carrito actual
    getCart: async (): Promise<any> => {
        const response = await axiosInstance.get('/cart');
        return response.data;
    },

    // POST /cart - Crear carrito
    createCart: async (): Promise<any> => {
        const response = await axiosInstance.post('/cart');
        return response.data;
    },

    // POST /cart/items - Añadir item al carrito
    addItem: async (itemData: any): Promise<any> => {
        const response = await axiosInstance.post('/cart/items', itemData);
        return response.data;
    },

    // PUT /cart/items/:id - Actualizar la cantidad de un item
    updateItemQuantity: async (itemId: number | string, quantity: number): Promise<any> => {
        const response = await axiosInstance.put(`/cart/items/${itemId}`, { quantity });
        return response.data;
    },

    // DELETE /cart/items/:id - Eliminar item del carrito
    removeItem: async (itemId: number | string): Promise<any> => {
        const response = await axiosInstance.delete(`/cart/items/${itemId}`);
        return response.data;
    },

    // DELETE /cart - Vaciar carrito
    clearCart: async (): Promise<any> => {
        const response = await axiosInstance.delete('/cart');
        return response.data;
    }
};

export default cartApi;
