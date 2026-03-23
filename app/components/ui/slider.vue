<template>
  <div
    ref="sliderRef"
    class="slider"
    :class="{ 'slider--grabbing': isGrabbing }"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onRelease"
    @wheel.prevent="onWheel"
  >
    <div ref="trackRef" class="slider__track" :style="{ transform: `translateX(${offset}px)` }">
      <slot />
    </div>
  </div>
</template>

<script setup>
const sliderRef = ref();
const trackRef = ref();

const offset = ref(0);
const isGrabbing = ref(false);

let startX = 0;
let startOffset = 0;
let lastX = 0;
let lastTime = 0;
let velocity = 0;
let rafId = null;

const getMaxOffset = () => {
  if (!trackRef.value || !sliderRef.value) return 0;
  return -(trackRef.value.scrollWidth - sliderRef.value.offsetWidth);
};

const clamp = val => Math.min(Math.max(val, getMaxOffset()), 0);

const runMomentum = () => {
  velocity *= 0.9;
  offset.value = clamp(offset.value + velocity);
  if (Math.abs(velocity) > 0.8) {
    rafId = requestAnimationFrame(runMomentum);
  }
  // removed snapToNearest()
};

// --- Mouse ---
const onMouseDown = e => {
  cancelAnimationFrame(rafId);
  isGrabbing.value = true;
  startX = e.clientX;
  startOffset = offset.value;
  lastX = e.clientX;
  lastTime = Date.now();
  velocity = 0;
};

const onMouseMove = e => {
  if (!isGrabbing.value) return;
  const now = Date.now();
  const dt = Math.max(now - lastTime, 1);
  velocity = ((e.clientX - lastX) / dt) * 16;
  lastX = e.clientX;
  lastTime = now;
  offset.value = clamp(startOffset + (e.clientX - startX));
};

const onMouseUp = () => {
  if (!isGrabbing.value) return;
  isGrabbing.value = false;
  rafId = requestAnimationFrame(runMomentum);
};

// --- Touch ---
const onTouchStart = e => {
  cancelAnimationFrame(rafId);
  startX = e.touches[0].clientX;
  startOffset = offset.value;
  lastX = e.touches[0].clientX;
  lastTime = Date.now();
  velocity = 0;
};

const onTouchMove = e => {
  const now = Date.now();
  const dt = Math.max(now - lastTime, 1);
  velocity = ((e.touches[0].clientX - lastX) / dt) * 16;
  lastX = e.touches[0].clientX;
  lastTime = now;
  offset.value = clamp(startOffset + (e.touches[0].clientX - startX));
};

const onRelease = () => {
  rafId = requestAnimationFrame(runMomentum);
};

// --- Trackpad wheel ---
const onWheel = e => {
  cancelAnimationFrame(rafId);
  offset.value = clamp(offset.value - e.deltaX);
};

onUnmounted(() => {
  cancelAnimationFrame(rafId);
});
</script>

<style lang="scss">
.slider {
  overflow: hidden;
  cursor: grab;
  user-select: none;
  flex-shrink: 0;

  &--grabbing {
    cursor: grabbing;
  }

  &__track {
    display: inline-flex;
    align-items: stretch;
    gap: 1.2rem;
    will-change: transform;
  }
}
</style>
