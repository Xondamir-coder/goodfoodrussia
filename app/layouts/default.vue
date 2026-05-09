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
    <div v-if="!noShadowPages.some(e => $route?.name?.includes(e))" class="layout__shadows" />
    <div
      class="layout__lines"
      :class="{ priority: $route?.name?.includes('about') || $route?.name?.includes('services') }"
    >
      <div v-for="i in 4" :key="i" class="layout__line" />
    </div>
    <div class="layout__slot">
      <slot />
    </div>
    <LayoutFooter v-if="!$route?.name?.includes('index')" />
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
  &.about {
    background: linear-gradient(180deg, #061852 0%, #061852 78.67%, #0d36b8 100%);
  }
  &__slot {
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
  &__lines {
    z-index: 1;
    &.priority {
      z-index: 3;
    }
  }
  &__slot {
    z-index: 2;
  }
  &__line {
    position: absolute;
    background-color: #ffffff12;
    height: 100%;
    width: 1px;
    top: 0;
    &:first-child {
      left: max(5.5rem, 15px);
    }
    &:nth-child(2) {
      left: var(--line-spacing);
    }
    &:nth-child(3) {
      right: var(--line-spacing);
    }
    &:nth-child(4) {
      right: max(5.5rem, 15px);
    }
  }
}
</style>
