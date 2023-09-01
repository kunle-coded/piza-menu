import React from "react";

function Pizza({ pizzaObj }) {
  // console.log(props.keyP);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza-spincci" />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
