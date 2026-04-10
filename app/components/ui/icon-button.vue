<template>
  <button class="icon-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(['click']);
</script>

<style lang="scss" scoped>
.icon-button {
  @include mix.flex-center;
  flex-shrink: 0;
  width: max(4.2rem, 40px);
  aspect-ratio: 1;
  border-radius: max(0.8rem, 8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  & > * {
    fill: #fff;
    width: 50%;
  }
}
</style>
