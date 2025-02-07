import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./cartActions";

const initialState = {
  cart: [],
  wishlist: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
      
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
      
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };
      
    case REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: state.wishlist.filter((item) => item.id !== action.payload) };
      
    default:
      return state;
  }
};

export default CartReducer;
