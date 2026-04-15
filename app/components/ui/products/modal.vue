<template>
  <Teleport to="body">
    <Transition name="appear">
      <div
        v-if="productID"
        ref="containerRef"
        class="modal-container"
        @click.self="emits('change', null)"
      >
        <div class="modal-container__images">
          <button v-for="item in mappedProducts" :key="item.id" @click="emits('change', item.id)">
            <UiPicture
              :src="item.image"
              :class="{ active: item.id === productID }"
              alt="banner"
              class="modal-container__image"
            />
          </button>
        </div>
        <div class="modal-wrapper">
          <Transition name="modal">
            <div :key="productID" class="modal">
              <div class="modal__top">
                <UiPicture :src="product.image" alt="card title" class="modal__top-pic" />
              </div>
              <div class="modal__middle">
                <div class="modal__middle-top">
                  <h3 class="modal__middle-title">
                    {{ product.title }}
                  </h3>
                  <span class="modal__middle-volume">
                    {{ product.volume }}
                  </span>
                </div>
                <div v-for="(items, key) in productOptions" :key="key" class="modal__middle-row">
                  <span class="modal__middle-row-label">{{ $t(key) }}</span>
                  <ul class="modal__middle-row-items">
                    <li v-for="item in items" :key="item" class="modal__middle-row-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="product.badges.length" class="modal__middle-bottom">
                  <div
                    v-for="badge in product.badges"
                    :key="badge.icon"
                    class="modal__middle-bottom-col"
                  >
                    <img :src="`/images/${badge.icon}.png`" class="modal__middle-bottom-icon" />
                    <span class="modal__middle-bottom-label">{{ badge.label }}</span>
                  </div>
                </div>
              </div>
              <div v-if="product.tabs.length" class="modal__content">
                <div class="modal__content-top" :style="`--travel: ${activeTab * 50}%`">
                  <button
                    v-for="(tab, i) in product.tabs"
                    :key="tab"
                    class="modal__content-top-button"
                    @click="activeTab = i"
                  >
                    {{ tab }}
                  </button>
                </div>
                <div v-for="spec in product.specs" :key="spec.group" class="modal__content-row">
                  <span class="modal__content-row-label">
                    {{ spec.group }}
                  </span>
                  <div v-for="item in spec.items" :key="item.label" class="modal__content-row-item">
                    <span>{{ item.label }}</span>
                    <div class="modal__content-row-dots" />
                    <span>{{ item.value }}</span>
                  </div>
                </div>
              </div>
              <div v-if="product.similar.length" class="modal__wrapper">
                <h3 class="modal__wrapper-title">
                  {{ $t('similarProducts') }}
                </h3>
                <div class="modal__slider">
                  <swiper slides-per-view="auto" :grab-cursor="true" :space-between="12">
                    <swiper-slide v-for="p in product.similar" :key="p.id" class="modal__slide">
                      <UiProductsCard
                        :product="p"
                        class="modal__bottom-card"
                        @click="emits('change', p.id)"
                      />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <button class="modal-container__close" @click="emits('change', null)" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const { products } = useApiStore();

const containerRef = ref();
const activeTab = ref(0);

const mappedProducts = products.map(p => ({
  image: p.image,
  id: p.id
}));

const product = computed(() => products.find(p => p.id === productID));
const productOptions = computed(() => {
  const opts = product.value.options;
  return Object.fromEntries(Object.entries(opts).filter(([_, items]) => items.length));
});

const { productID } = defineProps({
  productID: {
    required: false,
    type: String,
    default: null
  }
});
const emits = defineEmits(['change']);

