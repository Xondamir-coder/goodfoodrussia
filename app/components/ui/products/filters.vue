<template>
  <div class="filters">
    <h2 class="filters__title">
      {{ $t('products.filters.title') }}
    </h2>
    <UiProductsFiltersSwitch v-model="data.new" :label="$t('products.filters.new')" />
    <UiProductsFiltersSwitch v-model="data.special" :label="$t('products.filters.special')" />
    <UiProductsFiltersRow :label="$t('products.filters.priceRange')">
      <UiProductsFiltersRange v-model="data.priceRange" />
    </UiProductsFiltersRow>
    <UiProductsFiltersRow
      v-for="row in dropdownRows"
      :key="row.key"
      v-model="data[row.key]"
      :label="row.label"
      :items="row.items"
    />
  </div>
</template>

<script setup>
const { t } = useI18n();

const data = ref({
  new: false,
  special: true,
  priceRange: {
    from: null,
    to: null
  },
  categories: [],
  brands: [],
  productTypes: [],
  volumes: []
});

const dropdownRows = computed(() => [
  { key: 'categories', label: t('category'), items: useMapRt('products.filters.categories') },
  { key: 'brands', label: t('brand'), items: useMapRt('products.filters.brands') },
  {
    key: 'productTypes',
    label: t('productType'),
    items: useMapRt('products.filters.productTypes')
  },
  {
    key: 'volumes',
    label: `${t('weight')}/${t('volume')}`,
    items: useMapRt('products.filters.volumes')
  }
]);
</script>
<style lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  border-radius: max(1.5rem, 12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  display: flex;
  padding: max(2rem, 16px);
  flex-direction: column;

  @media screen and (max-width: vars.$bp-xl) {
    display: none;
  }

  & > *:last-child {
    padding-top: max(1.6rem, 12px);
  }
  & > *:not(:last-child) {
    padding-block: max(1.6rem, 12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  & > *:first-child {
    padding-top: 0;
    padding-bottom: max(2rem, 16px);
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  &__title {
    font-size: max(2.4rem, 20px);
    font-weight: 700;
  }
  &__label {
    font-size: max(1.4rem, 14px);
    font-weight: 700;
  }
  &__arrow {
    flex-shrink: 0;
    width: max(1.4rem, 10px);
    transition: rotate 0.5s;
  }
}
</style>
