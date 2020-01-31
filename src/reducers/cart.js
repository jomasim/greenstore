import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

const initialState = {
  count: 0
};

const cart = (state = initialState, action) => {
  console.warn(action);
  const { payload } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, ...payload, count: payload.count };
    case REMOVE_FROM_CART:
      return { ...state, ...payload, count: payload.count };
    default:
      return state;
  }
};

export default cart;
