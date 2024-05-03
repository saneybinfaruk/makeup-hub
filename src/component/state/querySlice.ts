import { createSlice } from "@reduxjs/toolkit";

type ProductQuery = {
  productType: string;
  productBrand: string;
  minPrice: string;
  maxPrice: string;
};

const initialState: ProductQuery = {
  productType: "",
  productBrand: "",
  minPrice: "",
  maxPrice: "",
};

const querySlice = createSlice({
  name: "querySlice",
  initialState,
  reducers: {
    setProductType: (state, action) => {
      state.productType = action.payload;
    },
    setProductBrand: (state, action) => {
      state.productBrand = action.payload;
    },
    setProductMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setProductMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    resetProductQuery: () => {
      initialState;
    },
  },
});

export const {
  setProductType,
  setProductBrand,
  setProductMinPrice,
  setProductMaxPrice,
  resetProductQuery,
} = querySlice.actions;
export default querySlice.reducer;
