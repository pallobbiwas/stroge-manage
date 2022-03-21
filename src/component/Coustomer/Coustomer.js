import React from "react";
import "./Coustomer.css";

const Coustomer = (props) => {
  const { name, gender, id } = props.coustomer;
  return (
    <div className="coustomer">
      <h2>Name: {name}</h2>
      <h4>Gender: {gender}</h4>
      <h4>Id: {id}</h4>
      <button>place to order</button>
      <button>Delete from cart</button>
    </div>
  );
};

export default Coustomer;
