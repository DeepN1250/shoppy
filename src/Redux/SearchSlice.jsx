import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      return { ...state, query: action.payload }; // ✅ Ensure new state is returned
    },
    clearQuery: () => initialState, // ✅ Reset correctly
  },
});

export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
