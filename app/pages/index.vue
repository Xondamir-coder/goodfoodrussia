<template>
  <main class="home" :class="`slide--${currentSlide}`">
    <Transition :name="transitionName" mode="out-in" @after-leave="$lenis.scrollTo(0, { immediate: true, force: true })">
      <component :is="slides[currentSlide]" :key="currentSlide" />
    </Transition>
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
const { $lenis } = useNuxtApp();

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

// ── Slide switching ────────────────────────────────────────────────────────────

const SLIDE_COUNT = 6;
const LOCK_MS = 1200; // animation (400ms) + inertia tail buffer
const WHEEL_THRESHOLD = 30;
const TOUCH_THRESHOLD = 50;

const transitionName = ref('slide-up');
let isLocked = false;
let touchStartY = 0;

const currentSlide = computed(() => Math.min(Math.max(+(query.value?.slide ?? 0), 0), SLIDE_COUNT));

const atScrollEdge = down => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 20) return true;
  return down ? window.scrollY >= maxScroll - 30 : window.scrollY <= 30;
};

const goToSlide = direction => {
  if (isLocked) return;
  const next = Math.min(Math.max(currentSlide.value + direction, 0), SLIDE_COUNT);
  if (next === currentSlide.value) return;

  transitionName.value = direction > 0 ? 'slide-up' : 'slide-down';
  isLocked = true;
  $lenis.stop();
  router.replace({ query: { slide: next } });
  setTimeout(() => {
    $lenis.start();
    isLocked = false;
  }, LOCK_MS);
};

const onWheel = e => {
  if (isLocked) {
    e.preventDefault();
    return;
  }
  const delta =
    e.deltaMode === 1 ? e.deltaY * 40
    : e.deltaMode === 2 ? e.deltaY * window.innerHeight
    : e.deltaY;
  const down = delta > 0;
  if (Math.abs(delta) < WHEEL_THRESHOLD) return;
  if (!atScrollEdge(down)) return;
  goToSlide(down ? 1 : -1);
};

const onTouchStart = e => {
  touchStartY = e.touches[0].clientY;
};

const onTouchMove = e => {
  if (isLocked) e.preventDefault();
};

const onTouchEnd = e => {
  if (isLocked) return;
  const delta = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(delta) < TOUCH_THRESHOLD) return;
  const down = delta > 0;
  if (!atScrollEdge(down)) return;
  goToSlide(down ? 1 : -1);
};

onMounted(() => {
  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: false });
  window.addEventListener('touchend', onTouchEnd, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchmove', onTouchMove);
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
</style>

<style lang="scss">
// Give each slide its own positioning context so that absolutely-positioned
// pictures resolve percentage-based offsets (bottom: -20%, left: -10%, etc.)
// against the slide itself rather than the distant .layout ancestor.
// Without this, a brief height change in .layout when the slide is
// destroyed/recreated snaps the pictures to a wrong position for one frame.
.slide {
  position: relative;
}

.slide-up-leave-active,
.slide-down-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.76, 0, 0.24, 1),
    opacity 0.4s ease;

  * {
    transition: none !important;
  }
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
