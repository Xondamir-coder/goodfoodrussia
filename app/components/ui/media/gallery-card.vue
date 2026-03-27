<template>
  <NuxtLink class="card" :to="$localePath(`/media/${data.id}`)">
    <div class="card__container">
      <div class="card__top">
        <h4 class="card__title">{{ data.title }}</h4>
        <ul class="card__labels">
          <li v-for="label in labels" :key="label" class="card__label card__text">
            <span>{{ label }}</span>
          </li>
        </ul>
      </div>
      <UiPicture :src="data.banner" alt="banner" class="card__banner" />
      <p class="card__text">
        {{ data.text }}
      </p>
    </div>
    <button class="card__button">
      <span>{{ $t('watch') }}</span>
    </button>
  </NuxtLink>
</template>

<script setup>
import Media from '~/types/media';

const { data } = defineProps({
  data: {
    required: true,
    type: Media
  }
});

const labels = [data.date, data.city];
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-family: vars.$font-nunito-sans;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  padding-top: 1.6rem;
  &__top {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  &__banner {
    border-radius: 1.2rem;
    aspect-ratio: 34.4/18.1;
  }
  &__container {
    flex: 1;
    padding-inline: 1.6rem;
    display: grid;
    grid-auto-rows: 1fr max-content max-content;
    gap: 1.6rem;
  }
  &__labels {
    display: flex;
    gap: 1.6rem;
  }
  &__label {
    display: flex;
    align-items: center;
    gap: 10px;
    &::before {
      content: '';
      width: 4px;
      height: 4px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
  &__text {
    font-size: 1.4rem;
    line-height: 135%;
    opacity: 0.5;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
  }
  &__button {
    height: 5rem;
    padding: 0 2.4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
