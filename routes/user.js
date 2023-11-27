const express = require('express');
const UserController = require('../services/user/userController');
const multer = require('multer');

const userRouter = express.Router();
const storage = multer.memoryStorage(); // Save the file in memory as a Buffer
const upload = multer({ storage: storage });
userRouter.post('/upload-profile-picture', upload.single('file'), UserController.uploadImage)
userRouter.post('/get-user', UserController.getUser);
userRouter.put('/update-user', UserController.updateUser);
userRouter.get('/');

module.exports = userRouter;
