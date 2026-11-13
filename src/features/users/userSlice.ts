import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import type { User, UserState } from "./userTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    // Request action
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Success action
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },

    // Failure action
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearUsers: (state) => {
      state.users = [];
      state.error = null;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  clearUsers,
} = userSlice.actions;

export default userSlice.reducer;