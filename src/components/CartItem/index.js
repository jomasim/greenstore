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

  handleAdd = () => {
    const { count, unitPrice } = this.state;
    this.setState({ count: count + 1, total: unitPrice * (count + 1) });
  };
  handleRemove = () => {
    const { count, unitPrice } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1, total: unitPrice * (count - 1) });
    }
  };
  render() {
    const { count, total, name, unit, image, id } = this.state;
    const { handleRemoveItem } = this.props;
    return (
      <div>
        <div className="cart-card">
          <div className="media">
            <img src={image} alt="loading..." />
          </div>
          <div className="description">
            <h4>{name}</h4>
            <small>{unit}</small>
          </div>
          <div className="quantity">
            <RemoveIcon
              className="removeIcon"
              onClick={() => this.handleRemove()}
            />
            <span className="count">{count}</span>
            <AddIcon className="addIcon" onClick={() => this.handleAdd()} />
          </div>
          <div className="amount">
            <span>Ksh {total.toString()}</span>
          </div>
          <div className="close-container">
            <CancelIcon onClick={() => handleRemoveItem(id)} />
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
    );
  }
}

export default CartItem;
