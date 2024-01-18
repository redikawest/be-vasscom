const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');


router.get('/product', ProductController.list);
router.get('/product/:productId', ProductController.detail);
router.post('/product', ProductController.create);
router.put('/product/:productId', ProductController.update);
router.delete('/product/:productId', ProductController.deleteProduct);

module.exports = router;