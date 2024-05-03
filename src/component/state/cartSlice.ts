import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../pages/HomePage";

const initialState = {
  cartItems: [] as Product[],
};
const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToList } = cartSlice.actions;

export default cartSlice.reducer;
