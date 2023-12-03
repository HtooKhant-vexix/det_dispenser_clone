import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dis_no: 0,
  noz_no: 0,
  col_liveData: [],
  col_permit: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    dSet: (state, { payload }) => {
      state.dis_no = payload;
    },
    nSet: (state, { payload }) => {
      state.noz_no = payload;
    },
    liveDataSet: (state, { payload }) => {
      state.col_liveData = payload;
    },
    per: (state, { payload }) => {
      state.col_permit = payload;
    },
    increace: (state, {payload}) => {
      console.log('=====payload====================================');
      console.log(payload);
      console.log('======payload==============================');
      state.col_permit[0].price = payload.price;
      state.col_permit[0].liter = payload.liter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dSet, nSet, per, clean,increace } = counterSlice.actions;

export default counterSlice.reducer;
