import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import querySlice from "./querySlice";
import favoriteSlice from "./favoriteSlice";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "makeup-hub",
  storage,
  whitelist: ["favorite", "cartList"],
};
const reducers = combineReducers({
  count: counterSlice,
  productQuery: querySlice,
  favorite: favoriteSlice,
  cartList: cartSlice,
});
const persistReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
