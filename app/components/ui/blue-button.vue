<template>
  <button class="blue-button">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.blue-button {
  display: flex;
  height: 5rem;
  padding: 1.8rem 2.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  background: #1238a3;
}
</style>
