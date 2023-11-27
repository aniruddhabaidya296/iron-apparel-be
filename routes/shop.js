const express = require('express');
const { fetchAllProducts } = require('../services/product/productController');

const shopRouter = express.Router();

shopRouter.get('/products', fetchAllProducts);
shopRouter.get('/');

module.exports = shopRouter;
