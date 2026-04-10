<template>
  <Teleport to="body">
    <Transition name="appear">
      <div v-if="showFiltersModal" class="filters-container" @click.self="showFiltersModal = false">
        <div class="modal">
          <div class="modal__top">
            <h2 class="modal__title">
              {{ $t('products.filters.title') }}
            </h2>
            <button class="modal__close" @click="showFiltersModal = false">
              <IconsClose class="modal__close-icon" />
            </button>
          </div>
          <UiProductsForm />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const showFiltersModal = useState('showFiltersModal', () => false);
</script>

<style lang="scss" scoped>
.modal {
  padding: 16px;
  padding-top: 24px;
  height: 91vh;
  border-radius: 16px 16px 0 0;
  background:
    radial-gradient(
      109.11% 102.52% at 15.57% 3.03%,
      rgba(0, 123, 255, 0.6) 0%,
      rgba(0, 98, 255, 0) 100%
    ),
    rgba(0, 28, 73, 0.8);
  backdrop-filter: blur(5px);
  color: #fff;
  font-family: vars.$font-nunito-sans;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__close {
    @include mix.flex-center;
    width: 24px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    margin-inline: auto;
    font-size: 20px;
    font-weight: 700;
  }
}
.filters-container {
  display: grid;
  align-items: flex-end;
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.9);
  & > * {
    grid-area: 1/1/2/2;
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
</style>
