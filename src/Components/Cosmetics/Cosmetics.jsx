import React from "react";
import "./Cosmetics.css";

const Cosmetics = (props) => {
  const { name, price, id } = props.cos;
  const addToCart = (id) => {
    console.log("item id", id);
  };
  return (
    <div>
      <h1>Buy this:{name} </h1>
      <h2>Price: ${price}</h2>
      <h3>Id: {id}</h3>
      <button onClick={() => addToCart(id)}>Buy this</button>
    </div>
  );
};

export default Cosmetics;
