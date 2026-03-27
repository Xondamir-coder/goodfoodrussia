export class ProductBadge {
  icon = '';
  label = '';

  constructor(raw) {
    this.icon = raw.icon;
    this.label = raw.label;
  }
}

export class ProductSpec {
  label = '';
  value = '';

  constructor(raw) {
    this.label = raw.label;
    this.value = raw.value;
  }
}

export class ProductSpecGroup {
  group = '';
  /** @type {ProductSpec[]} */
  items = [];

  constructor(raw) {
    this.group = raw.group;
    this.items = raw.items.map(item => new ProductSpec(item));
  }
}

export class ProductOptions {
  fatContent = [];
  volumes = [];
  processingType = [];

  constructor(raw) {
    this.fatContent = raw.fatContent ?? [];
    this.volumes = raw.volumes ?? [];
    this.processingType = raw.processingType ?? [];
  }
}

export default class Product {
  id = '';
  image = '';
  title = '';
  volume = '';
  options = new ProductOptions({});
  /** @type {ProductBadge[]} */
  badges = [];
  /** @type {string[]} */
  tabs = [];
  /** @type {ProductSpecGroup[]} */
  specs = [];
  /** @type {Product[]} */
  similar = [];

  static fromJSON(raw) {
    return new Product(raw);
  }

  constructor(raw) {
    this.id = raw.id;
    this.image = raw.image;
    this.title = raw.title;
    this.volume = raw.volume ?? raw.weight;
    this.options = new ProductOptions(raw.options ?? {});
    this.badges = (raw.badges ?? []).map(b => new ProductBadge(b));
    this.tabs = raw.tabs ?? [];
    this.specs = (raw.specs ?? []).map(group => new ProductSpecGroup(group));
    this.similar = (raw.similar ?? []).map(item => new Product(item));
  }
}
