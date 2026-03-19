<template>
  <div class="header">
    <span>{{ title }}</span>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
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
.header {
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1rem;
  color: var(--Smalt-300, #b8caed);

  span {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    line-height: 128%;
  }
  p {
    text-align: center;
    font-family: vars.$font-dm-sans;
    font-size: 1.8rem;
    line-height: 128%;
    letter-spacing: -0.036rem;
    max-width: 45ch;
  }
}
</style>
