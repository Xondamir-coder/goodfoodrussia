<template>
  <div class="sorting-bar">
    <button
      v-for="(type, i) in types"
      :key="i"
      class="sorting-bar__button"
      :class="{ active: model === i }"
      @click="model = i"
    >
      {{ type }}
    </button>
  </div>
</template>

<script setup>
const model = defineModel({
  type: Number
});

defineProps({
  types: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.sorting-bar {
  display: flex;
  gap: 2.4rem;
  &__button {
    font-family: vars.$font-nunito-sans;
    font-weight: 700;
    letter-spacing: -0.036rem;
    color: #b8caed;
    transition: color 0.3s;
    &.active {
      color: #fff;
    }
  }
}
</style>
