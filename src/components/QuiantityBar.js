import React, { Component } from "react";
import NumericInput from "react-numeric-input";

class QuiantityBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      max: 5,
      min: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <div>
        <NumericInput
          mobile
          className="form-control"
          value={0}
          min={this.state.min}
          max={this.state.max}
          step={1}
          precision={0}
          size={3}
        />
      </div>
    );
  }
}

export default QuiantityBar;
