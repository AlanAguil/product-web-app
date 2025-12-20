import React from 'react';
import '../styles/cart.item.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { id, title, price, originalPrice, image, quantity, shipping } = item;

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  return (
    <article className="cart-item">
      <div className="item-image-container">
        <img src={image} alt={title} className="item-image" />
      </div>

      <div className="item-details">
        <div>
          <h3 className="item-title">{title}</h3>
          
          <div className="item-badges">
            {shipping === 'free' && (
              <span className="badge-shipping">Envío gratis</span>
            )}
            {shipping === 'tomorrow' && (
               <span className="badge-shipping text-success">Llega mañana</span>
            )}
          </div>
        </div>

        <div className="item-actions">
          <button className="action-btn" onClick={() => onRemove(id)}>Eliminar</button>
          <button className="action-btn">Guardar para después</button>
          <button className="action-btn">Comprar ahora</button>
        </div>
      </div>

      <div className="item-pricing">
        <div className="quantity-control">
          <button 
            className="qty-btn" 
            onClick={handleDecrease}
            disabled={quantity <= 1}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <input 
            className="qty-input" 
            type="number" 
            value={quantity} 
            readOnly 
            aria-label="Cantidad"
          />
          <button 
            className="qty-btn" 
            onClick={handleIncrease}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        <div className="item-price-block">
          {originalPrice && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
          <span className="current-price">${price.toFixed(2)}</span>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
