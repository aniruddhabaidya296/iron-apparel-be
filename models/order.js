const uuid = require('uuid')

class Order {
    constructor(orderId, userId, address, phoneNumber, products) {
        this.orderId = orderId;
        this.userId = userId;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.products = products;
    }
}

module.exports = Order