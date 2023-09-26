const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
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
  },
  { timestamps: true }
);

const Todo = new mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo,
};
