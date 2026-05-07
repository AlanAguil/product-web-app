import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../services/product.service';
import type { CreateProductDto, UpdateProductDto, Product } from '../types/product.type';

export const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: productService.getAll
  });

  const createMutation = useMutation({
    mutationFn: (data: CreateProductDto) => productService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number | string; data: UpdateProductDto }) =>
      productService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number | string) => productService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  return {
    products: productsQuery.data ?? [],
    isLoading: productsQuery.isLoading,
    isError: productsQuery.isError,
    createProduct: createMutation.mutate,
    isCreating: createMutation.isPending,
    updateProduct: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
    deleteProduct: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending
  };
};
