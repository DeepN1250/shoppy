import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex >= 0) {
        state.totalQuantity -= state.cartItems[itemIndex].quantity;
        state.totalPrice -= state.cartItems[itemIndex].totalPrice;
        state.cartItems.splice(itemIndex, 1);
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];

        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice -= item.price;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          state.totalQuantity -= item.quantity;
          state.totalPrice -= item.totalPrice;
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
