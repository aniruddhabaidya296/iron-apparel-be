const { getDb } = require("../utils/database");


class Product {
    constructor(id, title, price, description, imageUrls) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrls = imageUrls;
    }
}

module.exports = Product;
