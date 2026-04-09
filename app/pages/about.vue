<template>
  <div>Hallo</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  &__button {
    @include mix.flex-center;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background-color: #2f5e96;
  }
  &__icon {
    width: 1.8rem;
  }
}
</style>
