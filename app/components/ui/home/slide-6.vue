<template>
  <div class="slide">
    <UiHomeSlideHeader :title="$t('home.slide-6.title')" :text="$t('home.slide-6.title')" />
    <ul class="slide__cards">
      <li v-for="card in useMapRt('home.slide-6.cards')" :key="card.text" class="slide__card">
        <span class="slide__card-amount">{{ card.amount }}</span>
        <p class="slide__card-text">
          {{ card.text }}
        </p>
      </li>
    </ul>
    <UiPicture src="burger-ingredients.png" alt="ingredients" class="slide__pic" />
    <UiPicture src="burger-ingredients.png" alt="ingredients" class="slide__pic" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide {
  @include mix.home-slide;
  padding-bottom: 2px;
  & > *:not(picture) {
    z-index: 1;
  }
  &__pic {
    position: absolute;
    width: 68.6rem;
    &:first-of-type {
      transform: rotate(-72.072deg);
      left: -10%;
      bottom: -35%;
    }
    &:last-of-type {
      right: -9%;
      bottom: -32%;
    }
  }
  &__card {
    display: flex;
    padding: 4.8rem 3.2rem;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    &:last-child {
      grid-column: span 2;
      position: relative;
      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        black 10%,
        black 80%,
        black 100%
      );
    }
    &-amount {
      z-index: 1;
      text-align: center;
      font-family: Inter;
      font-size: 16rem;
      font-style: normal;
      font-weight: 600;
      line-height: 88%;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &-text {
      z-index: 1;
      text-align: center;
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 104%;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(48rem, 300px), 1fr));
    padding-inline: 12rem;
  }
}
</style>
