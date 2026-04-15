<template>
  <main class="services">
    <section class="hero">
      <Teleport to="#layout-teleport">
        <Transition name="appear">
          <UiPicture
            :key="activeHeroBanner"
            :src="heroBanners[activeHeroBanner]"
            alt="banner"
            class="hero__banner"
          />
        </Transition>
      </Teleport>
      <div class="hero__content">
        <h1 class="hero__title">
          {{ $t('services.hero.title') }}
        </h1>
        <p class="hero__text">
          {{ $t('services.hero.text') }}
        </p>
      </div>
      <div class="hero__images">
        <button
          v-for="(banner, i) in heroBanners"
          :key="banner"
          class="hero__images-button"
          :class="{ active: i === activeHeroBanner }"
          @click="activeHeroBanner = i"
        >
          <UiPicture :src="banner" alt="pic" class="hero__images-item" />
        </button>
      </div>
    </section>
    <section class="reasons services__section">
      <div class="services__header">
        <h2 class="services__header-title">
          {{ $t('services.reasons.title') }}
        </h2>
        <p class="services__header-text">{{ $t('services.reasons.text') }}</p>
      </div>
      <div class="reasons__cards">
        <div v-for="card in reasonsCards" :key="card.title" class="reasons__card">
          <div class="reasons__card-left">
            <component :is="card.icon" class="reasons__card-left-icon" />
            <h3 class="reasons__card-left-title">
              {{ card.title }}
            </h3>
          </div>
          <p class="reasons__card-text">
            {{ card.text }}
          </p>
        </div>
      </div>
    </section>
    <section class="process services__section">
      <div class="services__header">
        <h2 class="services__header-title">
          {{ $t('services.process.title') }}
        </h2>
        <p class="services__header-text">{{ $t('services.process.text') }}</p>
      </div>
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
    <section class="cta">
      <div class="cta__left">
        <div class="cta__content">
          <h2 class="cta__title">
            {{ $t('services.cta.title') }}
          </h2>
          <p class="cta__text">
            {{ $t('services.cta.text') }}
          </p>
        </div>
        <UiBaseButton :text="$t('leaveEnquiry')" variant="white" class="cta__button">
          <IconsThickArrowRight />
        </UiBaseButton>
      </div>
      <UiPicture src="meat-burning.png" alt="meat" class="cta__banner" />
      <UiPicture src="tomatoes.png" alt="toma toma" class="cta__banner" />
    </section>
    <section class="faq services__section">
      <div class="services__header">
        <h2 class="services__header-title">
          {{ $t('services.faq.title') }}
        </h2>
        <p class="services__header-text">{{ $t('services.faq.text') }}</p>
      </div>
      <UiAccordions :accordions="useMapRt('services.faq.accordions')" />
    </section>
  </main>
</template>

<script setup>
import {
  IconsDescription,
  IconsLocalShipping,
  IconsManageSearch,
  IconsStories,
  IconsSupportAgent,
  IconsInventory,
  IconsFeedFade,
  IconsHandshakeFade
} from '#components';

const activeHeroBanner = ref(0);

const heroBanners = ['services-banner.jpg', 'working-man.jpg', 'man-paper.jpg'];
const reasonsIcons = [
  IconsStories,
  IconsManageSearch,
  IconsDescription,
  IconsSupportAgent,
  IconsLocalShipping
];
const reasonsCards = useMapRt('services.reasons.cards').map((el, i) => ({
  ...el,
  icon: reasonsIcons[i]
}));
const processIcons = [IconsInventory, IconsFeedFade, IconsHandshakeFade, IconsLocalShipping];
const processCards = useMapRt('services.process.cards').map((el, i) => ({
  ...el,
  icon: processIcons[i]
}));
</script>

