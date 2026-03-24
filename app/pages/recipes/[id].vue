<template>
  <main class="recipe">
    <div class="recipe__container">
      <div class="recipe__header">
        <div class="recipe__top">
          <button class="recipe__back" @click="$router.back()">
            <IconsArrowLeftIos class="recipe__back-icon" />
          </button>
          <h1 class="recipe__title">
            {{ recipe.title }}
          </h1>
        </div>
        <ul class="recipe__labels">
          <li v-for="label in labels" :key="label.text" class="recipe__label">
            <component :is="label.icons" class="recipe__label-icon" />
            <span class="recipe__label-text">{{ label.text }}</span>
          </li>
        </ul>
        <UiPicture :src="recipe.image" alt="banner" class="recipe__banner" />
      </div>
      <div class="recipe__row">
        <h3 class="recipe__row-label">
          {{ $t('recipe.desc') }}
        </h3>
        <p>
          Нежный крем-суп с молочными сливками — лёгкое и ароматное блюдо, которое идеально подойдёт
          для обеда или лёгкого ужина. Благодаря сливкам суп приобретает мягкую текстуру и
          насыщенный вкус.
        </p>
        <h3 class="recipe__row-label">
          {{ $t('recipe.ingr') }}
        </h3>
        <p>
          2 картофелины <br />
          1 морковь <br />
          1 луковица <br />
          200 мл молочных сливок (20%) <br />
          500 мл овощного бульона <br />
          1 столовая ложка сливочного масла <br />
          соль и перец по вкусу <br />
          свежая зелень для подачи
        </p>
      </div>
      <div class="recipe__row">
        <h3 class="recipe__row-label">
          {{ $t('recipe.method') }}
        </h3>
        <p>
          Нежный крем-суп с молочными сливками — лёгкое и ароматное блюдо, которое идеально подойдёт
          для обеда или лёгкого ужина. Благодаря сливкам суп приобретает мягкую текстуру и
          насыщенный вкус.
        </p>
        <h3 class="recipe__row-label">
          {{ $t('recipe.ingr') }}
        </h3>
        <div v-for="(ingr, i) in ingredients" :key="ingr.title" class="recipe__row-ingr">
          <h4 class="recipe__row-ingr-title">
            <span>{{ i + 1 }}.</span>
            <span>{{ ingr.title }}</span>
          </h4>
          <p class="recipe__row-ingr-text">
            {{ ingr.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="recipe__right">
      <h2 class="recipe__right-title">
        {{ $t('recipe.share') }}
      </h2>
      <p class="recipe__right-text">
        {{ $t('recipe.shareText') }}
      </p>
      <div class="recipe__right-bottom">
        <button class="recipe__right-share">
          <IconsShare class="recipe__right-share-icon" />
        </button>
        <button class="recipe__right-button">
          <span>{{ $t('share') }}</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { IconsCalendar, IconsClock, IconsList } from '#components';

const { recipes } = useApiStore();

const route = useRoute();

const ingredients = [
  {
    title: 'Подготовка овощей',
    text: 'Очистите картофель, морковь и лук. Нарежьте их небольшими кубиками.'
  },
  {
    title: 'Обжаривание',
    text: 'В кастрюле растопите сливочное масло и слегка обжарьте лук до прозрачности.'
  },
  {
    title: 'Варка',
    text: 'Добавьте картофель и морковь, залейте овощным бульоном и варите около 15 минут до мягкости овощей'
  },
  {
    title: 'Измельчение',
    text: 'С помощью блендера измельчите суп до кремовой консистенции.'
  },
  {
    title: 'Добавление сливок',
    text: 'Влейте сливки, перемешайте и прогрейте суп ещё 2–3 минуты.'
  },
  {
    title: 'Подача',
    text: 'Перед подачей украсьте суп свежей зеленью и подавайте с хрустящими гренками или тостами.'
  }
];
const labels = [
  {
    icons: IconsCalendar,
    text: '12 марта 2025'
  },
  {
    icons: IconsList,
    text: 'Категории: Супы • Завтраки'
  },
  {
    icons: IconsClock,
    text: 'Время приготовления: 25 минут'
  }
];

const recipe = recipes.find(p => p.id === route.params.id);
</script>

<style lang="scss" scoped>
p {
  line-height: 135%;
}
.recipe {
  display: grid;
  grid-template-columns: 2.5375fr 1fr;
  gap: 2rem;
  padding-inline: var(--spacing-inline);
  padding-top: 1.6rem;
  padding-bottom: 11.4rem;
  &__row {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    &-ingr {
      display: flex;
      padding: 2rem;
      flex-direction: column;
      gap: 0.8rem;
      align-self: stretch;
      border-radius: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: linear-gradient(
        180deg,
        rgba(211, 135, 255, 0) 0%,
        rgba(211, 135, 255, 0.05) 100%
      );
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
    &-label {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
  &__title {
    font-size: 2.8rem;
    font-weight: 700;
  }
  &__header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  &__top {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  &__banner {
    border-radius: 1.6rem;
    aspect-ratio: 81.2/39;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.32);
    }
  }
  &__labels {
    display: flex;
    gap: 1.2rem;
  }
  &__label {
    display: flex;
    padding: 1.2rem;
    align-items: center;
    gap: 1rem;
    border-radius: 9.9rem;
    background: rgba(7, 37, 59, 0.2);
    &-icon {
      width: 2rem;
      fill: none;
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-self: flex-start;
    padding: 2.4rem;
    border-radius: 3.2rem;
    border: 1px solid #293d62;
    background:
      radial-gradient(
        109.11% 102.52% at 15.57% 3.03%,
        rgba(0, 123, 255, 0.6) 0%,
        rgba(0, 98, 255, 0) 100%
      ),
      rgba(0, 28, 73, 0.8);
    backdrop-filter: blur(10px);
    &-bottom {
      margin-top: 2.4rem - 1.2rem;
      display: flex;
      gap: 1.6rem;
    }
    &-title {
      font-size: 2.4rem;
      font-weight: 700;
    }
    &-text {
      font-size: 1.4rem;
      line-height: 135%;
    }
    &-share {
      @include mix.flex-center;
      width: 5rem;
      height: 5rem;
      border-radius: 0.8rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
      &-icon {
        width: 48%;
      }
    }
    &-button {
      padding: 1.6rem 2.4rem;
      flex: 1;
      border-radius: 0.8rem;
      background: #fff;
      color: var(--Main-Green-950, #001a0d);
      font-size: 1.4rem;
      font-weight: 700;
      font-family: vars.$font-nunito-sans;
    }
  }
  &__back {
    @include mix.flex-center;
    border-radius: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    width: 4.2rem;
    height: 4.2rem;

    &-icon {
      width: 1.0741rem;
    }
  }
}
</style>
