<template>
  <UiPageContainer
    v-slot="{ activePage, setActivePage }"
    :title="$t('products.title')"
    :types="useMapRt('products.sort')"
  >
    <Teleport to="body">
      <UiProductsModal :product-i-d="productID" @change="assignProductID" />
    </Teleport>
    <div class="products-container">
      <UiProductsFilters />
      <ul class="products-cards">
        <li v-for="(product, i) in products" :key="i">
          <UiProductsCard :product @click="assignProductID(product.id)" />
        </li>
      </ul>
      <UiPagination :total="7" :model-value="activePage" @update:model-value="setActivePage" />
    </div>
  </UiPageContainer>
</template>

<script setup>
const { products } = useApiStore();

const productID = ref();

const assignProductID = id => {
  productID.value = id;
};
</script>

<style lang="scss" scoped>
.products {
  &-container {
    display: grid;
    grid-template-columns: 1fr 2.8fr;
    align-items: flex-start;
    column-gap: 2rem;
    row-gap: max(5.25rem, 20px);
    @media screen and (max-width: vars.$bp-xl) {
      grid-template-columns: 1fr;
      column-gap: 0;
    }
    @media screen and (min-width: vars.$bp-xl) {
      & > *:last-child {
        grid-column: 2 / 3;
        padding-left: 6.4rem;
      }
    }
  }
  &-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27rem, 250px), 1fr));
    row-gap: max(2rem, 12px);
    column-gap: max(1.2rem, 10px);
    & > * {
      display: flex;
    }
  }
}
</style>
