<template>
  <UiDetailedPage :data="currentMedia" :labels />
</template>

<script setup>
import { IconsCalendar, IconsList } from '#components';

const { t, tm, rt, locale } = useI18n();
const route = useRoute();
const { mediaEvents, mediaGallery, mediaNews } = useApiStore();

const currentMedia = [...mediaEvents, ...mediaGallery, ...mediaNews].find(
  el => el.id === +route.params.id
);

const labels = computed(() => [
  {
    icon: IconsCalendar,
    label: `${t('date')}: ${currentMedia[`date_${locale.value}`]}`
  },
  {
    icon: IconsList,
    label: mapRt(tm('media.types'), rt)[currentMedia.category.id]
  }
]);
</script>
