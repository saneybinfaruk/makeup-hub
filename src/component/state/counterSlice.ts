import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increamentByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increament, decreament, reset, increamentByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
