<template>
  <NuxtLink class="card" :to="$localePath(`/media/${data.id}`)">
    <UiPicture :src="data.banner" alt="banner" class="card__banner" />
    <div class="card__content">
      <span class="card__text">{{ data.date }}</span>
      <h4 class="card__title">{{ data.title }}</h4>
      <p class="card__text">{{ data.text }}</p>
    </div>
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
  flex-direction: column;
  gap: 1.6rem;
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  font-family: vars.$font-nunito-sans;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &__banner {
    aspect-ratio: 38.5/18.1;
  }
  &__text {
    font-size: 1.4rem;
    line-height: 135%;
    opacity: 0.5;
  }
  &__title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  &__content {
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-inline: 1.6rem;
    span {
      margin-bottom: 0.4rem;
    }
  }
  &__button {
    height: 5rem;
    padding: 0 2.4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
