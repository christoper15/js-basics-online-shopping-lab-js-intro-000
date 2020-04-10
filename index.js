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
  var string = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  if (cart.length > 0) {
    let i = 0;
    while (i < cart.length && cart.length !== 1) {
      if (i == (cart.length - 2)) {
        string = string + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      } else {
        string = string + `, ${cart[i+1].itemName} at $${cart[i+1].itemPrice}`
      }
    i++;
    }
    string = string + '.'
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
