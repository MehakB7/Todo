import { configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./slices/todo";
import { reducer as filterReducer } from "./slices/filter";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  }
});
