
import type { CartItemType } from '../components/CartItem';

export const cartItemsMockData: CartItemType[] = [
  {
    id: 1,
    title: 'Peluche Artesanal "Ajolote Mexicano" - Hecho a Mano',
    price: 450,
    originalPrice: 500,
    image: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Ajolote',
    quantity: 1,
    shipping: 'free',
    stock: 10,
    seller: 'Artesanías del Centro',
  },
  {
    id: 2,
    title: 'Muñeca Lele Maria Tradicional - 30cm',
    price: 320,
    originalPrice: null,
    image: 'https://via.placeholder.com/150/FFD700/000000?text=Lele',
    quantity: 2,
    shipping: 'tomorrow',
    stock: 5,
    seller: 'Product Web App',
  },
  {
    id: 3,
    title: 'Alebrije Colorido Pequeño - Madera Copal',
    price: 850,
    originalPrice: 950,
    image: 'https://via.placeholder.com/150/00CED1/FFFFFF?text=Alebrije',
    quantity: 1,
    shipping: 'normal',
    stock: 1,
    seller: 'Arte Oaxaqueño',
  }
];

