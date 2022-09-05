const Product = require('../models/Product');

class ProductController {
    // [GET] /api/products
    getProduct(req, res, next) {
        Product.find({})
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }


    // [POST] /api/products/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save();
        res.send('SUCCESS');
    }

    
}

module.exports = new ProductController;