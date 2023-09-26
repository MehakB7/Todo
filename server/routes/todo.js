const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
} = require("../controller/todo");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createTodo);
router.get("/", auth, getTodos);
router.get("/:id", auth, getTodoById);
router.delete("/:id", auth, deleteTodo);

module.exports = {
  todoRouter: router,
};
