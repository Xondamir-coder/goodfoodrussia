<template>
  <div class="navbar" :class="{ abs: +query?.slide === 6 }">
    <button
      v-for="(item, i) in items"
      :key="i"
      class="navbar__button"
      :class="{ active: i === +query?.slide }"
      @click="changeSlide(i)"
    >
      <span class="navbar__button-label">{{ item.label }}</span>
      <component :is="item.icon" class="navbar__button-icon" />
    </button>
  </div>
</template>

<script setup>
import {
  IconsHome,
  IconsFileOpen,
  IconsWidgets,
  IconsFormatShapes,
  IconsDining,
  IconsAutoGraph,
  IconsRocket
} from '#components';

const { tm, rt } = useI18n();

const route = useRoute();
const router = useRouter();

const query = computed(() => route.query);

const changeSlide = newIndex => {
  router.replace({
    query: { slide: newIndex }
  });
};

const icons = [
  IconsHome,
  IconsFileOpen,
  IconsWidgets,
  IconsFormatShapes,
  IconsDining,
  IconsAutoGraph,
  IconsRocket
];
const items = mapRt(tm('home.navbar'), rt).map((l, i) => ({ label: l, icon: icons[i] }));
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: max(0.6rem, 6px);
  align-items: flex-start;
  gap: 0.2rem;
  border-radius: max(9.9rem, 99px);
  background: rgba(8, 18, 59, 0.6);
  backdrop-filter: blur(2px);
  z-index: 5;
  @media screen and (min-width: vars.$bp-xl) {
    @include mix.glass-bezel(
      (
        border-color: 89 96 133,
        angle: 275deg
      )
    );
    position: absolute;
    right: 2rem;
    top: 25vh;
    width: max(5rem, 44px);
    flex-direction: column;
  }
  @media screen and (max-width: vars.$bp-xl) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
    border: 1px solid #3941596b;
    transition: bottom 0.4s;
    &.abs {
      position: absolute;
      bottom: calc(216px + 16px);
    }
  }
  &__button {
    @include mix.glass-bezel(
      (
        border-color: 156 193 255
      )
    );
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    padding: max(1.1rem, 11px);
    height: max(4rem, 40px);
    border-radius: max(9.9rem, 99px);
    transition: background 0.4s;
    overflow: hidden;
    position: relative;
    transition: gap 1s;
    align-self: flex-end;
    @media screen and (max-width: vars.$bp-xl) {
      @include mix.flex-center;
      height: max(4.4rem, 44px);
      width: max(4.4rem, 44px);
    }
    &::before {
      z-index: 1;
      opacity: 0;
      transition: opacity 0.4s;
    }
    &:hover::after {
      scale: 1 0.45;
      transition-duration: 0.4s;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, #2f417b, #2b78ac);
      backdrop-filter: blur(15px);
      transition: scale 1s;
      scale: 1 0;
      transform-origin: bottom;
    }
    &-icon {
      flex-shrink: 0;
      width: max(1.8rem, 18px);
      fill: none;
      z-index: 1;
    }
    &-label {
      max-width: 0;
      z-index: 1;
      transition: max-width 1s;
      overflow: hidden;
      @media screen and (max-width: vars.$bp-xl) {
        display: none;
      }
    }
    &.active {
      &:hover {
        @media screen and (min-width: vars.$bp-xl) {
          gap: 1rem;
          .navbar__button-label {
            max-width: 100px;
          }
        }
      }
      &::before {
        opacity: 1;
      }
      &::after {
        scale: 1;
      }
    }
  }
}
</style>
