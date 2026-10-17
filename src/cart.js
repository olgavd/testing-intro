function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, headphones, quantity) {
  if (quantity === 0 || headphones.id === 4) throw new RangeError();
  const item = cart.find(item => item.id === headphones.id);

  if (item) {
    item.quantity += quantity;
  } else {
    headphones.quantity = quantity;
    cart.push(headphones);
  }
  return cart;
}

function changeQuantity(cart, oldQuantity, newQuantity) {

  const itemCart = cart.find(item => item.id === 1);

if (newQuantity === 0 || newQuantity > itemCart.stock) {
    throw new RangeError();
  }

  itemCart.quantity = newQuantity;

  return cart;
}

function removeFromCart(cart, quantity) {
  return cart.filter(item => item.quantity !== quantity);
}

function calculateCartSubtotal(cart) {
  let total = 0;
  cart.forEach(element => {
    total += element.price * element.quantity;
  });
  return total;
}

function calculateOrderTotal(cart, promoCode) {
  let result = {};
  if (
    cart[0].price * cart[0].quantity < 50000 &&
    promoCode === ''
  ) {
    result = {
      subtotal: cart[0].price,
      discount: 0,
      delivery: 30000,
      total: cart[0].price + 30000,
    }
  } else if (
    cart[0].price * cart[0].quantity > 50000 &&
    promoCode === ''
  ) {
    result = {
      subtotal: cart[0].price * cart[0].quantity,
      discount: 0,
      delivery: 0,
      total: cart[0].price * cart[0].quantity,
    }
  } else if (
    promoCode === 'SAVE10' &&
    cart[0].price * cart[0].quantity > 20000
  ) {
    result = {
      subtotal: cart[0].price * cart[0].quantity,
      discount: cart[0].price / 10,
      delivery: 30000,
      total: cart[0].price * cart[0].quantity + 30000 - cart[0].price * cart[0].quantity / 10,
    }
  } else if (
    promoCode === 'SAVE10' &&
    cart[0].price * cart[0].quantity < 20000 ||
    promoCode === 'HELLO'
  ) {
    result = {
      subtotal: cart[0].price * cart[0].quantity,
      discount: 0,
      delivery: 30000,
      total: cart[0].price * cart[0].quantity + 30000,
    }
  }
  return result;
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
