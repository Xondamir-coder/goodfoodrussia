<template>
  <div class="pagination">
    <button class="pagination__button">
      <IconsArrowLeftIos class="pagination__button-icon" />
    </button>
    <div class="pagination__container">
      <button
        v-for="i in 5"
        :key="i"
        class="pagination__number"
        :class="{ active: i === activePage }"
        @click="activePage = i"
      >
        <span>{{ i }}</span>
      </button>
    </div>
    <button class="pagination__button">
      <IconsArrowLeftIos class="pagination__button-icon" />
    </button>
  </div>
</template>

<script setup>
const activePage = ref(1);
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
    @include mix.flex-center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #9098b0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    &:last-of-type {
      rotate: 180deg;
    }
    &-icon {
      width: 21%;
    }
  }
}
</style>
