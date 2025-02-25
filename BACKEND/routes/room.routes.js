// const express=require('express');
// const router=express.Router();
// const { Server } = require("socket.io");
// const io = new Server(server);
// const roomController =require( '../controllers/room.controller.js');
// router.post('/join', (req, res) => roomController.joinRoom(io)(req, res));
// router.post('/send-message', (req, res) => roomController.sendMessage(io)(req, res));
// router.post('/send-file', (req, res) => roomController.sendFile(io)(req, res));
// module.exports=router;

const express = require('express');
const router = express.Router();
const { Server } = require("socket.io");
const http = require('http');

// Assuming your app.js or server.js file has already defined and initialized the express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO with the created server
const io = new Server(server);

const roomController = require('../controllers/room.controller.js');

// Routes that use the io object
router.post('/join', (req, res) => roomController.joinRoom(io)(req, res));
router.post('/send-message', (req, res) => roomController.sendMessage(io)(req, res));
router.post('/send-file', (req, res) => roomController.sendFile(io)(req, res));

module.exports = router;
// const express = require('express');
// const multer = require('multer');
// const { roomValidation, messageValidation } = require('../middlewares/validation.middleware.js');
// const roomController = require('../controllers/room.controller');

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// module.exports = (io) => {
//   router.post('/join', roomValidation, roomController.joinRoom(io));
//   router.post('/message', messageValidation, roomController.sendMessage(io));
//   router.post('/file', roomValidation, upload.single('file'), roomController.sendFile(io));
//   return router;
// };