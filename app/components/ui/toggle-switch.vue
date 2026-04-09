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
  width: max(4.2rem, 42px);
  height: max(2.4rem, 24px);
  flex-shrink: 0;
  background-color: rgba(203, 213, 224, 0.5);
  border-radius: max(3.4rem, 16px);
  position: relative;
  transition: background 0.3s;

  &.active {
    background-color: #0caf60;

    &::before {
      scale: 1;
    }
    .switch__circle {
      translate: calc(100% - max(0.2rem, 2px));
    }
  }
  &__circle {
    width: 47.62%;
    position: absolute;
    inset-block: max(0.2rem, 2px);
    left: max(0.2rem, 2px);
    background-color: #fff;
    border-radius: 50%;
    transition: translate 0.3s;
  }
}
</style>
