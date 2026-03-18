<template>
  <div class="slide">
    <div class="slide__top">
      <span>{{ $t('home.slide-3.title') }}</span>
      <p>{{ $t('home.slide-3.text') }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide {
  &__top {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1rem;
    color: var(--Smalt-300, #b8caed);

    span {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      line-height: 128%;
    }
    p {
      text-align: center;
      font-family: vars.$font-dm-sans;
      font-size: 1.8rem;
      line-height: 128%;
      letter-spacing: -0.036rem;
      max-width: 45ch;
    }
  }
}
</style>
