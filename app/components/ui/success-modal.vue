<template>
  <div class="success-modal">
    <svg
      class="success-modal__icon"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_237_3735)">
        <path
          d="M80.0013 9.16687C80.0013 4.11011 75.8912 0 70.8345 0H9.16821C4.11145 0 0.00134277 4.11011 0.00134277 9.16687V70.8331C0.00134277 75.8899 4.11145 80 9.16821 80H70.8345C75.8912 80 80.0013 75.8899 80.0013 70.8331V9.16687Z"
          fill="white"
        />
        <path
          d="M60.2748 26.8103C61.5779 28.1134 61.5779 30.2197 60.2748 31.5234L38.6079 53.1897C37.9579 53.8397 37.1046 54.1669 36.2513 54.1669C35.3981 54.1669 34.5448 53.8397 33.8948 53.1897L23.0616 42.3566C21.7579 41.0535 21.7579 38.9465 23.0616 37.6434C24.3647 36.3397 26.4711 36.3397 27.7748 37.6434L36.2513 46.12L55.5616 26.8103C56.8647 25.5066 58.9711 25.5066 60.2748 26.8103Z"
          fill="#0795A8"
        />
      </g>
      <defs>
        <clipPath id="clip0_237_3735">
          <rect width="80" height="80" rx="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <div class="success-modal__content">
      <h2 class="success-modal__content-title">
        {{ $t('contactsModal.successTitle') }}
      </h2>
      <p class="success-modal__content-text">
        {{ $t('contactsModal.successText') }}
      </p>
    </div>
    <UiBaseButton
      :text="$t('good')"
      variant="white"
      class="success-modal__button"
      @click="showContactsModal = false"
    />
  </div>
</template>

<script setup>
const showContactsModal = useState('showContactsModal', () => false);
</script>

<style lang="scss" scoped>
.success-modal {
  display: flex;
  width: max(30%, 350px);
  padding: max(2.4rem, 24px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: max(2.4rem, 20px);
  border-radius: max(3.2rem, 16px);
  background:
    radial-gradient(
      109.11% 102.52% at 15.57% 3.03%,
      rgba(0, 123, 255, 0.6) 0%,
      rgba(0, 98, 255, 0) 100%
    ),
    #0caf60;
  backdrop-filter: blur(10px);
  font-family: vars.$font-nunito-sans;
  transition: all 0.5s;
  color: #fff;
  @media screen and (max-width: vars.$bp-sm) {
    width: 86%;
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(30px);
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: max(1.2rem, 8px);
    text-align: center;
    &-title {
      font-size: max(2.4rem, 20px);
    }
    &-text {
      font-size: max(1.4rem, 14px);
      opacity: 0.5;
    }
  }
  &__icon {
    width: max(8rem, 64px);
  }
  &__button {
    width: max(17.5rem, 175px);
  }
}
</style>
