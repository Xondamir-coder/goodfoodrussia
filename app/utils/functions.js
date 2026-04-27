const translate = (val, rt) => {
  if (val == null || typeof val !== 'object') return val;
  if ('loc' in val) return rt(val);
  if (Array.isArray(val)) return val.map(item => translate(item, rt));

  return Object.fromEntries(Object.entries(val).map(([key, value]) => [key, translate(value, rt)]));
};

export const mapRt = (arr, rt) => {
  if (!Object.keys(arr).length || !rt) {
    console.error('arr or rt not found');
    return;
  }

  return arr.map(item => translate(item, rt));
};
