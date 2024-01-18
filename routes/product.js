const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const ProductValidation = require('../middleware/validation/productValidation');

router.get('/product', ProductValidation.listProductValidation, ProductController.list);
router.get('/product/:productId', ProductValidation.deleteProductValidation, ProductController.detail);
router.post('/product', ProductValidation.createProductValidation, ProductController.create);
router.put('/product/:productId', ProductValidation.updateProductValidation, ProductController.update);
router.delete('/product/:productId', ProductValidation.deleteProductValidation, ProductController.deleteProduct);

module.exports = router;