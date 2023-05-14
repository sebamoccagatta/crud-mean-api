const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    
    try {
        let product;

        // create product

        product = new Product(req.body);

        await product.save();

        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}