var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemConstructor = { itemName : 'itemName' , price : 'itemPrice' }
  itemConstructor[itemName] = item;
  itemConstructor[price] = Math.floor(Math.random()*101)+;

  return itemConstructor;
}

function viewCart() {
  // write your code here
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
