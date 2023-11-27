const { getDb } = require('../../utils/database');
const FirebaseUtils = require('../../utils/firebase');
const admin = require('firebase-admin');

class ProductService {

    static async uploadProductImage(rawfile) {
        if (!rawfile) {
            throw {
                status: 0,
                message: 'No file uploaded'
            };
        }
        try {
            const imageUrl = await FirebaseUtils.uploadImageToFirebase(rawfile, 'productImages');
            return {
                imageUrl: imageUrl
            };
        } catch (err) {
            console.log('error uploading ', err)
            throw {
                status: 0,
                message: 'No file uploaded'
            };
        }
    }


    static async addProduct(product) {
        const db = await getDb();
        return db.collection('products')
            .insertOne(product)
            .then(result =>
                console.log(result))
            .catch(e =>
                console.log(e),
            );
    }

    static async fetchAllProducts() {
        const db = await getDb();
        return db.collection('products')
            .find()
            .toArray()
            .then(products => {
                console.log(products);
                return products;
            }).catch((e) => {
                console.log(e);
            });
    }

    static async editProduct(productId, name, price, description, imageUrl) {
        const db = await getDb();
        return db.collection('products')
            .updateOne({ id: productId }, { $set: { title: name, price: price, description: description, imageUrl: imageUrl } })
            .then(result => {
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

    static async removeProduct(productId) {
        const db = await getDb();
        return db.collection('products')
            .deleteOne({ id: productId })
            .then(result => {
                if (result.deletedCount === 1) {
                    console.log('Document deleted successfully');
                    return result;
                } else {
                    console.log('Document not found');
                }
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

module.exports = ProductService;
