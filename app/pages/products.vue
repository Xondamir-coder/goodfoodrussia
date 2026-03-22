<template>
  <main class="products">
    <div class="products__header">
      <h1 class="products__header-title">{{ $t('products.title') }}</h1>
      <div class="products__header-sorts">
        <button
          v-for="(sort, i) in useMapRt('products.sort')"
          :key="i"
          class="products__header-sort"
          :class="{ active: sortID === i }"
          @click="activateSort(i)"
        >
          {{ sort }}
        </button>
      </div>
    </div>
    <div class="products__container">
      <UiProductsFilters />
      <ul class="products__cards">
        <li v-for="(card, i) in useMapRt('products.cards')" :key="i">
          <UiProductsCard :="card" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
const sortID = ref(0);

const activateSort = id => {
  sortID.value = id;
};
</script>

<style lang="scss" scoped>
.products {
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 3.9rem;
  font-family: vars.$font-dm-sans;
  padding-inline: var(--spacing-inline);
  padding-top: 2.4rem;
  padding-bottom: 3.75rem;
  &__header {
    display: flex;
    justify-content: space-between;
    &-sorts {
      display: flex;
      gap: 2.4rem;
    }
    &-sort {
      font-weight: 700;
      letter-spacing: -0.036rem;
      color: #b8caed;
      transition: color 0.3s;
      &.active {
        color: #fff;
      }
    }
    &-title {
      font-size: 2.6rem;
      font-family: vars.$font-inter;
      font-weight: 700;
    }
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 2.8fr;
    align-items: flex-start;
    gap: 2rem;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27rem, 250px), 1fr));
    row-gap: 2rem;
    column-gap: 1.2rem;
    & > * {
      display: flex;
    }
  }
}
</style>
