<template>
  <div class="pagination">
    <UiIconButton @click="changePage('prev')">
      <IconsArrowLeftIos />
    </UiIconButton>
    <div class="pagination__container">
      <button
        v-for="i in total"
        :key="i"
        class="pagination__number"
        :class="{ active: i === model }"
        @click="model = i"
      >
        <span>{{ i }}</span>
      </button>
    </div>
    <UiIconButton @click="changePage('next')">
      <IconsArrowRightIos />
    </UiIconButton>
  </div>
</template>

<script setup>
const model = defineModel({
  type: Number
});

const { total } = defineProps({
  total: {
    type: Number,
    required: true
  }
});

const changePage = dir => {
  if (dir === 'prev') {
    if (model.value > 1) model.value--;
  } else {
    if (model.value < total) model.value++;
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 12px;
  &__container {
    padding-inline: 4px;
    display: flex;
    gap: 2px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.12);
  }
  &__number {
    @include mix.flex-center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    color: var(--White, #fff);
    font-family: vars.$font-nunito-sans;
    font-weight: 500;
    position: relative;
    transition: background 0.3s;
    &:hover {
      background: rgba(#007bff, 0.5);
    }
    span {
      z-index: 1;
    }
    &.active {
      background: #007bff;
    }
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -2px;
      top: 50%;
      translate: 100% -50%;
      width: 1px;
      height: 40%;
      background: rgba(255, 255, 255, 0.12);
    }
  }
  &__button {
    &:last-of-type {
      rotate: 180deg;
    }
  }
}
</style>
