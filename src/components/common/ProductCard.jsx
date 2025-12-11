import React from 'react';
import Button from '@/components/ui/Button';
import '../../styles/common/ProductCard.css';
 
const ProductCard = ({ product }) => {
  const { title, description, price, image } = product;
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(price);

  return (
    <article className="product-card">
      <div className="product-card-img-wrapper">
        <img 
          src={image || 'https://via.placeholder.com/300x200?text=No+Image'} 
          alt={title} 
          className="product-card-img" 
        />
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-text">{description}</p>
        <p className="product-card-price">{formattedPrice}</p>
        <div className="product-card-footer">
          <Button variant="primary" onClick={() => console.log(`Viewing ${title}`)}>
            Mostrar Artículo
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
