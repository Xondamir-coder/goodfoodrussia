<template>
  <div class="filters__row" :class="{ show: showDropdown }">
    <button class="filters__top" @click="showDropdown = !showDropdown">
      <span class="filters__label">{{ label }}</span>
      <IconsChevronDown class="filters__arrow" />
    </button>
    <div
      v-if="items.length"
      ref="contentRef"
      class="filters__dropdown filters__items"
      :class="{ hidden: !showDropdown }"
      :style="{ height: `${dropdownHeight}px` }"
    >
      <label v-for="(item, i) in items" :key="i" :for="item.key" class="filters__items-item">
        <UiCheckbox
          :id="item.key"
          :model-value="model.includes(item.key)"
          @update:model-value="toggle(item.key, $event)"
        />
        <span>{{ item.val }}</span>
      </label>
    </div>
    <div
      v-else
      ref="contentRef"
      class="filters__dropdown"
      :class="{ hidden: !showDropdown }"
      :style="{ height: `${dropdownHeight}px` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const showDropdown = ref(true);
const contentRef = ref();

const model = defineModel({ type: Array });
defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default: () => []
  }
});

const toggle = (key, checked) => {
  if (checked) {
    model.value = [...model.value, key];
  } else {
    model.value = model.value.filter(k => k !== key);
  }
};

const dropdownHeight = ref(0);

onMounted(() => {
  if (contentRef.value) {
    dropdownHeight.value = contentRef.value.scrollHeight;
  }
});
</script>

<style lang="scss" scoped>
.filters {
  &__dropdown {
    transition: height 0.5s;
    overflow: hidden;
    &.hidden {
      height: 0 !important;
    }
  }
  &__items {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    &-item {
      user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: max(0.8rem, 8px);
      color: #fff;
      font-size: max(1.4rem, 14px);
      letter-spacing: max(0.007rem, 0.07px);
    }
  }
  &__row {
    display: flex;
    flex-direction: column;
    transition: gap 0.7s;
    gap: 0;
    &.show {
      gap: max(1.6rem, 16px);
      .filters__arrow {
        rotate: -540deg;
      }
    }
  }
}
</style>
