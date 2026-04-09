<template>
  <Transition name="appear">
    <div v-if="showContactsModal" class="modal-container" @click.self="showContactsModal = false">
      <div :class="{ hidden: success }" class="modal">
        <h2 class="modal__title">
          {{ $t('contactsModal.title') }}
        </h2>
        <form class="modal__form" @submit.prevent="submitForm">
          <div v-for="(row, i) in rows" :key="i" class="modal__row">
            <label :for="`form-input-${i}`" class="modal__row-label">
              {{ row.label }}
            </label>
            <input
              v-model="row.val.value"
              :required="row.required"
              :type="row.type"
              class="modal__row-input"
              :placeholder="row.placeholder"
            />
          </div>
          <p class="modal__form-text">
            {{ $t('contactsModal.text') }}
          </p>
          <div :class="{ loading: isLoading }" class="modal__form-container">
            <UiBaseButton
              :text="$t('send')"
              variant="white"
              class="modal__form-button"
              :disabled="isLoading"
            />
            <UiSpinLoader />
          </div>
        </form>
        <button class="modal__close" @click="showContactsModal = false">
          <IconsClose class="modal__close-icon" />
        </button>
      </div>
      <UiSuccessModal :class="{ hidden: !success }" />
    </div>
  </Transition>
</template>

<script setup>
const showContactsModal = useState('showContactsModal', () => false);
const { t } = useI18n();

const success = ref(false);
const isLoading = ref(false);
const name = ref('');
const phone = ref('');
const telegram = ref('');

watch(phone, () => {
  phone.value = phone.value.replace(/[^0-9+ ]/g, '').replace(/(?!^)\+/g, '');
});

const submitForm = async () => {
  try {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 1000));
    success.value = true;
  } catch (error) {
    console.log(`Error submitting contacts form: ${error}`);
  } finally {
    isLoading.value = false;
    setTimeout(() => {
      showContactsModal.value = false;
      success.value = false;
      name.value = '';
      phone.value = '';
      telegram.value = '';
    }, 3000);
  }
};

const rows = [
  {
    label: t('contactsModal.name'),
    placeholder: t('contactsModal.namePlaceholder'),
    type: 'text',
    required: true,
    val: name
  },
  {
    label: t('contactsModal.phone'),
    placeholder: t('contactsModal.phonePlaceholder'),
    type: 'tel',
    required: true,
    val: phone
  },
  {
    label: t('contactsModal.telegram'),
    placeholder: t('contactsModal.telegramPlaceholder'),
    type: 'text',
    required: false,
    val: telegram
  }
];
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  padding: max(2.4rem, 16px);
  gap: max(2.4rem, 20px);
  border-radius: max(3.2rem, 16px);
  background:
    radial-gradient(
      109.11% 102.52% at 15.57% 3.03%,
      rgba(0, 123, 255, 0.6) 0%,
      rgba(0, 98, 255, 0) 100%
    ),
    rgba(0, 28, 73, 0.8);
  backdrop-filter: blur(10px);
  font-size: max(1.4rem, 14px);
  width: max(42%, 500px);
  font-family: vars.$font-nunito-sans;
  position: relative;
  transition: all 0.5s;
  &.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(30px);
  }

  @media screen and (max-width: vars.$bp-sm) {
    height: 91vh;
    align-self: flex-end;
  }
  &__close {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 24px;
    @media screen and (min-width: vars.$bp-sm) {
      display: none;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: max(2.1rem, 20px);
    @media screen and (max-width: vars.$bp-sm) {
      flex: 1;
    }
    &-button {
      @media screen and (max-width: vars.$bp-sm) {
        margin-top: auto;
      }
    }
    &-container {
      display: grid;
      &.loading > *:first-child {
        opacity: 0;
        pointer-events: none;
      }
      &.loading > *:last-child {
        opacity: 1;
      }
      & > * {
        &:last-child {
          place-self: center;
          opacity: 0;
          transition: opacity 0.4s;
        }
        grid-area: 1/1/2/2;
      }
    }
    &-text {
      opacity: 0.5;
    }
  }
  &__title {
    font-size: max(2.4rem, 20px);
    font-weight: 700;
    @media screen and (max-width: vars.$bp-sm) {
      align-self: center;
    }
  }
  &__row {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    &-label {
      font-weight: 700;
    }
    &-input {
      padding: max(1.6rem, 16px);
      border-radius: max(0.8rem, 8px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.08);
      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  &-container {
    @include mix.grid-center;
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.9);
    & > * {
      grid-area: 1/1/2/2;
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
</style>
