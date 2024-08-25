import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle the change in selected category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter the items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true; // Show all items if "All" is selected
    } else {
      return item.category === selectedCategory; // Show items that match the selected category
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
