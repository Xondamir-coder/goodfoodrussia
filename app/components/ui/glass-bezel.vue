<template>
  <div class="bezel">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@mixin edge-highlight(
  $thickness: 1px,
  $angle: 135deg,
  $color: rgba(255, 255, 255, 1),
  $fade-stop: 25%,
  $intensity-start: 1,
  $intensity-mid: 0.6
) {
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;

    background: linear-gradient(
      $angle,
      rgba($color, $intensity-start) 0%,
      rgba($color, $intensity-mid) 10%,
      transparent $fade-stop
    );

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events: none;
  }
}
@mixin edge-highlight-opposite(
  $thickness: 1px,
  $angle: 315deg,
  $color: rgba(255, 255, 255, 1),
  $fade-stop: 25%,
  $intensity-start: 0.7,
  $intensity-mid: 0.3
) {
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;

    background: linear-gradient(
      $angle,
      rgba($color, $intensity-start) 0%,
      rgba($color, $intensity-mid) 10%,
      transparent $fade-stop
    );

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events: none;
  }
}

.bezel {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background:
    linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
    linear-gradient(0deg, rgba(0, 67, 255, 0.2) 0%, rgba(0, 67, 255, 0.2) 100%),
    rgba(244, 245, 245, 0.2);

  @include edge-highlight(1px, 135deg);
  @include edge-highlight-opposite(1px, 315deg);

  > * {
    position: relative;
    z-index: 1;
  }
}
</style>
