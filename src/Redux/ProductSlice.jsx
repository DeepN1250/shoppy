import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ id: Date.now(), ...action.payload });
    },
    deleteProduct: (state, action) => {
      // Fix: Modify state.products directly
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        // Fix: Use state.products[index] instead of state[index]
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    }
  }
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
