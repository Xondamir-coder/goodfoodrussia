<template>
  <UiDetailedPage :data="currentMedia" :labels />
</template>

<script setup>
import { IconsCalendar, IconsList } from '#components';

const { t, tm, rt, locale } = useI18n();
const route = useRoute();
const site = useSiteConfig();
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
const mediaImagePath = currentMedia
  ? `/images/compressed/${currentMedia.banner.replace(/\.[^.]+$/, '.jpg')}`
  : '/images/compressed/media-news-1.jpg';
const russianMonthMap = {
  января: '01', февраля: '02', марта: '03', апреля: '04',
  мая: '05', июня: '06', июля: '07', августа: '08',
  сентября: '09', октября: '10', ноября: '11', декабря: '12'
};
const mediaPublishedAt = currentMedia?.date_ru
  ? currentMedia.date_ru.replace(
      /(\d{1,2})\s+([а-яё]+)\s+(\d{4})/i,
      (_, day, month, year) => `${year}-${russianMonthMap[month.toLowerCase()] || '01'}-${day.padStart(2, '0')}`
    )
  : undefined;

useSeoMeta({
  title: currentMedia?.[`title_${locale.value}`] || t('seo.mediaItemFallbackTitle'),
  description: currentMedia?.[`text_${locale.value}`] || t('seo.media.description'),
  ogType: 'article',
  ogImage: mediaImagePath,
  twitterImage: mediaImagePath,
  ...(mediaPublishedAt && { articlePublishedTime: mediaPublishedAt })
});

if (currentMedia) {
  useSchemaOrg([
    {
      '@type': 'Article',
      headline: currentMedia.title,
      description: currentMedia.text,
      image: [`${site.url}${mediaImagePath}`],
      ...(mediaPublishedAt && { datePublished: mediaPublishedAt }),
      articleSection: currentMedia.category.name,
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
          name: t('media.title'),
          item: `${site.url}${route.path.startsWith('/uz') ? '/uz/media' : '/media'}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: currentMedia.title,
          item: `${site.url}${route.path}`
        }
      ]
    }
  ]);
}
</script>
