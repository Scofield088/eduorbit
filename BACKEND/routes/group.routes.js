// const express = require('express');
// const router = express.Router();
// const { createOrJoinGroup, getGroupDetails, addMessage,uploadFiles } = require('../controllers/group.controller');
// const { validateGroupLink } = require('../middlewares/group.middleware');
// const groupController = require('../controllers/group.controller');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// // Create or join a group
// router.post('/', validateGroupLink, createOrJoinGroup);

// // Fetch group details
// router.get('/:groupLink', getGroupDetails);

// // Add a message
// router.post('/:groupLink/message', addMessage);

// // router.post('/group/:groupLink/upload', upload.array('files'),uploadFiles);
// router.post('/group/:groupLink/upload', upload.array('files'), groupController.uploadFiles);

// module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const { createOrJoinGroup, getGroupDetails, addMessage, uploadFiles } = require('../controllers/group.controller');
// // const { validateGroupLink } = require('../middlewares/group.middleware');
// // const multer = require('multer');
// // const groupController=require('../controllers/group.controller')
// // // Set up multer
// // const upload = multer({ dest: 'uploads/' });

// // // Routes
// // router.post('/group', createOrJoinGroup);
// // router.get('/group/:groupLink', getGroupDetails);
// // router.post('/group/:groupLink/message', addMessage);
// // // router.post('/group/:groupLink/upload', upload.array('files'), groupController.uploadFiles);
// // router.post('/group/:groupLink/upload', upload.array('files'), groupController.uploadFiles);
// // module.exports = router;

const express = require('express');
const router = express.Router();
const { createOrJoinGroup, getGroupDetails, addMessage, uploadFiles } = require('../controllers/group.controller');
const { validateGroupLink } = require('../middlewares/group.middleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// Create or join a group
router.post('/', validateGroupLink, createOrJoinGroup);

// Fetch group details
router.get('/:groupLink', getGroupDetails);

// Add a message
router.post('/:groupLink/message', addMessage);

// File upload for the group
router.post('/group/:groupLink/upload', upload.array('files'), uploadFiles);

module.exports = router;
