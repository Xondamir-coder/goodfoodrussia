<template>
  <UiDetailedPage :data="recipe" :labels />
</template>

<script setup>
import { IconsCalendar, IconsClock, IconsList } from '#components';

const { recipes } = useApiStore();

const route = useRoute();

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
</script>
