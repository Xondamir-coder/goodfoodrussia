const temp =
  '"\\n<section>\\n  <h3>GooFood расширяет выбор для пользователей</h3>\\n  <p>В ближайшее время в сервисе GooFood появятся новые рестораны и кафе. Это позволит пользователям выбирать из ещё большего количества блюд и открывать для себя новые вкусы.\\nКоманда GooFood активно сотрудничает с популярными заведениями города, чтобы сделать сервис ещё удобнее и разнообразнее для всех пользователей.</p>\\n<h3>Что изменится</h3>\\n<ul>\\n  <li>После обновления в приложении и на сайте GooFood пользователи смогут:</li>\\n  <li>выбирать блюда из новых ресторанов</li>\\n  <li>быстрее находить популярные заведения</li>\\n  <li>пользоваться новыми акциями и предложениями</li>\\n  <li>заказывать доставку из ещё большего количества кафе</li>\\n</ul>\\n</section>\\n<section>\\n  <h3>Когда ждать обновление</h3>\\n  <p>Новые рестораны начнут появляться в сервисе уже в ближайшие недели. Мы продолжаем расширять партнёрскую сеть, чтобы сделать GooFood ещё удобнее для всех.</p>\\n</section>\\n"';

class MediaCategory {
  id = 0;
  name = '';

  constructor(raw) {
    this.id = raw.id;
    this.name = raw.name;
  }
}

export default class Media {
  id = 0;
  banner = '';
  title = '';
  text = '';
  date = '';
  city = '';
  template = '';
  /** @type {string[]} */
  gallery = [];
  category = new MediaCategory({});

  static fromJSON(raw) {
    return new Media(raw);
  }

  constructor(raw) {
    this.id = raw.id;
    this.title = raw.title;
    this.banner = raw.banner;
    this.text = raw.text;
    this.date = raw.date;
    this.city = raw.city;
    this.template = raw.template ?? temp;
    this.gallery = raw.gallery ?? ['galaxy-1.jpg', 'galaxy-2.jpg', 'galaxy-3.jpg'];
    this.category = new MediaCategory(raw.category);
  }
}
