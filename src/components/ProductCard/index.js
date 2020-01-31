import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddtoCartIcon from "@material-ui/icons/AddShoppingCartOutlined";
import "../ItemCard/card.css";
import "./product.css";

class ProductCard extends Component {
  state = {
    count: 0
  };

  handleAddToCart = count => {
    const { addToCart } = this.props;
    addToCart(count);
    this.setState({ count: 0 });
  };

  handleAdd = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  handleRemove = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 });
    }
  };
  render() {
    const { data } = this.props;
    const { count } = this.state;
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <img src={data.image} alt="...loading" className="product-image" />
          </div>
        </div>
        <div className="card-footer">
          <span className="card-title">{data.category || ""}</span>
          <span className="price"> Ksh 100 </span>
        </div>
        <div>
          <small className="unit">185g</small>
        </div>
        <div className="lower-footer">
          <div className="manage-cart">
            <RemoveIcon
              className="removeIcon"
              onClick={() => this.handleRemove()}
            ></RemoveIcon>
            <span className="item-count">{count}</span>
            <AddIcon
              className="addIcon"
              onClick={() => this.handleAdd()}
            ></AddIcon>
          </div>
          <AddtoCartIcon
            className="cartIcon"
            onClick={() => this.handleAddToCart(count)}
          />
        </div>
      </div>
    );
  }
}

export default ProductCard;
