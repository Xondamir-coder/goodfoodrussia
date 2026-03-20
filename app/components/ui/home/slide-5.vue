<template>
  <div class="slide">
    <UiHomeSlideHeader :title="$t('home.slide-5.title')" :text="$t('home.slide-5.text')" />
    <ul class="slide__cards">
      <li v-for="(card, i) in useMapRt('home.slide-5.cards')" :key="i" class="slide__card">
        <UiPicture :src="`recipes-${i + 1}.jpg`" :alt="card.title" class="slide__card-pic" />
        <div class="slide__card-content">
          <span class="slide__card-date">
            {{ card.date }}
          </span>
          <p class="slide__card-title">
            {{ card.title }}
          </p>
        </div>
        <ul class="slide__card-cats">
          <li v-for="cat in card.categories" :key="cat" class="slide__card-cat">
            {{ cat }}
          </li>
        </ul>
      </li>
    </ul>
    <UiBlueButton :text="$t('allRecipes')" />
    <UiPicture src="pomegranate-1.png" alt="pomegranates" class="slide__pic" />
    <UiPicture src="pomegranate-2.png" alt="pomegranates" class="slide__pic" />
  </div>
</template>

<script setup></script>

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
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    &-content {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    &-pic {
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
    &-date {
      font-size: 1.4rem;
      font-weight: 400;
    }
    &-title {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 135%;
    }
    &-cats {
      display: flex;
      gap: 0.9rem;
    }
    &-cat {
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
}
</style>
