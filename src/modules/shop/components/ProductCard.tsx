import React from 'react';
import Button from '@/components/ui/Button';
import '../styles/product.card.css';
import { useProductCard } from '../hooks/useProductCard';

export interface ProductType {
  id: number | string;
  title: string;
  description: string;
  price: number;
  image: string;
  categories?: string[];
  rating?: number;
  reviews?: number;
}

interface StarIconProps {
  filled: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled }) => (
  <svg
    className={`star-icon ${filled ? 'filled' : ''}`}
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CommentIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, description, image, categories = [], rating = 0, reviews = 0 } = product;
  
  const { 
    isAuthenticated, 
    formattedPrice, 
    handleAddToCart, 
    handleBuyNow 
  } = useProductCard(product);

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

        <div className="product-card-price-container">
          <span className="product-card-symbol">$</span>
          <span className="product-card-price">{formattedPrice}</span>
          <span className="product-card-currency">MXN</span>
        </div>

        {categories.length > 0 && (
          <div className="product-card-badges">
            {categories.map((cat, idx) => (
              <span key={idx} className="product-badge">{cat}</span>
            ))}
          </div>
        )}

        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-text">{description}</p>
        <div className="product-card-rating">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <StarIcon
                key={starIndex}
                filled={starIndex <= Math.round(rating)}
              />
            ))}
          </div>
          <a className="reviews-count">
            {reviews} <CommentIcon />
          </a>
        </div>

        <div className="product-card-footer">
          <div className="product-card-actions">
            {isAuthenticated && (
              <Button variant="secondary" className="product-card-btn btn-secondary-outline" onClick={handleAddToCart}>
                Agregar al carrito
              </Button>
            )}
            <Button variant="primary" className="product-card-btn" onClick={handleBuyNow}>
              Comprar ahora
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
