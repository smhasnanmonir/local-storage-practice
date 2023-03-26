const addToDB = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    let newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};

export { addToDB };
