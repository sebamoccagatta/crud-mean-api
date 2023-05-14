// rutas para productos
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// api/product
router.get('/', productController.getProducts);
router.post('/create-product', productController.createProduct);
router.put('/edit-product/:id', productController.editProduct);
router.get('/show-product/:id', productController.showProduct);

module.exports = router;