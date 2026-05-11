<template>
  <div class="header-lang">
    <button class="header-lang__selected" @click="showDropdown = !showDropdown">
      <IconsGlobe class="header-lang__icon" />
      <span>{{ $i18n.locales.value.find(l => l.code === $i18n.locale).name }}</span>
    </button>
    <div class="header-lang__dropdown" :class="{ hidden: !showDropdown }">
      <button
        v-for="(option, i) in locales"
        :key="i"
        class="header-lang__option"
        @click="changeLang(option.code)"
      >
        <IconsGlobe class="header-lang__icon" />
        <span>{{ option.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { setLocale, locale, locales } = useI18n();
const showDropdown = ref(false);
const changeLang = code => {
  showDropdown.value = !showDropdown.value;
  setLocale(code || (locale.value === 'ru' ? 'uz' : 'ru'));
};

onMounted(() => {
  document.addEventListener('click', e => {
    if (!e.target.closest('.header-lang')) showDropdown.value = false;
  });
});
</script>

<style lang="scss" scoped>
.header-lang {
  position: relative;
  &__dropdown {
    min-width: 101px;
    position: absolute;
    z-index: 5;
    left: 0;
    top: calc(100% + 5px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(14, 32, 92, 0.8);
    backdrop-filter: blur(50px);
    display: flex;
    flex-direction: column;
    transition:
      opacity 0.3s,
      transform 0.3s;
    &.hidden {
      pointer-events: none;
      opacity: 0;
      transform: translateY(10px);
    }
  }
  &__option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    transition: transform 0.3s;
    &:hover {
      transform: translateX(3px);
    }
  }
  &__selected {
    @include mix.glass-bezel(
      (
        border-color: 90 106 138
      )
    );
    display: flex;
    padding: max(1rem, 10px);
    justify-content: center;
    align-items: center;
    gap: max(0.6rem, 6px);
    border-radius: max(9.9rem, 99px);
    background: rgba(8, 18, 59, 0.6);
    backdrop-filter: blur(15px);
    font-size: max(1.4rem, 14px);
    transition: background 0.4s;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  &__icon {
    width: max(2rem, 20px);
  }
}
</style>
