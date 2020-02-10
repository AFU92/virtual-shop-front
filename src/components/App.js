import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import "../global.css";
import Product from "../pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Product} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
