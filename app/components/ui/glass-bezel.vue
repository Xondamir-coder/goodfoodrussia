<template>
  <div class="glass-bezel">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.glass-bezel {
  --gb-border-width: 1px;
  --gb-border-color: 255 255 255;

  --gb-fade-start-opacity: 0.45;
  --gb-fade-end-opacity: 0;

  --gb-fade-start-pos: 0%;
  --gb-fade-end-pos: 100%;

  --gb-angle: 135deg;

  position: relative;
  border-radius: inherit;
}

.glass-bezel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--gb-border-width);

  background: linear-gradient(
    var(--gb-angle),
    rgb(var(--gb-border-color) / var(--gb-fade-start-opacity)) var(--gb-fade-start-pos),
    rgb(var(--gb-border-color) / var(--gb-fade-end-opacity)) var(--gb-fade-end-pos)
  );

  pointer-events: none;

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.glass-bezel > * {
  position: relative;
  z-index: 1;
}
</style>
