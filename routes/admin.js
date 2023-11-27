const express = require('express');
const { postAddProduct, updateProduct: postUpdateProduct, deleteProduct, uploadProductImage } = require('../services/product/productController');
const multer = require('multer');


const adminRouter = express.Router();
const storage = multer.memoryStorage(); // Save the file in memory as a Buffer
const upload = multer({ storage: storage });
adminRouter.post('/add-product', postAddProduct);
adminRouter.post('/upload-product-image', upload.single('file'), uploadProductImage);
adminRouter.delete('/delete-product', deleteProduct);
adminRouter.put('/edit-product', postUpdateProduct);
adminRouter.get('/');

module.exports = adminRouter;
