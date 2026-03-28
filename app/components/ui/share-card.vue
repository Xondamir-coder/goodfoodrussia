<template>
  <div class="share-card">
    <h2 class="share-card__title">
      {{ title }}
    </h2>
    <p class="share-card__text">
      {{ text }}
    </p>
    <div class="share-card__bottom">
      <UiIconButton @click="emits('copy')" class="share-card__bottom-icbutton">
        <IconsShare />
      </UiIconButton>
      <button class="share-card__bottom-button" @click="emits('share')">
        <span>{{ $t('share') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['share', 'copy']);
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

let layoutEl;
onMounted(() => {
  layoutEl = document.querySelector('.layout');
  layoutEl.style.overflow = 'visible';
});

onBeforeUnmount(() => {
  layoutEl.style.overflow = '';
});
</script>

<style lang="scss" scoped>
.share-card {
  position: sticky;
  top: max(1.6rem, 10px);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-self: flex-start;
  padding: 2.4rem;
  border-radius: 3.2rem;
  border: 1px solid #293d62;
  background:
    radial-gradient(
      109.11% 102.52% at 15.57% 3.03%,
      rgba(0, 123, 255, 0.6) 0%,
      rgba(0, 98, 255, 0) 100%
    ),
    rgba(0, 28, 73, 0.8);
  backdrop-filter: blur(10px);
  &__bottom {
    margin-top: 2.4rem - 1.2rem;
    display: flex;
    gap: 1.6rem;
    height: 5rem;
    &-icbutton {
      width: 5rem;
    }
    &-button {
      padding: 0 2.4rem;
      flex: 1;
      border-radius: 0.8rem;
      background: #fff;
      color: var(--Main-Green-950, #001a0d);
      font-size: 1.4rem;
      font-weight: 700;
      font-family: vars.$font-nunito-sans;
    }
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
  }
  &__text {
    font-size: 1.4rem;
    line-height: 135%;
  }
}
</style>
