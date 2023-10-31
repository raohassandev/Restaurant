import { createSlice } from "@reduxjs/toolkit";
import { getOrdersByRestaurantThunkAction } from "../thunk/orderThunkActions";

const orderSlice = createSlice({
  name: "order",
  initialState: { loading: false, error: null, count: null, orders: null, vendorUnReadedOrders: null },
  reducers: {},
  extraReducers: (builder) => {
    // Get All category by resaurant
    builder.addCase(getOrdersByRestaurantThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getOrdersByRestaurantThunkAction.fulfilled, (state, action) => {
      const orders = action.payload.data.rows;
      const unread = orders.filter((o) => o.vendorRead === false).length;
      state.count = action.payload.data.count;
      state.orders = orders;
      state.loading = false;
      state.error = null;
      state.vendorUnReadedOrders = unread > 0 ? unread : null;
    });
    builder.addCase(getOrdersByRestaurantThunkAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(action.payload);
    });
  },
});

// export const {} = dishSlice.actions;
export default orderSlice;
