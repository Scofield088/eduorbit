// const mongoose = require('mongoose');

// const todoSchema = mongoose.Schema({
//   userEmail: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: ['daily', 'monthly', 'semester'],
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// module.exports = mongoose.model('Todo', todoSchema);



const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);

