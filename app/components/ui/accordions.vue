<template>
  <div class="accordions">
    <button
      v-for="(accordion, i) in accordions"
      :key="i"
      class="accordion"
      :class="{ active: activeAccordions.includes(i) }"
      @click="toggleAccordion(i)"
    >
      <div class="accordion__top">
        <span>{{ accordion.question }}</span>
        <div class="accordion__top-icontainer">
          <svg
            class="accordion__top-icon"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.825 6.91406L10 10.7307L6.175 6.91406L5 8.08906L10 13.0891L15 8.08906L13.825 6.91406Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <p ref="textRef" class="accordion__text">
        {{ accordion.answer }}
      </p>
    </button>
  </div>
</template>

<script setup>
const activeAccordions = ref([]);
const textRef = ref();

const toggleAccordion = i => {
  const textEl = textRef.value[i];
  const idx = activeAccordions.value.indexOf(i);

  if (idx !== -1) {
    activeAccordions.value.splice(idx, 1);
    textEl.style.height = '';
  } else {
    activeAccordions.value.push(i);
    textEl.style.height = `${textEl.scrollHeight}px`;
  }
};

defineProps({
  accordions: {
    type: Array,
    default: null
  }
});
</script>

<style lang="scss" scoped>
.accordion {
  text-align: start;
  display: flex;
  flex-direction: column;
  font-family: vars.$font-nunito-sans;
  color: #fff;
  border-radius: max(1.5rem, 12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  padding: max(2rem, 12px);
  gap: 0;
  transition: gap 0.4s;
  &.active {
    gap: max(1rem, 8px);
    .accordion__top-icon {
      transform: rotate(540deg);
    }
  }
  &__text {
    align-self: flex-start;
    overflow: hidden;
    font-size: max(1.8rem, 12px);
    height: 0;
    transition: height 0.5s;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    &-icon {
      transition: transform 0.5s;
    }
    &-icontainer {
      @include mix.flex-center;
      height: max(3.2rem, 28px);
      width: max(3.2rem, 28px);
      padding: max(0.6rem, 4px);
      border-radius: max(0.7rem, 7px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.12);
    }
    span {
      font-size: max(2rem, 14px);
      font-weight: 700;
    }
  }
}
.accordions {
  display: flex;
  flex-direction: column;
  gap: max(1.2rem, 12px);
}
</style>
