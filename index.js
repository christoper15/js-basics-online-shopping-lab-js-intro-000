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
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var string = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    let i = 1;
    while (i < cart.length && cart.length !== 1) {
      if (i == cart.length - 1) {
        string = string + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      } else {
        string = string + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    i++;
    }
    string = string + '.'
    return string;
  }
}

function total() {
  var total = 0;
  let i = 0;
  while (i < cart.length) {
    total = total + cart[i].itemPrice
    i++;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
