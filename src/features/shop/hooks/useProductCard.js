import { useAuth } from '@/contexts/AuthContext';

export const useProductCard = (product) => {
  const { title, price } = product;
  const { isAuthenticated } = useAuth();

  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  const handleAddToCart = () => {
    console.log(`Add to Cart ${title}`);
  };

  const handleBuyNow = () => {
    console.log(`Buy ${title}`);
  };

  return {
    isAuthenticated,
    formattedPrice,
    handleAddToCart,
    handleBuyNow
  };
};
