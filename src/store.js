import { configureStore, createReducer } from "@reduxjs/toolkit";
import createReducer from "./Components/CartSlice";

const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});

export default store;
