<template>
  <UiPageContainer
    v-slot="{ sortId, activePage, setActivePage }"
    :title="$t('media.title')"
    :types="useMapRt('media.types')"
  >
    <div class="media">
      <ul v-for="(el, i) in media" :key="i" class="media__list" :class="{ hidden: i !== sortId }">
        <li v-for="item in el.arr" :key="item.id" class="media__list-item">
          <component :is="el.card" :data="item" />
        </li>
      </ul>
      <UiPagination :total="5" :model-value="activePage" @update:model-value="setActivePage" />
    </div>
  </UiPageContainer>
</template>

<script setup>
import { UiMediaEventsCard, UiMediaGalleryCard, UiMediaNewsCard } from '#components';

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
  display: flex;
  flex-direction: column;
  & > *:last-child {
    align-self: center;
    margin-top: max(5.25rem, 20px);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(250px, 37.6rem), 1fr));
    gap: max(1.2rem, 12px);
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
      @media screen and (min-width: vars.$bp-md) {
        gap: 0;

        & > *:nth-child(3n - 2) {
          & > * {
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }
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
}
</style>
