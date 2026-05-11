import { defineStore } from 'pinia';

import productsData from '~/assets/data/products.json';
import recipesData from '~/assets/data/recipes.json';
import categoriesData from '~/assets/data/categories.json';
import mediaNewsData from '~/assets/data/media/news.json';
import mediaEventsData from '~/assets/data/media/events.json';
import mediaGalleryData from '~/assets/data/media/gallery.json';

// ---------------------------------------------------------------------------
// Default fallback templates (used when JSON entry has no `template` field)
// ---------------------------------------------------------------------------

const DEFAULT_RECIPE_TEMPLATE = `
<section>
        <h3>
          Описание
        </h3>
        <p>
          Нежный крем-суп с молочными сливками — лёгкое и ароматное блюдо, которое идеально подойдёт
          для обеда или лёгкого ужина. Благодаря сливкам суп приобретает мягкую текстуру и
          насыщенный вкус.
        </p>
        <h3>
          Ингредиенты
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
      </section>
      <section>
        <h3>
          Способ приготовления
        </h3>
        <div class="detailed-page__card">
    <h4><span>1.</span><span>Подготовка овощей</span></h4>
    <p class="detailed-page__card-text">Очистите картофель, морковь и лук. Нарежьте их небольшими кубиками.</p>
  </div>
  <div class="detailed-page__card">
    <h4><span>2.</span><span>Обжаривание</span></h4>
    <p class="detailed-page__card-text">В кастрюле растопите сливочное масло и слегка обжарьте лук до прозрачности.</p>
  </div>
  <div class="detailed-page__card">
    <h4><span>3.</span><span>Варка</span></h4>
    <p class="detailed-page__card-text">Добавьте картофель и морковь, залейте овощным бульоном и варите около 15 минут до мягкости овощей.</p>
  </div>
  <div class="detailed-page__card">
    <h4><span>4.</span><span>Измельчение</span></h4>
    <p class="detailed-page__card-text">С помощью блендера измельчите суп до кремовой консистенции.</p>
  </div>
  <div class="detailed-page__card">
    <h4><span>5.</span><span>Добавление сливок</span></h4>
    <p class="detailed-page__card-text">Влейте сливки, перемешайте и прогрейте суп ещё 2–3 минуты.</p>
  </div>
  <div class="detailed-page__card">
    <h4><span>6.</span><span>Подача</span></h4>
    <p class="detailed-page__card-text">Перед подачей украсьте суп свежей зеленью и подавайте с хрустящими гренками или тостами.</p>
  </div>
      </section>
`;

const DEFAULT_MEDIA_TEMPLATE = `
  <section>
  <h3>GooFood расширяет выбор для пользователей</h3>
  <p>В ближайшее время в сервисе GooFood появятся новые рестораны и кафе. Это позволит пользователям выбирать из ещё большего количества блюд и открывать для себя новые вкусы.
Команда GooFood активно сотрудничает с популярными заведениями города, чтобы сделать сервис ещё удобнее и разнообразнее для всех пользователей.</p>
<h3>Что изменится</h3>
<ul class="detailed-page__bullets">
  <li>После обновления в приложении и на сайте GooFood пользователи смогут:</li>
  <li>выбирать блюда из новых ресторанов</li>
  <li>быстрее находить популярные заведения</li>
  <li>пользоваться новыми акциями и предложениями</li>
  <li>заказывать доставку из ещё большего количества кафе</li>
</ul>
</section>
<section>
  <h3>Когда ждать обновление</h3>
  <p>Новые рестораны начнут появляться в сервисе уже в ближайшие недели. Мы продолжаем расширять партнёрскую сеть, чтобы сделать GooFood ещё удобнее для всех.</p>
</section>
`;

const DEFAULT_GALLERY = ['galaxy-1.jpg', 'galaxy-2.jpg', 'galaxy-3.jpg'];

// ---------------------------------------------------------------------------
// Normalizers — apply defaults so components never have to null-check arrays
// ---------------------------------------------------------------------------

const normalizeOptions = (opts = {}) => ({
  fatContent: [],
  volumes_ru: [],
  volumes_uz: [],
  processingType_ru: [],
  processingType_uz: [],
  ...opts
});

const normalizeProduct = p => {
  const { similar, options, ...rest } = p;
  return {
    badges: [],
    tabs_ru: [],
    tabs_uz: [],
    specs: [],
    ...rest,
    options: normalizeOptions(options),
    similar: (similar ?? []).map(normalizeProduct)
  };
};

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useApiStore = defineStore('api', () => {
  const products = productsData.map(normalizeProduct);

  const recipes = recipesData.map(r => ({
    ...r,
    template: r.template ?? DEFAULT_RECIPE_TEMPLATE
  }));

  const categories = categoriesData;

  const normalizeMedia = m => ({
    ...m,
    template: m.template ?? DEFAULT_MEDIA_TEMPLATE,
    gallery: m.gallery ?? DEFAULT_GALLERY
  });

  const mediaNews = mediaNewsData.map(normalizeMedia);
  const mediaEvents = mediaEventsData.map(normalizeMedia);
  const mediaGallery = mediaGalleryData.map(normalizeMedia);

  return { products, recipes, categories, mediaNews, mediaEvents, mediaGallery };
});
