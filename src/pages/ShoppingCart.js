import React, { Component } from "react";
import PaymentService from "../services/PaymentService";

export default class ShoppingCart extends Component {
  state = {
    productsSale: [],
    totalPrice: 0
  };

  handlePay = event => {
    let request = {};
    const response = PaymentService.post(request);
    console.log(response);
  };

  componentDidMount() {
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    let calcTotalPrice = 0;
    this.setState({
      productsSale: shoppingCart,
      totalPrice: calcTotalPrice
    });
  }

  render() {
    return (
      <div>
        {console.log("this.state.productsSale")}
        {console.log(this.state.productsSale)}
        {this.state.productsSale.map(productSale => {
          return (
            <li key={productSale.id}>
              <h5>{productSale.name}</h5>
            </li>
          );
        })}
        <button onClick={this.handlePay} className="btn btn-primary">
          Pay
        </button>
      </div>
    );
  }
}
