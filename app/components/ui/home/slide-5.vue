<template>
  <div class="slide">
    <UiHomeSlideHeader :title="$t('home.slide-5.title')" :text="$t('home.slide-5.text')" />
    <ul class="slide__cards">
      <li v-for="(recipe, i) in recipes" :key="i" class="slide__card">
        <UiRecipesCard :recipe />
      </li>
    </ul>
    <UiBaseButton
      class="slide__button"
      :text="$t('allRecipes')"
      variant="blue"
      @click="$router.push($localePath('/recipes'))"
    />
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
  gap: 0;
  padding-bottom: 0;
  & > *:not(picture) {
    z-index: 1;
  }
  &__button {
    animation: scale-in 0.4s 0.5s backwards;
    margin-inline: var(--spacing-inline);
    margin-block: 3.6rem;
  }
  &__pic {
    position: absolute;
    width: max(50rem, 350px);
    animation: scale-up 0.6s backwards;
    @for $i from 1 through 2 {
      &:nth-of-type(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    &:first-of-type {
      left: -5%;
      top: 10%;
      @media screen and (max-width: vars.$bp-sm) {
        left: -50%;
        top: 3%;
      }
    }
    &:last-of-type {
      right: -10%;
      bottom: 22%;
      transform: rotate(18.682deg);
      @media screen and (max-width: vars.$bp-sm) {
        bottom: 10%;
        right: -55%;
      }
    }
  }
  &__cards {
    margin-top: max(1.6rem, 16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    padding-bottom: max(1.6rem, 16px);
    padding-inline: var(--spacing-inline);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(36rem, 250px), 1fr));
    row-gap: max(2rem, 12px);
    column-gap: max(1.6rem, 10px);
  }
  &__card {
    display: flex;
    & > * {
      animation: slide-from-bottom-20 0.6s backwards;
    }
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        & > * {
          animation-delay: $i * 0.07s;
        }
      }
    }
  }
}
</style>
