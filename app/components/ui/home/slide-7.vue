<template>
  <div class="slide">
    <div class="slide__box">
      <h2 class="slide__box-title">
        {{ $t('home.slide-7.title') }}
      </h2>
      <p class="slide__box-text">
        {{ $t('home.slide-7.text') }}
      </p>
      <button class="slide__box-button">
        <span>{{ $t('readMore') }}</span>
        <IconsRightArrow class="slide__box-button-icon" />
      </button>
    </div>
    <div class="slide__container">
      <div class="slide__block"></div>
      <div class="slide__block"></div>
      <div class="slide__footer">
        <div class="slide__footer-iconbox">
          <IconsR class="slide__footer-icon" />
        </div>
        <nav class="slide__footer-nav">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="$localePath(link.path)"
            active-class="active"
            class="slide__footer-nav-link"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
        <div class="slide__footer-socials">
          <a
            v-for="icon in icons"
            :key="icon"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="slide__footer-social"
          >
            <component :is="icon" class="slide__footer-social-icon" />
          </a>
        </div>
      </div>
      <div class="slide__legal">
        <p>
          {{
            $t('copyright', {
              year: new Date().getFullYear()
            })
          }}
        </p>
      </div>
    </div>
    <UiPicture src="veggies-flying.png" alt="veggies" class="slide__pic" />
    <UiPicture src="veggies-flying.png" alt="veggies" class="slide__pic" />
    <UiPicture src="meat-burning.png" alt="meats" class="slide__pic" />
  </div>
</template>

<script setup>
import { IconsFacebook, IconsLinkedin, IconsX } from '#components';

const linkPaths = ['/', '/about', '/products', '/services', '/recipes', '/media', '/contacts'];
const icons = [IconsX, IconsFacebook, IconsLinkedin];

const links = computed(() =>
  useMapRt('header.links').map((el, i) => ({
    name: el,
    path: linkPaths[i]
  }))
);
</script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  padding-inline: 0;
  padding-bottom: 0;
  align-items: center;
  &__block {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(217, 217, 217, 0.05);
    backdrop-filter: blur(5px);
    &:first-child {
      grid-area: block-1;
    }
    &:nth-child(2) {
      grid-area: block-2;
    }
  }
  &__legal {
    grid-area: legal;
    display: flex;
    padding: 0.6rem 2.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 128%;
    letter-spacing: 0.012rem;
  }
  &__container {
    align-self: stretch;
    z-index: 1;
    display: grid;
    grid-template-areas:
      'block-1 content block-2'
      '. legal .';
    grid-template-columns: 1fr 69% 1fr;
  }
  &__footer {
    grid-area: content;
    display: flex;
    padding: 1rem 2.4rem;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    &-nav {
      display: flex;
      gap: 1.8rem;
      &-link {
        font-family: vars.$font-dm-sans;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0.014rem;
      }
    }
    &-iconbox {
      @include mix.flex-center;
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    }
    &-icon {
      width: 45.4545%;
    }
    &-socials {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    &-social {
      @include mix.flex-center;
      width: 3.2rem;
      height: 3.2rem;
      &-icon {
        width: 62.5%;
        opacity: 0.5;
      }
    }
  }
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
    &-button {
      display: flex;
      width: 28rem;
      height: 4.2rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-shrink: 0;
      border-radius: 0.8rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
      display: flex;
      align-items: center;
      gap: 1.2rem;
      text-align: center;
      font-family: vars.$font-dm-sans;
      font-weight: 500;
      &-icon {
        width: 1.2rem;
        fill: #f5f5f5;
      }
    }
  }
}
</style>
