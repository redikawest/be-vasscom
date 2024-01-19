const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const ProductValidation = require('../middleware/validation/productValidation');
const Verify = require('../middleware/auth/verifyToken');

router.get('/product', ProductValidation.listProductValidation, ProductController.list);
router.get('/product/:productId', ProductValidation.deleteProductValidation, ProductController.detail);
router.post('/product', [Verify.verifyToken, Verify.isAdmin, ProductValidation.createProductValidation], ProductController.create);
router.put('/product/:productId', [Verify.verifyToken, Verify.isAdmin, ProductValidation.updateProductValidation], ProductController.update);
router.delete('/product/:productId', [Verify.verifyToken, Verify.isAdmin, ProductValidation.deleteProductValidation], ProductController.deleteProduct);

module.exports = router;