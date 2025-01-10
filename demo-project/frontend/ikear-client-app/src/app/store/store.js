import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slicer/UserSlicer";
import cartReducer from "../slicer/CartSlicer";
export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
