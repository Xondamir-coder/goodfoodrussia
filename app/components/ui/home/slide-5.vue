<template>
  <div class="slide">
    <UiHomeSlideHeader :title="$t('home.slide-5.title')" :text="$t('home.slide-5.text')" />
    <ul class="slide__cards">
      <li v-for="(recipe, i) in recipes" :key="i" class="slide__card">
        <UiRecipesCard :recipe />
      </li>
    </ul>
    <UiBlueButton :text="$t('allRecipes')" />
    <UiPicture src="pomegranate-1.png" alt="pomegranates" class="slide__pic" />
    <UiPicture src="pomegranate-2.png" alt="pomegranates" class="slide__pic" />
  </div>
</template>

<script setup>
const { recipes } = useApiStore();
</script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  & > *:not(picture) {
    z-index: 1;
  }
  &__pic {
    position: absolute;
    width: 50rem;
    &:first-of-type {
      left: -5%;
      top: 10%;
    }
    &:last-of-type {
      right: -10%;
      bottom: 22%;
      transform: rotate(18.682deg);
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(36rem, 300px), 1fr));
    row-gap: 2rem;
    column-gap: 1.6rem;
  }
  &__card {
    display: flex;
  }
}
</style>
