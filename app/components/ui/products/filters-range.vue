<template>
  <div class="price-range">
    <div class="price-range__labels">
      <label
        class="price-range__field"
        :class="{ 'price-range__field--active': minFocused || modelValue.from !== null }"
      >
        <input
          ref="minInputRef"
          class="price-range__input"
          type="text"
          inputmode="numeric"
          :value="minDisplayValue"
          :placeholder="$t('from')"
          @focus="onMinFocus"
          @blur="onMinBlur"
          @input="onMinInput"
          @keydown="onNumericKeydown"
          @keydown.enter="minInputRef.blur()"
          @paste="onNumericPaste"
        />
      </label>
      <label
        class="price-range__field"
        :class="{ 'price-range__field--active': maxFocused || modelValue.to !== null }"
      >
        <input
          ref="maxInputRef"
          class="price-range__input"
          type="text"
          inputmode="numeric"
          :value="maxDisplayValue"
          :placeholder="$t('to')"
          @focus="onMaxFocus"
          @blur="onMaxBlur"
          @input="onMaxInput"
          @keydown="onNumericKeydown"
          @keydown.enter="maxInputRef.blur()"
          @paste="onNumericPaste"
        />
      </label>
    </div>

    <div class="price-range__track-wrapper">
      <div ref="trackRef" class="price-range__track" @mousedown="onTrackClick">
        <div class="price-range__fill" :style="{ left: fillLeft + '%', width: fillWidth + '%' }" />
        <div
          class="price-range__thumb price-range__thumb--min"
          :style="{ left: fillLeft + '%' }"
          :class="{ 'price-range__thumb--dragging': dragging === 'min' }"
          tabindex="0"
          role="slider"
          :aria-valuenow="minVal"
          :aria-valuemin="min"
          :aria-valuemax="maxVal"
          @mousedown.prevent="startDrag('min', $event)"
          @touchstart.prevent="startDrag('min', $event)"
          @keydown="onKeydown('min', $event)"
        />
        <div
          class="price-range__thumb price-range__thumb--max"
          :style="{ left: fillRight + '%' }"
          :class="{ 'price-range__thumb--dragging': dragging === 'max' }"
          tabindex="0"
          role="slider"
          :aria-valuenow="maxVal"
          :aria-valuemin="minVal"
          :aria-valuemax="max"
          @mousedown.prevent="startDrag('max', $event)"
          @touchstart.prevent="startDrag('max', $event)"
          @keydown="onKeydown('max', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({ from: null, to: null })
  },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 10000000 },
  step: { type: Number, default: 10000 }
});

const emit = defineEmits(['update:modelValue']);

const trackRef = ref(null);
const minInputRef = ref(null);
const maxInputRef = ref(null);
const dragging = ref(null);
const minFocused = ref(false);
const maxFocused = ref(false);

// Resolve effective slider positions: fall back to min/max when null (untouched)
const minVal = computed(() => props.modelValue.from ?? props.min);
const maxVal = computed(() => props.modelValue.to ?? props.max);

const fillLeft = computed(() => ((minVal.value - props.min) / (props.max - props.min)) * 100);
const fillRight = computed(() => ((maxVal.value - props.min) / (props.max - props.min)) * 100);
const fillWidth = computed(() => fillRight.value - fillLeft.value);

function formatNumber(val) {
  return new Intl.NumberFormat('ru-RU').format(val);
}

function parseInput(str) {
  return parseInt(str.replace(/\D/g, ''), 10) || 0;
}

// Show empty string when null (untouched); formatted number when set
const minDisplayValue = computed(() =>
  props.modelValue.from === null ? '' : formatNumber(props.modelValue.from)
);
const maxDisplayValue = computed(() =>
  props.modelValue.to === null ? '' : formatNumber(props.modelValue.to)
);

// Emit null when value snaps back to the boundary (treat as "cleared")
function emitFrom(val) {
  emit('update:modelValue', {
    ...props.modelValue,
    from: val === props.min ? null : val
  });
}

function emitTo(val) {
  emit('update:modelValue', {
    ...props.modelValue,
    to: val === props.max ? null : val
  });
}

// --- Input handlers ---
function onMinFocus() {
  minFocused.value = true;
}
function onMinBlur() {
  minFocused.value = false;
  const raw = parseInput(minInputRef.value.value);
  emitFrom(Math.min(Math.max(raw, props.min), maxVal.value - props.step));
}
function onMinInput(e) {
  const raw = parseInput(e.target.value);
  if (!isNaN(raw)) {
    emitFrom(Math.min(Math.max(raw, props.min), maxVal.value - props.step));
  }
}

function onMaxFocus() {
  maxFocused.value = true;
}
function onMaxBlur() {
  maxFocused.value = false;
  const raw = parseInput(maxInputRef.value.value);
  emitTo(raw === 0 ? props.max : Math.min(Math.max(raw, minVal.value + props.step), props.max));
}
function onMaxInput(e) {
  const raw = parseInput(e.target.value);
  if (!isNaN(raw)) {
    emitTo(Math.min(Math.max(raw, minVal.value + props.step), props.max));
  }
}

