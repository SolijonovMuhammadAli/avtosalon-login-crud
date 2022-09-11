import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: null,
  phoneNumber: null,
  token: null,
  _id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { data } = action.payload;
      return { ...data };
    },
    logOut: (state, action) => ({ ...state, ...initialState }),
  },
});

export const selectCurrentToken = state => state.auth.token;

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
