import { defineStore } from 'pinia';

import productsData from '~/assets/data/products.json';
import recipesData from '~/assets/data/recipes.json';
import categoriesData from '~/assets/data/categories.json';

import Product from '~/types/product';
import Recipe from '~/types/recipe';
import Category from '~/types/category';

export const useApiStore = defineStore('api', () => {
  const products = productsData.map(p => new Product(p));
  const recipes = recipesData.map(r => new Recipe(r));
  const categories = categoriesData.map(r => new Category(r));

  return {
    products,
    recipes,
    categories
  };
});
