<template>
  <main class="media">
    <div class="media__header">
      <h1 class="media__header-title">
        {{ $t('media.title') }}
      </h1>
      <UiSortingBar v-model="activePage" :types="useMapRt('media.types')" />
    </div>
    <div class="media__container">
      <ul
        v-for="(el, i) in media"
        :key="i"
        class="media__list"
        :class="{ hidden: i !== activePage }"
      >
        <li v-for="item in el.arr" :key="item.id" class="media__list-item">
          <component :is="el.card" :data="item" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { UiMediaEventsCard, UiMediaGalleryCard, UiMediaNewsCard } from '#components';

const cookie = useCookie('media_page_id', {
  maxAge: 60 * 60 * 24 * 7
});

const activePage = ref(+cookie.value || 0);

watch(activePage, () => {
  cookie.value = activePage.value;
});

const { mediaNews, mediaEvents, mediaGallery } = useApiStore();

const media = [
  {
    arr: mediaNews,
    card: UiMediaNewsCard
  },
  {
    arr: mediaEvents,
    card: UiMediaEventsCard
  },
  {
    arr: mediaGallery,
    card: UiMediaGalleryCard
  }
];
</script>

<style lang="scss" scoped>
.media {
  padding-block: 2.4rem;
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: 3.9rem;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(300px, 37.6rem), 1fr));
    gap: 1.2rem;
    transition:
      opacity 0.5s,
      translate 0.5s;
    &.hidden {
      height: 0;
      opacity: 0;
      pointer-events: none;
      translate: 0 25px;
    }
    &:nth-child(2) {
      gap: 0;
      & > *:nth-child(3n - 2) {
        & > * {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }
    &-item {
      display: flex;
      & > * {
        flex: 1;
      }
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
