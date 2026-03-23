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
        <button class="slide__content-button">
          <span>{{ $t('learnMore') }}</span>
        </button>
        <button class="slide__content-button">
          <span>{{ $t('exploreCatalogue') }}</span>
        </button>
      </div>
    </div>
    <UiPicture src="burger.png" alt="burger" class="slide__picture" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  align-items: center;
  &__picture {
    position: absolute;
    width: 105%;
    left: 50%;
    bottom: 0;
    translate: -50% 70%;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    &-button {
      padding-inline: 2.4rem;
      height: 5rem;
      border-radius: 0.8rem;
      font-family: vars.$font-nunito-sans;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 128%;
      &:first-child {
        color: var(--Greyscale-200, #f1f2f4);
        border: 1px solid rgba(255, 255, 255, 0.6);
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
      }
      &:last-child {
        color: #001a0d;
        background: #fff;
      }
    }
    &-buttons {
      display: flex;
      gap: 1.6rem;
    }
    &-title {
      text-align: center;
      font-size: 8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 88%;
      background: linear-gradient(347deg, rgba(255, 255, 255, 0) -14.66%, #fff 47.14%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &-text {
      text-align: center;
      font-family: vars.$font-nunito-sans;
      font-size: 2rem;
      font-weight: 400;
      line-height: 128%;
      letter-spacing: -0.04rem;
    }
  }
  &__label {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    &-line {
      width: 8.8rem;
      height: 0.1rem;
      flex-shrink: 0;
      border-radius: 10rem;
      &:first-child {
        background: linear-gradient(90deg, rgba(204, 255, 230, 0) 0%, #fff 100%);
      }
      &:last-child {
        background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      }
      span {
        font-family: vars.$font-nunito-sans;
        font-size: 1.4rem;
        letter-spacing: 0.014rem;
      }
    }
  }
}
</style>
