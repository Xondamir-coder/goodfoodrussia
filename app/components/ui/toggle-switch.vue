<template>
  <button class="switch" :class="{ active: isActive }" @click="emits('switch', !isActive)">
    <div class="switch__circle" />
  </button>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
});
const emits = defineEmits(['switch']);
</script>

<style lang="scss" scoped>
.switch {
  width: 4.2rem;
  height: 2.4rem;
  flex-shrink: 0;
  background-color: rgba(203, 213, 224, 0.5);
  border-radius: 3.4rem;
  position: relative;
  transition: background 0.3s;

  &.active {
    background-color: #0caf60;

    &::before {
      scale: 1;
    }
    .switch__circle {
      translate: calc(100% - 0.2rem);
    }
  }
  &__circle {
    width: 47.62%;
    position: absolute;
    inset-block: 0.2rem;
    left: 0.2rem;
    background-color: #fff;
    border-radius: 50%;
    transition: translate 0.3s;
  }
}
</style>
