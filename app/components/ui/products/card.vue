<template>
  <div class="card">
    <UiPicture :src="product.image" alt="card title" class="card__pic" />
    <div class="card__content">
      <h3 class="card__content-title">
        {{ product.title }}
      </h3>
      <span class="card__content-weight">
        {{ product.volume }}
      </span>
    </div>
    <UiBaseButton
      :text="$t('readMore')"
      variant="glass"
      class="card__button"
      @click="emits('click')"
    />
  </div>
</template>
<script setup>
import Product from '~/types/product';

const emits = defineEmits(['click']);

defineProps({
  product: {
    required: true,
    type: Product
  }
});
</script>
<style lang="scss" scoped>
.card {
  flex: 1;
  display: flex;
  padding: max(1.6rem, 12px);
  flex-direction: column;
  gap: max(1.6rem, 12px);
  border-radius: max(1.5rem, 12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  &__pic {
    aspect-ratio: 23.7/18.1;
    border-radius: max(1.2rem, 8px);
    user-select: none;

    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 24.4/18.1;
    }
  }
  &__button {
    margin-top: auto;
    height: max(4.2rem, 42px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(0.8rem, 8px);
    &-title {
      font-weight: 700;
      font-size: max(1.6rem, 14px);
    }
    &-weight {
      font-size: max(1.4rem, 12px);
      opacity: 0.5;
    }
  }
}
</style>
