<template>
  <div class="share-card">
    <h2 class="share-card__title">
      {{ title }}
    </h2>
    <p class="share-card__text">
      {{ text }}
    </p>
    <div class="share-card__bottom">
      <UiIconButton class="share-card__bottom-icbutton" @click="emits('copy')">
        <IconsShare />
      </UiIconButton>
      <UiBaseButton
        class="share-card__bottom-button"
        variant="white"
        :text="$t('share')"
        @click="emits('share')"
      />
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
  @media screen and (min-width: vars.$bp-lg) {
    position: sticky;
    top: calc(max(6rem, 60px) + max(1.6rem, 10px));
  }
  display: flex;
  flex-direction: column;
  gap: max(1.2rem, 12px);
  align-self: flex-start;
  padding: max(2.4rem, 16px);
  border-radius: max(3.2rem, 16px);
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
    display: flex;
    gap: max(1.6rem, 12px);
    height: max(5rem, 42px);
    &-icbutton {
      width: max(5rem, 42px);
    }
    &-button {
      height: max(5rem, 42px);
      flex: 1;
    }
  }
  &__title {
    font-size: max(2.4rem, 16px);
    font-weight: 700;
  }
  &__text {
    font-size: max(1.4rem, 12px);
  }
}
</style>
