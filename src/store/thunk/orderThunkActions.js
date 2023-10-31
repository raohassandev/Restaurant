import { axiosConfig, endPoints } from "./api";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { syncCurrenrtRestaurantThunkAction } from "./syncCurrentRestaurantDataThunkAction";

export const addOrderThunkAction = createAsyncThunk(
  "addOrder",
  async (data, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);

      const response = await axios.post(endPoints.addOrder, data, config);
      console.log(response);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      await dispatch(syncCurrenrtRestaurantThunkAction());
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response);
    }
  }
);
export const updateOrderThunkAction = createAsyncThunk(
  "updateOrder",
  async (data, { rejectWithValue, getState, dispatch }) => {
    console.log('updateOrderThunkAction');
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);

      const response = await axios.post(endPoints.updateOrder, data, config);
    
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      await dispatch(syncCurrenrtRestaurantThunkAction());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

export const getOrdersThunkAction = createAsyncThunk("getOrder", async (_, { rejectWithValue, getState, dispatch }) => {
  try {
    const token = getState().auth.token;
    const config = axiosConfig(token);

    const response = await axios.get(endPoints.getOrders, config);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue("error", response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error);

    return rejectWithValue(error.response);
  }
});
export const getOrdersByRestaurantThunkAction = createAsyncThunk(
  "getOrdersByRestaurant",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ id });
      const response = await axios.post(endPoints.getOrderByRestaurant, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response);
    }
  }
);
