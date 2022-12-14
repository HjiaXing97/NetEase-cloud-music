import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    age: 100
  },
  reducers: {
    changeAge(state, { payload }) {
      state.age = payload;
    }
  }
});

export const { changeAge } = counterSlice.actions;

export default counterSlice.reducer;
