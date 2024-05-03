import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
