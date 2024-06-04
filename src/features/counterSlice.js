import { createSlice } from "@reduxjs/toolkit";

let dataFromLoclaStore = () => {
  return (
    JSON.parse(localStorage.getItem("value")) || {
      value: 0,
      totalvalue: 0,
    }
  );
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: dataFromLoclaStore(),
  reducers: {
    calculatAmout: (state, { payload }) => {
      state.value += payload;
      counterSlice.caseReducers.setLocal(state);
    },
    delteCart: (state, { payload }) => {
      state.value = 0;
      counterSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem("value", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculatAmout, delteCart } = counterSlice.actions;

export default counterSlice.reducer;
