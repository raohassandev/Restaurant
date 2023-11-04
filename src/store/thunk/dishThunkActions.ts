import { axiosConfig, endPoints } from "./api";

import { RootState } from "types/store";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "./error";

export const addDishThunkAction = createAsyncThunk(
  "addDish",
  async (formData: FormData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token, true);

      const response = await axios.post(endPoints.addDish, formData, config);
      console.log(response);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      await dispatch(getDishesByRestaurantThunkAction(response.data.data.restaurantId));
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(getErrorMessage(error.response));
    }
  }
);
export const getDishesThunkAction = createAsyncThunk("getDishes", async (_, { rejectWithValue, getState }) => {
  try {
    const token = (getState() as RootState).auth.token;
    const config = axiosConfig(token);
    const response = await axios.get(endPoints.getAllDishes, config);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response.data);
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getDishByIdThunkAction = createAsyncThunk("getDishById", async (id: string, { rejectWithValue, getState }) => {
  try {
    const token = (getState() as RootState).auth.token;
    const config = axiosConfig(token);
    const body = JSON.stringify({ id });
    const response = await axios.post(endPoints.getDishById, body, config);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue( response.data);
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getDishesByVendorThunkAction = createAsyncThunk(
  "getDishesByVenodr",
  async (vendorId: string, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ vendorId });
      const response = await axios.post(endPoints.getVendorDishes, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue( response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getDishesByRestaurantThunkAction = createAsyncThunk(
  "getDishesByRestaurant",
  async (restaurantId: string, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ restaurantId });
      const response = await axios.post(endPoints.getRestaurantDishes, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue( response.data);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateDishThunkAction = createAsyncThunk(
  "updateDish",
  async (data: Dish, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token, true);
      // const body = JSON.stringify(data);
      const response = await axios.post(endPoints.updateDish, data, config);
      console.log(response)
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      // await dispatch(getDishesByRestaurantThunkAction(data.restaurantId));//FIXME: provide the current restaurant id
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteDishThunkAction = createAsyncThunk(
  "deleteDish",
  async (id: string, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = (getState() as RootState).auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ id });
      const response = await axios.post(endPoints.deleteDish, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      // await dispatch(getDishesByRestaurantThunkAction(id));//FIXME: provide the current restaurant id
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
