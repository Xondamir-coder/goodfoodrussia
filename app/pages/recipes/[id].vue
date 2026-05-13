<template>
  <UiDetailedPage :data="recipe" :labels />
</template>

<script setup>
import { IconsCalendar, IconsClock, IconsList } from '#components';

const { t, locale } = useI18n();
const { recipes } = useApiStore();
const route = useRoute();

const recipe = recipes.find(p => p.id === route.params.id);

const labels = computed(() => {
  const l = locale.value;
  return [
    {
      icon: IconsCalendar,
      label: recipe?.[`date_${l}`] ?? '—'
    },
    {
      icon: IconsList,
      label: recipe?.[`categories_${l}`]?.length
        ? `${t('categories')}: ${recipe[`categories_${l}`].join(' • ')}`
        : '—'
    },
    {
      icon: IconsClock,
      label: `${t('cookingTime')}: ${recipe?.cookingTime ?? '—'}`
    }
  ];
});
</script>
