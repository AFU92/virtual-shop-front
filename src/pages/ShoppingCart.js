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
    let shoppingCart = localStorage.getItem("shoppingCart");

    let calcTotalPrice = 0;
    this.setState({
      productSale: shoppingCart,
      totalPrice: calcTotalPrice
    });
  }

  render() {
    // Create payment_info_form -> component
    return (
      <div>
        holi
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
