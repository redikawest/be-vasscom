const { body, param } = require('express-validator');

const createProductValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').notEmpty().withMessage('Price is required'),
];

const updateProductValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').notEmpty().withMessage('Price is required'),
    param('productId').notEmpty().withMessage('ProductId is required'),
];

const deleteProductValidation = [
    param('productId').notEmpty().withMessage('ProductId is required'),
];

module.exports = { 
    createProductValidation,
    updateProductValidation,
    deleteProductValidation
}