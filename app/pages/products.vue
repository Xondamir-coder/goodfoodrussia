<template>
  <main class="products">
    <Teleport to="body">
      <UiProductsModal :product-i-d="productID" @change="assignProductID" />
    </Teleport>
    <div class="products__header">
      <h1 class="products__header-title">{{ $t('products.title') }}</h1>
      <UiSortingBar v-model="typeID" :types="useMapRt('products.sort')" />
    </div>
    <div class="products__container">
      <UiProductsFilters />
      <ul class="products__cards">
        <li v-for="(product, i) in products" :key="i">
          <UiProductsCard :product @click="assignProductID(product.id)" />
        </li>
      </ul>
      <UiPagination v-model="activePage" :total="7" />
    </div>
  </main>
</template>

<script setup>
const { products } = useApiStore();

const activePage = ref(1);
const typeID = ref(0);
const productID = ref();

const assignProductID = id => {
  productID.value = id;
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  gap: 3.9rem;
  font-family: vars.$font-nunito-sans;
  padding-inline: var(--spacing-inline);
  padding-top: 2.4rem;
  padding-bottom: 3.75rem;
  &__header {
    display: flex;
    justify-content: space-between;

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
    & > *:last-child {
      grid-column: 2 / 3;
      margin-top: 5.3rem - 2rem;
      padding-left: 6.4rem;
    }
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
