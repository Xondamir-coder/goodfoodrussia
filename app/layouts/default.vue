<template>
  <div class="layout">
    <LayoutHeader />
    <slot />
    <div class="layout__shadows" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
  background: var(--Smalt-950, #061852);
  color: #fff;
  overflow: hidden;
  position: relative;
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
