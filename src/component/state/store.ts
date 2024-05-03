import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import querySlice from "./querySlice";
import favoriteSlice from "./favoriteSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    count: counterSlice,
    productQuery: querySlice,
    favorite: favoriteSlice,
    cartList: cartSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
