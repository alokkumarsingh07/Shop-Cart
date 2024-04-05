import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
};
const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
