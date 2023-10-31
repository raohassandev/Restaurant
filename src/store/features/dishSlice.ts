import { createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantThunkAction } from "../thunk/dishThunkActions";

const dishSlice = createSlice({
  name: "dish",
  initialState: { loading: false, error: null, count: null, dishes: null },
  reducers: {},
  extraReducers: (builder) => {
    // Get All category by resaurant
    builder.addCase(getDishesByRestaurantThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getDishesByRestaurantThunkAction.fulfilled, (state, action) => {
      state.count = action.payload.data.count;
      state.dishes = action.payload.data.rows;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getDishesByRestaurantThunkAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(action.payload);
    });
  },
});

// export const {} = dishSlice.actions;
export default dishSlice;
