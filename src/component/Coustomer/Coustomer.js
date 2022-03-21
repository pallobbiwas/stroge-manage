import React from "react";
import { addToCart, delteFromCart } from "../../utilities/fakeDb";
import "./Coustomer.css";

const Coustomer = (props) => {
  const { name, gender, id } = props.coustomer;

  //add to cart
  const orderBtn = (id) => {
    addToCart(id);
  };
  //remove from local stroge
  const remove = (id) => {
    delteFromCart(id)
  };

  return (
    <div className="coustomer">
      <h2>Name: {name}</h2>
      <h4>Gender: {gender}</h4>
      <h4>Id: {id}</h4>
      <button onClick={() => orderBtn(id)}>place to order</button>
      <button onClick={() => remove(id)}>Delete from cart</button>
    </div>
  );
};

export default Coustomer;
