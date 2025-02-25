// // const express = require('express');
// // const {
// //   getProgress,
// //   saveProgress,
// //   removeTodo,
// //   toggleTodoStatus,
// // } = require('../controllers/progress.controller');
// // const { validateProgressInput } = require('../middlewares/progress.middleware');

// // const router = express.Router();

// // // Base route for progress
// // router.get('/', (req, res) => {
// //   res.send('Progress API Base Route');
// // });

// // // Progress routes
// router.get('/:email', getProgress);
// router.post('/', validateProgressInput, saveProgress);
// router.delete('/todo', removeTodo);
// router.put('/todo', toggleTodoStatus);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const todoController = require('../controllers/todo.controller');
// const todoMiddleware = require('../middlewares/todo.middleware');

// router.use(todoMiddleware);

// router.get('/:get', todoController.getTodos);
// router.post('/:add', todoController.addTodo);
// router.delete('/:id', todoController.deleteTodo);
// router.patch('/:id/toggle', todoController.toggleTodo);

// module.exports = router;



const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');
const authMiddleware = require('../middlewares/todo.middleware');

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Routes for Todos
router.get('/', todoController.getTodos);           // Get all todos for a user
router.post('/', todoController.addTodo);           // Add a new todo
router.delete('/:id', todoController.deleteTodo);   // Delete a todo by ID
router.patch('/:id/toggle', todoController.toggleTodo); // Toggle a todo's completed status

module.exports = router;
