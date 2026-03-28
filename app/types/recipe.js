const temp = `
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
        <p>
          Нежный крем-суп с молочными сливками — лёгкое и ароматное блюдо, которое идеально подойдёт
          для обеда или лёгкого ужина. Благодаря сливкам суп приобретает мягкую текстуру и
          насыщенный вкус.
        </p>
        <h3>
          Ингредиенты
        </h3>
       
        <div class="detailed-page__card">
    <h4>
      <span>1.</span>
      <span>Подготовка овощей</span>
    </h4>
    <p class="detailed-page__card-text">
      Очистите картофель, морковь и лук. Нарежьте их небольшими кубиками.
    </p>
  </div>
  <div class="detailed-page__card">
    <h4>
      <span>2.</span>
      <span>Обжаривание</span>
    </h4>
    <p class="detailed-page__card-text">
      В кастрюле растопите сливочное масло и слегка обжарьте лук до прозрачности.
    </p>
  </div>
  <div class="detailed-page__card">
    <h4>
      <span>3.</span>
      <span>Варка</span>
    </h4>
    <p class="detailed-page__card-text">
      Добавьте картофель и морковь, залейте овощным бульоном и варите около 15 минут до мягкости
      овощей
    </p>
  </div>
  <div class="detailed-page__card">
    <h4>
      <span>4.</span>
      <span>Измельчение</span>
    </h4>
    <p class="detailed-page__card-text">
      С помощью блендера измельчите суп до кремовой консистенции.
    </p>
  </div>
  <div class="detailed-page__card">
    <h4>
      <span>5.</span>
      <span>Добавление сливок</span>
    </h4>
    <p class="detailed-page__card-text">
      Влейте сливки, перемешайте и прогрейте суп ещё 2–3 минуты.
    </p>
  </div>
  <div class="detailed-page__card">
    <h4>
      <span>6.</span>
      <span>Подача</span>
    </h4>
    <p class="detailed-page__card-text">
      Перед подачей украсьте суп свежей зеленью и подавайте с хрустящими гренками или тостами.
    </p>
  </div>
      </section>
`;

export default class Recipe {
  id = '';
  date = '';
  title = '';
  banner = '';
  template = '';
  /** @type {string[]} */
  categories = [];

  static fromJSON(raw) {
    return new Recipe(raw);
  }

  constructor(raw) {
    this.id = raw.id;
    this.date = raw.date;
    this.title = raw.title;
    this.template = raw.template ?? temp;
    this.banner = raw.banner;
    this.categories = raw.categories ?? [];
  }
}
