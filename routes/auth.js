const express = require('express');
const { postSignUp } = require('../services/signUp/signUpController');
const { postSignIn } = require('../services/signIn/signInController');

const authRouter = express.Router();

authRouter.post('/sign-up', postSignUp);
authRouter.post('/sign-in', postSignIn);
authRouter.get('/');

module.exports = authRouter;
