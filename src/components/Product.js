import React from "react";
import QuantityBar from "../components/QuantityBar";
import { Card } from "react-bootstrap";

class Product extends React.Component {
  render() {
    console.log(this.props.product.name);
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Title className="text-center">
          {this.props.product.name}
        </Card.Title>
        <Card.Img
          variant="top"
          src={
            "https://pngimage.net/wp-content/uploads/2018/06/icono-telefono-celular-png-4.png"
          }
        />

        <Card.Body>
          <Card.Text>{this.props.product.description}</Card.Text>
          <QuantityBar product={this.props.product} />
          <button onClick={this.handleClick} className="btn btn-primary">
            Add
          </button>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
