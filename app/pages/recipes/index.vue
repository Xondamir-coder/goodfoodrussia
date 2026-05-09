<template>
  <UiPageContainer
    v-slot="{ activePage, setActivePage }"
    :title="$t('recipes.title')"
    :types="mapRt(tm('recipes.sort'), rt)"
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
const { t, tm, rt } = useI18n();

const { recipes } = useApiStore();

useSeoMeta({
  title: t('seo.recipes.title'),
  description: t('seo.recipes.description'),
  ogImage: '/images/compressed/recipes-1.jpg',
  twitterImage: '/images/compressed/recipes-1.jpg'
});
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
    @media screen and (max-width: vars.$bp-md) {
      display: none;
    }
  }
  &-container {
    display: flex;
    flex-direction: column;
  }
  &-cards {
    padding-inline: var(--spacing-inline);
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
