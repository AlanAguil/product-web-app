import axiosInstance from '@/api/config/axios.instance';
import type { Product, CreateProductDto, UpdateProductDto } from '../types/product.type';

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const { data } = await axiosInstance.get<any>('/product');
    return data.data;
  },

  getById: async (id: number | string): Promise<Product> => {
    const { data } = await axiosInstance.get<any>(`/product/${id}`);
    return data.data;
  },

  create: async (product: CreateProductDto): Promise<Product> => {
    const { data } = await axiosInstance.post<any>('/product', product);
    return data.data;
  },

  update: async (id: number | string, product: UpdateProductDto): Promise<Product> => {
    const { data } = await axiosInstance.put<any>('/product', { ...product, id: Number(id) });
    return data.data;
  },

  delete: async (id: number | string): Promise<void> => {
    await axiosInstance.delete('/product', { data: { id: Number(id) } });
  }
};
