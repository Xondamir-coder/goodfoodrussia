<template>
  <div class="slide">
    <div class="slide__label">
      <div class="slide__label-line" />
      <span>{{ $t('home.slide-1.label') }}</span>
      <div class="slide__label-line" />
    </div>
    <div class="slide__content">
      <h1 class="slide__content-title">
        {{ $t('home.slide-1.title') }}
      </h1>
      <p class="slide__content-text">
        {{ $t('home.slide-1.text') }}
      </p>
      <div class="slide__content-buttons">
        <UiBaseButton :text="$t('learnMore')" variant="glass" />
        <UiBaseButton :text="$t('exploreCatalogue')" variant="white" />
      </div>
    </div>
    <div class="slide__pictures">
      <UiPicture src="tomatoes.png" alt="tomato" class="slide__pictures-tom" />
      <UiPicture src="tomatoes.png" alt="tomato" class="slide__pictures-tom" />
      <UiPicture src="burger-spread.png" alt="burger" class="slide__pictures-bur" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  gap: 0;

  &__pictures {
    &-tom {
      position: absolute;
      width: max(45.5%, 300px);
      bottom: -20%;
      animation: scale-up 0.8s 0.3s backwards;
      @media screen and (min-width: vars.$bp-xl) and (max-height: 900px) {
        width: 40%;
      }
      &:first-of-type {
        left: -10%;
        transform: rotateY(180deg);
        @media screen and (min-width: vars.$bp-xl) and (max-height: 900px) {
          left: -11%;
        }
        @media screen and (max-width: vars.$bp-lg) {
          left: -31%;
          bottom: -8%;
        }
      }
      &:nth-of-type(2) {
        right: -15%;
        @media screen and (min-width: vars.$bp-xl) and (max-height: 900px) {
          right: -8%;
        }
        @media screen and (max-width: vars.$bp-lg) {
          right: -31%;
          bottom: -11%;
        }
      }
    }
    &-bur {
      animation: scale-up 0.8s 0.2s backwards;
      position: absolute;
      width: max(57%, 400px);
      left: 50%;
      bottom: 0;
      translate: -50% 63%;
      @media screen and (min-width: vars.$bp-xl) and (max-height: 900px) {
        width: 40%;
        translate: -50% 65%;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    & > * {
      animation: slide-from-bottom-20 0.4s backwards;
      padding-inline: var(--spacing-inline);
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.07s;
        }
      }
    }
    @media screen and (max-width: vars.$bp-sm) {
      align-items: flex-start;
      text-align: start;
    }
    &-buttons {
      @include mix.dots(bottom, #fff);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      padding-block: max(2rem, 16px);
      display: flex;
      justify-content: center;
      gap: max(1.6rem, 12px);

      @media screen and (max-width: vars.$bp-sm) {
        align-self: stretch;
        flex-direction: column;
      }
    }
    &-title {
      @include mix.dots;
      padding-block: max(3.2rem, 16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      font-size: max(8rem, 28px);
      font-style: normal;
      font-weight: 700;
      line-height: 88%;
      background: linear-gradient(347deg, rgba(255, 255, 255, 0) -14.66%, #fff 47.14%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: vars.$bp-sm) {
        line-height: 115%;
      }
    }
    &-text {
      @include mix.dots(bottom, #fff);
      padding-block: max(1.6rem, 16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      font-family: vars.$font-nunito-sans;
      font-size: max(2rem, 14px);
      font-weight: 400;
      line-height: 135%;
      letter-spacing: min(-0.04rem, -0.28px);
    }
  }
  &__label {
    border-block: 1px solid rgba(255, 255, 255, 0.07);
    padding-block: max(2.3rem, 16px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(1.6rem, 10px);
    position: relative;
    @include mix.dots;
    &-line {
      width: max(8.8rem, 32px);
      height: 1px;
      flex-shrink: 0;
      border-radius: max(10rem, 100px);
      &:first-child {
        background: linear-gradient(90deg, rgba(204, 255, 230, 0) 0%, #fff 100%);
        animation: slide-from-left-20 0.4s;
      }
      &:last-child {
        background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
        animation: slide-from-right-20 0.4s;
      }
    }
    span {
      font-family: vars.$font-nunito-sans;
      font-size: max(1.4rem, 14px);
      letter-spacing: 0.14px;
      animation: appear 0.4s;
    }
  }
}
</style>
