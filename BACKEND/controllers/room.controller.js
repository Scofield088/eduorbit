const roomService = require('../services/room.service');  // Assuming room-related logic is handled in room.service.js
const { validationResult } = require('express-validator');

module.exports.joinRoom = (io) => async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { roomId, userId } = req.body;

  try {
    const room = await roomService.findRoomById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    io.to(roomId).emit('user-joined', { userId });

    // Assuming there is logic to add the user to the room (e.g., updating a database or an in-memory structure)
    await roomService.addUserToRoom(roomId, userId);

    res.status(200).json({ message: `User ${userId} joined room ${roomId}` });
  } catch (error) {
    next(error);
  }
};

module.exports.sendMessage = (io) => async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { roomId, userId, message } = req.body;

  try {
    const room = await roomService.findRoomById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Emit the message to the room
    io.to(roomId).emit('new-message', { userId, message });

    res.status(200).json({ message: 'Message sent' });
  } catch (error) {
    next(error);
  }
};

module.exports.sendFile = (io) => async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { roomId, userId } = req.body;
  const file = req.file;  // Assuming you're using multer or similar to handle file uploads

  try {
    const room = await roomService.findRoomById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Emit the file to the room
    io.to(roomId).emit('new-file', { userId, file });

    res.status(200).json({ message: 'File sent successfully' });
  } catch (error) {
    next(error);
  }
};

// const roomService = require('../services/room.service');  // Assuming room-related logic is handled in room.service.js
// const { validationResult } = require('express-validator');

// module.exports.joinRoom = (io) => async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { roomId, userId } = req.body;

//   try {
//     // Find the room by ID
//     const room = await roomService.findRoomById(roomId);
//     if (!room) {
//       return res.status(404).json({ message: 'Room not found' });
//     }

//     // Emit the event for the user joining
//     io.to(roomId).emit('user-joined', { userId });

//     // Add the user to the room
//     await roomService.addUserToRoom(roomId, userId);

//     res.status(200).json({ message: `User ${userId} joined room ${roomId}` });
//   } catch (error) {
//     // Directly send error response instead of calling next
//     res.status(500).json({ message: error.message || 'An error occurred while joining the room' });
//   }
// };

// module.exports.sendMessage = (io) => async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { roomId, userId, message } = req.body;

//   try {
//     // Find the room by ID
//     const room = await roomService.findRoomById(roomId);
//     if (!room) {
//       return res.status(404).json({ message: 'Room not found' });
//     }

//     // Emit the message to the room
//     io.to(roomId).emit('new-message', { userId, message });

//     res.status(200).json({ message: 'Message sent' });
//   } catch (error) {
//     // Directly send error response instead of calling next
//     res.status(500).json({ message: error.message || 'An error occurred while sending the message' });
//   }
// };

// module.exports.sendFile = (io) => async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { roomId, userId } = req.body;
//   const file = req.file;  // Assuming you're using multer or similar to handle file uploads

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     // Find the room by ID
//     const room = await roomService.findRoomById(roomId);
//     if (!room) {
//       return res.status(404).json({ message: 'Room not found' });
//     }

//     // Emit the file to the room
//     io.to(roomId).emit('new-file', { userId, file });

//     res.status(200).json({ message: 'File sent successfully' });
//   } catch (error) {
//     // Directly send error response instead of calling next
//     res.status(500).json({ message: error.message || 'An error occurred while sending the file' });
//   }
// };
