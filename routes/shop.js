const express = require('express');
const { postAddProduct } = require('../controllers/admin');
const { fetchAllProducts } = require('../controllers/shop');

const shopRouter = express.Router();

shopRouter.get('/products',fetchAllProducts)
shopRouter.get('/')

module.exports = shopRouter;