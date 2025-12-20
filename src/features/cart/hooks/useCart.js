import { useState, useMemo } from 'react';
import { cartItemsMock } from '../mocks/cart.data';

const FREE_SHIPPING_THRESHOLD = 500;
const STANDARD_SHIPPING_COST = 99;

export const useCart = () => {
  const [cartItems, setCartItems] = useState(cartItemsMock);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cartItems]);

  const shippingCost = useMemo(() => {
    if (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) return 0;
    return STANDARD_SHIPPING_COST;
  }, [subtotal]);

  const total = subtotal + shippingCost;

  return {
    cartItems,
    updateQuantity,
    removeItem,
    subtotal,
    shippingCost,
    total
  };
};
