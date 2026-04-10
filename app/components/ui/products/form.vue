<template>
  <form class="form" @submit.prevent="">
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
  </form>
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

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
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
}
</style>
