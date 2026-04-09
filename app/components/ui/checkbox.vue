<template>
  <label :for="attrs.id" class="checkbox">
    <input :id="attrs.id" v-model="model" type="checkbox" name="checkbox" class="checkbox__input" />
    <svg class="checkbox__icon" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.13414 0.144338C9.37659 0.356486 9.40116 0.725014 9.18901 0.967469L4.08485 6.8008C3.87348 7.04236 3.50668 7.06778 3.26402 6.85768L0.201518 4.20617C-0.0420439 3.99529 -0.0685409 3.6269 0.142335 3.38333C0.353211 3.13977 0.721606 3.11328 0.965167 3.32415L3.58896 5.59583L8.31101 0.199214C8.52315 -0.0432411 8.89168 -0.0678096 9.13414 0.144338Z"
        fill="#062969"
      />
    </svg>
  </label>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
const model = defineModel({
  type: Boolean
});
</script>

<style lang="scss" scoped>
.checkbox {
  @include mix.flex-center;
  position: relative;
  width: max(1.6rem, 16px);
  height: max(1.6rem, 16px);
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  border: 1px solid #6b708f;
  overflow: hidden;
  border-radius: max(0.4rem, 4px);
  cursor: pointer;
  transition:
    background 0.3s,
    border-color 0.3s;
  &:hover {
    background-color: #6b708f;
  }
  &:has(input:checked),
  &.active {
    background-color: #fff;
    border-color: #fff;
    .checkbox__icon {
      opacity: 1;
      scale: 1;
    }
  }
  &__input {
    appearance: none;
    display: none;
  }
  &__icon {
    scale: 0.45;
    opacity: 0;
    transition:
      opacity 0.3s,
      scale 0.3s;
    width: max(0.9333rem, 10px);
  }
}
</style>
