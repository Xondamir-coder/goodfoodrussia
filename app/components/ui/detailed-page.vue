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
          <div class="detailed-page__gallery-top-arrows">
            <UiIconButton id="btn-prev">
              <IconsArrowLeftIos />
            </UiIconButton>
            <UiIconButton id="btn-next">
              <IconsArrowRightIos />
            </UiIconButton>
          </div>
        </div>
        <div class="detailed-page__gallery-slider">
          <swiper
            :modules="[Navigation]"
            :grab-cursor="true"
            slides-per-view="auto"
            :space-between="12"
            :navigation="{
              nextEl: '#btn-next',
              prevEl: '#btn-prev'
            }"
          >
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
import { Navigation } from 'swiper/modules';
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
  padding-top: max(1.2rem, 12px);
  display: grid;
  grid-template-columns: 2.5375fr 1fr;
  gap: max(2rem, 20px);
  padding-bottom: max(1.6rem, 16px);
  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: 1fr;
  }
  h3 {
    font-size: max(2.4rem, 16px);
    font-weight: 700;
  }
  p {
    line-height: 155%;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
  }
  &__header {
    display: flex;
    gap: max(2rem, 16px);
    align-items: center;
    @media screen and (max-width: vars.$bp-sm) {
      align-items: flex-start;
      flex-direction: column;
    }
    &-title {
      font-size: max(2.8rem, 20px);
      font-weight: 700;
    }
  }
  &__gallery {
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-arrows {
        display: flex;
        gap: max(8px, 0.8rem);
      }
    }
    &-slide {
      width: max(30.4rem, 250px);
    }
  }
  &__card {
    display: flex;
    padding: max(2rem, 12px);
    flex-direction: column;
    gap: max(0.8rem, 8px);
    align-self: stretch;
    border-radius: max(1.5rem, 12px);
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    &:last-child > .recipe__row-ingr-title span:first-child {
      display: none;
    }
    &-title {
      font-size: max(1.6rem, 16px);
      font-weight: 700;
      display: flex;
      gap: 7px;
    }
    &-text {
      font-size: max(1.4rem, 14px);
    }
  }
  &__labels {
    display: flex;
    gap: max(1.2rem, 8px);
    @media screen and (max-width: vars.$bp-md) {
      order: 3;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
      & > * {
        scroll-snap-align: start;
        text-wrap: nowrap;
      }
    }
    &-item {
      @include mix.glass-bezel(
        (
          angle: 165deg,
          border-color: 175 195 216
        )
      );
      display: flex;
      padding: max(1.2rem, 12px);
      align-items: center;
      gap: 1rem;
      border-radius: max(9.9rem, 99px);
      background: rgba(7, 37, 59, 0.2);
      font-family: vars.$font-nunito-sans;
      font-weight: 500;
      font-size: max(1.2rem, 12px);

      &-icon {
        width: max(2rem, 20px);
        fill: none;
      }
    }
  }
  &__banner {
    aspect-ratio: 81.2/42.7;
    border-radius: max(1.6rem, 16px);
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 26.8/18;
    }
  }
  &__container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 20px);
  }
  &__template {
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 20px);
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
