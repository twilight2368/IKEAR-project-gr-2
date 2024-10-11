import { createSlice } from "@reduxjs/toolkit";

const initialCartValue = {
  value: [],
  numItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartValue,
  reducers: {},
});

export default cartSlice.reducer;
