// const todos = {}; // In-memory store for simplicity. Replace with DB logic.

// const getTodosByUser = (email) => {
//   return todos[email] || { daily: [], monthly: [], semester: [] };
// };

// const createTodo = (email, type, text) => {
//   if (!todos[email]) todos[email] = { daily: [], monthly: [], semester: [] };
//   const newTodo = { id: Date.now(), text, completed: false };
//   todos[email][type].push(newTodo);
//   return todos[email];
// };

// const deleteTodo = (email, id) => {
//   const types = ['daily', 'monthly', 'semester'];
//   if (!todos[email]) return;
//   for (const type of types) {
//     todos[email][type] = todos[email][type].filter((todo) => todo.id !== parseInt(id));
//   }
// };

// const toggleTodo = (email, id) => {
//   const types = ['daily', 'monthly', 'semester'];
//   let updatedTodo = null;
//   if (!todos[email]) return;
//   for (const type of types) {
//     todos[email][type] = todos[email][type].map((todo) => {
//       if (todo.id === parseInt(id)) {
//         todo.completed = !todo.completed;
//         updatedTodo = todo;
//       }
//       return todo;
//     });
//   }
//   return updatedTodo;
// };

// module.exports = {
//   getTodosByUser,
//   createTodo,
//   deleteTodo,
//   toggleTodo,
// };







// const Todo = require('../models/todo.model'); // Import the Todo model

// const getTodosByUser = async (email) => {
//   return await Todo.find({ userEmail: email }); // Fetch todos by user email
// };

// const createTodo = async (email, type, text) => {
//   const newTodo = new Todo({ userEmail: email, type, text });
//   return await newTodo.save(); // Save the new todo in the database
// };

// const deleteTodo = async (email, id) => {
//   await Todo.findOneAndDelete({ userEmail: email, _id: id }); // Find by ID and user email, then delete
// };

// const toggleTodo = async (email, id) => {
//   const todo = await Todo.findOne({ userEmail: email, _id: id });
//   if (todo) {
//     todo.completed = !todo.completed; // Toggle completed status
//     return await todo.save(); // Save the updated todo
//   }
//   return null;
// };

// module.exports = {
//   getTodosByUser,
//   createTodo,
//   deleteTodo,
//   toggleTodo,
// };




















// const Todo = require('../models/todo.model');

// const getTodosByUser = async (email) => {
//   return await Todo.find({ userEmail: email });
// };

// const createTodo = async (email, text) => {
//   const newTodo = new Todo({ userEmail: email, text });
//   return await newTodo.save();
// };

// const deleteTodo = async (email, id) => {
//   return await Todo.findOneAndDelete({ userEmail: email, _id: id });
// };

// const toggleTodo = async (email, id) => {
//   const todo = await Todo.findOne({ userEmail: email, _id: id });
//   if (todo) {
//     todo.completed = !todo.completed;
//     return await todo.save();
//   }
//   return null;
// };

// module.exports = {
//   getTodosByUser,
//   createTodo,
//   deleteTodo,
//   toggleTodo,
// };



const todos = {}; // In-memory store for simplicity. Replace with DB logic.

const createTodo = (email, text) => {
  if (!todos[email]) todos[email] = [];
  const newTodo = { id: Date.now(), text, completed: false, userEmail: email };  // Add userEmail here
  todos[email].push(newTodo);
  return newTodo;  // Return the newly created todo
};

module.exports = {
  createTodo,
};
