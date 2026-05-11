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

const SLIDE_COUNT = 6;
const LOCK_MS = 900;

const { $lenis } = useNuxtApp();

let isLocked = false;
let touchStartY = 0;

const currentIndex = computed(() => Math.min(Math.max(+(query.value?.slide ?? 0), 0), SLIDE_COUNT));

// Returns true when scroll position allows switching in the given direction.
// For tall slides this lets natural page scroll happen until the edge is reached.
const canSwitch = (down) => {
  const atTop = window.scrollY <= 0;
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
  return down ? atBottom : atTop;
};

const goToSlide = (direction) => {
  if (isLocked) return;

  const next = Math.min(Math.max(currentIndex.value + direction, 0), SLIDE_COUNT);
  if (next === currentIndex.value) return;

  isLocked = true;
  window.scrollTo(0, 0);
  router.replace({ query: { slide: next } });
  setTimeout(() => { isLocked = false; }, LOCK_MS);
};

const onWheel = (e) => {
  if (isLocked) return;
  const down = e.deltaY > 0;
  if (!canSwitch(down)) return;
  if (Math.abs(e.deltaY) < 30) return;
  goToSlide(down ? 1 : -1);
};

const onTouchStart = (e) => {
  touchStartY = e.touches[0].clientY;
};

const onTouchEnd = (e) => {
  if (isLocked) return;
  const delta = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(delta) < 50) return;
  const down = delta > 0;
  if (!canSwitch(down)) return;
  goToSlide(down ? 1 : -1);
};

onMounted(() => {
  $lenis?.stop();
  window.addEventListener('wheel', onWheel, { passive: true });
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchend', onTouchEnd, { passive: true });
});

onUnmounted(() => {
  $lenis?.start();
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchend', onTouchEnd);
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
