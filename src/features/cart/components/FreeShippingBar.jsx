import React from 'react';
import '../styles/free.shipping.bar.css';

const FREE_SHIPPING_THRESHOLD = 500; // Example threshold

const FreeShippingBar = ({ currentTotal }) => {
  const progress = Math.min((currentTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = FREE_SHIPPING_THRESHOLD - currentTotal;
  const isFree = currentTotal >= FREE_SHIPPING_THRESHOLD;

  return (
    <div className="free-shipping-container">
      <div className="free-shipping-text">
        {isFree ? (
          <>
            <span>🚚</span>
            <span>¡Tu pedido califica para <strong>envío gratis</strong>!</span>
          </>
        ) : (
          <>
            <span>📦</span>
            <span>Agrega <strong>${remaining.toFixed(2)}</strong> más para envío gratis</span>
          </>
        )}
      </div>
      <div className="shipping-progress-bg">
        <div 
          className="shipping-progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FreeShippingBar;
