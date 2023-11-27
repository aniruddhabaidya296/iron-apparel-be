const express = require('express');
const CartController = require('../services/cart/cartController');

const cartRouter = express.Router();

cartRouter.post('/get-cart', CartController.getCart);
cartRouter.put('/update-cart', CartController.updateCart);
cartRouter.post('/place-order', CartController.placeOrder);
cartRouter.post('/get-orders', CartController.fetchOrders);
cartRouter.get('/');

module.exports = cartRouter;
