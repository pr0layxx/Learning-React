import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoslices";


export const store = configureStore({
  reducer: todoReducer,
});
