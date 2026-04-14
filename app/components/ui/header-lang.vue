<template>
  <button class="header-lang" @click="changeLang">
    <IconsGlobe class="header-lang__icon" />
    <span>{{ $i18n.locales.value.find(l => l.code === $i18n.locale).name }}</span>
  </button>
</template>

<script setup>
const { setLocale, locale } = useI18n();

const changeLang = () => {
  setLocale(locale.value === 'ru' ? 'en' : 'ru');
};
</script>

<style lang="scss" scoped>
.header-lang {
  @include mix.glass-bezel(
    (
      border-color: 90 106 138,
      fade-start-opacity: 1,
      angle: 150deg,
      fade-end-pos: 50%
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

  &__icon {
    width: max(2rem, 20px);
  }
}
</style>
