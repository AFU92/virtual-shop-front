import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import "../global.css";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";
import PaymentForm from "../components/PaymentForm";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/pay" component={PaymentForm} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
