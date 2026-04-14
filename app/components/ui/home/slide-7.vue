<template>
  <div class="slide">
    <div class="slide__box">
      <h2 class="slide__box-title">
        {{ $t('home.slide-7.title') }}
      </h2>
      <p class="slide__box-text">
        {{ $t('home.slide-7.text') }}
      </p>
      <UiBaseButton :text="$t('readMore')" variant="glass">
        <IconsRightArrow />
      </UiBaseButton>
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
      top: -5%;
      left: 50%;
      translate: -50%;
    }
  }
  &__box {
    margin-block: auto;
    z-index: 1;
    width: 69%;
    height: 38.7rem;
    padding-block: 7.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3.2rem;
    border: 1px solid rgba(255, 255, 255, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 12, 52, 0.6) 68.26%,
      var(--Smalt-700, rgba(37, 80, 181, 0.6)) 124.64%
    );
    backdrop-filter: blur(3px);
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
