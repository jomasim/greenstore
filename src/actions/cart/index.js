export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCartSuccess = payload => ({
  type: ADD_TO_CART,
  payload
});

export const removeFromCartSuccess = payload => ({
  type: REMOVE_FROM_CART,
  payload
});

export const addItemsToCart = payload => {
  const { items } = payload;
  const total = items.reduce((total, obj) => total + obj.count, 0);
  return addToCartSuccess({ items, total });
};

export const RemoveItemsFromCart = payload => removeFromCartSuccess(payload);
