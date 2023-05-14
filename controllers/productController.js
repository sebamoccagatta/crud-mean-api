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

exports.getProducts = async (req, res) => {
    try {

        const products =  await Product.find();

        res.json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.editProduct = async (req, res) => {

    try {
        const {name, category, locate, price} = req.body;
        let product =  await Product.findById(req.params.id);

        if(!product)
            res.status(404).json({message: 'No existe el Producto'});
        
        product.name = name;
        product.category = category;
        product.locate = locate;
        product.price = price;

        product = await Product.findOneAndUpdate({ _id: req.params.id}, product, {new: true});

        res.json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.showProduct = async (req, res) => {
    try {
        const {name, category, locate, price} = req.body;
        let product =  await Product.findById(req.params.id);

        if(!product)
            res.status(404).json({message: 'No existe el Producto'});

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}