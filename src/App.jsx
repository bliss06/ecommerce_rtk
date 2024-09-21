// App.js
import React from "react";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import "./App.css";
const App = () => {
  console.log("App component rendered");
  return (
    <div>
      <h1 className="app-heading">E-Commerce Application</h1>
      <ProductList />
      <ShoppingCart />
    </div>
  );
};

export default App;
