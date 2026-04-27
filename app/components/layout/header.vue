<template>
  <header class="header">
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
    </div>
  </header>
</template>

<script setup>
const { tm, rt } = useI18n();

const linkPaths = ['/', '/about', '/products', '/services', '/recipes', '/media', '/contacts'];

const links = computed(() =>
  mapRt(tm('header.links'), rt).map((el, i) => ({
    name: el,
    path: linkPaths[i]
  }))
);
</script>

<style lang="scss" scoped>
.header {
  margin-inline: var(--spacing-inline);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: max(6rem, 60px);
  z-index: 10;
  position: relative;
  &__right {
    display: flex;
    align-items: center;
    gap: max(2rem, 10px);
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
