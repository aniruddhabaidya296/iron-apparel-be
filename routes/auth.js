const express = require('express');
const { postSignUp, postSignIn } = require('../controllers/auth');

const authRouter = express.Router();

authRouter.post('/sign-up', postSignUp)
authRouter.post('/sign-in', postSignIn)
authRouter.get('/')

module.exports = authRouter;