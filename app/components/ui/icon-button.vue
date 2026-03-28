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
  width: 4.2rem;
  aspect-ratio: 1;
  border-radius: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  & > * {
    fill: #fff;
    width: 57%;
  }
}
</style>