watch(
  () => productID,
  () => {
    if (productID && containerRef.value) {
      containerRef.value.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    document.body.classList.toggle('overflow-hidden', productID);
  }
);
</script>

<style lang="scss" scoped>
.modal {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: max(1.2rem, 12px);
  font-family: vars.$font-nunito-sans;
  margin-bottom: 1.2rem;
  @media screen and (max-width: vars.$bp-md) {
    gap: 32px;
    padding: 16px;
    margin-bottom: 0;
    border-radius: 16px 16px 0 0;
    background:
      radial-gradient(
        109.11% 102.52% at 15.57% 3.03%,
        rgba(0, 123, 255, 0.6) 0%,
        rgba(0, 98, 255, 0) 100%
      ),
      rgba(0, 28, 73, 0.8);
    backdrop-filter: blur(10px);
  }

  & > *:not(.modal__top):not(.modal__wrapper) {
    @media screen and (min-width: vars.$bp-md) {
      padding: 2.4rem;
    }
  }
  &-wrapper {
    position: relative;
    width: 45%;
    @media screen and (max-width: vars.$bp-md) {
      width: 100%;
      max-width: 450px;
      height: max-content;
      max-height: 90vh;
      align-self: flex-end;
    }
    @media screen and (min-width: vars.$bp-md) {
      & > * {
        position: absolute;
        width: 100%;
      }
    }
  }
  &__wrapper {
    padding-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    @media screen and (max-width: vars.$bp-md) {
      padding-bottom: 0;
    }
    &-title {
      font-family: vars.$font-inter;
      font-size: max(2.6rem, 20px);
      font-weight: 700;
    }
  }
  &__slider {
    display: flex;
  }
  &__slide {
    width: max(27rem, 270px);
    display: flex;
  }
  &__bottom {
    display: flex;

    &-card {
      background:
        radial-gradient(
          109.11% 102.52% at 15.57% 3.03%,
          rgba(0, 123, 255, 0.6) 0%,
          rgba(0, 98, 255, 0) 100%
        ),
        rgba(0, 28, 73, 0.6) !important;
      backdrop-filter: blur(10px) !important;
      border: none !important;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 20px);
    border-radius: 3.2rem;
    background:
      radial-gradient(
        109.11% 102.52% at 15.57% 3.03%,
        rgba(0, 123, 255, 0.6) 0%,
        rgba(0, 98, 255, 0) 100%
      ),
      rgba(0, 28, 73, 0.8);
    backdrop-filter: blur(10px);
    @media screen and (max-width: vars.$bp-md) {
      border-radius: 0;
      backdrop-filter: none;
      background: transparent;
    }
    &-top {
      display: flex;
      height: max(6.4rem, 40px);
      padding: max(0.4rem, 4px);
      gap: 8px;
      border-radius: max(9.9rem, 99px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.12);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0.4rem;
        left: calc(0.4rem + var(--travel));
        width: calc(50% - 0.4rem - 4px);
        height: calc(100% - 0.4rem * 2);
        border: 1px solid #6b93cf;
        border-radius: 9.9rem;
        background:
          linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
          rgba(0, 67, 255, 0.2);
        transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      &-button {
        flex: 1;
        font-weight: 500;
        border-radius: 1.2rem;
        z-index: 1;
      }
    }
    &-row {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 12px);

      &-label {
        font-size: max(1.8rem, 14px);
        font-weight: 700;
      }
      &-dots {
        flex: 1;
        border-bottom: 2px dotted rgba(255, 255, 255, 0.3);
        margin-bottom: 0.35em; // align with text baseline
      }
      &-item {
        color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: space-between;
        gap: 8px;
      }
      &:not(:last-child) {
        padding-bottom: max(2.4rem, 16px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  &__middle {
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 17px);
    border-radius: 3.2rem;
    background:
      radial-gradient(
        109.11% 102.52% at 15.57% 3.03%,
        rgba(0, 123, 255, 0.6) 0%,
        rgba(0, 98, 255, 0) 100%
      ),
      rgba(0, 28, 73, 0.8);
    backdrop-filter: blur(10px);
    @media screen and (max-width: vars.$bp-md) {
      background: transparent;
      backdrop-filter: none;
      border-radius: 0;
    }
    &-bottom {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: space-between;
      &-col {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      &-label {
        font-size: max(1.4rem, 14px);
        font-weight: 500;
      }
      &-icon {
        fill: none;
        width: max(2.4rem, 24px);
      }
    }
    &-row {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 12px);
      &-label {
        font-weight: 600;
      }
      &-items {
        display: flex;
        gap: max(1.2rem, 12px);
      }
      &-item {
        display: flex;
        align-items: center;
        height: max(4.1rem, 41px);
        padding-inline: max(1.6rem, 16px);
        border-radius: max(9.9rem, 99px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.04);
        font-size: max(1.4rem, 14px);
        font-weight: 500;
        &:first-child {
          border: none;
          @include mix.glass-bezel(
            (
              border-color: 155 216 255
            )
          );
          background:
            linear-gradient(180deg, rgba(170, 205, 255, 0) 0%, rgba(0, 217, 255, 0.3) 100%),
            rgba(0, 67, 255, 0.2);
        }
      }
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: max(0.8rem, 8px);
    }
    &-title {
      font-size: max(2.4rem, 20px);
      font-weight: 700;
      line-height: 135%;
    }
    &-volume {
      opacity: 0.5;
    }
  }
  &__top {
    padding: 2rem;
    border-radius: 3.2rem;
    background:
      radial-gradient(
        109.11% 102.52% at 15.57% 3.03%,
        rgba(0, 123, 255, 0.6) 0%,
        rgba(0, 98, 255, 0) 100%
      ),
      rgba(0, 28, 73, 0.8);
    backdrop-filter: blur(10px);
    @media screen and (max-width: vars.$bp-md) {
      background: transparent;
      backdrop-filter: none;
      padding: 0;
    }
    &-pic {
      border-radius: max(1.2rem, 12px);
      aspect-ratio: 61/48;
      @media screen and (max-width: vars.$bp-md) {
        aspect-ratio: 32.8/24;
      }
    }
  }
  &-container {
    position: fixed;
    inset: 0;
    z-index: 15;
    background: rgba(0, 0, 0, 0.9);
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    @media screen and (max-width: vars.$bp-md) {
      padding: 0;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      padding-top: 10vh;
    }

    &__close {
      @include mix.flex-center;
      position: sticky;
      top: 0;
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 1.2rem;
      border: 1px solid #979797;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
      @media screen and (max-width: vars.$bp-md) {
        display: none;
      }
      &:hover {
        &::before {
          rotate: 45deg;
        }
        &::after {
          rotate: -45deg;
        }
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 40%;
        height: 2px;
        border-radius: 99px;
        background-color: #fff;
        transition: rotate 0.4s;
      }
      &::before {
        rotate: -135deg;
      }
      &::after {
        rotate: 135deg;
      }
    }
    &__images {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 10px);
      @media screen and (max-width: vars.$bp-md) {
        display: none;
      }
    }
    &__image {
      width: max(8rem, 60px);
      border-radius: max(1.2rem, 12px);
      aspect-ratio: 1;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.34);
        opacity: 0;
        border: 2px solid #accaff;
        transition: opacity 0.4s;
        border-radius: inherit;
      }
      &.active {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.4s;
}
.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
