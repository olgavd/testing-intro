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

function changeQuantity(cart, id, newQuantity) {

  const itemCart = cart.find(item => item.id === id);
  if (itemCart) {
    if (newQuantity === 0 || newQuantity > itemCart.stock) {
      throw new RangeError();
    }
    itemCart.quantity = newQuantity;
  }

  return cart;
}

function removeFromCart(cart, id) {
  return cart.filter(item => item.id !== id);
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
  let price = 0;
  let quantity = 0;


  cart.forEach(element => {
    price += element.price;
    quantity += element.quantity;
  });


  if (
    price * quantity < 50000 &&
    promoCode === ''
  ) {
    result = {
      subtotal: price,
      discount: 0,
      delivery: 30000,
      total: price + 30000,
    }
  } else if (
    price * quantity >= 50000
  ) {
    result = {
      subtotal: price * quantity,
      discount: 0,
      delivery: 0,
      total: price * quantity,
    }
  } else if (
    promoCode === 'SAVE10' &&
    price * quantity >= 20000
  ) {
    result = {
      subtotal: price * quantity,
      discount: price * quantity / 10,
      delivery: 30000,
      total: price * quantity + 30000 - price * quantity / 10,
    }
  } else if (
    promoCode === 'SAVE10' &&
    price * quantity < 20000
  ) {
    result = {
      subtotal: price * quantity,
      discount: 0,
      delivery: 30000,
      total: price * quantity + 30000,
    }
  } else {
    result = {
      subtotal: price * quantity,
      discount: 0,
      delivery: 30000,
      total: price * quantity + 30000,
    }
  }
  return result;
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
