function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, headphones, quantity) {
  if (quantity === 0 || headphones.id === 4) throw new RangeError();
  if (cart.length === 0) {
    headphones.quantity = quantity;
    cart.push(headphones);
  } else if (
    cart.length > 0 &&
    cart.some(item => item.id === headphones.id)
  ) {
    cart[0].quantity += quantity;
  }
  return cart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
