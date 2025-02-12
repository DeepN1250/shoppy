import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice"
import cartReducer from "./CartSlice" // Ensure correct path
import wishlistReducer from "./WishlistSlice"
import authReducer from "./AuthSlice"
import productSlice from "./ProductSlice"
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    search: searchReducer, 
    cart: cartReducer,
    wishlist: wishlistReducer, 
    auth: authReducer,
    products : productSlice,
    users: userReducer,
    
  },
});

export default store;
