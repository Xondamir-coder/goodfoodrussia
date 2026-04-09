<template>
  <NuxtLink :to="$localePath(`/recipes/${recipe.id}`)" class="recipes-card">
    <UiPicture :src="recipe.banner" :alt="recipe.title" class="recipes-card__pic" />
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
  flex: 1;
  display: flex;
  padding: max(2rem, 12px);
  flex-direction: column;
  align-items: flex-start;
  gap: max(2rem, 12px);
  border-radius: max(1.5rem, 12px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
  backdrop-filter: blur(50px);
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(0.8rem, 8px);
  }
  &__pic {
    align-self: stretch;
    aspect-ratio: 33/16;
    position: relative;
    border-radius: max(1.2rem, 8px);
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 24.4/18;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.32);
    }
  }
  &__date {
    font-size: max(1.4rem, 12px);
    font-weight: 400;
  }
  &__title {
    font-size: max(1.8rem, 14px);
    font-weight: 700;
    line-height: 135%;
  }
  &__cats {
    display: flex;
    gap: max(0.9rem, 9px);
  }
  &__cat {
    display: flex;
    height: max(3.2rem, 32px);
    padding-inline: max(1.6rem, 16px);
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: max(9.9rem, 99px);
    background: rgba(7, 37, 59, 0.2);
    font-size: max(1.2rem, 12px);
    font-weight: 600;
  }
}
</style>
