import { SignInFormValues } from "@/types/Forms";
import {
  AsyncThunkConfig,
  createAsyncThunk,
  GetThunkAPI,
} from "@reduxjs/toolkit";

import axios from "axios";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (
    credentials: SignInFormValues,
    thunkAPI: GetThunkAPI<AsyncThunkConfig>,
  ) => {
    axios
      .post("http://localhost:5001/auth/sign-in", credentials)
      .then((response) => {
        console.log("Sign-in successful:", response.data);

        return response.data; // API'den dönen veriyi döndür
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
      });
  },
);
