<template>
  <div class="card">
    <UiPicture :src="image" alt="card title" class="card__pic" />
    <div class="card__content">
      <h3 class="card__content-title">
        {{ title }}
      </h3>
      <span class="card__content-weight">
        {{ weight }}
      </span>
    </div>
    <button class="card__button">
      {{ $t('readMore') }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.card {
  flex: 1;
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  &__pic {
    aspect-ratio: 23.7/18.1;
    border-radius: 1.2rem;
  }
  &__button {
    margin-top: auto;
    display: flex;
    height: 4.2rem;
    padding: 1.6rem 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    &-title {
      font-weight: 700;
      font-size: 1.6rem;
    }
    &-weight {
      font-size: 1.4rem;
      opacity: 0.5;
    }
  }
}
</style>
