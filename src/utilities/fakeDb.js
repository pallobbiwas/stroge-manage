// add product to card
const addToCart = (id) => {
  let shoppingCart = {};

  //get cart

  const getCart = localStorage.getItem("cart-order");
  if (getCart) {
    shoppingCart = JSON.parse(getCart);
  }
  //add count
  const count = shoppingCart[id];
  if (count) {
    const newCount = +count + 1;
    shoppingCart[id] = newCount;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("cart-order", JSON.stringify(shoppingCart));
};

export { addToCart };

