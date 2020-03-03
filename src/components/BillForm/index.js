import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";

import "./billform.css";

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

class BillForm extends Component {
  render() {
    return (
      <form className="bill-info-form" noValidate autoComplete="off">
        <div className="row-form-items">
          <CssTextField
            id="outlined-read-only-input"
            label="First name"
            size="small"
            defaultValue=""
            name="firstname"
            variant="outlined"
            color="red"
          />
          <CssTextField
            id="outlined-read-only-input"
            label="Second name"
            size="small"
            defaultValue=""
            name="secondname"
            variant="outlined"
            className="row-input-left"
          />
        </div>
        <div className="row-form-items">
          <CssTextField
            id="outlined-read-only-input"
            label="Street address"
            size="small"
            name="streetAddress"
            defaultValue=""
            variant="outlined"
          />
          <CssTextField
            id="outlined-read-only-input"
            label="Town/City"
            size="small"
            name="townCity"
            defaultValue=""
            variant="outlined"
            className="row-input-left"
          />
        </div>
        <CssTextField
          id="outlined-read-only-input"
          label="Apartment"
          size="small"
          name="apartment"
          defaultValue=""
          variant="outlined"
        />
        <CssTextField
          id="outlined-read-only-input"
          label="Phone"
          name="phone"
          size="small"
          defaultValue=""
          variant="outlined"
        />
        <CssTextField
          id="outlined-read-only-input"
          label="Email address"
          size="small"
          name="email"
          defaultValue=""
          variant="outlined"
        />
      </form>
    );
  }
}
export default BillForm;
