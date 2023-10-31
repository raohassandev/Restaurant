import { axiosConfig, endPoints } from "./api";

import { RootState } from "types/store";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBuyerOrdersThunkAction = createAsyncThunk(
  "getBuyerOrdersThunkAction",
  async (buyerId, { rejectWithValue, getState }): Promise<any> => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ buyerId });
      const response = await axios.post(endPoints.buyerOrders, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRestaurantFoodCardThunkAction = createAsyncThunk(
  "getRestaurantFoodCardThunkAction",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const config = axiosConfig();
      const body = JSON.stringify({ restaurantId });
      const response = await axios.post(endPoints.foodCard + restaurantId, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
