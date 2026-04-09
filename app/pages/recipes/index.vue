<template>
  <UiPageContainer
    v-slot="{ activePage, setActivePage }"
    :title="$t('recipes.title')"
    :types="useMapRt('recipes.sort')"
  >
    <div class="recipes-container">
      <ul class="recipes-cards">
        <li v-for="(recipe, i) in recipes" :key="i">
          <UiRecipesCard :recipe />
        </li>
      </ul>
      <UiPagination :total="4" :model-value="activePage" @update:model-value="setActivePage" />
    </div>
    <UiPicture src="recipes-banner.png" alt="banner" class="recipes-pic" />
    <UiPicture src="recipes-banner.png" alt="banner" class="recipes-pic" />
  </UiPageContainer>
</template>

<script setup>
const { recipes } = useApiStore();
</script>

<style lang="scss" scoped>
.recipes {
  &-pic {
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
  &-container {
    display: flex;
    flex-direction: column;
    gap: max(5.25rem, 20px);
    & > *:last-child {
      align-self: center;
    }
  }
  &-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(37rem, 250px), 1fr));
    row-gap: max(2rem, 12px);
    column-gap: max(1.6rem, 14px);
    li {
      display: flex;
    }
  }
}
</style>
