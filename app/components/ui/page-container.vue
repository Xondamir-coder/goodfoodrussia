<template>
  <main class="page-container">
    <div class="page-container__header">
      <h1 class="page-container__title">{{ title }}</h1>
      <div class="page-container__bar">
        <button
          v-for="(type, i) in types"
          :key="i"
          class="page-container__button"
          :class="{ active: sortID === i }"
          @click="sortID = i"
        >
          {{ type }}
        </button>
      </div>
    </div>
    <slot :sort-id="sortID" :active-page="activePage" :set-active-page="setActivePage" />
  </main>
</template>

<script setup>
const sortID = ref(0);
const activePage = ref(1);

const setActivePage = value => {
  activePage.value = value;
};

defineProps({
  title: {
    type: String,
    required: true
  },
  types: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  gap: max(3.9rem, 16px);
  font-family: vars.$font-nunito-sans;
  padding-inline: var(--spacing-inline);
  padding-top: max(2rem, 16px);
  padding-bottom: max(3.75rem, 20px);
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    @media screen and (max-width: vars.$bp-sm) {
      flex-direction: column;
    }
  }
  &__title {
    font-size: max(2.6rem, 20px);
    font-family: vars.$font-inter;
    font-weight: 700;
  }
  &__bar {
    display: flex;
    gap: max(2.4rem, 12px);
    @media screen and (max-width: vars.$bp-sm) {
      max-width: 100%;
      overflow-x: auto;
      scrollbar-width: 0;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  &__button {
    text-wrap: nowrap;
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
