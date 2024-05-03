import { createSlice } from "@reduxjs/toolkit";

interface FavoriteType {
  count: number;
}

const initialValue: FavoriteType = {
  count: 0,
};

const favoriteSlice = createSlice({
  name: "favoriteCount",
  initialState: initialValue,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
  },
});

export const { increament, decreament } = favoriteSlice.actions;

export default favoriteSlice.reducer;
