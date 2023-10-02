import { createSlice } from "@reduxjs/toolkit";

export const TodoFilter = {
  all: "all",
  completed: "completed",
  remaining: "remaining"
};

const initialState = {
  color: [],
  status: TodoFilter.all
};

const filters = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    changeColorFilter: (state, action) => {
      const { value, isActive } = action.payload;
      if (isActive) {
        state.color.push(value);
      } else {
        state.color = state.color.filter((item) => item !== value);
      }
    }
  }
});

const { actions, reducer } = filters;

export const { changeStatusFilter, changeColorFilter } = actions;
export { reducer };
