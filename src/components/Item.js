import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true);

  // Toggle the inCart state when the button is clicked
  function handleCartToggle() {
    setInCart(!inCart);
  }

  return (
    <li className={inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Conditional rendering of the button's text and className */}
      <button className={inCart ? "add" : ""} onClick={handleCartToggle}>
        {inCart ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
