<template>
  <div class="category-card">
    <h3 class="category-card__name">
      {{ category[`name_${locale}`] }}
    </h3>
    <span class="category-card__country">
      {{ category[`country_${locale}`] }}
    </span>
    <UiPicture :src="category.image" class="category-card__pic" />
  </div>
</template>

<script setup>
defineProps({
  category: {
    required: true,
    type: Object
  }
});

const { locale } = useI18n();
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
  gap: max(2.5rem, 10px);
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
    font-size: max(2.2rem, 18px);
    font-weight: 700;
    font-family: vars.$font-nunito-sans;
  }
  &__country {
    color: rgba(255, 255, 255, 0.6);
    font-size: max(1.4rem, 14px);
    font-weight: 400;
  }
}
</style>
