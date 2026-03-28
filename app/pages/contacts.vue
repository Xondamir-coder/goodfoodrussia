<template>
  <main class="contacts">
    <div class="contacts__left">
      <div class="contacts__top">
        <h1 class="contacts__title">
          {{ $t('contacts.title') }}
        </h1>
        <p class="contacts__text">
          {{ $t('contacts.text') }}
        </p>
      </div>
      <div class="contacts__bottom">
        <ul class="contacts__list">
          <li class="contacts__item">
            <h3 class="contacts__item-label">
              {{ $t('address') }}
            </h3>
            <div class="contacts__item-cta">
              <span>{{ $t('contacts.address') }}</span>
              <a href="https://yandex.uz/maps/-/CPVBJVIh" target="_blank" rel="noopener noreferrer">
                {{ $t('onMap') }}
              </a>
            </div>
          </li>
          <li class="contacts__item">
            <h3 class="contacts__item-label">
              {{ $t('tel') }}
            </h3>
            <div class="contacts__item-cta">
              <a href="tel:+998 (90) 123-45-67"> +998 (90) 123-45-67 </a>
              <a href="tel:+998 (90) 123-45-67"> +998 (90) 123-45-67 </a>
            </div>
          </li>
          <li class="contacts__item">
            <h3 class="contacts__item-label">
              {{ $t('email') }}
            </h3>
            <div class="contacts__item-cta">
              <a href="mailto:support@goofood.uz"> support@goofood.uz </a>
            </div>
          </li>
          <li class="contacts__item">
            <h3 class="contacts__item-label">
              {{ $t('email') }}
            </h3>
            <div class="contacts__item-cta">
              <a href="http://telegram.org" target="_blank" rel="noopener noreferrer">
                {{ $t('telegram') }}
              </a>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                instagram
              </a>
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"> facebook </a>
            </div>
          </li>
        </ul>
        <div class="contacts__cta">
          <UiIconButton class="contacts__cta-tg">
            <IconsTelegram />
          </UiIconButton>
          <button class="contacts__cta-button">
            {{ $t('messageUs') }}
          </button>
        </div>
      </div>
    </div>
    <div class="contacts__right">
      <svg
        class="contacts__right-icon"
        viewBox="0 0 56 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.6397 66.5L21 55L27.6397 55L34.6396 55L27.6397 66.5Z" fill="#194197" />
        <path
          d="M27.6397 55L27.6397 66.5M27.6397 55L34.6396 55L27.6397 66.5M27.6397 55L21 55L27.6397 66.5"
          stroke="#194197"
          stroke-width="3"
          stroke-linecap="round"
        />
        <circle cx="28" cy="28" r="28" fill="#082574" fill-opacity="0.9" />
        <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_237_3375)" fill-opacity="0.3" />
        <path
          d="M36.62 24.7C35.58 20.07 31.54 18 28 18C28 18 28 18 27.99 18C24.46 18 20.43 20.07 19.38 24.69C18.2 29.85 21.36 34.22 24.22 36.98C25.28 38 26.64 38.51 28 38.51C29.36 38.51 30.72 38 31.77 36.98C34.63 34.22 37.79 29.86 36.62 24.7ZM31.28 25.53L27.28 29.53C27.13 29.68 26.94 29.75 26.75 29.75C26.56 29.75 26.37 29.68 26.22 29.53L24.72 28.03C24.43 27.74 24.43 27.26 24.72 26.97C25.01 26.68 25.49 26.68 25.78 26.97L26.75 27.94L30.22 24.47C30.51 24.18 30.99 24.18 31.28 24.47C31.57 24.76 31.57 25.24 31.28 25.53Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_237_3375"
            x1="28"
            y1="0"
            x2="28"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AACDFF" stop-opacity="0" />
            <stop offset="0.833217" stop-color="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
      <UiPicture src="map.jpg" alt="map" class="contacts__right-map" />
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.contacts {
  margin-inline: var(--spacing-inline);
  padding-block: 2.4rem;
  min-height: calc(100vh - 6rem);
  display: grid;
  grid-template-columns: 1fr 1.4042fr;
  &__top {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  &__text {
    font-size: 1.4rem;
    opacity: 0.5;
    line-height: 135%;
  }
  &__title {
    font-size: 2.6rem;
    font-weight: 700;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 500;
    font-family: vars.$font-nunito-sans;

    &-cta {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      align-items: flex-start;
      span {
        color: rgba(255, 255, 255, 0.8);
      }
      a {
        color: rgba(255, 255, 255, 0.8);
        transition: color 0.3s;
        &:hover {
          color: #fff;
        }
        &[href*='maps'] {
          color: #0df;
          text-transform: lowercase;
          text-decoration-line: underline;
          font-family: vars.$font-nunito-sans;
        }
      }
    }
  }
  &__left {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    display: flex;
    padding: 2.4rem;
    flex-direction: column;
    justify-content: space-between;
    gap: 6.4rem;
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
  }
  &__right {
    position: relative;
    display: flex;
    &-map {
      flex: 1;
    }
    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      z-index: 1;
      width: 5.6rem;
      fill: none;
    }
  }
  &__cta {
    display: flex;
    gap: 1.6rem;
    height: 5rem;
    &-tg {
      width: 5rem;
    }
    &-button {
      font-family: vars.$font-nunito-sans;
      display: flex;
      padding: 0 2.4rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex: 1;
      border-radius: 0.8rem;
      background: #fff;
      color: var(--Main-Green-950, #001a0d);
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
}
</style>
