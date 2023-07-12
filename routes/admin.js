const express = require('express');
const { postAddProduct } = require('../controllers/admin');

const adminRouter = express.Router();

adminRouter.post('/add-product', postAddProduct);
adminRouter.get('/');

module.exports = adminRouter;
