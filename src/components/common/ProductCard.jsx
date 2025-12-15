import React from 'react';
import Button from '../ui/Button';
import '../../styles/common/product.card.css';
 
  /* import { useAuth } from '@/contexts/AuthContext'; */
import { useAuth } from '@/contexts/AuthContext';

const ProductCard = ({ product }) => {
  const { title, description, price, image, categories = [], rating = 0, reviews = 0 } = product;
  const { isAuthenticated } = useAuth();
  
  // Custom format to separate symbol and currency if needed, or simple replace
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  // Star Icon Helper
  const StarIcon = () => (
    <svg className="star-icon" viewBox="0 0 24 24">
       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );

  // Comment Icon Helper
  const CommentIcon = () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
  );

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
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$</span>
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
        
        <div className="product-card-rating">
            <div className="stars">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <StarIcon key={i} />
                ))}
            </div>
            <a href="#" className="reviews-count">
                {reviews} <CommentIcon />
            </a>
        </div>

        <div className="product-card-footer">
          <div className="product-card-actions">
            {isAuthenticated && (
                <Button variant="secondary" className="product-card-btn btn-secondary-outline" onClick={() => console.log(`Add to Cart ${title}`)}>
                    Agregar al carrito
                </Button>
            )}
            <Button variant="primary" className="product-card-btn" onClick={() => console.log(`Buy ${title}`)}>
                Comprar ahora
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
