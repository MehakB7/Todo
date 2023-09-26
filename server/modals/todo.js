const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  status: {
    type: String,
    enum: ["todo", "inprogress", "done", "blocked"],
    default: "todo",
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
});

const Todo = new mongoose.Model("Todo", TodoSchema);

module.exports = {
  Todo,
};
