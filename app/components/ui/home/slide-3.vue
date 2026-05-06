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
    <UiBaseButton :text="$t('exploreCatalogue')" variant="blue" />
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
    width: max(57rem, 200px);
    animation: scale-up 0.6s backwards;
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    &:first-of-type {
      left: -13%;
      bottom: -22%;
      transform: rotate(-33.662deg);
      @media screen and (max-width: vars.$bp-sm) {
        bottom: -2%;
        left: -23%;
      }
    }
    &:last-of-type {
      right: -13%;
      top: -6%;
      transform: rotate(-21.532deg);
      @media screen and (max-width: vars.$bp-sm) {
        top: 0;
        right: -27%;
      }
    }
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27.3rem, 200px), 1fr));
    gap: max(1.6rem, 8px);
  }
  &__item {
    @keyframes item-anim {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
    }
    display: flex;
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        & > * {
          animation: item-anim 0.6s backwards $i * 0.04s;
        }
      }
    }
    & > * {
      flex: 1;
    }
  }
}
</style>
