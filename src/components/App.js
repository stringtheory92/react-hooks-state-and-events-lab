import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkLight, setDarkLight] = useState(false);
  const appClass = darkLight ? "App dark" : "App light";

  function handleDarkModeToggle(e) {
    console.log("clicked and toggling");
    setDarkLight(!darkLight);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

// App--
//   |
//   |
// ShoppingList
//  |
//  |
//  Item
