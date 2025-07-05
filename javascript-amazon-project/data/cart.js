export let cart = [];

export function addTOCart(productId) {
  let matchingElement;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingElement = cartItem;
    }
  });

  if (matchingElement) {
    matchingElement.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}