import React from "react";
import { addToDB, removeFromDB } from "../../Utilites/localstorage";
import "./Cosmetics.css";

const Cosmetics = (props) => {
  const { name, price, id } = props.cos;

  const addToCart = (id) => {
    addToDB(id);
  };

  const removingFromCart = (id) => {
    removeFromDB(id);
  };
  return (
    <div>
      <h1>Buy this:{name} </h1>
      <h2>Price: ${price}</h2>
      <h3>Id: {id}</h3>
      <button onClick={() => addToCart(id)}>Buy this</button>
      <button onClick={() => removingFromCart(id)}>Remove from cart</button>
    </div>
  );
};

export default Cosmetics;
