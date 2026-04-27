<template>
  <main class="services">
    <section class="hero">
      <ClientOnly>
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
      </ClientOnly>
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
    <UiSectionProcess />
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
      <UiAccordions :accordions="mapRt(tm('services.faq.accordions'), rt)" />
    </section>
  </main>
</template>

<script setup>
import {
  IconsDescription,
  IconsLocalShipping,
  IconsManageSearch,
  IconsStories,
  IconsSupportAgent
} from '#components';

const { tm, rt } = useI18n();

const activeHeroBanner = ref(0);

const heroBanners = ['services-banner.jpg', 'working-man.jpg', 'man-paper.jpg'];
const reasonsIcons = [
  IconsStories,
  IconsManageSearch,
  IconsDescription,
  IconsSupportAgent,
  IconsLocalShipping
];
const reasonsCards = mapRt(tm('services.reasons.cards'), rt).map((el, i) => ({
  ...el,
  icon: reasonsIcons[i]
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
