<template>
  <button class="button" :class="`button--${variant}`" @click="$emit('click')">
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
defineEmits(['click']);
</script>

<style lang="scss" scoped>
@property --glass-angle {
  syntax: '<angle>';
  initial-value: 180deg;
  inherits: false;
}

.button {
  height: max(5rem, 42px);
  padding-inline: max(2.4rem, 24px);
  border-radius: max(0.8rem, 8px);
  font-weight: 600;
  font-size: max(1.4rem, 14px);
  font-family: vars.$font-nunito-sans;
  display: flex;
  justify-content: center;
  gap: max(1rem, 10px);
  align-items: center;
  fill: #fff;
  transition:
    background 0.3s,
    fill 0.3s,
    color 0.3s,
    --glass-angle 0.3s;

  --icon-size: max(1.6rem, 14px);

  &:has(svg):hover {
    .button__icon {
      transform: translateX(3px);
    }
  }

  &__icon {
    @include mix.flex-center;
    width: var(--icon-size);
    transition: transform 0.3s;
  }

  &--blue {
    background: #1238a3;
    &:hover {
      background: #1238a3b1;
    }
  }

  &--glass {
    @include mix.glass-bezel(
      (
        start-opacity: 0.45,
        end-opacity: 0,
        mid-start-pos: 90%,
        angle: 180deg
      )
    );
    color: var(--Greyscale-200, #f1f2f4);
    background: linear-gradient(
      var(--glass-angle),
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    &:hover {
      --glass-angle: 90deg;
    }
  }

  &--white {
    fill: #000;
    background: #fff;
    color: var(--Main-Green-950, #001a0d);

    &:hover {
      fill: #fff;
      background-color: #001a0db1;
      color: #fff;
    }
  }
}
</style>
