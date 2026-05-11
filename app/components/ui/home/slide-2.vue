<template>
  <div class="slide">
    <UiPicture src="lemons-flying.png" alt="lemons" class="slide__lemon" />
    <UiPicture src="lemons-flying.png" alt="lemons" class="slide__lemon" />
    <UiPicture src="lemons-leaves.png" alt="lemons" class="slide__lemon" />
    <UiHomeSlideHeader :title="$t('home.slide-2.title')" :text="$t('home.slide-2.text')" />
    <div class="slide__cards">
      <div v-for="card in cards" :key="card.title" class="slide__card">
        <div class="slide__card-icontainer">
          <IconsClover class="slide__card-icon" />
        </div>
        <div class="slide__card-content">
          <h2 class="slide__card-content-title">
            {{ card.title }}
          </h2>
          <p class="slide__card-content-text">
            {{ card.text }}
          </p>
        </div>
        <div v-if="card.products" class="slide__card-wrapper">
          <swiper
            class="slide__card-slider"
            :modules="swiperModules"
            slides-per-view="auto"
            :space-between="10"
            :loop="true"
            :allow-touch-move="false"
            :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :speed="3500"
          >
            <swiper-slide
              v-for="(product, i) in card.products"
              :key="i"
              class="slide__card-slider-item"
            >
              <UiPicture :src="product.image" :alt="product.name" />
              <span class="slide__card-slider-name">{{ product.name }}</span>
            </swiper-slide>
          </swiper>
          <swiper
            class="slide__card-slider"
            :modules="swiperModules"
            slides-per-view="auto"
            :space-between="10"
            :loop="true"
            :allow-touch-move="false"
            :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, reverseDirection: true }"
            :speed="3500"
          >
            <swiper-slide
              v-for="(product, i) in card.products"
              :key="i"
              class="slide__card-slider-item"
            >
              <UiPicture :src="product.image" :alt="product.name" />
              <span class="slide__card-slider-name">{{ product.name }}</span>
            </swiper-slide>
          </swiper>
        </div>
        <ul v-if="card.items" class="slide__card-items">
          <li v-for="item in card.items" :key="item.text" class="slide__card-item">
            <div class="slide__card-item-icontainer">
              <component :is="item.icon" class="slide__card-item-icon" />
            </div>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconsFeed, IconsGlobe, IconsHandshake } from '#components';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiperModules = [Autoplay];

const { tm, rt } = useI18n();

const images = [
  'flour-products.png',
  'cakes.png',
  'lactel-milk.png',
  'flour-products.png',
  'lactel-milk.png'
];
const icons = [IconsFeed, IconsGlobe, IconsHandshake];

const cards = mapRt(tm('home.slide-2.cards'), rt).map(el => ({
  ...el,
  ...(el.products && {
    products: el.products.map((product, j) => ({
      name: product,
      image: images[j]
    }))
  }),
  ...(el.items && {
    items: el.items.map((item, j) => ({
      text: item,
      icon: icons[j]
    }))
  })
}));
</script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;

  &__lemon {
    position: absolute;
    pointer-events: none;
    width: max(70rem, 280px);
    animation: scale-up 0.6s backwards;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    &:first-of-type {
      left: -26%;
      top: -13%;
      transform: rotate(-153.026deg);
      @media screen and (max-width: vars.$bp-md) {
        top: 5%;
        left: -35%;
      }
    }
    &:nth-of-type(2) {
      right: -28%;
      bottom: -27%;
      transform: rotate(19deg);
      @media screen and (max-width: vars.$bp-md) {
        right: -29%;
        bottom: -16%;
        z-index: 2;
      }
    }
    &:last-of-type {
      width: max(50.3rem, 250px);
      left: 50%;
      bottom: 0;
      translate: -50% 52%;
      z-index: 2;
      @media screen and (max-width: vars.$bp-md) {
        translate: none;
        left: -35%;
        bottom: -10%;
      }
    }
  }
  &__card {
    @include mix.glass-bezel(
      (
        border-color: 82 155 196,
        end-opacity: 0,
        mid-start-pos: 70%,
        mid-end-pos: 0%
      )
    );
    display: flex;
    flex-direction: column;
    gap: max(4rem, 16px);
    border-radius: max(2rem, 12px);
    background: rgba(0, 28, 73, 0.6);
    backdrop-filter: blur(25px);
    padding: max(2rem, 16px);
    animation: slide-from-bottom-20 0.6s backwards;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    @media screen and (max-width: vars.$bp-md) {
      @include mix.glass-bezel(
        (
          border-color: 82 155 196,
          end-opacity: 0,
          angle: 120deg,
          mid-start-pos: 60%,
          mid-end-pos: 0%
        )
      );
    }
    &:nth-child(2) {
      overflow: hidden;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 12px);
      &-text {
        font-size: max(1.8rem, 12px);
        line-height: 135%;
      }
      &-title {
        font-size: max(3rem, 18px);
        font-weight: 700;
        line-height: 114%;
      }
    }
    &-items {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 12px);
    }
    &-item {
      display: flex;
      align-items: center;
      gap: max(1.2rem, 12px);
      font-size: max(1.4rem, 12px);

      &-icontainer {
        flex-shrink: 0;
        border-radius: max(0.8rem, 8px);
        background: rgba(255, 255, 255, 0.27);
        width: max(4.4rem, 38px);
        height: max(4.4rem, 38px);
        @include mix.flex-center;
      }
      &-icon {
        width: 54.545454%;
      }
    }
    &-icontainer {
      @include mix.flex-center;
      width: max(6.4rem, 44px);
      height: max(6.4rem, 44px);
      border-radius: max(1.8rem, 8px);
      border: 1px solid #d6e1f4;
      background: linear-gradient(
        180deg,
        rgba(211, 135, 255, 0) 0%,
        rgba(211, 135, 255, 0.05) 100%
      );

      /* Icon Wrapper Shadow */
      box-shadow: 0 16px 28px 0 rgba(13, 3, 22, 0.4);
    }
    &-icon {
      width: 43.75%;
    }
    &-wrapper {
      & > *:first-child {
        margin-bottom: max(3rem, 16px);
      }
    }
    &-slider {
      cursor: default;
      &-name {
        font-size: max(2rem, 8px);
      }
      &-item {
        width: max(22rem, 78px);
        height: max(26rem, 95px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: max(1.7333rem, 10px);
        padding: max(1.5rem, 8px);
        border-radius: max(1.6rem, 8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(180deg, rgba(0, 97, 193, 0.1) 0%, #0e1319 100%);
        backdrop-filter: blur(10px);
      }
    }
  }
  &__cards {
    margin-inline: var(--spacing-inline);
    display: grid;
    grid-template-areas:
      'card-1 card-2'
      'card-3 card-2';
    grid-auto-columns: 1fr;
    gap: max(2rem, 12px);
    @media screen and (max-width: vars.$bp-md) {
      grid-template-areas:
        'card-1'
        'card-3'
        'card-2';
    }
    & > * {
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          grid-area: card-#{$i};
        }
      }
    }
  }
}
</style>
