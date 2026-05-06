<template>
  <div class="slide">
    <UiHomeSlideHeader :title="$t('home.slide-6.title')" :text="$t('home.slide-6.title')" />
    <ul class="slide__cards">
      <li v-for="card in cards" :key="card.text" class="slide__card">
        <span class="slide__card-amount">{{ card.amount }}</span>
        <p class="slide__card-text">
          {{ card.text }}
        </p>
        <div v-for="i in 4" :key="i" class="slide__card-dot" />
      </li>
    </ul>
    <UiPicture src="burger-ingredients.png" alt="ingredients" class="slide__pic" />
    <UiPicture src="burger-ingredients.png" alt="ingredients" class="slide__pic" />
  </div>
</template>

<script setup>
const { tm, rt } = useI18n();

const cards = mapRt(tm('home.slide-6.cards'), rt);
</script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  padding-bottom: 2px;
  & > *:not(picture) {
    z-index: 1;
  }
  &__pic {
    position: absolute;
    width: max(68.6rem, 500px);
    animation: scale-up 0.6s backwards;
    @for $i from 1 through 2 {
      &:nth-of-type(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    &:first-of-type {
      transform: rotate(-72.072deg);
      left: -10%;
      bottom: -35%;
      @media screen and (max-width: vars.$bp-md) {
        bottom: -8%;
        left: 0;
        translate: -45% 30%;
      }
    }
    &:last-of-type {
      right: -9%;
      bottom: -32%;
      @media screen and (max-width: vars.$bp-md) {
        right: 0;
        translate: 35% 37%;
        bottom: 0;
        width: max(68.6rem, 300px);
      }
    }
  }
  &__card {
    position: relative;
    display: flex;
    padding: max(4.8rem, 48px) 3.2rem;
    flex-direction: column;
    align-items: center;
    gap: max(1.2rem, 8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    animation: slide-from-bottom-30 0.6s 0.1s backwards;

    &:first-child {
      border-right: none;
      border-bottom: none;
      z-index: 1;
      .slide__card-dot:nth-of-type(2),
      .slide__card-dot:last-of-type {
        display: none;
      }
    }
    &:nth-child(2) {
      border-bottom: none;
      z-index: 1;
      .slide__card-dot:nth-of-type(1) {
        transform: translate(-65%, -50%);
      }
      .slide__card-dot:nth-of-type(3) {
        transform: translate(-65%, 50%);
      }
      .slide__card-dot:last-of-type {
        transform: translate(65%, 50%);
      }
    }
    &:nth-child(3) {
      border-right: none;
      .slide__card-dot:nth-of-type(1),
      .slide__card-dot:nth-of-type(2),
      .slide__card-dot:last-of-type {
        display: none;
      }
    }
    &:nth-child(4) {
      border-right: none;
      .slide__card-dot:nth-of-type(1),
      .slide__card-dot:nth-of-type(2) {
        display: none;
      }
      .slide__card-dot:nth-of-type(3) {
        transform: translate(-65%, 50%);
      }
    }
    &-dot {
      position: absolute;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #fff;
      &:first-of-type {
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
      }
      &:nth-of-type(2) {
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }
      &:nth-of-type(3) {
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
      }
      &:last-of-type {
        bottom: 0;
        right: 0;
        transform: translate(50%, 50%);
      }
    }
    &:last-child {
      grid-column: span 2;
      position: relative;
      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        black 10%,
        black 80%,
        black 100%
      );
    }
    &-amount {
      z-index: 1;
      text-align: center;
      font-size: max(16rem, 32px);
      font-style: normal;
      font-weight: 600;
      line-height: 88%;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: vars.$bp-lg) {
        font-size: max(8rem, 32px);
      }
    }
    &-text {
      z-index: 1;
      text-align: center;
      font-size: max(3.2rem, 16px);
      font-weight: 700;
      line-height: 104%;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-inline: 12rem;
    @media screen and (max-width: vars.$bp-lg) {
      padding-inline: 0;
    }
  }
}
</style>
