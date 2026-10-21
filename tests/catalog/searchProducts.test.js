const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const query = 'Наушники';
    expect(searchProducts(products, query)).toEqual([products[0]]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const query = 'Чистый код';
    expect(searchProducts(products, query)).toEqual([products[5]]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const query = 'Настольная лампа';
    expect(searchProducts(products, query)).toEqual([products[3]]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const query = 'javascript';
    expect(searchProducts(products, query)).toEqual([products[2]]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const query = 'ЧЕХОЛ';
    expect(searchProducts(products, query)).toEqual([products[4]]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const query = 'наушники';
    expect(searchProducts(products, query)).toEqual([products[0]]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '';
    expect(searchProducts(products, query)).toEqual(products);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '     ';
    expect(searchProducts(products, query)).toEqual(products);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '\t\n';
    expect(searchProducts(products, query)).toEqual(products);
  });
});
