<!-- eslint-disable vue/no-v-html -->
<template>
  <main class="detailed-page">
    <div class="detailed-page__container">
      <div class="detailed-page__top">
        <div class="detailed-page__header">
          <UiIconButton @click="$router.back()">
            <IconsArrowLeftIos />
          </UiIconButton>
          <h1 class="detailed-page__header-title">{{ data.title }}</h1>
        </div>
        <ul class="detailed-page__labels">
          <li v-for="label in labels" :key="label.label" class="detailed-page__labels-item">
            <component :is="label.icon" class="detailed-page__labels-item-icon" />
            <span>{{ label.label }}</span>
          </li>
        </ul>
        <UiPicture :src="data.banner" alt="banner" class="detailed-page__banner" />
      </div>
      <div class="detailed-page__template" v-html="data.template"></div>
      <section v-if="data.gallery" class="detailed-page__gallery">
        <div class="detailed-page__gallery-top">
          <h3>{{ $t('mediaIndex.photoGallery') }}</h3>
        </div>
        <div class="detailed-page__gallery-slider">
          <swiper :grab-cursor="true" slides-per-view="auto" :space-between="12">
            <swiper-slide
              v-for="image in data.gallery"
              :key="image"
              class="detailed-page__gallery-slide"
            >
              <UiPicture :src="image" :alt="image" class="detailed-page__gallery-slide-image" />
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </div>
    <UiShareCard :title="$t('mediaIndex.shareTitle')" :text="$t('mediaIndex.shareText')" />
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const { data } = defineProps({
  data: {
    type: Object,
    required: true
  },
  labels: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss">
.detailed-page {
  padding-inline: var(--spacing-inline);
  padding-block: 2.4rem;
  display: grid;
  grid-template-columns: 2.5375fr 1fr;
  gap: 2rem;
  h3 {
    font-size: 2.4rem;
    font-weight: 700;
  }
  p {
    line-height: 135%;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  &__header {
    display: flex;
    gap: 2rem;
    align-items: center;
    &-title {
      font-size: 2.8rem;
      font-weight: 700;
    }
  }
  &__gallery {
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-slide {
      width: max(30.4rem, 250px);
    }
  }
  &__card {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    gap: 0.8rem;
    align-self: stretch;
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    &:last-child > .recipe__row-ingr-title span:first-child {
      display: none;
    }
    &-title {
      font-size: 1.6rem;
      font-weight: 700;
      display: flex;
      gap: 7px;
    }
    &-text {
      font-size: 1.4rem;
    }
  }
  &__labels {
    display: flex;
    gap: 1.2rem;
    &-item {
      display: flex;
      padding: 1.2rem;
      align-items: center;
      gap: 1rem;
      border-radius: 9.9rem;
      background: rgba(7, 37, 59, 0.2);
      font-family: vars.$font-nunito-sans;
      font-weight: 500;
      font-size: 1.2rem;

      &-icon {
        width: 2rem;
        fill: none;
      }
    }
  }
  &__banner {
    aspect-ratio: 81.2/42.7;
    border-radius: 1.6rem;
  }
  &__container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  &__template {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    li {
      line-height: 135%;
      display: flex;
      align-items: center;
      gap: 12px;
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>
