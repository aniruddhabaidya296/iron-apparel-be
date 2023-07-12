const express = require('express');
const { getCart } = require('../controllers/cart');
const CartController = require('../controllers/cart');

const cartRouter = express.Router();

cartRouter.post('/get-cart', CartController.getCart)
cartRouter.put('/update-cart', CartController.updateCart)
cartRouter.post('/place-order', CartController.placeOrder)
cartRouter.post('/get-orders', CartController.fetchOrders)
cartRouter.get('/')

module.exports = cartRouter;