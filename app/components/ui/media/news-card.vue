<template>
  <NuxtLink class="card" :to="$localePath(`/media/${data.id}`)">
    <UiPicture :src="data.banner" alt="banner" class="card__banner" />
    <span class="card__text"> {{ $t('date') }}: {{ data.date }} </span>
    <h4 class="card__title">{{ data.title }}</h4>
    <p class="card__text">{{ data.text }}</p>
    <button class="card__button">
      <span>{{ $t('readMore') }}</span>
    </button>
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
  padding: 1.6rem;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  font-family: vars.$font-nunito-sans;
  &__banner {
    border-radius: 1.2rem;
    aspect-ratio: 34.4/18.1;
  }
  &__text {
    font-size: 1.4rem;
    opacity: 0.5;
    line-height: 135%;
  }
  &__title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  &__button {
    margin-top: auto;
    height: 4.2rem;
    padding: 0 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  }
}
</style>
