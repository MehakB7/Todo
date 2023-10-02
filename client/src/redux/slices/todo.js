// create actions in the videoa

import { createSlice } from "@reduxjs/toolkit";

function* genreaterId(startindex = 0) {
  while (true) {
    yield startindex++;
  }
}
const gen = genreaterId();
const initalState = [];
const todoSlice = createSlice({
  name: "todos",
  initialState: initalState,
  reducers: {
    addToTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: { text, id: gen.next().value, done: false, tag: "Green" }
        };
      }
    },

    deleteFromTodo: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },

    toggleComplete: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload);
      state[index].done = !state[index].done;
    },

    changeTag: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      console.log("insid ethis index if change tag", index, action.payload);
      state[index].tag = action.payload.color;
    }
  }
});
const { actions, reducer } = todoSlice;

export const { addToTodo, deleteFromTodo, toggleComplete, changeTag } = actions;

export { reducer };
