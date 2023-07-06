// reduxSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../Server/server";

export const data = createAsyncThunk("products", async () => {
  const result = await axios.get("/api/products");
  console.log(result);
  return result.data;
});

export const compareSlice = createSlice({
  name: "compare",
  initialState: {
    products: [],
    comparison: [],
    singleProduct: [],
    isLoading: false,
  },
  reducers: {
    compareHandler: (state, action) => {
      const isProductAlreadyAdded = state.comparison.find(
        (item) => item.id === action.payload.id
      );
      if (!isProductAlreadyAdded) {
        state.comparison.push(action.payload);
      }
    },
    singleProductHandler: (state, action) => {
      state.singleProduct = action.payload;
    },
    productDeleteHandler: (state, action) => {
      state.comparison = state.comparison.filter(
        (element, index) => index !== action.payload
      );
    },
  },
  extraReducers: {
    [data.pending]: (state) => {
      state.isLoading = true;
    },
    [data.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
  },
});

export const {
  compareHandler, singleProductHandler, productDeleteHandler } = compareSlice.actions;
export default compareSlice.reducer;
