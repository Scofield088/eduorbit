const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userController = require('../controllers/user.controller');
const authmiddleware=require('../middlewares/auth.middleware');
router.post('/register',[
    body('email').isEmail()
    
],
userController.registerUser)

router.post('/login',[
    body('email').isEmail()
    
],
userController.loginUser
)
router.get('/profile',authmiddleware.authUser,userController.getUserProfile);
router.post('/logout',authmiddleware.authUser,userController.logoutUser);
module.exports=router;

