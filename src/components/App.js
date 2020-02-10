import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import "../global.css";
import Products from "../pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Products} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
