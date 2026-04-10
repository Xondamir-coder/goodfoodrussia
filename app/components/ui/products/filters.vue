<template>
  <div class="filters">
    <h2 class="filters__title">
      {{ $t('products.filters.title') }}
    </h2>
    <UiProductsForm />
  </div>
</template>

<script setup></script>
<style lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  gap: max(2rem, 20px);
  border-radius: max(1.5rem, 12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  padding: max(2rem, 16px);
  @media screen and (max-width: vars.$bp-lg) {
    display: none;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  &__label {
    font-size: max(1.4rem, 14px);
    font-weight: 700;
  }
  &__arrow {
    flex-shrink: 0;
    width: max(1.4rem, 14px);
    transition: rotate 0.5s;
  }
  &__title {
    font-size: max(2.4rem, 20px);
    font-weight: 700;
    padding-bottom: max(1.6rem, 12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
