var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemConstructor = {};
  itemConstructor['itemName'] = item;
  itemConstructor['itemPrice'] = Math.floor(Math.random()*101)+1;
  cart.push(itemConstructor);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  var string = `In your cart, you have ${cart.itemName[0]} at $${cart.itemPrice[0]}`
  if (cart.length > 0) {
    let i = 0;
    while (i < cart.length) {
    i++;
    }
    return string;
  } else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
