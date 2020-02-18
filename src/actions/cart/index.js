export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const updateCartSuccess = payload => ({
  type: UPDATE_CART,
  payload
});

export const removeFromCartSuccess = payload => ({
  type: REMOVE_FROM_CART,
  payload
});

export const updateCart = payload => {
  const { items } = payload;
  const total = items.reduce((total, obj) => total + obj.count, 0);
  localStorage.setItem("CART",  JSON.stringify({ items, total }) );
  return updateCartSuccess({ items, total });
};

export const RemoveItemsFromCart = payload => removeFromCartSuccess(payload);
