import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin"))
    : null,
  login: localStorage.getItem("admin") ? true : false,
};

export const adminSlicer = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setAdmin: (state, action) => {
      // console.log("====================================");
      // console.log(action.payload);
      // console.log("====================================");
      state.admin = action.payload;
      state.login = true;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },
    removeAdmin: (state, action) => {
      state.admin = null;
      state.login = false;
      localStorage.removeItem("admin");
    },
  },
});

export const { setAdmin, removeAdmin } = adminSlicer.actions;

export default adminSlicer.reducer;
