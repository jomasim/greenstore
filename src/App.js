import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/Views/Home";
import ProductsView from "../src/Views/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={ProductsView} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
