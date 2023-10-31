import { axiosConfig, endPoints } from "./api";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "./error";

export const addDishCategoryThunkAction = createAsyncThunk(
  "addDishCategory",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token, true);

      const response = await axios.post(endPoints.addDishCategory, formData, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      await dispatch(getDishCategoriesThunkAction());
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(getErrorMessage(error.response));
    }
  }
);
export const getDishCategoriesThunkAction = createAsyncThunk(
  "getDishCategories",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);
      const response = await axios.get(endPoints.getDishCategories, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);

export const getDishCategoryByIdThunkAction = createAsyncThunk(
  "getDishCategoryById",
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ id });
      const response = await axios.post(endPoints.getDishCategoryById, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const getDishccByVendorThunkAction = createAsyncThunk(
  "getDishesByVenodr",
  async (vendorId, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ vendorId });
      const response = await axios.post(endPoints.getVendorDishCategories, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const getDishCategoriesByRestaurantThunkAction = createAsyncThunk(
  "getDishCategoriesByRestaurant",
  async (restaurantId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ restaurantId });
      const response = await axios.post(endPoints.getRestaurantDishCategories, body, config);
      if (response.status < 200 || response.status >= 300) {
        console.log(response);
        return rejectWithValue("error", response.data);
      }
      // await dispatch(getRestaurantsByIdThunkAction(restaurantId)) 
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const updateDishCategoryThunkAction = createAsyncThunk(
  "updateDishCategory",
  async (data, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token, true);
      // const body = JSON.stringify(data);
      const response = await axios.post(endPoints.updateDishCategory, data, config);
      console.warn(response);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      await dispatch(getDishCategoriesThunkAction());
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
export const deleteDishCategoryThunkAction = createAsyncThunk(
  "deleteDishCategory",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      const config = axiosConfig(token);
      const body = JSON.stringify({ id });
      const response = await axios.post(endPoints.deleteDishCategory, body, config);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue("error", response.data);
      }
      await dispatch(getDishCategoriesThunkAction());
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