<style lang="scss" scoped>
.faq {
  padding-inline: max(3.2rem, 17px);
  padding-block: max(3.2rem, 32px);
  border-radius: max(3.2rem, 16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    113deg,
    rgba(255, 255, 255, 0.02) 12.4%,
    rgba(255, 255, 255, 0.08) 100.6%
  );
  backdrop-filter: blur(50px);
}
.cta {
  position: relative;
  border-radius: max(3.2rem, 16px);
  background: #0076f7;
  padding: max(3.2rem, 16px);
  aspect-ratio: 113.6/34.5;
  display: flex;
  clip-path: inset(-35% 0% 0% 0%);
  @media screen and (max-width: vars.$bp-sm) {
    aspect-ratio: 26.7/42;
  }
  &__banner {
    position: absolute;
    &:first-of-type {
      z-index: 1;
      @media screen and (min-width: vars.$bp-sm) {
        width: 53.7%;
        right: 0;
        top: -30%;
      }
      @media screen and (max-width: vars.$bp-sm) {
        width: 150%;
        bottom: -30%;
        left: 40%;
        translate: -50%;
      }
    }
    &:nth-of-type(2) {
      @media screen and (min-width: vars.$bp-sm) {
        width: 35.5%;
        right: -10%;
      }
      @media screen and (max-width: vars.$bp-sm) {
        width: 95%;
        right: -40%;
        bottom: -6%;
      }
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    z-index: 2;
    @media screen and (min-width: vars.$bp-sm) {
      max-width: 44.7%;
    }
    @media screen and (max-width: vars.$bp-sm) {
      & > *:last-child {
        align-self: stretch;
      }
    }
  }
  &__text {
    font-size: max(1.8rem, 14px);
    line-height: 155%;
  }
  &__title {
    font-size: max(3.6rem, 20px);
    background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: max(1.2rem, 8px);
  }
  &__button {
    gap: max(1.2rem, 10px);
    --icon-size: max(2.4rem, 20px);
  }
}
.process {
  $card-width: 220px;
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
.reasons {
  &__cards {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
  }
  &__card {
    @include mix.glass-bezel(
      (
        border-color: 135 217 255,
        start-opacity: 0.3,
        end-opacity: 0,
        mid-start-pos: 80%
      )
    );

    aspect-ratio: 113.6/18.2;
    display: flex;
    justify-content: space-between;
    padding: max(2.4rem, 16px);
    gap: 12px;
    border-radius: max(2rem, 16px);
    background: linear-gradient(180deg, rgba(0, 28, 73, 0.6) 0%, rgba(0, 67, 175, 0.19) 100%);
    backdrop-filter: blur(25px);
    @media screen and (max-width: vars.$bp-sm) {
      flex-direction: column;
      aspect-ratio: initial;
      gap: 12px;
    }
    &-text {
      align-self: flex-start;
      font-size: max(1.6rem, 12px);
      opacity: 0.8;
      width: 37.5%;
      line-height: 145%;
      @media screen and (max-width: vars.$bp-md) {
        width: 50%;
      }
      @media screen and (max-width: vars.$bp-sm) {
        width: auto;
      }
    }
    &-left {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
      &-icon {
        width: max(3.6rem, 24px);
      }
      &-title {
        font-size: max(2.4rem, 16px);
        font-weight: 600;
      }
    }
  }
}
.hero {
  display: flex;
  align-items: flex-end;
  gap: 32px;
  justify-content: space-between;
  padding-bottom: max(3.2rem, 16px);
  height: calc(100vh - max(6rem, 60px));
  @media screen and (max-width: vars.$bp-md) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  &__banner {
    position: absolute;
    top: 0;
    inset-inline: 0;
    height: 100vh;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.65) 100%);
    }
  }
  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: max(2.4rem, 12px);
    padding-bottom: calc(6.4rem - max(3.2rem, 16px));
    @media screen and (max-width: vars.$bp-md) {
      padding-bottom: 0;
    }
  }
  &__title {
    font-size: max(5.2rem, 28px);
    background: linear-gradient(347deg, rgba(255, 255, 255, 0) -14.66%, #fff 47.14%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 20ch;
  }
  &__text {
    font-family: vars.$font-nunito-sans;
    font-size: max(2rem, 14px);
    letter-spacing: min(-0.04rem, -0.28px);
    max-width: 40ch;
  }
  &__images {
    display: flex;
    gap: max(0.8rem, 8px);
    &-button {
      display: flex;
      width: max(12rem, 80px);
      height: max(12rem, 80px);
      padding: max(0.8rem, 4px);
      border-radius: max(1.5rem, 12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: linear-gradient(
        180deg,
        rgba(211, 135, 255, 0) 0%,
        rgba(211, 135, 255, 0.05) 100%
      );
      backdrop-filter: blur(50px);
      transition-property: border, background;
      transition-duration: 0.4s;
      &.active {
        border-color: rgba(255, 255, 255, 0.64);
        background: rgba(255, 255, 255, 0.32);
        & > * {
          opacity: 1;
        }
      }
    }
    &-item {
      opacity: 0.5;
      border-radius: max(0.8rem, 8px);
      transition: opacity 0.4s;
    }
  }
}
.services {
  padding-inline: var(--spacing-inline);
  padding-bottom: max(8rem, 40px);
  display: flex;
  flex-direction: column;
  gap: max(8rem, 32px);
  &__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    text-align: center;
    align-self: center;
    @media screen and (min-width: vars.$bp-md) {
      max-width: 68%;
    }

    &-title {
      font-size: max(3.6rem, 20px);
      font-weight: 700;
      background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 15ch;
    }
    &-text {
      color: #c2c2c2;
      font-size: max(1.8rem, 14px);
      line-height: 135%;
    }
  }
  &__section {
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 20px);
  }
}
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.4s;
}
.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
