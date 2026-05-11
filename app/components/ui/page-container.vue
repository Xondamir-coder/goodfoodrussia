<template>
  <main class="page-container">
    <div class="page-container__header">
      <h1 class="page-container__title">{{ title }}</h1>
      <div class="page-container__box">
        <div class="page-container__bar">
          <button
            v-for="(type, i) in types"
            :key="i"
            class="page-container__button"
            :class="{ active: sortID === i }"
            @click="sortID = i"
          >
            {{ type }}
          </button>
        </div>
        <button class="page-container__selected" @click="showDropdown = !showDropdown">
          <span>{{ types[sortID] }}</span>
          <IconsExpandMore class="page-container__selected-icon" />
        </button>
        <div class="page-container__dropdown" :class="{ hidden: !showDropdown }">
          <button
            v-for="(type, i) in types"
            :key="i"
            class="page-container__dropdown-option"
            :class="{ active: sortID === i }"
            @click="
              sortID = i;
              showDropdown = !showDropdown;
            "
          >
            {{ type }}
          </button>
        </div>
        <div id="filtersDropdownTeleport" />
      </div>
      <div class="page-container__header-container" />
    </div>
    <slot :sort-id="sortID" :active-page="activePage" :set-active-page="setActivePage" />
  </main>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  types: {
    type: Array,
    required: true
  }
});

const sortID = ref(0);
const activePage = ref(1);
const showDropdown = ref(false);

const setActivePage = value => {
  activePage.value = value;
};

const hideDropdown = e => {
  if (!e.target.closest('.page-container__box')) showDropdown.value = false;
};

onMounted(() => {
  document.addEventListener('click', hideDropdown);
});
onBeforeUnmount(() => {
  document.addEventListener('click', hideDropdown);
});
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  gap: max(3.9rem, 16px);
  font-family: vars.$font-nunito-sans;

  &__header {
    @include mix.dots;
    padding-inline: var(--spacing-inline);
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    padding-block: max(2.4rem, 16px);
    border-block: 1px solid #ffffff12;
    @media screen and (max-width: vars.$bp-sm) {
      flex-direction: column;
      border-bottom: none;
      padding-bottom: 0;
    }
    &-container {
      @include mix.dots(top);
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
  }
  &__title {
    font-size: max(2.6rem, 20px);
    font-family: vars.$font-inter;
    font-weight: 700;
  }
  &__box {
    position: relative;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #filtersDropdownTeleport:empty {
    display: none;
  }
  &__selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    height: 40px;
    padding-inline: 12px;
    &:has(+ div.hidden) .page-container__selected-icon {
      transform: rotate(180deg);
    }
    &:has(~ #filtersDropdownTeleport:empty) {
      flex: 1;
    }
    &-icon {
      width: 20px;
      transition: transform 0.3s;
    }
    @media screen and (min-width: vars.$bp-sm) {
      display: none;
    }
  }
  &__dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 180px;
    left: 0;
    top: calc(100% + 4px);
    z-index: 5;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(14, 32, 92, 0.8);
    backdrop-filter: blur(50px);
    transition:
      opacity 0.3s,
      transform 0.3s;
    &:has(~ #filtersDropdownTeleport:empty) {
      width: 100%;
    }
    &.hidden {
      pointer-events: none;
      opacity: 0;
      transform: translateY(10px);
    }
    &-option {
      text-align: start;
      height: 40px;
      padding-inline: 12px;
    }
    @media screen and (min-width: vars.$bp-sm) {
      display: none;
    }
  }
  &__bar {
    display: flex;
    gap: max(2.4rem, 12px);
    @media screen and (max-width: vars.$bp-sm) {
      display: none;
    }
  }
  &__button {
    text-wrap: nowrap;
    font-family: vars.$font-nunito-sans;
    font-weight: 700;
    letter-spacing: -0.036rem;
    color: #b8caed;
    transition: color 0.3s;
    &:hover {
      color: #ffffffe0;
    }
    &.active {
      color: #fff;
    }
  }
}
</style>
