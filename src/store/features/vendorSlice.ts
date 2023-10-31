import { createSlice } from "@reduxjs/toolkit";
import { getRestaurantsByVenodrThunkAction } from "../thunk/restaurantThunkActions";

const vendorSlice = createSlice({
  name: "vendor",
  initialState: { loading: false, error: null, count: null, restaurants: null },
  reducers: {},
  extraReducers: (builder) => {
    // Get All Restaurants
    builder.addCase(getRestaurantsByVenodrThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRestaurantsByVenodrThunkAction.fulfilled, (state, action) => {
      state.count = action.payload.data.count;
      state.restaurants = action.payload.data.rows;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getRestaurantsByVenodrThunkAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

// export const {} = vendorSlice.actions;
export default vendorSlice;
