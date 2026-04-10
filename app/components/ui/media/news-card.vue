<template>
  <NuxtLink class="card" :to="$localePath(`/media/${data.id}`)">
    <UiPicture :src="data.banner" alt="banner" class="card__banner" />
    <span class="card__text"> {{ $t('date') }}: {{ data.date }} </span>
    <h4 class="card__title">{{ data.title }}</h4>
    <p class="card__text">{{ data.text }}</p>
    <UiBaseButton :text="$t('readMore')" variant="glass" class="card__button" />
  </NuxtLink>
</template>

<script setup>
import Media from '~/types/media';

defineProps({
  data: {
    required: true,
    type: Media
  }
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: max(1.6rem, 12px);
  flex-direction: column;
  gap: max(1.6rem, 12px);
  border-radius: max(1.5rem, 12px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  font-family: vars.$font-nunito-sans;
  &__banner {
    border-radius: max(1.2rem, 18px);
    aspect-ratio: 34.4/18.1;
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 24.4/18;
    }
  }
  &__text {
    font-size: max(1.4rem, 12px);
    opacity: 0.5;
    line-height: 135%;
  }
  &__title {
    font-size: max(1.8rem, 14px);
    font-weight: 700;
  }
  &__button {
    margin-top: auto;
    height: max(4.2rem, 42px);
    font-size: max(1.6rem, 16px);
  }
}
</style>
