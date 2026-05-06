<template>
  <div class="slide">
    <div class="slide__box">
      <h2 class="slide__box-title">
        {{ $t('home.slide-7.title') }}
      </h2>
      <p class="slide__box-text">
        {{ $t('home.slide-7.text') }}
      </p>
      <UiBaseButton :text="$t('readMore')" variant="glass" class="slide__box-button">
        <IconsRightArrow />
      </UiBaseButton>
      <UiPicture src="bg.png" alt="dotted bg" class="slide__box-bg" />
    </div>
    <LayoutFooter class="home" />
    <UiPicture src="veggies-flying.png" alt="veggies" class="slide__pic" />
    <UiPicture src="veggies-flying.png" alt="veggies" class="slide__pic" />
    <UiPicture src="meat-burning.png" alt="meats" class="slide__pic" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  padding-inline: 0;
  padding-bottom: 0;
  align-items: center;
  gap: 0;
  &__pic {
    position: absolute;
    animation: scale-up 0.6s backwards;
    @for $i from 1 through 2 {
      &:nth-of-type(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    &:first-of-type,
    &:nth-of-type(2) {
      width: max(30rem, 200px);
      bottom: -19%;
    }
    &:first-of-type {
      left: -5%;
      transform: rotate(-16.92deg);
      @media screen and (max-width: vars.$bp-lg) {
        bottom: -20%;
      }
    }
    &:nth-of-type(2) {
      right: -5%;
      transform: rotate(16.92deg) rotateX(180deg);
      @media screen and (max-width: vars.$bp-lg) {
        display: none;
      }
    }
    &:last-of-type {
      width: 100rem;
      min-width: 600px;
      @media screen and (min-width: vars.$bp-lg) {
        top: 5%;
        left: 50%;
        translate: -50%;
      }
      @media screen and (max-width: vars.$bp-lg) {
        bottom: 10%;
      }
    }
  }
  &__box {
    @include mix.glass-bezel(
      (
        border-color: 51 61 97,
        start-pos: 10%,
        angle: 230deg,
        mid-start-pos: 50%
      )
    );

    margin-block: auto;
    z-index: 1;
    width: 69%;
    padding-inline: 15px;
    padding-block: max(7.4rem, 74px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: max(3.2rem, 16px);
    background: linear-gradient(
      180deg,
      rgba(0, 12, 52, 0.6) 68.26%,
      var(--Smalt-700, rgba(37, 80, 181, 0.6)) 124.64%
    );
    backdrop-filter: blur(3px);
    position: relative;
    overflow: hidden;
    animation: slide-from-bottom-20 0.6s;
    @media screen and (max-width: vars.$bp-md) {
      padding-block: 98px;
      width: calc(100% - (var(--spacing-inline) * 2));
    }
    & > *:not(:last-child) {
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to bottom, #04103db7 30%, transparent 100%);
      z-index: 1;
      @media screen and (max-width: vars.$bp-lg) {
        background-image: linear-gradient(to bottom, #04103dd6 40%, transparent 100%);
      }
    }
    &-button {
      min-width: max(28rem, 230px);
      @media screen and (max-width: vars.$bp-sm) {
        min-width: 100%;
      }
    }
    &-bg {
      position: absolute;
      opacity: 0.3;
      @media screen and (min-width: vars.$bp-lg) {
        inset: 0;
      }
      @media screen and (max-width: vars.$bp-lg) {
        bottom: 0;
        left: 50%;
        translate: -50%;
        min-width: 1000px;
      }
    }
    &-title {
      text-align: center;
      font-size: max(3.6rem, 20px);
      font-weight: 700;
      line-height: 122%;
      letter-spacing: 0.072rem;
      background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 20ch;
      @media screen and (max-width: vars.$bp-md) {
        line-height: 135%;
      }
    }
    &-text {
      color: #c2c2c2;
      text-align: center;
      font-size: max(1.8rem, 12px);
      font-weight: 400;
      line-height: 155%;
      max-width: 50ch;
      margin-top: max(1rem, 4px);
      margin-bottom: max(4.3rem, 32px);
    }
  }
}
</style>
