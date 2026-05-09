<template>
  <main class="home" :class="`slide--${query?.slide}`">
    <component :is="slide" v-for="(slide, i) in slides" v-show="i === +query?.slide" :key="i" />
    <UiHomeNavbar />
  </main>
</template>

<script setup>
import {
  UiHomeSlide1,
  UiHomeSlide2,
  UiHomeSlide3,
  UiHomeSlide4,
  UiHomeSlide5,
  UiHomeSlide6,
  UiHomeSlide7
} from '#components';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const query = computed(() => route.query);
const slides = [
  UiHomeSlide1,
  UiHomeSlide2,
  UiHomeSlide3,
  UiHomeSlide4,
  UiHomeSlide5,
  UiHomeSlide6,
  UiHomeSlide7
];

const ensureSlideQuery = () => {
  if (!query.value?.slide) {
    router.replace({ query: { slide: 0 } });
  }
};

ensureSlideQuery();

onUpdated(() => {
  ensureSlideQuery();
});

useSeoMeta({
  title: t('seo.home.title'),
  description: t('seo.home.description')
});
</script>

<style lang="scss" scoped>
.home {
  padding-top: max(6rem, 60px);
  min-height: 100dvh;
  display: flex;
  @media screen and (max-width: vars.$bp-lg) {
    padding-bottom: calc(58px + 30px);
  }
  &.slide--6 {
    padding-bottom: 0;
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.4s;
}
.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
