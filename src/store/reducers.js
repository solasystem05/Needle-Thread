import { createReducer } from "@reduxjs/toolkit";
import { addProduct } from "./actions";

const initialState = {
  totalPrice: 0,
  purchasedProducts: [],
  isTotalPriceVisible: false,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(addProduct, (state, action) => {
    const price = parseFloat(action.payload.Price.replace("£", ""));
    state.totalPrice += price;
    state.purchasedProducts.push(action.payload);
    state.isTotalPriceVisible = true;
  });
});

export default rootReducer;
