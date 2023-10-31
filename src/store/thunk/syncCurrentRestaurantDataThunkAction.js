import { getBuyerOrdersThunkAction, getRestaurantFoodCardThunkAction } from "./buyerThunkActions";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDishCategoriesByRestaurantThunkAction } from "./dishCategoryThunkAction";
import { getDishesByRestaurantThunkAction } from "./dishThunkActions";
import { getOrdersByRestaurantThunkAction } from "./orderThunkActions";
import { getRestaurantsByVenodrThunkAction } from "./restaurantThunkActions";

export const syncCurrenrtRestaurantThunkAction = createAsyncThunk(
  "syncCurrentRestaurantData",
  async (_, { rejectWithValue, getState, dispatch }) => {
    console.log("Sync Thunk called");
    try {
      const currentRestaurant = await getState().restaurant.currentRestaurant;
      const { id, isVendor } = await getState().auth.user;
      if (currentRestaurant && isVendor) {
        await dispatch(getDishesByRestaurantThunkAction(currentRestaurant.id)); //for vendor
        await dispatch(getDishCategoriesByRestaurantThunkAction(currentRestaurant.id)); //for vendor
        await dispatch(getOrdersByRestaurantThunkAction(currentRestaurant.id)); //for vendor
        await dispatch(getRestaurantFoodCardThunkAction(currentRestaurant.id));
        if (id) {
          await dispatch(getRestaurantsByVenodrThunkAction(id)); //for vendor
        }
      }
      if (id && !isVendor) {
        await dispatch(getBuyerOrdersThunkAction(id)); //for buyer
      }
      console.log("Restaurant sync completed");
    } catch (error) {
      console.log(error);
      console.log(getState().auth.user.id);
      return rejectWithValue(error.response.data);
    }
  }
);
