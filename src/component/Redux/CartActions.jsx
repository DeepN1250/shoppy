export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const AddToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const RemoveFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const AddToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const RemoveFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
