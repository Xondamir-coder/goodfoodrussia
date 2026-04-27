<template>
  <section class="process">
    <UiSectionHeader :title="$t('processSection.title')" :text="$t('processSection.text')" />
    <div class="process__container">
      <ul class="process__cards">
        <li v-for="(card, i) in processCards" :key="card.title" class="process__card">
          <component :is="card.icon" class="process__card-icon" />
          <div class="process__card-content">
            <h3 class="process__card-content-title">
              {{ card.title }}
            </h3>
            <p class="process__card-content-text">
              {{ card.text }}
            </p>
          </div>
          <div class="process__card-step">
            {{ $t('step')[0].toUpperCase() + $t('step').slice(1) }} {{ i + 1 }}
          </div>
        </li>
        <svg
          v-for="i in 3"
          :key="i"
          class="process__arrow"
          viewBox="0 0 233 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M231.472 20.6151C231.999 20.4494 232.292 19.888 232.126 19.3611L229.426 10.7757C229.26 10.2488 228.699 9.95605 228.172 10.1217C227.645 10.2874 227.352 10.8488 227.518 11.3757L229.918 19.0072L222.286 21.4072C221.76 21.5729 221.467 22.1343 221.632 22.6612C221.798 23.188 222.36 23.4808 222.886 23.3151L231.472 20.6151ZM0.671875 58.6618L1.34423 59.402C17.4796 44.7461 51.7191 22.9456 93.5121 10.8648C135.292 -1.21229 184.508 -3.54614 230.709 20.5478L231.172 19.6611L231.634 18.7744C184.835 -5.63128 135.052 -3.22478 92.9567 8.94342C50.8747 21.1078 16.3642 43.0574 -0.000479579 57.9215L0.671875 58.6618Z"
            fill="url(#paint0_linear_491_2020)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_491_2020"
              x1="0.671875"
              y1="26.7347"
              x2="219.672"
              y2="-0.335974"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { IconsLocalShipping, IconsInventory, IconsFeedFade, IconsHandshakeFade } from '#components';

const processIcons = [IconsInventory, IconsFeedFade, IconsHandshakeFade, IconsLocalShipping];
const processCards = useMapRt('processSection.cards').map((el, i) => ({
  ...el,
  icon: processIcons[i]
}));
</script>

<style scoped lang="scss">
.process {
  $card-width: 220px;
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 20px);
  &__arrow {
    position: absolute;
    width: max(23.05rem, 200px);

    &:first-of-type {
      top: 2.5rem;
      left: 13%;

      @media screen and (max-width: vars.$bp-lg) {
        left: 70px;
        top: 7%;
      }
    }
    &:nth-of-type(2) {
      top: -10%;
      right: 18%;
      @media screen and (max-width: vars.$bp-lg) {
        right: auto;
        top: 0;
        left: 526px;
      }
    }
    &:last-of-type {
      bottom: -3%;
      left: 50%;
      transform: translateX(-50%) rotateX(180deg) rotateZ(15deg);
      @media screen and (max-width: vars.$bp-lg) {
        bottom: 3%;
        left: 319px;
        transform: rotateX(180deg) rotateZ(15deg);
      }
    }
  }
  &__cards {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(4, 1fr);
    gap: max(1.6rem, 12px);
    position: relative;

    @media screen and (max-width: vars.$bp-lg) {
      padding-top: 30px;
      padding-bottom: 30px;
      overflow-y: hidden;
      @include mix.grid-scroll(220px);
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 12px);
    padding: max(2rem, 16px);
    border-radius: max(1.5rem, 15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        margin-top: calc(max(3.2rem, 16px) * #{4 - $i});
      }
    }
    &-step {
      opacity: 0.32;
      font-size: max(2.8rem, 24px);
      font-weight: 700;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(0.8rem, 8px);
      font-family: vars.$font-nunito-sans;

      &-title {
        font-size: max(2rem, 16px);
        max-width: 13ch;
      }
      &-text {
        font-size: max(1.4rem, 12px);
        opacity: 0.5;
      }
    }
    &-icon {
      width: max(3.2rem, 32px);
    }
  }
}
</style>
