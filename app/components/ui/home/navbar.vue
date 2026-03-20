<template>
  <div class="navbar">
    <button
      v-for="(item, i) in items"
      :key="i"
      class="navbar__button"
      :class="{ active: i === currentSlide }"
      @click="currentSlide = i"
    >
      <component class="navbar__button-icon" :is="item" />
    </button>
  </div>
</template>

<script setup>
import { IconsHome, IconsUser, IconsBuilding, IconsDiscount, IconsChecklist } from '#components';

const items = [
  IconsHome,
  IconsUser,
  IconsBuilding,
  IconsDiscount,
  IconsChecklist,
  IconsChecklist,
  IconsChecklist
];

const currentSlide = useState('currentSlide');
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: 0.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  border-radius: 9.9rem;
  background: rgba(8, 18, 59, 0.6);
  backdrop-filter: blur(2px);
  position: absolute;
  right: 2rem;
  top: 25vh;
  translate: 0 0;
  z-index: 5;
  &__button {
    @include mix.flex-center;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    transition: background 0.4s;
    overflow: hidden;
    position: relative;
    &:hover::after {
      scale: 1 0.45;
      transition-duration: 0.4s;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
        linear-gradient(0deg, rgba(0, 67, 255, 0.2) 0%, rgba(0, 67, 255, 0.2) 100%),
        rgba(244, 245, 245, 0.2);
      transition: scale 0.6s;
      scale: 1 0;
      transform-origin: bottom;
    }
    &-icon {
      width: 47%;
      fill: none;
      z-index: 1;
    }
    &.active::after {
      scale: 1;
    }
  }
}
</style>
