import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice"
import cartReducer from "./CartSlice" // Ensure correct path
import wishlistReducer from "./WishlistSlice"
import authReducer from "./AuthSlice"

const store = configureStore({
  reducer: {
    search: searchReducer, 
    cart: cartReducer,
    wishlist: wishlistReducer, 
    auth: authReducer,
  },
});

export default store;
