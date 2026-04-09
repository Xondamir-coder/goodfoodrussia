<template>
  <button class="button" :class="`button--${variant}`">
    <span>{{ text }}</span>
    <div v-if="$slots.default" class="button__icon">
      <slot />
    </div>
  </button>
</template>

<script setup>
defineProps({
  variant: {
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
.button {
  height: max(5rem, 50px);
  padding-inline: max(2.4rem, 24px);
  border-radius: max(0.8rem, 8px);
  font-weight: 600;
  font-size: max(1.4rem, 14px);
  font-family: vars.$font-nunito-sans;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  gap: max(1rem, 10px);
  align-items: center;

  &__icon {
    @include mix.flex-center;
    width: max(1.6rem, 14px);
    fill: #fff;
  }

  &--blue {
    background: #1238a3;
  }

  &--glass {
    color: var(--Greyscale-200, #f1f2f4);
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  }

  &--white {
    background: #fff;
    color: var(--Main-Green-950, #001a0d);
  }

  &:hover {
    opacity: 0.5;
  }
}
</style>
