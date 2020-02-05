import React from "react";
import mpesaLogo from "../../assets/images/mpesa.svg";
import "./payment.css";
import CreditCard from "../CreditCard";

export default function payment() {
  return (
    <div className="payment-container">
      <h3 className="payment-label">Payment Options</h3>
      <div className="order-container">
        <span className="order-label">Order</span>
        <span className="order-number"> 455435556 </span>
      </div>
      <div className="order-container">
        <span className="order-label">Amount</span>
        <span className="order-number">Kes 1259.00</span>
      </div>
      <div className="mpesa-container">
        <img src={mpesaLogo} alt="...loading" />
        <input
          placeholder="Enter mpesa number"
          type="text"
          className="mpesa-number"
        ></input>
        <input
          type="submit"
          className="request-btn"
          value="Send mpesa request"
        />
      </div>
      <div className="card-container">
        <span className="credit-card-header">Credit card details</span>
        <CreditCard />
      </div>
    </div>
  );
}
