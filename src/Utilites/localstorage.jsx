const addToDB = (id) => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  let quantity = shoppingCart[id];
  if (quantity) {
    let newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

const removeFromDB = (id) => {
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    let shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDB, removeFromDB };
