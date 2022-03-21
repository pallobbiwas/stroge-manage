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

//delete to cart

const delteFromCart = (id) => {
  const getCart = localStorage.getItem("cart-order");
  if (getCart) {
    const card = JSON.parse(getCart);
    if (id in card) {
      console.log("delete");
      delete card[id];
      localStorage.setItem("cart-order", JSON.stringify(card));
    }
  }
};

export { addToCart, delteFromCart };

