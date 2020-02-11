import React from "react";
import QuantityBar from "../components/QuantityBar";
import { Card } from "react-bootstrap";

class Product extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Title className="text-center">ProductName</Card.Title>
        <Card.Img
          variant="top"
          src={
            "https://pngimage.net/wp-content/uploads/2018/06/icono-telefono-celular-png-4.png"
          }
        />
        <Card.Body>
          <Card.Text>
            Product description adasd adsad asd asd asd asd ad asd asddasd..
            adada dadad end.
          </Card.Text>
          <QuantityBar></QuantityBar>
          <button onClick={this.handleClick} className="btn btn-primary">
            Add
          </button>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
