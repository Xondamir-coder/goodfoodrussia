<template>
  <div class="category-card">
    <h3 class="category-card__name">
      {{ category.name }}
    </h3>
    <span class="category-card__country">
      {{ category.country }}
    </span>
    <UiPicture :src="category.image" class="category-card__pic" />
  </div>
</template>

<script setup>
import Category from '~/types/category';

defineProps({
  category: {
    required: true,
    type: Category
  }
});
</script>

<style lang="scss" scoped>
.category-card {
  @include mix.glass-bezel(
    (
      border-color: 82 155 196,
      end-opacity: 0,
      mid-start-pos: 80%,
      mid-end-pos: 0%
    )
  );
  border-radius: max(2.4rem, 12px);
  background: rgba(0, 28, 73, 0.6);
  backdrop-filter: blur(25px);
  padding-block: max(1.5rem, 15px);
  padding-inline: max(2.4rem, 16px);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;
  aspect-ratio: 27.3/18;
  @media screen and (max-width: vars.$bp-sm) {
    @include mix.glass-bezel(
      (
        border-color: 82 155 196,
        end-opacity: 0,
        mid-start-pos: 70%,
        mid-end-pos: 0%
      )
    );
    gap: 0;
    aspect-ratio: 26.8/14;
  }
  &__pic {
    width: 70%;
    position: absolute;
    right: -10%;
    bottom: -35%;
    @media screen and (max-width: vars.$bp-md) {
      width: 60%;
    }
  }
  &__name {
    color: #fff;
    font-family: vars.$font-dongle;
    font-size: max(3.2rem, 24px);
    font-weight: 700;
  }
  &__country {
    color: rgba(255, 255, 255, 0.6);
    font-size: max(1.4rem, 14px);
    font-weight: 400;
  }
}
</style>
