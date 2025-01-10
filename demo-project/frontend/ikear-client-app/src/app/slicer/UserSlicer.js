import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  login: localStorage.getItem("user") ? true : false,
};

export const adminSlicer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log("====================================");
      // console.log(action.payload);
      // console.log("====================================");
      state.admin = action.payload;
      state.login = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state, action) => {
      state.admin = null;
      state.login = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = adminSlicer.actions;

export default adminSlicer.reducer;
