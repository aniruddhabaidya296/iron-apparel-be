const Order = require("../../models/order");
const CartService = require("./cartService");


class CartController {
    static getCart = (req, res, next) => {
        CartService.fetchCart(req.body.userId)
            .then((result) => {
                console.log(result)
                console.log("Cart fetched successfully");
                return res.status(200).send({
                    "status": 1,
                    "data": result
                })
            }).catch((err) => {
                console.log(err)
                return res.sendStatus(500);
            });
    }

    static updateCart = (req, res, next) => {
        console.log("request body is ", req.body)
        CartService.updateCart(req.body.id, req.body.cart)
            .then((result) => {
                console.log(result)
                console.log("Cart updated successfully");
                return res.status(200).send({
                    "status": 1,
                    "message": "Cart updated successfully"
                })
            }).catch((err) => {
                console.log(err)
                return res.sendStatus(500);
            });
    }

    static placeOrder = (req, res, next) => {
        console.log("request body is ", req.body)
        const orderId = req.body.orderId;
        const userId = req.body.userId;
        const address = req.body.address;
        const phoneNumber = req.body.phoneNumber;
        const products = req.body.products;
        const order = new Order(orderId, userId, address, phoneNumber, products)
        CartService.placeOrder(order)
            .then((result) => {
                console.log(result)
                console.log("Order placed successfully");
                return res.status(200).send({
                    "status": 1,
                    "message": "Order placed successfully"
                })
            }).catch((err) => {
                console.log(err)
                return res.sendStatus(500);
            });
    }

    static fetchOrders = (req, res, next) => {
        console.log("request body is ", req.body)
        const userId = req.body.userId;
        CartService.fetchOrders(userId)
            .then((result) => {
                console.log(result)
                console.log("Order fetched successfully");
                return res.status(200).send({
                    "status": 1,
                    "data": result,
                    "message": "Order fetched successfully",
                })
            }).catch((err) => {
                console.log(err)
                return res.sendStatus(500);
            });
    }
}

module.exports = CartController;