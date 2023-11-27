const Product = require('../../models/product');
const ProductService = require('./productService');


exports.uploadProductImage = (req, res) => {
    ProductService.uploadProductImage(req.file)
        .then((result) => {
            // console.log("controller", result.imageName)
            return res.status(200).send({
                "status": 1,
                "data": result,
                "message": 'Image uploaded and saved successfully.'

            });
        }).catch((err) => {
            console.log("controller error", err)
            return res.sendStatus(500);
        });
}

exports.fetchAllProducts = (req, res, next) => {
    ProductService.fetchAllProducts()
        .then((result) => {
            console.log(result);
            console.log('Products fetched successfully');
            return res.status(200).send({
                'status': 1,
                'data': result
            });
        }).catch((err) => {
            console.log(err);
            return res.sendStatus(500);
        });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrls = req.body.imageUrls;
    const description = req.body.description;
    const id = req.body.id;
    const product = new Product(id, title, price, description, imageUrls);
    ProductService.addProduct(product)
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

exports.deleteProduct = (req, res, next) => {
    const id = req.body.id;
    const product = new Product(id);
    ProductService.removeProduct(id)
        .then((result) => {
            console.log(result);
            console.log('Product Deleted');
            return res.status(200).send({
                'status': 1,
                'data': 'Product deleted successfully'
            });
        }).catch((err) => {
            console.log(err);
            return res.sendStatus(500);
        });
};

exports.updateProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrls = req.body.imageUrls;
    const description = req.body.description;
    const id = req.body.id;
    const product = new Product(id, title, price, description, imageUrls);
    ProductService.editProduct(id, title, price, description, imageUrls)
        .then((result) => {
            console.log(result);
            console.log('Product Updated');
            return res.status(200).send({
                'status': 1,
                'data': 'Product updated successfully'
            });
        }).catch((err) => {
            console.log(err);
            return res.sendStatus(500);
        });
};
