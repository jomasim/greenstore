import React, { Component } from "react";
import { connect } from "react-redux";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../../components/ProductCard";
import AppBar from "../../components/AppBar";
import Sidenav from "../../components/Sidenav";
import "../Home/home.css";
import "./products.css";
import fetchProducts from "../../actions/products";
import { updateCart } from "../../actions/cart";
import broccoli from "../../assets/images/broccoli.png";
import tomatoes from "../../assets/images/tomatoes.png";

class ProductsView extends Component {
  state = {};
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts({});
  }
  addToCart = item => {
    const { updateCart, cart } = this.props;
    const { items } = cart;
    const data = items.slice();
    const index = data.findIndex(obj => obj.id === item.id);
    if (index > -1) {
      const count = data[index].count + item.count;
      data[index] = { ...data[index], count };
    } else {
      data.push(item);
    }
    updateCart({ items: data });
  };
  removeFromCart = () => {};
  render() {
    const { cart } = this.props;
    const items = [
      {
        id: "646463",
        productName: "Broccoli",
        unit: "125 gm",
        unitPrice: 58,
        imageUrl: "",
        image: broccoli
      },
      {
        id: "63446463",
        productName: "Tomatoes",
        unit: "1 Kg",
        unitPrice: 126,
        imageUrl: "",
        image: tomatoes
      }
    ];
    return (
      <div className="main-container">
        <AppBar itemCount={cart.total} />
        <div className="header">
          <h3>
            Horticulture <NavigateNextIcon />
          </h3>
          <h3>
            Vegetables <NavigateNextIcon />
          </h3>
        </div>
        <Grid container spacing={2} className="grid-container">
          <Sidenav />
          <Grid container spacing={1} className="grid-main-content">
            {items &&
              items.map(item => {
                return (
                  <ProductCard
                    key={item.id}
                    className="item-card"
                    data={item}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                  />
                );
              })}
          </Grid>
        </Grid>
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

const mapStateToProps = ({ products, cart }) => ({
  products,
  cart,
  isLoading: products.isLoading
});

const mapDispatchToProps = dispatch => ({
  getProducts: payload => dispatch(fetchProducts(payload)),
  updateCart: items => dispatch(updateCart(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
