import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCatagory] = useState("All");

  function handleFilterMenuChange(e) {
    setSelectedCatagory(e.target.value);
  }
  console.log("selectedCategory: ", selectedCategory);

  let filteredItems = items;
  if (selectedCategory !== "All") {
    filteredItems = items.filter((item) => item.category === selectedCategory);
  }
  console.log("filteredItems: ", filteredItems);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterMenuChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
