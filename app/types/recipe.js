export default class Recipe {
  id = '';
  date = '';
  title = '';
  image = '';
  /** @type {string[]} */
  categories = [];

  static fromJSON(raw) {
    return new Recipe(raw);
  }

  constructor(raw) {
    this.id = raw.id;
    this.date = raw.date;
    this.title = raw.title;
    this.image = raw.image;
    this.categories = raw.categories ?? [];
  }
}
