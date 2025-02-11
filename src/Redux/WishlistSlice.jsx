import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [], // Always an array
  totalQuantity: 0,  // Keeps track of total items
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.wishlistItems.push(action.payload);
        state.totalQuantity += 1;
      }
    },

    removeFromWishlist: (state, action) => {
      const filteredWishlist = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );

      if (filteredWishlist.length < state.wishlistItems.length) {
        state.wishlistItems = filteredWishlist;
        state.totalQuantity = Math.max(0, state.totalQuantity - 1); // Prevents negative values
      }
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
