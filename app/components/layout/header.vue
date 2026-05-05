<template>
  <header ref="headerRef" class="header" :class="{ shown: showMenu }">
    <NuxtLink :to="$localePath('/')" class="header__logo-container">
      <SvgLogo class="header__logo" />
    </NuxtLink>
    <div class="header__right">
      <nav class="header__nav">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="$localePath(link.path)"
          class="header__nav-link"
          active-class="active"
          :class="{ active: link.path !== '/' && $route.path.includes(link.path) }"
        >
          <span>{{ link.name }}</span>
        </NuxtLink>
      </nav>
      <UiHeaderLang />
      <button class="header__ham" :class="{ active: showMenu }" @click="showMenu = !showMenu">
        <IconsHam class="header__ham-icon" />
        <IconsClose class="header__ham-icon" />
      </button>
    </div>
    <div class="menu" :class="{ hidden: !showMenu }">
      <nav class="menu__nav">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="$localePath(link.path)"
          class="menu__nav-link"
          active-class="active"
          :class="{ active: link.path !== '/' && $route.path.includes(link.path) }"
          @click="showMenu = false"
        >
          <span>{{ link.name }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { tm, rt } = useI18n();

const showMenu = ref(false);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(headerRef.value, {
    scrollTrigger: {
      trigger: headerRef.value,
      endTrigger: 'body',
      toggleClass: 'stuck',
      start: 'top top'
    }
  });
});

const headerRef = ref();
const linkPaths = ['/', '/about', '/products', '/services', '/recipes', '/media', '/contacts'];

const links = computed(() =>
  mapRt(tm('header.links'), rt).map((el, i) => ({
    name: el,
    path: linkPaths[i]
  }))
);
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: calc(45px + 5px);
  inset-inline: 0;
  padding-block: 20px;
  padding-inline: 16px;
  transition: all 0.4s;
  &.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(25px);
  }
  &__nav {
    display: flex;
    flex-direction: column;
    &-link {
      padding: 11px 16px;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      border-radius: 99px;
      &.active {
        @include mix.glass-bezel(
          (
            angle: 170deg,
            border-color: 84 143 216
          )
        );
        background:
          linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
          rgba(0, 67, 255, 0.2);
        box-shadow: 0 4px 70px 0 rgba(8, 11, 46, 0.5);
      }
    }
  }
}
.header {
  position: fixed;
  top: 0;
  padding-top: 11px;
  height: max(6rem, 60px);
  inset-inline: 0;
  padding-inline: var(--spacing-inline);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 10;
  border-radius: 0 0 20px 20px;
  transition:
    backdrop-filter 0.4s,
    background 0.4s,
    height 0.4s;
  &.stuck {
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.2);
  }
  &.shown {
    height: calc(60px + (39px * 7) + (20px * 2));
    background:
      radial-gradient(
        109.11% 102.52% at 15.57% 3.03%,
        rgba(0, 123, 255, 0.6) 0%,
        rgba(0, 98, 255, 0) 100%
      ),
      rgba(0, 28, 73, 0.8);
    backdrop-filter: blur(10px);
  }
  &__ham {
    @include mix.glass-bezel(
      (
        mid-start-pos: 25%,
        mid-end-pos: 75%
      )
    );
    display: grid;
    place-items: center;
    align-self: stretch;
    width: 40px;
    border-radius: 99px;
    background:
      linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
      linear-gradient(0deg, rgba(0, 67, 255, 0.2) 0%, rgba(0, 67, 255, 0.2) 100%),
      rgba(244, 245, 245, 0.2);
    @media screen and (min-width: vars.$bp-lg) {
      display: none;
    }
    &.active {
      & > *:first-child {
        transform: scale(0);
        opacity: 0;
      }
      & > *:last-child {
        transform: scale(1);
        opacity: 1;
      }
    }
    &-icon {
      grid-area: 1/1/2/2;
      width: 45%;
      transition:
        transform 0.4s,
        opacity 0.4s;

      &:last-child {
        transform: scale(0);
        opacity: 0;
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    gap: max(2rem, 12px);
  }
  &__nav {
    display: flex;
    @media screen and (max-width: vars.$bp-lg) {
      display: none;
    }
    &-link {
      @include mix.glass-bezel(
        (
          border-color: 156 193 255
        )
      );
      color: #e5efff;
      font-size: max(1.4rem, 14px);
      font-weight: 500;
      padding: max(1.1rem, 11px) max(1.6rem, 16px);
      position: relative;
      border-radius: max(9.9rem, 99px);
      overflow: hidden;
      display: flex;
      &::before {
        opacity: 0;
        transition: opacity 0.4s;
      }

      span {
        z-index: 1;
      }
      &:hover::after {
        scale: 1 0.45;
        transition-duration: 0.4s;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        scale: 1 0;
        transition: scale 0.6s;
        background:
          linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
          rgba(0, 67, 255, 0.2);
        transform-origin: bottom;
      }
      &.active::before {
        opacity: 1;
      }
      &.active::after {
        scale: 1;
      }
    }
  }
  &__logo {
    width: max(7.6095rem, 77px);
    &-container {
      display: flex;
    }
  }
}
</style>
