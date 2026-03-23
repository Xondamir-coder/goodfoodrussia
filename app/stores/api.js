import { defineStore } from 'pinia';
import productsData from '~/assets/data/products.json';
import { Product } from '~/types/product';

export const useApiStore = defineStore('api', () => {
  const products = productsData.map(p => new Product(p));

  return {
    products
  };
});
