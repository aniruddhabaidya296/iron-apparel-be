const Product = require("../models/product");

exports.fetchAllProducts = (req, res, next) => {
    Product.fetchAll()
        .then((result) => {
            console.log(result)
            console.log("Products fetched successfully");
            return res.status(200).send({
                "status": 1,
                "data": result
            })
        }).catch((err) => {
            console.log(err)
            return res.sendStatus(500);
        });
}