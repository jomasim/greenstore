import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import "./credit.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1a1a21"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#bfbfbe"
      },
      "&:hover fieldset": {
        borderColor: "#1a1a21"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1a1a21"
      }
    }
  }
})(TextField);

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
          <CssTextField
            label="Card Number"
            name="number"
            type="number"
            size="small"
            defaultValue=""
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            variant="outlined"
            className="card-input"
          />
          <CssTextField
            label="Card Name"
            name="name"
            type="text"
            size="small"
            defaultValue=""
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            variant="outlined"
            className="card-input"
          />
          <div className="credit-form-footer">
            <CssTextField
              label="Expiry"
              name="expiry"
              type="number"
              size="small"
              defaultValue=""
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              variant="outlined"
              className="card-input footer-left"
            />
            <CssTextField
              label="CVC"
              name="cvc"
              type="number"
              size="small"
              defaultValue=""
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              variant="outlined"
              className="card-input"
            />
          </div>
          <Button variant="contained" className="request-btn card-pay">
            Make Payment
          </Button>
        </form>
      </div>
    );
  }
}
