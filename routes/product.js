// rutas para productos
const express = require('express');
const router = express.Router();

// api/product
router.post('/', () => {
    console.log('Creando producto...');
})

module.exports = router;