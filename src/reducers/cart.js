import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

const initialState = {
  items: []
};

const cart = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, ...payload };
    case REMOVE_FROM_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default cart;
