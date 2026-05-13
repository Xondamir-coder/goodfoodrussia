<template>
  <section class="cta">
    <div class="cta__left">
      <div class="cta__content">
        <h2 class="cta__title">
          {{ title }}
        </h2>
        <p class="cta__text">
          {{ text }}
        </p>
      </div>
      <UiBaseButton
        :text="$t('leaveEnquiry')"
        variant="white"
        class="cta__button"
        @click="showContactsModal = true"
      >
        <IconsThickArrowRight />
      </UiBaseButton>
    </div>
    <UiPicture src="meat-burning.png" alt="meat" class="cta__banner" />
    <UiPicture src="tomatoes.png" alt="toma toma" class="cta__banner" />
  </section>
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

const showContactsModal = useState('showContactsModal');
</script>

<style lang="scss" scoped>
.cta {
  position: relative;
  border-radius: max(3.2rem, 16px);
  background: #0076f7;
  padding: max(3.2rem, 16px);
  aspect-ratio: 113.6/34.5;
  display: flex;
  clip-path: inset(-35% 0% 0% 0%);
  @media screen and (max-width: vars.$bp-sm) {
    aspect-ratio: 26.7/42;
  }
  @supports (hanging-punctuation: first) and (font: -apple-system-body) and
    (-webkit-appearance: none) {
    aspect-ratio: initial;
    min-height: max(34.5rem, 300px);
    @media screen and (max-width: vars.$bp-sm) {
      min-height: 420px;
    }
  }
  &__banner {
    position: absolute;
    &:first-of-type {
      z-index: 1;
      @media screen and (min-width: vars.$bp-sm) {
        width: 53.7%;
        right: 0;
        top: -30%;
      }
      @media screen and (max-width: vars.$bp-sm) {
        width: 150%;
        bottom: -30%;
        left: 40%;
        translate: -50%;
      }
    }
    &:nth-of-type(2) {
      @media screen and (min-width: vars.$bp-sm) {
        width: 35.5%;
        right: -10%;
      }
      @media screen and (max-width: vars.$bp-sm) {
        width: 95%;
        right: -40%;
        bottom: -6%;
      }
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    z-index: 2;

    @media screen and (min-width: vars.$bp-sm) {
      max-width: 44.7%;
    }
    @media screen and (max-width: vars.$bp-sm) {
      & > *:last-child {
        align-self: stretch;
      }
    }
  }
  &__text {
    font-size: max(1.8rem, 14px);
    line-height: 155%;
  }
  &__title {
    font-size: max(3.6rem, 20px);
    background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: max(1.2rem, 8px);
  }
  &__button {
    gap: max(1.2rem, 10px);
    --icon-size: max(2.4rem, 20px);
  }
}
</style>
