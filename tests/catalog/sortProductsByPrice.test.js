const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sortProduct = 'asc';
    expect(sortProductsByPrice(products, sortProduct))
      .toEqual(products.sort((first, second) => (first.price - second.price)));
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products))
      .toEqual(products.sort((first, second) => (first.price - second.price)));
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const sortProducts = 'asc';
    const targetIds = [1, 3, 4];
    const partProducts = products.filter(product => targetIds.includes(product.id));
    expect(sortProductsByPrice(partProducts, sortProducts))
      .toEqual(partProducts.sort((first, second) => (first.price - second.price)));
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sortProducts = 'desc';
    expect(sortProductsByPrice(products, sortProducts))
      .toEqual(products.sort((first, second) => (first.price - second.price) * -1));
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const sortProducts = 'desc';
    const targetIds = [3, 1, 4];
    const partProducts = products.filter(product => targetIds.includes(product.id));
    expect(sortProductsByPrice(partProducts, sortProducts))
      .toEqual(partProducts.sort((first, second) => (first.price - second.price) * -1));
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const sortProducts = 'desc';
    const targetIds = [5, 2, 6];
    const partProducts = products.filter(product => targetIds.includes(product.id));
    expect(sortProductsByPrice(partProducts, sortProducts))
      .toEqual(partProducts.sort((first, second) => (first.price - second.price) * -1));
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const sortProducts = 'asc';
    const targetIds = [1, 3, 4];
    const partProducts = products.filter(product => targetIds.includes(product.id));
    expect(sortProductsByPrice(partProducts, sortProducts))
      .toEqual([...partProducts].sort((first, second) => (first.price - second.price)));
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const sortProducts = 'desc';
    const targetIds = [1, 3, 4];
    const partProducts = products.filter(product => targetIds.includes(product.id));
    expect(sortProductsByPrice(partProducts, sortProducts))
      .toEqual([...partProducts].sort((first, second) => (first.price - second.price) * -1));
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    expect(sortProductsByPrice(products))
      .toEqual([...products].sort((first, second) => (first.price - second.price)));
  });
});
