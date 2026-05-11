<template>
  <NuxtLink class="card" :to="$localePath(`/media/${data.id}`)">
    <UiPicture :src="data.banner" alt="banner" class="card__banner" />
    <div class="card__content">
      <span class="card__text">{{ data[`date_${locale}`] }}</span>
      <h4 class="card__title">{{ data[`title_${locale}`] }}</h4>
      <p class="card__text">{{ data[`text_${locale}`] }}</p>
    </div>
    <button class="card__button">
      <span>{{ $t('readMore') }}</span>
    </button>
  </NuxtLink>
</template>

<script setup>

const { locale } = useI18n();

defineProps({
  data: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: max(1.6rem, 12px);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  font-family: vars.$font-nunito-sans;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    border-color 0.3s,
    background 0.3s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.24);
    background: #ffffff13;

    .card__banner > * {
      transform: scale(1.07);
    }
  }
  @media screen and (max-width: vars.$bp-md) {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  &__banner {
    aspect-ratio: 38.5/18.1;
    & > * {
      transition: transform 0.3s;
    }
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 26.8/18;
    }
  }
  &__text {
    font-size: max(1.4rem, 12px);
    line-height: 135%;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  &__title {
    font-size: max(1.8rem, 14px);
    font-weight: 700;
  }
  &__content {
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    gap: max(0.8rem, 8px);
    padding-inline: max(1.6rem, 12px);
    span {
      margin-bottom: 0.4rem;
    }
  }
  &__button {
    padding-inline: max(2.4rem, 24px);
    height: max(5rem, 42px);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
