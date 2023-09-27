const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
} = require("../controller/todo");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createTodo);
router.get("/", auth, getTodos);
router.get("/:id", auth, getTodoById);
router.delete("/:id", auth, deleteTodo);
router.put("/:id", auth, updateTodo);

module.exports = {
  todoRouter: router,
};
