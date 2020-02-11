import React from "react";
import NumericInput from "react-numeric-input";

class QuantityBar extends React.Component {
  state = {
    value: 0,
    max: 5,
    min: 0,
    unitPrice: 200,
    subTotalPrice: 0
  };

  calculateSubTotalPrice = event => {
    console.log(event);
    console.log(this);
    this.setState({
      value: event,
      subTotalPrice: event * this.state.unitPrice
    });
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
      </div>
    );
  }
}

export default QuantityBar;
