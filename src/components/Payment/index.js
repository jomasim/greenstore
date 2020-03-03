import React from "react";
import mpesaLogo from "../../assets/images/mpesa.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/styles";
import "./payment.css";
import CreditCard from "../CreditCard";

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

export default function Payment() {
  const [value, setValue] = React.useState("mobile");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div className="payment-container">
      <div className="payment-options">
        {/* <img src={mpesaLogo} alt="...loading" /> */}
        <div className="order-details">
          <div className="order-container">
            <span className="order-label">Order</span>
            <span className="order-number"> 455435556 </span>
          </div>
          <div className="order-container">
            <span className="order-label">Amount</span>
            <span className="order-number">Kes 1259.00</span>
          </div>
        </div>
        <RadioGroup
          aria-label="Payment options"
          name="option"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="mobile" control={<Radio />} label="Mobile" />
          <div className="mpesa-container">
            <CssTextField
              id="outlined-read-only-input"
              label="Enter mpesa number"
              size="small"
              defaultValue=""
              name="mpesaNumber"
              variant="outlined"
              className="mobile-field"
            />
            <Button variant="contained" className="request-btn">
              Send mpesa request
            </Button>
          </div>
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Card Details"
          />
          <div className="card-container">
            <span className="credit-card-header">Credit card details</span>
            <CreditCard />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
