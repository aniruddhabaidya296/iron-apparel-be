// const { Product } = require("../models/product");

const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const id = req.body.id;
    const product = new Product(id, title, price, description, imageUrl);
    product.save()
        .then((result) => {
            console.log(result);
            console.log('Product Created');
            return res.status(200).send({
                'status': 1,
                'data': 'Product added successfully'
            });
        }).catch((err) => {
            console.log(err);
            return res.sendStatus(500);
        });
};

