import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    resetRegistrationForm: (state) => {
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
    },
  },
});

export const {
  setEmail,
  setPassword,
  setConfirmPassword,
  resetRegistrationForm,
} = registrationSlice.actions;

export const selectEmail = (state) => state.registration.email;
export const selectPassword = (state) => state.registration.password;
export const selectConfirmPassword = (state) =>
  state.registration.confirmPassword;

export default registrationSlice.reducer;
