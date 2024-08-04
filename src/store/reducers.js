import { createReducer } from "@reduxjs/toolkit";
import { addProduct, addShippingCost } from "./actions";

const initialState = {
  totalPrice: 0,
  purchasedProducts: [],
  isTotalPriceVisible: false,
  shippingCost: 0,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const price = parseFloat(action.payload.Price.replace("£", ""));

      state.totalPrice += price;

      state.purchasedProducts.push(action.payload);
      state.isTotalPriceVisible = true;
    })
    .addCase(addShippingCost, (state, action) => {
      state.shippingCost += action.payload; //shipping cost seperate
    });
});

export default rootReducer;
