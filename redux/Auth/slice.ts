import { AuthInitialState } from "@/types/slice";
import { createSlice } from "@reduxjs/toolkit";

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
});
