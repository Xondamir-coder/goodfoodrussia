<template>
  <UiPageContainer
    v-slot="{ activePage, setActivePage }"
    :title="$t('products.title')"
    :types="useMapRt('products.sort')"
  >
    <UiProductsModal :product-i-d="productID" @change="assignProductID" />
    <button class="products-cta" @click="showFiltersModal = true">
      <span>{{ $t('products.filters.title') }}</span>
      <IconsFilters class="products-cta__icon" />
    </button>
    <UiProductsFiltersModal />
    <div class="products-container">
      <UiProductsFilters />
      <ul class="products-cards">
        <li v-for="(product, i) in products" :key="i">
          <UiProductsCard :product @click="assignProductID(product.id)" />
        </li>
      </ul>
      <UiPagination
        class="products-pagination"
        :total="7"
        :model-value="activePage"
        @update:model-value="setActivePage"
      />
    </div>
  </UiPageContainer>
</template>

<script setup>
const { products } = useApiStore();

const showFiltersModal = useState('showFiltersModal');

const productID = ref();

const assignProductID = id => {
  productID.value = id;
};
</script>

<style lang="scss" scoped>
.products {
  &-cta {
    align-self: flex-start;
    display: flex;
    height: 40px;
    padding: 12px;
    align-items: center;
    gap: 12px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    font-weight: 500;
    @media screen and (min-width: vars.$bp-lg) {
      display: none;
    }
    &__icon {
      width: 20px;
    }
  }
  &-pagination {
    align-self: center;
  }
  &-container {
    display: grid;
    grid-template-columns: 1fr 2.8fr;
    align-items: flex-start;
    column-gap: 2rem;
    row-gap: max(5.25rem, 20px);
    @media screen and (max-width: vars.$bp-xl) {
      grid-template-columns: 270px 1fr;
    }
    @media screen and (max-width: vars.$bp-lg) {
      grid-template-columns: 1fr;
      column-gap: 0;
    }
    @media screen and (min-width: vars.$bp-lg) {
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
