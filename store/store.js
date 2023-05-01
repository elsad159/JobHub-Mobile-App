import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/counterSlice";
import registrationReducer from "./registrationSlice/registrationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    registration: registrationReducer,
  },
});
