import React from "react";
import NumericInput from "react-numeric-input";

class QuantityBar extends React.Component {
  state = {
    value: 0,
    max: this.props.product.quantity,
    min: 0,
    unitPrice: this.props.product.unitPrice,
    subTotalPrice: 0
  };

  calculateSubTotalPrice = event => {
    this.setState({
      value: event,
      subTotalPrice: event * this.state.unitPrice
    });
  };

  handleAdd = event => {
    let shoppingCart = localStorage.getItem("shoppingCart");
    if (shoppingCart === null) {
      shoppingCart = [];
    } else {
      shoppingCart = JSON.parse(shoppingCart);
    }

    let product = {
      id: this.props.product.id,
      name: this.props.product.name,
      description: this.props.product.description,
      quantity: this.state.value,
      unitPrice: this.state.unitPrice
    };

    shoppingCart.push(product);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  };

  render() {
    return (
      <div>
        <h5>Unit Price: {this.state.unitPrice}</h5>
        <NumericInput
          mobile
          className="form-control"
          value={this.state.value}
          min={this.state.min}
          max={this.state.max}
          step={1}
          precision={0}
          size={3}
          onChange={this.calculateSubTotalPrice}
        />
        <h5>Sub Total Price: {this.state.subTotalPrice}</h5>
        <button onClick={this.handleAdd} className="btn btn-primary">
          Add
        </button>
      </div>
    );
  }
}

export default QuantityBar;
