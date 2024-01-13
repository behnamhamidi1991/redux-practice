import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reserveations",
  initialState,
  reducers: {
    // Methods to update such as "add"
  },
});

export default reservationsSlice.reducer;
