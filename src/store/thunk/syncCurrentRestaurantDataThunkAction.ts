import { getBuyerOrdersThunkAction, getRestaurantFoodCardThunkAction } from "./buyerThunkActions";

import { RootState } from "types/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDishCategoriesByRestaurantThunkAction } from "./dishCategoryThunkAction";
import { getDishesByRestaurantThunkAction } from "./dishThunkActions";
import { getOrdersByRestaurantThunkAction } from "./orderThunkActions";
import { getRestaurantsByVenodrThunkAction } from "./restaurantThunkActions";

// export const syncCurrenrtRestaurantThunkAction = createAsyncThunk(
//   "syncCurrentRestaurantData",
//   async (_, { rejectWithValue, getState, dispatch }) => {
//     console.log("Sync Thunk called");
//     try {
//       const currentRestaurant = await (getState() as RootState).restaurant.currentRestaurant;
//       const { id, isVendor } = await(getState() as RootState).auth.user;
//       if (currentRestaurant && isVendor) {
//         await dispatch(getDishesByRestaurantThunkAction(currentRestaurant.id)); //for vendor
//         await dispatch(getDishCategoriesByRestaurantThunkAction(currentRestaurant.id)); //for vendor
//         await dispatch(getOrdersByRestaurantThunkAction(currentRestaurant.id)); //for vendor
//         await dispatch(getRestaurantFoodCardThunkAction(currentRestaurant.id));
//         if (id) {
//           await dispatch(getRestaurantsByVenodrThunkAction(id)); //for vendor
//         }
//       }
//       if (id && !isVendor) {
//         await dispatch(getBuyerOrdersThunkAction(id)); //for buyer
//       }
//       console.log("Restaurant sync completed");
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
export const syncCurrenrtRestaurantThunkAction = createAsyncThunk(
  "syncCurrentRestaurantData",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const currentRestaurant = await (getState() as RootState).restaurant.currentRestaurant;
      const { id, isVendor } = await (getState() as RootState).auth.user;
     
      isVendor
        ? vendorSync({ userId: id, currentRestaurant }, { rejectWithValue, getState, dispatch })
        : buyerSync({ userId: id, currentRestaurant }, { rejectWithValue, getState, dispatch });
     
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const buyerSync = async (
  param: { userId: string; currentRestaurant: Restaurant },
  { rejectWithValue, getState, dispatch }
) => {
  const { userId } = param;
  try {
    if (userId) {
      await dispatch(getBuyerOrdersThunkAction(userId)); //for buyer
    }
    console.log("Restaurant sync completed");
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
};

const vendorSync = async (
  param: { userId: string; currentRestaurant: Restaurant },
  { rejectWithValue, getState, dispatch }
) => {
  const { userId, currentRestaurant } = param;
  try {
    await dispatch(getDishesByRestaurantThunkAction(currentRestaurant.id)); //for vendor
    await dispatch(getDishCategoriesByRestaurantThunkAction(currentRestaurant.id)); //for vendor
    await dispatch(getOrdersByRestaurantThunkAction(currentRestaurant.id)); //for vendor
    await dispatch(getRestaurantFoodCardThunkAction(currentRestaurant.id));
    if (userId) {
      await dispatch(getRestaurantsByVenodrThunkAction(userId)); //for vendor
    }
    console.log("Vendor sync completed");
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
};
