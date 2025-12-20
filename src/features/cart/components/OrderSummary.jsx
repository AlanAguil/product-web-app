import React from 'react';
import '../styles/order.summary.css';
import Button from '@/components/ui/Button';

const OrderSummary = ({ subtotal, shippingCost, total }) => {
  return (
    <aside className="order-summary">
      <h2 className="summary-title">Resumen de compra</h2>
      
      <div className="summary-row">
        <span>Productos</span>
        <span className="summary-value">${subtotal.toFixed(2)}</span>
      </div>
      
      <div className="summary-row">
        <span>Envío</span>
        {shippingCost === 0 ? (
          <span className="summary-value free">Gratis</span>
        ) : (
          <span className="summary-value">${shippingCost.toFixed(2)}</span>
        )}
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <span className="summary-value">${total.toFixed(2)}</span>
      </div>

      <Button variant="primary" className="checkout-btn">
        Continuar compra
      </Button>

      <div className="security-badge">
        <svg  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span>Compra Protegida</span>
      </div>
    </aside>
  );
};

export default OrderSummary;
