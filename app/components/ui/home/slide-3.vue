<template>
  <div class="slide">
    <UiPicture src="radish.png" class="slide__pic" alt="radish" />
    <UiPicture src="radish.png" class="slide__pic" alt="radish" />
    <UiHomeSlideHeader :title="$t('home.slide-3.title')" :text="$t('home.slide-3.text')" />
    <ul class="slide__items">
      <li v-for="(category, i) in categories" :key="i" class="slide__item">
        <UiCategoryCard :category />
      </li>
    </ul>
    <UiBlueButton :text="$t('exploreCatalogue')" />
  </div>
</template>

<script setup>
const { categories } = useApiStore();
</script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  & > *:not(picture) {
    z-index: 1;
  }
  &__pic {
    position: absolute;
    width: 57rem;
    &:first-of-type {
      left: -13%;
      bottom: -22%;
      transform: rotate(-33.662deg);
    }
    &:last-of-type {
      right: -13%;
      top: -6%;
      transform: rotate(-21.532deg);
    }
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27.3rem, 200px), 1fr));
    gap: 1.6rem;
  }
  &__item {
    display: flex;
    & > * {
      flex: 1;
    }
  }
}
</style>
