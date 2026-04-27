<template>
  <div class="section-header">
    <h2 class="section-header__title">
      {{ title }}
    </h2>
    <p class="section-header__text">
      {{ text }}
    </p>
  </div>
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
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: max(1.2rem, 12px);
  text-align: center;
  align-self: center;
  @media screen and (min-width: vars.$bp-lg) {
    max-width: 63%;
  }
  &__title {
    font-size: max(3.6rem, 22px);
    line-height: 1.22;
    font-weight: 700;
    letter-spacing: max(0.072rem, 0.72px);
    background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__text {
    color: #c2c2c2;
    font-size: max(1.8rem, 14px);
    line-height: 155%;
  }
}
</style>
