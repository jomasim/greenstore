import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddtoCartIcon from "@material-ui/icons/AddShoppingCartOutlined";
import AppBar from "../../components/AppBar";
import CartItem from "../../components/CartItem";
import ArrowBackward from "@material-ui/icons/ArrowBackOutlined";
import "./shoppingcart.css";
import Payment from "../../components/Payment";
import { Link } from "react-router-dom";
import broccoli from "../../assets/images/broccoli.png";
import tomatoes from "../../assets/images/tomatoes.png";

class ShoppingCart extends Component {
  state = {
    items: [
      {
        id: "63446463",
        name: "Broccoli",
        unit: "125 gm",
        count: 2,
        unitPrice: 270,
        image: broccoli,
        imageUrl: ""
      },
      {
        id: "632333",
        name: "Tomatoes",
        unit: "1 kg",
        count: 1,
        unitPrice: 123,
        imageUrl: "",
        image: tomatoes
      }
    ]
  };
  handleRemoveItem = id => {
    const { items } = this.state;
    const products = items.filter(item => item.id !== id);
    this.setState({ items: products });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="main-container">
        <AppBar />
        <div className="shopping-cart">
          <Grid container className="shopping-container">
            <div className="shopping-cart-header">
              <h3>
                Shopping Cart
                <AddtoCartIcon className="shoppingbag-icon"></AddtoCartIcon>
              </h3>
            </div>
            {items &&
              items.map(item => (
                <CartItem
                  key={item.id}
                  data={item}
                  handleRemoveItem={this.handleRemoveItem}
                />
              ))}
            <div className="sub-total-container">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="Continue shopping"
                component={Link}
                to="/products"
              >
                <ArrowBackward />
              </IconButton>
              <div className="total-content">
                <span className="label">Subtotal</span>
                <span className="amount-label">Ksh 800.00</span>
              </div>
            </div>
          </Grid>
          <Payment />
        </div>
        <Grid container className="footer-container">
          <h3> Get in Touch </h3>
          <small>Westalands, Nairobi 0100 Block A</small>
          <small>Infogreen@gmail.com</small>
          <hr className="line" />
        </Grid>
      </div>
    );
  }
}

export default ShoppingCart;
