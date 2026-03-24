<template>
  <NuxtLink :to="$localePath(`/recipes/${recipe.id}`)" class="recipes-card">
    <UiPicture :src="recipe.image" :alt="recipe.title" class="recipes-card__pic" />
    <div class="recipes-card__content">
      <span class="recipes-card__date">
        {{ recipe.date }}
      </span>
      <p class="recipes-card__title">
        {{ recipe.title }}
      </p>
    </div>
    <ul class="recipes-card__cats">
      <li v-for="cat in recipe.categories" :key="cat" class="recipes-card__cat">
        {{ cat }}
      </li>
    </ul>
  </NuxtLink>
</template>

<script setup>
import Recipe from '~/types/recipe';

defineProps({
  recipe: {
    required: true,
    type: Recipe
  }
});
</script>

<style lang="scss" scoped>
.recipes-card {
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  &__pic {
    aspect-ratio: 33/16;
    position: relative;
    border-radius: 1.2rem;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.32);
    }
  }
  &__date {
    font-size: 1.4rem;
    font-weight: 400;
  }
  &__title {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 135%;
  }
  &__cats {
    display: flex;
    gap: 0.9rem;
  }
  &__cat {
    display: flex;
    height: 3.2rem;
    padding-inline: 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 9.9rem;
    background: rgba(7, 37, 59, 0.2);
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
