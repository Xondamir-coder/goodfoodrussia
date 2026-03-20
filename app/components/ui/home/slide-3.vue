<template>
  <div class="slide">
    <UiPicture src="radish.png" class="slide__pic" alt="radish" />
    <UiPicture src="radish.png" class="slide__pic" alt="radish" />
    <UiHomeSlideHeader :title="$t('home.slide-3.title')" :text="$t('home.slide-3.text')" />
    <div class="slide__items">
      <div v-for="(item, i) in items" :key="i" class="slide__item">
        <h3 class="slide__item-name">
          {{ item.name }}
        </h3>
        <span class="slide__item-country">
          {{ item.country }}
        </span>
        <UiPicture :src="item.image" class="slide__item-pic" />
      </div>
    </div>
    <UiBlueButton :text="$t('exploreCatalogue')" />
  </div>
</template>

<script setup>
const supply = [
  'veggies.png',
  'nuts.png',
  'sweets.png',
  'dairy.png',
  'meats.png',
  'grains.png',
  'drinks.png',
  'cans.png',
  'dairy.png',
  'nuts.png',
  'veggies.png',
  'sweets.png'
];

const items = computed(() =>
  useMapRt('home.slide-3.categories').map((el, i) => ({
    ...el,
    image: supply[i]
  }))
);
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
    border-radius: 2.4rem;
    border: 1px solid rgba(135, 217, 255, 0.6);
    background: rgba(0, 28, 73, 0.6);
    backdrop-filter: blur(25px);
    padding-block: 1.5rem;
    padding-inline: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    position: relative;
    overflow: hidden;
    aspect-ratio: 27.3/18;
    &-pic {
      width: 70%;
      position: absolute;
      right: -10%;
      bottom: -35%;
    }
    &-name {
      color: #fff;
      font-family: vars.$font-dongle;
      font-size: 3.2rem;
      font-weight: 700;
    }
    &-country {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
}
</style>
