const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = 'all';
    expect(filterByCategory(products, category)).toEqual(products);
    expect(filterByCategory(products, category)).not.toBe(products);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, undefined)).toEqual(products);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, '')).toEqual(products);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const electronicsProducts = products.slice(0, 2);
    expect(filterByCategory(products, 'electronics')).toEqual(electronicsProducts);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const booksProducts = products.filter(item => item.category === 'books');
    expect(filterByCategory(products, 'books')).toEqual(booksProducts);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const homeProducts = products.filter(item => item.category === 'home');
    expect(filterByCategory(products, 'home')).toEqual(homeProducts);
  });

  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
