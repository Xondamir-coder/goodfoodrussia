export default class Category {
  name = '';
  country = '';
  image = '';

  static fromJSON(raw) {
    return new Category(raw);
  }

  constructor(raw) {
    this.name = raw.name;
    this.country = raw.country;
    this.image = raw.image;
  }
}
