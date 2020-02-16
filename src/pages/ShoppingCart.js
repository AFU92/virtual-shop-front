import React, { Component } from "react";

import PaymentForm from "../components/PaymentForm";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Container } from "react-bootstrap";

export default class ShoppingCart extends Component {
  state = {
    productsSale: [],
    totalPrice: 0
  };

  componentDidMount() {
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    if (shoppingCart != null) {
      let calcTotalPrice = 0;
      this.setState({
        productsSale: shoppingCart,
        totalPrice: calcTotalPrice
      });
    }
  }

  render() {
    return (
      <div>
        {console.log("this.state.productsSale")}
        {console.log(this.state.productsSale)}
        <h2>Sale</h2>
        <Container>
          <Table>
            <Thead>
              <Tr>
                <Th>name</Th>
                <Th>description</Th>
                <Th>quantity</Th>
                <Th>unitPrice</Th>
                <Th>subTotalPrice</Th>
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
                    <Td>{productSale.subTotalPrice}</Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
        </Container>
        <Container>
          <h1>- -</h1>
          <h2>Payment Form</h2>
        </Container>
        <Container>
          <PaymentForm productCartSale={this.state.productsSale} />
        </Container>
      </div>
    );
  }
}
