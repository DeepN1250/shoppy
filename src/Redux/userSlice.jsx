import { createSlice } from "@reduxjs/toolkit";
import MockData from "../utils/MockData";

const initialState = {
  users: MockData.users,
  admin: MockData.users.find((user) => user.role === "admin"),
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    loginAdmin: (state, action) => {
      const admin = state.users.find(
        (user) => user.email === action.payload.email && user.password === action.payload.password
      );
      if (admin && admin.role === "admin") {
        state.admin = admin;
      }
    },
  },
});

// ✅ Ensure deleteUser is exported
export const { addUser, updateUser, deleteUser, loginAdmin } = userSlice.actions;
export default userSlice.reducer;
