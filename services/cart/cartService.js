const { getDb } = require('../../utils/database');

class CartService {
    static async fetchCart (userId) {
        const db = await getDb();
        return db.collection('users')
            .find({ id: userId })
            .toArray()
            .then(result => {
                console.log(result[0].cart);
                return result[0].cart;
            })
            .catch(e => {
                console.log(e);
                throw {
                    status: 0,
                    message: 'Something went wrong'
                };
            });
    }

    static async updateCart (userId, cartValue) {
        const db = await getDb();
        return db.collection('users')
            .updateOne({ id: userId }, { $set: { cart: cartValue } })
            .then(result => {
                console.log('cartValue is ', cartValue, 'id is ', userId);
                console.log(result);
            })
            .catch(e => {
                console.log(e);
                throw {
                    status: 0,
                    message: 'Something went wrong'
                };
            }
            );
    }

    static async placeOrder (order) {
        const db = await getDb();
        return db.collection('orders')
            .insertOne(order)
            .then(result => {
                console.log('result is ', result);
            })
            .catch(e => {
                console.log(e);
                throw {
                    status: 0,
                    message: 'Something went wrong'
                };
            }
            );
    }

    static async fetchOrders (userId) {
        const db = await getDb();
        return db.collection('orders')
            .find({ userId: userId })
            .toArray()
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(e => {
                console.log(e);
                throw {
                    status: 0,
                    message: 'Something went wrong'
                };
            });
    }
}

module.exports = CartService;
