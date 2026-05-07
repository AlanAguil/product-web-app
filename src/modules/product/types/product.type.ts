export interface Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDto = Partial<CreateProductDto>;
