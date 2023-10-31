import { getRestaurantsByIdThunkAction, getRestaurantsByVenodrThunkAction } from "../thunk/restaurantThunkActions";

import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    loading: false,
    error: null,
    venodr: null,
    restaurants: null,
    currentRestaurant: null,
  } as RestaurantSlice,
  reducers: {
    updateCurrentRestaurant: (state, action) => {
      // console.log("updateCurrentRestaurant Reducer ", action.payload);
      state.currentRestaurant = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get All Restaurants
    builder.addCase(getRestaurantsByVenodrThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRestaurantsByVenodrThunkAction.fulfilled, (state, action) => {
      state.restaurants = action.payload.data.rows;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getRestaurantsByVenodrThunkAction.rejected, (state, action) => {
      state.error = action.payload as any;
      state.loading = false;
    });
  },
});

export const { updateCurrentRestaurant } = restaurantSlice.actions;
export default restaurantSlice;
