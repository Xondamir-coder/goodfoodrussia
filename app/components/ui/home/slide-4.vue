<template>
  <div class="slide">
    <div class="slide__container">
      <UiHomeSlideHeader :title="$t('home.slide-4.title')" :text="$t('home.slide-4.text')" />
      <ul class="slide__producers">
        <li v-for="(image, i) in images" :key="i" class="slide__producer">
          <UiPicture class="slide__producer-pic" :src="image" />
        </li>
      </ul>
    </div>
    <div class="slide__container">
      <UiHomeSlideHeader
        :title="$t('home.slide-4.coop.title')"
        :text="$t('home.slide-4.coop.text')"
      />
      <ul class="slide__cards">
        <li v-for="card in cards" :key="card.title" class="slide__card">
          <div class="slide__card-icontainer">
            <component :is="card.icon" class="slide__card-icon" />
          </div>
          <span class="slide__card-title">{{ card.title }}</span>
          <p class="slide__card-text">{{ card.text }}</p>
        </li>
      </ul>
      <UiBaseButton :text="$t('submitRequest')" variant="blue" />
    </div>
    <UiPicture src="strawberries.png" alt="strawberries" class="slide__pic" />
    <UiPicture src="strawberries-sliced.png" alt="strawberries" class="slide__pic" />
  </div>
</template>

<script setup>
import { Icons4Clover, Icons4Rect, IconsShuriken } from '#components';

const { tm, rt } = useI18n();

const images = [
  'pankie.png',
  'ferrero.png',
  'nmedov.png',
  'rozmetov.png',
  'saxovat.png',
  'lactel.png',
  'sagban.png',
  'pankie.png'
];
const supply = [Icons4Rect, IconsShuriken, Icons4Clover];

const cards = mapRt(tm('home.slide-4.coop.cards'), rt).map((el, i) => ({
  ...el,
  icon: supply[i]
}));
</script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  & > *:not(picture) {
    z-index: 1;
  }
  &__pic {
    position: absolute;
    width: 41.9317rem;

    &:first-of-type {
      transform: rotate(17.363deg);
      left: -10%;
      top: 13%;
    }
    &:last-of-type {
      transform: rotate(-15deg);
      right: -9%;
      bottom: 2%;
    }
  }
  &__card {
    @include mix.glass-bezel(
      (
        border-color: 255 255 255,
        start-opacity: 0.6,
        end-opacity: 0,
        mid-start-pos: 80%,
        mid-end-pos: 0%
      )
    );
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 2rem;
    background: linear-gradient(180deg, rgba(13, 18, 49, 0.2) 0%, #060d56 100%);
    backdrop-filter: blur(5px);
    &-title {
      text-align: center;
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 104%;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &-text {
      color: var(--Smalt-200, #d6e1f4);
      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
    }
    &-icontainer {
      @include mix.flex-center;
      margin-bottom: 1rem;
      width: 7.2rem;
      height: 7.2rem;
      border-radius: 1.6rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
      box-shadow: 0 16px 50px 0 rgba(13, 3, 22, 0.4);
    }
    &-icon {
      width: 40%;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(300px, 37.6rem), 1fr));
    gap: 1.2rem;
  }
  &__producer {
    @include mix.flex-center;
    @include mix.glass-bezel(
      (
        border-color: 82 155 196,
        end-opacity: 0,
        mid-start-pos: 80%,
        mid-end-pos: 0%
      )
    );
    aspect-ratio: 27.3/18;
    border-radius: 2.4rem;
    background: rgba(0, 28, 73, 0.6);
    backdrop-filter: blur(25px);
    &-pic {
      width: 50%;
    }
  }
  &__producers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27.3rem, 200px), 1fr));
    row-gap: 2rem;
    column-gap: 1.6rem;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
