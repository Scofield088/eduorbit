const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupLink: { type: String, unique: true, required: true },
  messages: [
    {
      user: String,
      text: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  // files: [String], // Store file URLs or paths
  files:[String],
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
