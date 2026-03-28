<template>
  <UiDetailedPage :data="currentMedia" :labels />
</template>

<script setup>
import { IconsCalendar, IconsList } from '#components';

const { t } = useI18n();
const route = useRoute();
const { mediaEvents, mediaGallery, mediaNews } = useApiStore();

const currentMedia = [...mediaEvents, ...mediaGallery, ...mediaNews].find(
  el => el.id === +route.params.id
);

const labels = computed(() => [
  {
    icon: IconsCalendar,
    label: `${t('date')}: ${currentMedia.date}`
  },
  {
    icon: IconsList,
    label: currentMedia.category.name
  }
]);
</script>
