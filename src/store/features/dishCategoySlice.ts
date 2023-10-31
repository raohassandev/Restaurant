import { createSlice } from "@reduxjs/toolkit";
import { getDishCategoriesByRestaurantThunkAction } from "../thunk/dishCategoryThunkAction";

const dishCategorySlice = createSlice({
  name: "dishCategory",
  initialState: { loading: false, error: null, count: null, disCategories: null },
  reducers: {},
  extraReducers: (builder) => {
    // Get All category by resaurant
    builder.addCase(getDishCategoriesByRestaurantThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getDishCategoriesByRestaurantThunkAction.fulfilled, (state, action) => {
      state.count = action.payload.data.count;
      state.disCategories = action.payload.data.rows;
      state.loading = false;
        state.error = null;
    });
    builder.addCase(getDishCategoriesByRestaurantThunkAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(action.payload)
    });
  },
});

// export const {} = dishCategorySlice.actions;
export default dishCategorySlice;
