import { axiosConfig, endPoints } from "./api";

import { RootState } from "types/store";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "./error";
import { updateCurrentRestaurant } from "../features/restaurantSlice";

export const addRestaurantsThunkAction = createAsyncThunk(
  "addRestaurant",
  async (data: Restaurant, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token, true);
      // const body = JSON.stringify(data);
      const response = await axios.post(endPoints.addRestaurant, data, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue( response.data);
      }
      await dispatch(getRestaurantsThunkAction());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getRestaurantsThunkAction = createAsyncThunk(
  "getRestaurants",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const response = await axios.get(endPoints.getRestaurants, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);

export const getRestaurantsByIdThunkAction = createAsyncThunk(
  "getRestaurantsById",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ id });
      const response = await axios.post(endPoints.getRestaurantById, body, config);

      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const getRestaurantsByVenodrThunkAction = createAsyncThunk(
  "getReastaurantsByVenodr",
  async (vendorId: string, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ vendorId });
      const response = await axios.post(endPoints.getRestaurantByVendor, body, config);

      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      const currentRestaurant = response.data.data.rows[0];
      if (currentRestaurant) {
        // console.log('currentRestaurant', currentRestaurant);
        await dispatch(updateCurrentRestaurant(currentRestaurant));
      } else {
        // console.log("Current Restaurant ", currentRestaurant)
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const updateRestaurantThunkAction = createAsyncThunk(
  "updateReastaurant",
  async (data: Restaurant, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token, true);
      // const body = JSON.stringify(data);
      const response = await axios.patch(endPoints.updateRestaurant, data, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      await dispatch(getRestaurantsThunkAction());
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const deleteteRestaurantThunkAction = createAsyncThunk(
  "deleteReastaurant",
  async (id: string, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ id });
      const response = await axios.post(endPoints.deleteRestaurant, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      await dispatch(getRestaurantsThunkAction());
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
