<template>
  <div class="filters__switch">
    <span class="filters__label">
      {{ label }}
    </span>
    <UiToggleSwitch :is-active="model" @switch="changeFilter" />
  </div>
</template>

<script setup>
const model = defineModel({
  type: Boolean
});

const changeFilter = newVal => {
  model.value = newVal;
};

defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.filters__switch {
  display: flex;
  justify-content: space-between;
}
</style>
