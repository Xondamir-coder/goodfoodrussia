export default class Category {
  name = '';
  country = '';
  image = '';

  constructor(raw) {
    this.name = raw.name;
    this.country = raw.country;
    this.image = raw.image;
  }
}
