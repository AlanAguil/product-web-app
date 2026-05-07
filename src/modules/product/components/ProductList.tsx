import React from 'react';
import type { Product } from '../types/product.type';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  onEdit: (product: Product) => void;
  onDelete: (id: number | string) => void;
  isDeleting: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  isLoading,
  onEdit,
  onDelete,
  isDeleting
}) => {
  if (isLoading) return <div className="loading-state">Cargando productos...</div>;
  if (!Array.isArray(products) || products.length === 0) return <div className="empty-state">No hay productos registrados. ¡Crea el primero!</div>;

  return (
    <div className="table-responsive">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${Number(product.price).toFixed(2)}</td>
              <td>{product.stock}</td>
              <td className="actions-cell">
                <button 
                  className="btn-edit" 
                  onClick={() => onEdit(product)}
                  disabled={isDeleting}
                >
                  Editar
                </button>
                <button 
                  className="btn-danger" 
                  onClick={() => {
                    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
                      onDelete(product.id);
                    }
                  }}
                  disabled={isDeleting}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
