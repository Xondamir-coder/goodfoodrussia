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
      <img src="/images/bg.png" alt="bg" class="slide__box-bg" />
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

    &:first-of-type,
    &:nth-of-type(2) {
      width: 30rem;
      bottom: -19%;
    }
    &:first-of-type {
      left: -5%;
      transform: rotate(-16.92deg);
    }
    &:nth-of-type(2) {
      right: -5%;
      transform: rotate(16.92deg) rotateX(180deg);
    }
    &:last-of-type {
      width: 100rem;
      top: 5%;
      left: 50%;
      translate: -50%;
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
    height: 38.7rem;
    padding-block: 7.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3.2rem;
    background: linear-gradient(
      180deg,
      rgba(0, 12, 52, 0.6) 68.26%,
      var(--Smalt-700, rgba(37, 80, 181, 0.6)) 124.64%
    );
    backdrop-filter: blur(3px);
    position: relative;
    overflow: hidden;
    & > *:not(:last-child) {
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to bottom, #04103db7 30%, transparent 100%);
      z-index: 1;
    }
    &-button {
      min-width: 28rem;
    }
    &-bg {
      position: absolute;
      inset: 0;
      opacity: 0.3;
    }
    &-title {
      text-align: center;
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 122%;
      letter-spacing: 0.072rem;
      background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 20ch;
    }
    &-text {
      color: #c2c2c2;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 155%;
      max-width: 50ch;
      margin-top: 1rem;
      margin-bottom: 4.3rem;
    }
  }
}
</style>
