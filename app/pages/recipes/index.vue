<template>
  <main class="recipes">
    <div class="recipes__header">
      <h1 class="recipes__header-title">{{ $t('recipes.title') }}</h1>
      <UiSortingBar v-model="typeID" :types="useMapRt('recipes.sort')" />
    </div>
    <div class="recipes__container">
      <ul class="recipes__cards">
        <li v-for="(recipe, i) in recipes" :key="i">
          <UiRecipesCard :recipe />
        </li>
      </ul>
      <UiPagination v-model="activePage" :total="4" />
    </div>
    <UiPicture src="recipes-banner.png" alt="banner" class="recipes__pic" />
    <UiPicture src="recipes-banner.png" alt="banner" class="recipes__pic" />
  </main>
</template>

<script setup>
const typeID = ref(0);
const { recipes } = useApiStore();

const activePage = ref(1);
</script>

<style lang="scss" scoped>
.recipes {
  display: flex;
  flex-direction: column;
  gap: 3.9rem;
  padding-inline: var(--spacing-inline);
  padding-top: 2.4rem;
  padding-bottom: 3.75rem;
  position: relative;
  &__pic {
    position: absolute;
    z-index: -1;
    &:first-of-type {
      width: 95rem;
      transform: rotate(-85.832deg);
      bottom: -3%;
      left: -30%;
    }
    &:last-of-type {
      width: 81rem;
      right: -28%;
      top: 15%;
      transform: rotate(118.894deg);
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 5.25rem;
    & > *:last-child {
      align-self: center;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(38rem, 300px), 1fr));
    row-gap: 2rem;
    column-gap: 1.6rem;
  }
  &__header {
    display: flex;
    justify-content: space-between;

    &-title {
      font-size: 2.6rem;
      font-family: vars.$font-inter;
      font-weight: 700;
    }
  }
}
</style>
