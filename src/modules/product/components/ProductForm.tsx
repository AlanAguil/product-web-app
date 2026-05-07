import React, { useState, useEffect } from 'react';
import type { CreateProductDto, Product } from '../types/product.type';

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: CreateProductDto) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isLoading 
}) => {
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    description: '',
    price: 0,
    stock: 0
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        description: initialData.description || '',
        price: Number(initialData.price),
        stock: Number(initialData.stock)
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="product-form-container">
      <h3>{initialData ? 'Editar Producto' : 'Nuevo Producto'}</h3>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Precio ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel} disabled={isLoading}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
