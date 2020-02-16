import React, { Component } from "react";

import Product from "../components/Product";
import ProductService from "../services/ProductService";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBCardTitle
} from "mdbreact";

export default class Products extends Component {
  state = {
    loading: true,
    error: null,
    data: []
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await ProductService.get();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow size="auto">
            {this.state.data.map(product => {
              return (
                <MDBCol size="auto">
                  <li key={product.id}>
                    <Product product={product} />
                  </li>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
