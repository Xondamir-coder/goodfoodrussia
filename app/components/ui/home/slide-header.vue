<template>
  <div class="slide-header">
    <h3 class="slide-header__title">{{ title }}</h3>
    <p class="slide-header__text">{{ text }}</p>
    <div class="slide-header__container" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.slide-header {
  @include mix.dots;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: max(1rem, 10px);
  padding-inline: var(--spacing-inline);
  padding-block: 16px;
  border-block: 1px solid rgba(255, 255, 255, 0.07);
  &__container {
    @include mix.dots(top);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  &__title {
    text-align: center;
    font-size: max(2.6rem, 18px);
    font-weight: 700;
    line-height: 128%;
    animation: slide-from-bottom-10 0.4s;
  }
  &__text {
    animation: slide-from-bottom-10 0.4s 0.05s backwards;
    color: var(--Smalt-300, #b8caed);
    text-align: center;
    font-family: vars.$font-nunito-sans;
    font-size: max(1.8rem, 14px);
    line-height: 128%;
    letter-spacing: min(-0.036rem, -0.28px);
    max-width: 53ch;
  }
}
</style>
