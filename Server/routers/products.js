const express = require('express');

const router = express.Router();

const productController = require('../controllers/ProductController');

router.post('/store', productController.store);
router.get('/', productController.getProduct);


module.exports = router;