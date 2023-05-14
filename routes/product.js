// rutas para productos
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// api/product
router.post('/', productController.createProduct)

module.exports = router;