<template>
  <header class="header">
    <NuxtLink :to="$localePath('/')" class="header__logo-container">
      <SvgLogo class="header__logo" />
    </NuxtLink>
    <nav class="header__nav">
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="$localePath(link.path)"
        class="header__nav-link"
        active-class="active"
      >
        <span>{{ link.name }}</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const linkPaths = ['/', '/about', '/products', '/services', '/recipes', '/media', '/contacts'];

const links = computed(() =>
  useMapRt('header.links').map((el, i) => ({
    name: el,
    path: linkPaths[i]
  }))
);
</script>

<style lang="scss" scoped>
.header {
  padding-inline: var(--spacing-inline);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  z-index: 10;
  position: relative;
  &__nav {
    display: flex;
    &-link {
      color: #e5efff;
      font-size: 1.4rem;
      font-weight: 500;
      padding: 1.1rem 1.6rem;
      position: relative;
      border-radius: 9.9rem;
      overflow: hidden;
      display: flex;
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
      &.active::after {
        scale: 1;
      }
    }
  }
  &__logo {
    width: 7.6095rem;
    &-container {
      display: flex;
    }
  }
}
</style>
