import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import logoProvider from "../images/payuLogo.png";
import { Container } from "react-bootstrap";
import PaymentService from "../services/PaymentService";
import Select from "react-select";
import NumericInput from "react-numeric-input";
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    creditType: "",
    installmentsNumber: 1,
    saleProducts: []
  };

  handleInputFocus = e => {
    if (e.tar) this.setState({ focus: e.target.name });
  };

  handleNumericInputChange = event => {
    this.setState({ installmentsNumber: event });
  };

  handleSelectChange = event => {
    this.setState({ creditType: event, creditTypeValue: event.value });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  saleProductList() {
    this.props.productCartSale.map(productSale => {
      let saleProduct = {
        unitPrice: productSale.unitPrice,
        quantity: productSale.quantity,
        product: {
          id: productSale.id
        }
      };
      this.setState({
        saleProducts: this.state.saleProducts.push(saleProduct)
      });
    });
  }

  handlePay = event => {
    this.saleProductList();
    let request = {
      sale: {
        shippingAddress: "Calle falsa 123, Bogotaet",
        saleProducts: this.state.saleProducts,
        customer: {
          id: 1
        }
      },
      paymentInfo: {
        creditCardNumber: this.state.number,
        creditCardCVV: this.state.cvc,
        creditCardExpirationDate: this.state.expiry,
        paymentMethod: this.state.creditType.value,
        installmentsNumber: this.state.installmentsNumber
      }
    };

    const response = PaymentService.post(request);
    console.log(response);
  };

  render() {
    const options = [
      { value: "VISA", label: "Visa" },
      { value: "MASTERCARD", label: "Mastercard" }
    ];

    return (
      <Container>
        <div id="PaymentForm">
          <Container>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focus={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </Container>
          <form>
            <label>Card type:</label>
            <Container>
              <Select
                placeholder="Select your credit card type"
                value={this.state.creditType}
                options={options}
                onChange={this.handleSelectChange}
                onFocus={this.handleInputFocus}
              />
            </Container>
            <label>Card Number:</label>
            <Container>
              <input
                type="tel"
                name="number"
                placeholder="1111222233334444"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </Container>
            <label>Name:</label>
            <Container>
              <input
                type="text"
                name="name"
                placeholder="Pepe Perez"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </Container>
            <label>Segurity number:</label>
            <Container>
              <input
                type="tel"
                name="cvc"
                placeholder="123"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </Container>
            <label>Expiration date:</label>
            <Container>
              <input
                type="text"
                name="expiry"
                placeholder="yyyy/mm"
                pattern="[2][0][2-9][0-9]\/([0][1-9]|[1][1-2])"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </Container>

            <label>installmentsNumber:</label>
            <Container>
              <NumericInput
                name="installmentsNumber"
                value={this.state.installmentsNumber}
                step={1}
                precision={0}
                size={3}
                min={1}
                max={12}
                onChange={this.handleNumericInputChange}
              />
            </Container>

            <Container>
              <img src={logoProvider} alt="Logo provider" />
            </Container>
          </form>
          <button onClick={this.handlePay} className="btn btn-primary">
            Pay
          </button>
        </div>
      </Container>
    );
  }
}
