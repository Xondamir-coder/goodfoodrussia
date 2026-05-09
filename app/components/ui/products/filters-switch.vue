<template>
  <div class="filters__switch">
    <span class="filters__label">
      {{ label }}
    </span>
    <UiToggleSwitch
      :is-active="model"
      :aria-label="$t('accessibility.toggleOption', { label })"
      @switch="changeFilter"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
});

const model = defineModel({
  type: Boolean
});

const changeFilter = newVal => {
  model.value = newVal;
};
</script>

<style lang="scss" scoped>
.filters__switch {
  display: flex;
  justify-content: space-between;
}
</style>
