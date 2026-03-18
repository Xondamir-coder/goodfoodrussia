<template>
  <div class="slide">
    <UiPicture src="lemons-flying.png" alt="lemons" class="slide__lemon" />
    <UiPicture src="lemons-flying.png" alt="lemons" class="slide__lemon" />
    <UiPicture src="lemons-leaves.png" alt="lemons" class="slide__lemon" />
    <div class="slide__top">
      <span>{{ $t('home.slide-2.title') }}</span>
      <p>{{ $t('home.slide-2.text') }}</p>
    </div>
    <div class="slide__cards">
      <div v-for="card in cards" :key="card.title" class="slide__card">
        <div class="slide__card-icontainer">
          <IconsClover class="slide__card-icon" />
        </div>
        <div class="slide__card-content">
          <h3 class="slide__card-content-title">
            {{ card.title }}
          </h3>
          <p class="slide__card-content-text">
            {{ card.text }}
          </p>
        </div>
        <div v-if="card.products">
          <swiper
            class="slide__card-slider"
            :grab-cursor="true"
            slides-per-view="auto"
            :space-between="15"
          >
            <swiper-slide
              v-for="(product, i) in card.products"
              :key="i"
              class="slide__card-slider-item"
            >
              <UiPicture :src="product.image" :alt="product.name" />
              <span>{{ product.name }}</span>
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
import 'swiper/css';

const images = [
  'flour-products.png',
  'cakes.png',
  'lactel-milk.png',
  'flour-products.png',
  'lactel-milk.png'
];
const icons = [IconsFeed, IconsGlobe, IconsHandshake];

const cards = computed(() =>
  useMapRt('home.slide-2.cards').map(el => ({
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
  }))
);
</script>

<style lang="scss" scoped>
.slide {
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-block: 1.6rem;
  position: relative;
  &__lemon {
    position: absolute;
    &:first-child {
      width: 70rem;
      left: -25%;
      top: -22%;
      transform: rotate(-153.026deg);
    }
    &:nth-child(2) {
      width: 70rem;
      right: -30%;
      bottom: -22%;
      transform: rotate(19deg);
    }
    &:nth-child(3) {
      width: 50.3rem;
      left: 50%;
      bottom: 0;
      translate: -50% 52%;
      z-index: 2;
    }
  }
  &__top {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1rem;
    color: var(--Smalt-300, #b8caed);

    span {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      line-height: 128%;
    }
    p {
      text-align: center;
      font-family: vars.$font-dm-sans;
      font-size: 1.8rem;
      line-height: 128%;
      letter-spacing: -0.036rem;
      max-width: 45ch;
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    border-radius: 2rem;
    border: 1px solid rgba(135, 217, 255, 0.6);
    background: rgba(0, 28, 73, 0.6);
    backdrop-filter: blur(25px);
    padding: 2rem;
    &:nth-child(2) {
      overflow: hidden;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      &-text {
        font-size: 1.8rem;
        line-height: 128%;
        letter-spacing: 0.018rem;
      }
      &-title {
        font-size: 3rem;
        font-weight: 700;
        line-height: 114%;
      }
    }
    &-items {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    &-item {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      font-size: 1.4rem;

      &-icontainer {
        border-radius: 0.8rem;
        background: rgba(255, 255, 255, 0.27);
        width: 4.4rem;
        height: 4.4rem;
        @include mix.flex-center;
      }
      &-icon {
        width: 54.545454%;
      }
    }
    &-icontainer {
      @include mix.flex-center;
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 1.8rem;
      border: 1px solid #d6e1f4;
      background: linear-gradient(
        180deg,
        rgba(211, 135, 255, 0) 0%,
        rgba(211, 135, 255, 0.05) 100%
      );

      /* Icon Wrapper Shadow */
      box-shadow: 0 16px 28px 0 rgba(13, 3, 22, 0.3);
    }
    &-icon {
      width: 43.75%;
    }
    &-slider {
      display: grid;
      @include mix.grid-scroll(220px);
      gap: 1.73rem;
      &-item {
        width: max(22rem, 200px);
        height: 26rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.7333rem;
        padding: 1.5rem;
        border-radius: 1.6rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(180deg, rgba(0, 97, 193, 0.1) 0%, #0e1319 100%);
        box-shadow: 7px 28px 70px 0 rgba(6, 50, 137, 0.3);
        backdrop-filter: blur(10px);
      }
    }
  }
  &__cards {
    display: grid;
    grid-template-areas:
      'card-1 card-2'
      'card-3 card-2';
    grid-auto-columns: 1fr;
    gap: 2rem;
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
