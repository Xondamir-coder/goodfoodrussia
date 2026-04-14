<template>
  <footer class="footer">
    <div class="footer__block" />
    <div class="footer__block" />
    <div class="footer__top">
      <div class="footer__iconbox">
        <IconsR class="footer__icon" />
      </div>
      <nav class="footer__nav">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="$localePath(link.path)"
          active-class="active"
          class="footer__nav-link"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
      <div class="footer__socials">
        <a
          v-for="icon in icons"
          :key="icon"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__social"
        >
          <component :is="icon" class="footer__social-icon" />
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <p>
        {{
          $t('copyright', {
            year: new Date().getFullYear()
          })
        }}
      </p>
    </div>
  </footer>
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
.footer {
  z-index: 1;
  display: grid;
  grid-template-areas:
    'block-1 top block-2'
    '. bottom .';
  grid-template-columns: 1fr 69% 1fr;
  backdrop-filter: blur(24px);
  @media screen and (max-width: vars.$bp-sm) {
    grid-template-columns: 1fr 91.7% 1fr;
  }
  &.home {
    backdrop-filter: none;
    align-self: stretch;
    .footer__block,
    .footer__top,
    .footer__bottom {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(15px);
    }
  }
  &__block {
    border-block: 1px solid rgba(255, 255, 255, 0.1);

    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        grid-area: block-#{$i};
      }
    }
  }
  &__top {
    grid-area: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: max(1.6rem, 16px);
    padding-block: max(1rem, 10px);
    padding-inline: max(2.4rem, 24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: none;
    @media screen and (max-width: vars.$bp-sm) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  &__bottom {
    grid-area: bottom;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-inline: 1px solid rgba(255, 255, 255, 0.1);
    padding: max(0.85rem, 8px) max(2.4rem, 24px);
    color: rgba(255, 255, 255, 0.5);
    font-size: max(1.2rem, 12px);
    font-weight: 500;
    letter-spacing: max(0.012rem, 0.12px);
    text-align: center;
    @media screen and (max-width: vars.$bp-sm) {
      margin-inline: 14.5px;
      border-top: none;
    }
  }
  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: max(1.8rem, 18px);
    &-link {
      font-family: vars.$font-nunito-sans;
      font-size: max(1.4rem, 14px);
      font-weight: 400;
      letter-spacing: max(0.014rem, 0.14px);
    }
  }
  &__iconbox {
    @include mix.flex-center;
    @include mix.glass-bezel;
    --gb-angle: 180deg;
    width: max(4.4rem, 44px);
    height: max(4.4rem, 44px);
    border-radius: max(1rem, 10px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  }
  &__icon {
    width: 45.4545%;
  }
  &__socials {
    display: flex;
    align-items: center;
    gap: max(0.8rem, 8px);
  }
  &__social {
    @include mix.flex-center;
    width: max(3.2rem, 32px);
    height: max(3.2rem, 32px);
    &-icon {
      width: 62.5%;
      opacity: 0.5;
    }
  }
}
</style>
