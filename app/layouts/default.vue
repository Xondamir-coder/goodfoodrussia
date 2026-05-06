<template>
  <div
    class="layout"
    :class="
      $route.params?.id
        ? `${$route.path.split('/')[2]} index`
        : $route.query?.slide
          ? `home--${$route.query?.slide}`
          : $i18n.locale === 'en'
            ? $route.path.split('/')[2]
            : $route.path.slice(1)
    "
  >
    <LayoutHeader />
    <div class="layout__slot">
      <slot />
    </div>
    <div v-if="!noShadowPages.some(e => $route.name.includes(e))" class="layout__shadows" />
    <LayoutFooter v-if="!$route.name.includes('index')" />
  </div>
</template>

<script setup>
const noShadowPages = ['services', 'about'];
</script>

<style lang="scss" scoped>
@use 'sass:map';

.layout {
  background: var(--Smalt-950, #061852);
  color: #fff;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  &[class*='home'],
  &.about,
  &.services {
    .layout__slot {
      padding-top: 0;
    }
  }
  &__slot {
    z-index: 1;
    padding-top: max(6rem, 60px);
  }
  &__shadows {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      270deg,
      #0d0316 0%,
      rgba(13, 3, 22, 0.15) 24.71%,
      rgba(13, 3, 22, 0) 50.18%,
      rgba(13, 3, 22, 0.15) 75.35%,
      #0d0316 100%
    );
  }
}
</style>
