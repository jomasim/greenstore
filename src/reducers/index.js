import { combineReducers } from "redux";
import category from "../reducers/category";
import products from "../reducers/products";
import cart from "../reducers/cart";

export default combineReducers({
  category,
  products,
  cart
});
