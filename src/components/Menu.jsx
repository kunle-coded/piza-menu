import React from "react";
import Pizza from "./Pizza";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </main>
  );
}

export default Menu;
