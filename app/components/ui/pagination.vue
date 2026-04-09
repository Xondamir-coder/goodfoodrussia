<template>
  <div class="pagination">
    <UiIconButton @click="changePage('prev')">
      <IconsArrowLeftIos />
    </UiIconButton>
    <div class="pagination__container">
      <template v-for="(item, i) in visiblePages" :key="`${item}-${i}`">
        <button
          v-if="item === '…' && !isMobile"
          type="button"
          class="pagination__ellipsis pagination__ellipsis--button"
          @click="expandPagination"
        >
          …
        </button>

        <span v-else-if="item === '…'" class="pagination__ellipsis"> … </span>

        <button
          v-else
          type="button"
          class="pagination__number"
          :class="{ active: item === model }"
          @click="handlePageClick(item)"
        >
          <span>{{ item }}</span>
        </button>
      </template>
    </div>
    <UiIconButton @click="changePage('next')">
      <IconsArrowRightIos />
    </UiIconButton>
  </div>
</template>
<script setup>
const model = defineModel({ type: Number });

const { total } = defineProps({
  total: {
    type: Number,
    required: true
  }
});

const isMobile = ref(false);
const expanded = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handlePageClick = page => {
  if (typeof page !== 'number') return;
  model.value = page;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});

// reset only when total changes or viewport mode changes
watch(
  () => total,
  () => {
    expanded.value = false;

    if (model.value > total) {
      model.value = total;
    }
  }
);

watch(isMobile, () => {
  expanded.value = false;
});

const getMobilePages = (current, total) => {
  if (total <= 4) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 2) {
    return [1, 2, '…', total];
  }

  if (current >= total - 1) {
    return [1, '…', total - 1, total];
  }

  return [1, '…', current, total];
};

const visiblePages = computed(() => {
  const current = model.value;

  // desktop
  if (!isMobile.value) {
    if (total <= 4) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (expanded.value) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    return [1, 2, 3, 4, '…', total];
  }

  // mobile
  return getMobilePages(current, total);
});

const expandPagination = () => {
  expanded.value = true;
};

const changePage = dir => {
  let nextPage = model.value;

  if (dir === 'prev' && model.value > 1) {
    nextPage = model.value - 1;
  }

  if (dir === 'next' && model.value < total) {
    nextPage = model.value + 1;
  }

  model.value = nextPage;

  if (!isMobile.value && !expanded.value && nextPage > 4) {
    expanded.value = true;
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 12px;

  &__container {
    padding-inline: 2px;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.12);
  }

  &__ellipsis,
  &__number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-family: vars.$font-nunito-sans;
    font-weight: 500;
    border-radius: 6px;
  }

  &__ellipsis {
    color: rgba(255, 255, 255, 0.4);
    pointer-events: none;

    &--button {
      pointer-events: auto;
      cursor: pointer;
      transition:
        background 0.3s,
        color 0.3s;

      &:hover {
        background: rgba(#007bff, 0.2);
        color: #fff;
      }
    }
  }

  &__number {
    color: var(--White, #fff);
    position: relative;
    z-index: 1;
    transition: background 0.3s;

    &:hover {
      background: rgba(#007bff, 0.5);
    }

    span {
      position: relative;
      z-index: 1;
    }

    &.active {
      background: #007bff;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -2px;
      top: 50%;
      translate: 100% -50%;
      width: 1px;
      height: 40%;
      background: rgba(255, 255, 255, 0.12);
      pointer-events: none;
    }
  }
}
</style>
