import { SignInFormValues } from "@/types/Forms";
import {
  AsyncThunkConfig,
  createAsyncThunk,
  GetThunkAPI,
} from "@reduxjs/toolkit";

import axios from "axios";
import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:5001"
    : "http://192.168.1.30:5001";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (
    credentials: SignInFormValues,
    thunkAPI: GetThunkAPI<AsyncThunkConfig>,
  ) => {
    console.log("Signing in with credentials:", credentials);
    const response = await axios.post(
      `${BASE_URL}/auth/sign-in`,
      credentials,
    );
    console.log("Sign-in response:", response);
    return response.data;
  },
);
