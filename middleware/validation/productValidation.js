const { body, param, query } = require('express-validator');

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

const detailProductValidation = [
    param('productId').notEmpty().withMessage('Product Id is required'),
];

const listProductValidation = [
    query('take').notEmpty().withMessage('take is required'),
    query('skip').notEmpty().withMessage('skip is required'),
];

module.exports = { 
    createProductValidation,
    updateProductValidation,
    deleteProductValidation,
    detailProductValidation,
    listProductValidation
}