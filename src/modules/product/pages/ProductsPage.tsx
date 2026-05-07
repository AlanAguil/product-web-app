import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductList } from '../components/ProductList';
import { ProductForm } from '../components/ProductForm';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import type { Product, CreateProductDto, UpdateProductDto } from '../types/product.type';
import '../styles/Product.css';

export const ProductsPage: React.FC = () => {
  const { 
    products, 
    isLoading, 
    isError, 
    createProduct, 
    updateProduct, 
    deleteProduct,
    isCreating,
    isUpdating,
    isDeleting
  } = useProducts();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

  const handleOpenForm = () => {
    setEditingProduct(undefined);
    setIsFormOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleSubmit = (data: CreateProductDto) => {
    if (editingProduct) {
      updateProduct(
        { id: editingProduct.id, data: data as UpdateProductDto },
        { onSuccess: () => setIsFormOpen(false) }
      );
    } else {
      createProduct(data, { onSuccess: () => setIsFormOpen(false) });
    }
  };

  if (isError) {
    return <div className="product-container"><div className="error-state">Error al cargar los productos. Verifica tu conexión al backend.</div></div>;
  }

  return (
    <div className="product-container">
      <div className="product-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <h1>Gestión de Productos</h1>
          <ThemeSwitcher />
        </div>
        {!isFormOpen && (
          <button className="btn-primary" onClick={handleOpenForm}>
            + Agregar Producto
          </button>
        )}
      </div>

      {isFormOpen && (
        <ProductForm 
          initialData={editingProduct} 
          onSubmit={handleSubmit} 
          onCancel={() => setIsFormOpen(false)}
          isLoading={isCreating || isUpdating}
        />
      )}

      <ProductList 
        products={products ?? []} 
        isLoading={isLoading} 
        onEdit={handleEdit} 
        onDelete={deleteProduct}
        isDeleting={isDeleting}
      />
    </div>
  );
};
