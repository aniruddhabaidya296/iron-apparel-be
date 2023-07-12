const express = require('express');
const UserController = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/get-user', UserController.getUser);
userRouter.put('/update-user', UserController.updateUser);
userRouter.get('/');

module.exports = userRouter;
