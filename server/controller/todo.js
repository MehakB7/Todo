const { Todo } = require("../modals/todo");

const createTodo = async (req, res) => {
  const { title, body, status } = req.body;
  const id = req.user.id;
  if (!title) {
    res.status(400).json({ message: " title is required" });
  }

  const todo = new Todo({
    title: title,
    body: body || "",
    status: status || "todo",
    user: id,
  });

  try {
    const saved = await todo.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateTodo = (req, res) => {};

const getTodos = async (req, res) => {
  const query = req.query;
  const status = req.query.status;

  console.log("inisde this query", query);

  if (status) {
  } else {
    try {
      const todos = await Todo.find(
        {},
        { title: 1, body: 1, status: 1, user: 1 }
      );

      if (todos) {
        res.status(200).json(todos);
      } else {
        res.status(400).json("no data found");
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  console.log("todos", id);

  try {
    const todo = await Todo.findOne(
      { _id: id },
      { title: 1, body: 1, status: 1, user: 1, createdAt: 1 }
    );

    if (todo) {
      res.status(200).json({ data: todo });
    } else {
      res.status(400).json({ message: "Todo doesn't exist" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.deleteOne({ _id: id });
    console.log("inside this todos", todos);
    if (todo) {
      res.status(200).json({ message: "resource deleted successfully" });
    } else {
      res.status(400).json({ message: "Todo doesn't exist" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
};
