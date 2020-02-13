import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import "../global.css";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={ShoppingCart} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
