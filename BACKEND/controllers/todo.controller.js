const todoService = require('../services/todo.services');

const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodosByUser(req.user.email);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodo = async (req, res) => {
  const { type, text } = req.body;
  try {
    const todo = await todoService.createTodo(req.user.email, type, text);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await todoService.deleteTodo(req.user.email, id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const toggleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTodo = await todoService.toggleTodo(req.user.email, id);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
};
