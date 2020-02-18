import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CancelIcon from "@material-ui/icons/CloseOutlined";
import "./cartitem.css";

class CartItem extends Component {
  state = {
    count: 0,
    unitPrice: 0.0,
    total: 0.0,
    image: ""
  };

  componentDidMount() {
    const { data } = this.props;
    if (this.state !== data) {
      const { unitPrice = 0, count = 0 } = data;
      this.setState({ ...data, total: unitPrice * count });
    }
  }

  updateCart = type => {
    const { count, unitPrice, id } = this.state;
    const { handleUpdateCart } = this.props;
    if (type === "increase") {
      this.setState({ count: count + 1, total: unitPrice * (count + 1) });
    } else if (type === "reduce") {
      if (count > 0) {
        this.setState({ count: count - 1, total: unitPrice * (count - 1) });
      }
    }
    handleUpdateCart(id, type);
  };

  render() {
    const { count, total, productName, unit, image, id } = this.state;
    const { handleCancelItem } = this.props;
    return (
      <div>
        <div className="cart-card">
          <div className="media">
            <img src={image} alt="loading..." />
          </div>
          <div className="description">
            <h4>{productName}</h4>
            <small>{unit}</small>
          </div>
          <div className="quantity">
            <RemoveIcon
              className="removeIcon"
              onClick={() => this.updateCart("reduce")}
            />
            <span className="count">{count}</span>
            <AddIcon
              className="addIcon"
              onClick={() => this.updateCart("increase")}
            />
          </div>
          <div className="amount">
            <span>Ksh {total.toString()}.00</span>
          </div>
          <div className="close-container">
            <CancelIcon onClick={() => handleCancelItem(id)} />
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
    );
  }
}

export default CartItem;
