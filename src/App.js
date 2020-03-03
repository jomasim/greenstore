import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Views/Home";
import ProductsView from "../src/Views/Products";
import ShoppingCartView from "../src/Views/ShoppingCart";
import CheckoutView from "../src/Views/CheckoutView";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={ProductsView} exact />
          <Route path="/shopping-cart" component={ShoppingCartView} exact />
          <Route path="/checkout" component={CheckoutView} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
