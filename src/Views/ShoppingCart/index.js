import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddtoCartIcon from "@material-ui/icons/AddShoppingCartOutlined";
import AppBar from "../../components/AppBar";
import CartItem from "../../components/CartItem";
import ArrowBackward from "@material-ui/icons/ArrowBackOutlined";
import ArrowForward from "@material-ui/icons/ArrowForwardOutlined";
import "./shoppingcart.css";
import { Link } from "react-router-dom";
import { updateCart } from "../../actions/cart";

class ShoppingCart extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const data = localStorage.getItem("CART");
    const products = JSON.parse(data);
    const { items } = products;
    this.setState({ items });
  }

  handleUpdateCart = (id, type) => {
    const { items } = this.state;
    const { updateCart } = this.props;
    const data = items.slice();
    const index = data.findIndex(item => item.id === id);
    if (index > -1 && type === "increase") {
      data[index] = { ...data[index], count: data[index].count + 1 };
    } else if (index > -1 && type === "reduce") {
      data[index] = { ...data[index], count: data[index].count - 1 };
    }
    updateCart({ items: data });
    this.setState({ items: data });
  };

  handleCancelItem = id => {
    const { items } = this.state;
    const products = items.filter(item => item.id !== id);
    updateCart({ items: products });
    this.setState({ items: products });
  };

  getTotalCost = () => {
    const data = localStorage.getItem("CART");
    const products = JSON.parse(data);
    const { items } = products;
    const totalCost = items.reduce(
      (total, obj) => total + obj.count * obj.unitPrice,
      0
    );
    return totalCost;
  };

  render() {
    const { items } = this.state;
    return (
      <div className="main-container shopping-main">
        <AppBar />
        <div className="shopping-cart">
          <Grid container className="shopping-container">
            <div className="shopping-cart-header">
              <h3>
                Shopping Cart
                <AddtoCartIcon className="shoppingbag-icon"></AddtoCartIcon>
              </h3>
            </div>
            <div className={"cart-main-header"}>
              <span>Products</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            {items &&
              items.map(item => (
                <CartItem
                  key={item.id}
                  data={item}
                  handleCancelItem={this.handleCancelItem}
                  handleUpdateCart={this.handleUpdateCart}
                />
              ))}
            <div className="sub-total-container">
              <div className="total-content">
                <span className="label">Subtotal</span>
                <span className="amount-label">Ksh {this.getTotalCost()}</span>
              </div>
            </div>
            <div className={"cart-main-footer"}>
              <Button
                variant="contained"
                color="default"
                className={"continue-shopping-btn"}
                startIcon={<ArrowBackward />}
                component={Link}
                to="/products"
              >
                Continue shopping
              </Button>
              <Button
                variant="contained"
                color="default"
                className={"proceed-btn"}
                endIcon={<ArrowForward />}
                component={Link}
                to="/checkout"
              >
                Proceed to checkout
              </Button>
            </div>
          </Grid>
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

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  updateCart: payload => dispatch(updateCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
