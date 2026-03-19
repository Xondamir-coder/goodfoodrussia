<template>
  <main class="home">
    <component :is="slide" v-for="(slide, i) in slides" v-show="i === currentSlide" :key="i" />
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

const currentSlide = useState('currentSlide', () => 3);

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
  position: relative;
  min-height: calc(100dvh - 6rem);
  display: flex;

  & > *:not(:last-child) {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-block: 1.6rem;
    flex: 1;
  }
}
</style>
