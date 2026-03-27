import { defineStore } from 'pinia';

import productsData from '~/assets/data/products.json';
import recipesData from '~/assets/data/recipes.json';
import categoriesData from '~/assets/data/categories.json';
import mediaNewsData from '~/assets/data/media/news.json';
import mediaEventsData from '~/assets/data/media/events.json';
import mediaGalleryData from '~/assets/data/media/gallery.json';

import Product from '~/types/product';
import Recipe from '~/types/recipe';
import Category from '~/types/category';
import Media from '~/types/media';

export const useApiStore = defineStore('api', () => {
  const products = productsData.map(Product.fromJSON);
  const recipes = recipesData.map(Recipe.fromJSON);
  const categories = categoriesData.map(Category.fromJSON);
  const mediaNews = mediaNewsData.map(Media.fromJSON);
  const mediaEvents = mediaEventsData.map(Media.fromJSON);
  const mediaGallery = mediaGalleryData.map(Media.fromJSON);

  return {
    products,
    recipes,
    categories,
    mediaNews,
    mediaEvents,
    mediaGallery
  };
});