// --- Numeric-only guards ---
const ALLOWED_KEYS = new Set([
  'Backspace',
  'Delete',
  'Tab',
  'Escape',
  'Enter',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Home',
  'End'
]);

function onNumericKeydown(e) {
  if (ALLOWED_KEYS.has(e.key)) return;
  if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) return;
  if (!/^\d$/.test(e.key)) e.preventDefault();
}

function onNumericPaste(e) {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData('text');
  const digits = text.replace(/\D/g, '');
  if (digits) document.execCommand('insertText', false, digits);
}

// --- Slider ---
function valueFromPosition(clientX) {
  const rect = trackRef.value.getBoundingClientRect();
  const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  const raw = props.min + ratio * (props.max - props.min);
  return Math.round(raw / props.step) * props.step;
}

function startDrag(thumb) {
  dragging.value = thumb;
  const moveHandler = e => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const val = valueFromPosition(clientX);
    if (thumb === 'min') {
      emitFrom(Math.min(val, maxVal.value - props.step));
    } else {
      emitTo(Math.max(val, minVal.value + props.step));
    }
  };
  const upHandler = () => {
    dragging.value = null;
    window.removeEventListener('mousemove', moveHandler);
    window.removeEventListener('mouseup', upHandler);
    window.removeEventListener('touchmove', moveHandler);
    window.removeEventListener('touchend', upHandler);
  };
  window.addEventListener('mousemove', moveHandler);
  window.addEventListener('mouseup', upHandler);
  window.addEventListener('touchmove', moveHandler);
  window.addEventListener('touchend', upHandler);
}

function onTrackClick(event) {
  const val = valueFromPosition(event.clientX);
  const distMin = Math.abs(val - minVal.value);
  const distMax = Math.abs(val - maxVal.value);
  if (distMin <= distMax) {
    emitFrom(Math.min(val, maxVal.value - props.step));
  } else {
    emitTo(Math.max(val, minVal.value + props.step));
  }
}

function onKeydown(thumb, event) {
  const delta = props.step;
  if (thumb === 'min') {
    if (event.key === 'ArrowRight') emitFrom(Math.min(minVal.value + delta, maxVal.value - delta));
    if (event.key === 'ArrowLeft') emitFrom(Math.max(minVal.value - delta, props.min));
  } else {
    if (event.key === 'ArrowRight') emitTo(Math.min(maxVal.value + delta, props.max));
    if (event.key === 'ArrowLeft') emitTo(Math.max(maxVal.value - delta, minVal.value + delta));
  }
}
</script>

<style lang="scss">
$blue-fill: #2f68cf;
$thumb-size: max(2rem, 20px);
$track-height: max(0.8rem, 8px);

.price-range {
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: calc(max(1.6rem, 16px) + max(0.7rem, 7px));

  &__labels {
    display: flex;
    gap: max(1.2rem, 12px);
  }
  &__field {
    @include mix.glass-bezel(
      (
        start-opacity: 0.45,
        end-opacity: 0,
        mid-start-pos: 90%,
        angle: 180deg
      )
    );
    display: flex;
    height: max(5rem, 50px);
    padding-inline: max(1.6rem, 16px);
    justify-content: center;
    align-items: center;
    gap: max(1rem, 10px);
    font-size: max(1.6rem, 16px);
    flex: 1 0 0;
    border-radius: max(0.8rem, 8px);
    background: rgba(255, 255, 255, 0.08);
    transition:
      background 0.3s,
      border-color 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.13);
      border-color: rgba(255, 255, 255, 0.28);
    }

    &:focus-within {
      border-color: rgba($blue-fill, 0.7);
      background: rgba($blue-fill, 0.1);
    }

    &--active {
      border-color: rgba($blue-fill, 0.5);
      background: rgba($blue-fill, 0.08);
    }
  }

  &__input {
    width: 100%;
    background-color: transparent;
  }

  &__track-wrapper {
    padding: 0 calc($thumb-size / 2);
  }

  &__track {
    position: relative;
    height: $track-height;
    background: rgba(203, 213, 224, 0.5);
    border-radius: 3rem;
    cursor: pointer;
  }

  &__fill {
    position: absolute;
    top: 0;
    height: 100%;
    background: $blue-fill;
    border-radius: max(3.4rem, 34px);
    pointer-events: none;
  }

  &__thumb {
    position: absolute;
    top: 50%;
    width: $thumb-size;
    height: $thumb-size;
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    cursor: grab;
    transition:
      box-shadow 0.15s,
      transform 0.1s;
    z-index: 2;
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
    }

    &--dragging {
      cursor: grabbing;
      transform: translate(-50%, -50%) scale(1.12);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      z-index: 3;
    }

    &:focus-visible {
      outline: 2px solid $blue-fill;
      outline-offset: 2px;
    }
  }
}
</style>
