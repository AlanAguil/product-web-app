import { categories } from '../mocks/categories';
import { products } from '../mocks/products';

const DELAY_MS = 800;

export const fetchCategories = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, DELAY_MS);
  });
};

export const fetchProducts = async (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, DELAY_MS);
  });
};
