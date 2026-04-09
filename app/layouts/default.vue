<template>
  <div
    class="layout"
    :class="
      $route.params?.id
        ? `${$route.path.split('/')[2]} index`
        : $route.query?.slide
          ? `home--${$route.query?.slide}`
          : $i18n.locale === 'en'
            ? $route.path.split('/')[2]
            : $route.path.slice(1)
    "
  >
    <LayoutHeader />
    <div class="layout__patterns">
      <!-- header -->
      <div class="layout__line layout__line--header" />
      <div class="layout__line layout__line--header" />

      <!-- left -->
      <div class="layout__line layout__line--left" />
      <div class="layout__line layout__line--left" />

      <!-- right -->
      <div class="layout__line layout__line--right" />
      <div class="layout__line layout__line--right" />

      <!-- footer -->
      <div class="layout__line layout__line--footer" />
      <!-- dots -->
      <div>
        <div v-for="i in 6" :key="i" class="layout__dot" />
      </div>
    </div>
    <div class="layout__slot">
      <slot />
    </div>
    <div class="layout__shadows" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use 'sass:map';

.layout {
  --spacing-h-sm: max(5.5rem, 15px);
  --spacing-h-lg: calc(max(6.6rem, 16px) + var(--spacing-h-sm));
  --spacing-v-top-sm: max(6rem, 60px);
  --spacing-v-top-lg: calc(max(6.6rem, 50px) + var(--spacing-v-top-sm));
  --spacing-v-bottom: 12rem;

  background: var(--Smalt-950, #061852);
  color: #fff;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  &.contacts {
    .layout__dot {
      display: none;
    }
    .layout__line--header:nth-child(2) {
      display: none;
    }
    .layout__line--footer {
      display: none;
    }
  }
  &.media.index {
    .layout__line--header:nth-child(2) {
      display: none;
    }
    .layout__dot:nth-child(2),
    .layout__dot:nth-child(4) {
      display: none;
    }
  }
  &.home {
    &--2 {
      --spacing-v-top-lg: calc(11.4rem + var(--spacing-v-top-sm));
    }
    &--3 {
      --spacing-v-top-lg: calc(14.4rem + var(--spacing-v-top-sm));
    }
    &--4,
    &--5 {
      --spacing-v-top-lg: calc(9.5rem + var(--spacing-v-top-sm));
    }
    &--6 {
      --spacing-v-top-lg: calc(9.5rem + var(--spacing-v-top-sm));
    }
    &--7 {
      .layout__line--header:nth-child(2) {
        display: none;
      }
      .layout__dot {
        display: none;
      }
    }
  }

  &__dot {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #2550b5;
    @media screen and (max-width: vars.$bp-sm) {
      display: none;
    }

    &:nth-child(1) {
      top: var(--spacing-v-top-sm);
      left: var(--spacing-h-lg);
      transform: translate(-30%, -30%);
    }
    &:nth-child(2) {
      top: var(--spacing-v-top-lg);
      left: var(--spacing-h-lg);
      transform: translate(-30%, -30%);
    }
    &:nth-child(3) {
      top: var(--spacing-v-top-sm);
      right: var(--spacing-h-lg);
      transform: translate(30%, -30%);
    }
    &:nth-child(4) {
      top: var(--spacing-v-top-lg);
      right: var(--spacing-h-lg);
      transform: translate(30%, -30%);
    }
    &:nth-child(5) {
      bottom: var(--spacing-v-bottom);
      left: var(--spacing-h-lg);
      transform: translate(-30%, 30%);
    }
    &:nth-child(6) {
      bottom: var(--spacing-v-bottom);
      right: var(--spacing-h-lg);
      transform: translate(30%, 30%);
    }
  }
  &__line {
    background-color: rgba(255, 255, 255, 0.07);
    position: absolute;

    &--header,
    &--footer {
      width: 100%;
      height: 1px;
      left: 0;
    }
    &--footer {
      bottom: var(--spacing-v-bottom);
    }
    &--header {
      &:first-child {
        top: var(--spacing-v-top-sm);
      }
      &:nth-child(2) {
        top: var(--spacing-v-top-lg);
        @media screen and (max-width: vars.$bp-sm) {
          display: none;
        }
      }
    }
    &--left,
    &--right {
      top: 0;
      width: 1px;
      height: 100%;
    }
    &--left {
      &:nth-child(3) {
        left: var(--spacing-h-sm);
      }
      &:nth-child(4) {
        left: var(--spacing-h-lg);
      }
    }
    &--right {
      &:nth-child(5) {
        right: var(--spacing-h-sm);
      }
      &:nth-child(6) {
        right: var(--spacing-h-lg);
      }
    }
  }
  &__patterns {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }
  &__slot {
    z-index: 1;
  }
  &__shadows {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      270deg,
      #0d0316 0%,
      rgba(13, 3, 22, 0.15) 24.71%,
      rgba(13, 3, 22, 0) 50.18%,
      rgba(13, 3, 22, 0.15) 75.35%,
      #0d0316 100%
    );
  }
}
</style>
