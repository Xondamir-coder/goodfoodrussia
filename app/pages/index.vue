<template>
  <main class="home">
    <component :is="slide" v-for="(slide, i) in slides" v-show="i === +query?.slide" :key="i" />
    <UiHomeNavbar />
    <!-- <UiPicture src="home-bg.png" alt="background" class="home__bg" /> -->
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

const route = useRoute();
const router = useRouter();

const query = computed(() => route.query);

if (!query.value?.slide) {
  router.replace({ query: { slide: 0 } });
}

onUpdated(() => {
  if (!query.value?.slide) {
    router.replace({ query: { slide: 0 } });
  }
});

const slides = [
  UiHomeSlide1,
  UiHomeSlide2,
  UiHomeSlide3,
  UiHomeSlide4,
  UiHomeSlide5,
  UiHomeSlide6,
  UiHomeSlide7
];
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100dvh - 6rem);
  display: flex;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
