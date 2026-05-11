<template>
  <UiDetailedPage :data="recipe" :labels />
</template>

<script setup>
import { IconsCalendar, IconsClock, IconsList } from '#components';

const { t } = useI18n();
const { recipes } = useApiStore();
const route = useRoute();
const site = useSiteConfig();

const recipe = recipes.find(p => p.id === route.params.id);

const labels = computed(() => [
  {
    icon: IconsCalendar,
    label: recipe?.date ?? '—'
  },
  {
    icon: IconsList,
    label: recipe?.categories?.length
      ? `${t('categories')}: ${recipe.categories.join(' • ')}`
      : '—'
  },
  {
    icon: IconsClock,
    label: `${t('cookingTime')}: ${recipe?.cookingTime ?? '—'}`
  }
]);

const recipeImagePath = recipe
  ? `/images/compressed/${recipe.banner.replace(/\.[^.]+$/, '.jpg')}`
  : '/images/compressed/recipes-banner.png';
const recipePublishedAt = recipe?.date
  ? (() => {
      const monthMap = {
        января: '01', февраля: '02', марта: '03', апреля: '04',
        мая: '05', июня: '06', июля: '07', августа: '08',
        сентября: '09', октября: '10', ноября: '11', декабря: '12'
      };
      return recipe.date.replace(
        /(\d{1,2})\s+([а-яё]+)\s+(\d{4})/i,
        (_, day, month, year) =>
          `${year}-${monthMap[month.toLowerCase()] ?? '01'}-${day.padStart(2, '0')}`
      );
    })()
  : '2025-01-01';

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
      inLanguage: route.path.startsWith('/uz') ? 'uz-UZ' : 'ru-RU'
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
          item: `${site.url}${route.path.startsWith('/uz') ? '/uz/recipes' : '/recipes'}`
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
