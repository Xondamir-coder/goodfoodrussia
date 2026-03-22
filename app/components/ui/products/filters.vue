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
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
  }
  &__label {
    font-size: 1.4rem;
    font-weight: 700;
  }
  &__arrow {
    flex-shrink: 0;
    width: 1.4rem;
    transition: rotate 0.5s;
  }
}
</style>
