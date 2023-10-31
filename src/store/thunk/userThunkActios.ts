import { axiosConfig, endPoints } from "./api";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "./error";

export const loginThunkAction = createAsyncThunk(
  "login",
  async ({ email, password }: LoginData, { rejectWithValue }) => {
    try {
      const body = JSON.stringify({ email, password });
      const response = await axios.post(endPoints.login, body, axiosConfig());
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);

export const registerThunkAction = createAsyncThunk(
  "register",
  async (userData: RegisterData, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(userData);
      const response = await axios.post(endPoints.register, body, axiosConfig());
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.response.data));
    }
  }
);
