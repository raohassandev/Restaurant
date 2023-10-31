import {
  getBuyerOrdersThunkAction,
  getRestaurantFoodCardThunkAction,
} from "../thunk/buyerThunkActions";

import { createSlice } from "@reduxjs/toolkit";

const buyerSlice = createSlice({
  name: "vendor",
  initialState: {
    loading: false,
    error: null,
    restaurant: null,
    dishCount: null,
    dishes: null,
    dishCategoriesCount: null,
    dishCategories: null,
    orders: null,
    buyerUnReadedOrders: null,
    location: null,
  },
  reducers: {
    updateBuyerLocation: (state, { payload }) => {
      state.location = payload.location;
    },
  },
  extraReducers: (builder) => {
    // Get All Restaurants
    builder.addCase(getRestaurantFoodCardThunkAction.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getRestaurantFoodCardThunkAction.fulfilled, (state, { payload }) => {
      state.restaurant = payload.data.restaurant;
      state.dishCount = payload.data.dishes.count;
      state.dishes = payload.data.dishes.rows;
      state.dishCategoriesCount = payload.data.dishCategories.count;
      state.dishCategories = payload.data.dishCategories.rows;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getRestaurantFoodCardThunkAction.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(getBuyerOrdersThunkAction.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getBuyerOrdersThunkAction.fulfilled, (state, { payload }) => {
      const orders = payload.data.rows;
      state.orders = orders;
      state.buyerUnReadedOrders = orders.filter((o: Order) => o.buyerRead === false).length;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getBuyerOrdersThunkAction.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});
export const buyerActions = buyerSlice.actions;
export default buyerSlice;
