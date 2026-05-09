<template>
  <UiDetailedPage :data="recipe" :labels />
</template>

<script setup>
import { IconsCalendar, IconsClock, IconsList } from '#components';

const { t } = useI18n();
const { recipes } = useApiStore();
const route = useRoute();
const site = useSiteConfig();

const labels = [
  {
    icon: IconsCalendar,
    label: '12 марта 2025'
  },
  {
    icon: IconsList,
    label: 'Категории: Супы • Завтраки'
  },
  {
    icon: IconsClock,
    label: 'Время приготовления: 25 минут'
  }
];

const recipe = recipes.find(p => p.id === route.params.id);
const recipeImagePath = recipe
  ? `/images/compressed/${recipe.banner.replace(/\.[^.]+$/, '.jpg')}`
  : '/images/compressed/recipes-banner.png';
const recipePublishedAt = '2025-03-12';

useSeoMeta({
  title: recipe?.title || t('seo.recipeFallbackTitle'),
  description: recipe
    ? `${recipe.categories.join(', ')}. ${t('seo.recipeDescriptionSuffix', { date: recipe.date })}`
    : t('seo.recipes.description'),
  ogType: 'article',
  ogImage: recipeImagePath,
  twitterImage: recipeImagePath,
  articlePublishedTime: recipePublishedAt
});

if (recipe) {
  useSchemaOrg([
    {
      '@type': 'Recipe',
      name: recipe.title,
      description: `${recipe.categories.join(', ')}. ${t('seo.recipeDescriptionSuffix', { date: recipe.date })}`,
      image: [`${site.url}${recipeImagePath}`],
      datePublished: recipePublishedAt,
      recipeCategory: recipe.categories,
      inLanguage: route.path.startsWith('/en') ? 'en-US' : 'ru-RU'
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t('seo.homeBreadcrumb'),
          item: site.url
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t('recipes.title'),
          item: `${site.url}${route.path.startsWith('/en') ? '/en/recipes' : '/recipes'}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: recipe.title,
          item: `${site.url}${route.path}`
        }
      ]
    }
  ]);
}
</script>
