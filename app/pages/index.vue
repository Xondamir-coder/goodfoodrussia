<template>
  <main class="home">
    <component :is="slide" v-for="(slide, i) in slides" v-show="i === currentSlide" :key="i" />
    <UiHomeNavbar />
  </main>
</template>

<script setup>
import { UiHomeSlide1, UiHomeSlide2, UiHomeSlide3 } from '#components';

const currentSlide = useState('currentSlide', () => 2);

const slides = [UiHomeSlide1, UiHomeSlide2, UiHomeSlide3];
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
</style>
