import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../pages/HomePage";

export interface FavoriteItem {
  product: Product;
  isFavorite: boolean;
}

type FavoriteState = {
  favoriteList: FavoriteItem[];
};

const initialState: FavoriteState = {
  favoriteList: [] as FavoriteItem[],
};

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<FavoriteItem>) => {
      state.favoriteList.push(action.payload);
    },
    updateFavorite: (
      state,
      action: PayloadAction<{ id: number; isFavorite: boolean }>
    ) => {
      const item = state.favoriteList.find(
        (cart) => cart.product.id === action.payload.id
      );

      if (item) {
        item.isFavorite = action.payload.isFavorite;
      }
    },
    removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.favoriteList.find(
        (cart) => cart.product.id === action.payload.id
      );

      const index = state.favoriteList.indexOf(item!);
      state.favoriteList.splice(index, 1);
    },
  },
});

export const { addToList, updateFavorite, removeFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
