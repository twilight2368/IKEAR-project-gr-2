import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      userId: "",
    },
  },

  reducers: {
    setUserInformation: {
      reducer: (state, action) => {},
      prepare: () => {},
    },
  },
});

export default userSlice.reducer;
