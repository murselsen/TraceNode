import { AuthInitialState } from "@/types/slice";
import { createSlice } from "@reduxjs/toolkit";

import { signIn } from "./operations";

const initialState: AuthInitialState = {
  user: null,
  isLoggedIn: false,
  isLoading: true,
  error: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.user = action.payload;
        state.isLoggedIn = true;
        state.status = "succeeded";
        console.log("User signed in successfully:", action.payload);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
        state.status = "failed";
      });
  },
});
