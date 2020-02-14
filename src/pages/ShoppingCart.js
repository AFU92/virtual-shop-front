import React, { Component } from "react";
import PaymentService from "../services/PaymentService";
import PaymentForm from "../components/PaymentForm";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
        <h2>Sale</h2>
        <Table>
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>description</Th>
              <Th>quantity</Th>
              <Th>unitPrice</Th>
            </Tr>
          </Thead>
          {this.state.productsSale.map(productSale => {
            return (
              <Tbody>
                <Tr>
                  <Td>{productSale.name}</Td>
                  <Td>{productSale.description}</Td>
                  <Td>{productSale.quantity} </Td>
                  <Td>{productSale.unitPrice}</Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
        <button onClick={this.handlePay} className="btn btn-primary">
          Pay
        </button>
        <PaymentForm />
      </div>
    );
  }
}
