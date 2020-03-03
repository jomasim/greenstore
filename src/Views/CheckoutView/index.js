import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../components/AppBar";
import Stepper from "../../components/Stepper";
import "./checkout.css";

class CheckoutView extends Component {
  render() {
    return (
      <div className="checkout-main">
        <AppBar />
        <div className="checkout-main-container">
          <Grid>
            <Stepper />
          </Grid>
        </div>
      </div>
    );
  }
}
export default CheckoutView;
