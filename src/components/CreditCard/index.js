import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./credit.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="credit-form">
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="card-input"
          />
          <input
            type="tel"
            name="name"
            placeholder="Card Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="card-input"
          />
          <div className="credit-form-footer">
            <input
              type="number"
              name="expiry"
              placeholder="Expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              className="card-input footer-input"
            />
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              className="card-input footer-input secure"
            />
          </div>
          <input
            type="submit"
            className="request-btn card-pay"
            value="Make payment"
          />
        </form>
      </div>
    );
  }
}
