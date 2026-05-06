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
        class="slide__header"
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
      <UiBaseButton :text="$t('submitRequest')" variant="blue" class="slide__button" />
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
  &__button {
    animation: scale-in 0.4s 0.5s backwards;
  }
  &__header {
    & > *:first-child {
      animation: slide-from-bottom-10 0.4s 0.3s backwards;
    }
    & > *:last-child {
      animation: slide-from-bottom-10 0.4s 0.35s backwards;
    }
  }
  &__pic {
    position: absolute;
    width: max(41.9317rem, 250px);
    animation: scale-up 0.6s backwards;
    @for $i from 1 through 2 {
      &:nth-of-type(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }

    &:first-of-type {
      transform: rotate(17.363deg);
      left: -10%;
      top: 13%;
      @media screen and (max-width: vars.$bp-sm) {
        left: -38%;
        top: 3%;
      }
    }
    &:last-of-type {
      transform: rotate(-15deg);
      right: -9%;
      bottom: 2%;
      @media screen and (max-width: vars.$bp-sm) {
        right: -35%;
      }
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
    padding: max(2rem, 16px);
    flex-direction: column;
    align-items: center;
    gap: max(1rem, 10px);
    border-radius: max(2rem, 12px);
    background: linear-gradient(180deg, rgba(13, 18, 49, 0.2) 0%, #060d56 100%);
    backdrop-filter: blur(5px);
    animation: slide-from-bottom-20 0.6s backwards;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.07s + 0.3s;
      }
    }
    &-title {
      text-align: center;
      font-size: max(2.8rem, 20px);
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
      margin-bottom: max(1rem, 10px);
      width: max(7.2rem, 48px);
      height: max(7.2rem, 48px);
      border-radius: max(1.6rem, 8px);
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
    gap: max(1.2rem, 8px);
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
    border-radius: max(2.4rem, 12px);
    background: rgba(0, 28, 73, 0.6);
    backdrop-filter: blur(25px);
    animation: slide-from-bottom-20 0.6s backwards;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.03s;
      }
    }
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 13.2/12;
    }
    &-pic {
      width: 50%;
      @media screen and (max-width: vars.$bp-sm) {
        width: 70%;
      }
    }
  }
  &__producers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27.3rem, 130px), 1fr));
    row-gap: max(2rem, 8px);
    column-gap: max(1.6rem, 4px);
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: max(3rem, 20px);
  }
}
</style>
