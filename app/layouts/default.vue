<template>
  <div class="default">
    <LayoutHeader />
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.default {
  background: var(--Smalt-950, #061852);
  color: #fff;
  overflow: hidden;
}
</style>
