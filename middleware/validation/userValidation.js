const { body, param } = require('express-validator');

const createUserValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('phone_number').notEmpty().withMessage('Phone Number is required'),
];

const updateUserValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('phone_number').notEmpty().withMessage('Phone Number is required'),
    param('userId').notEmpty().withMessage('User Id is required'),
];

const deleteUserValidation = [
    param('userId').notEmpty().withMessage('User Id is required'),
];

const detailUserValidation = [
    param('userId').notEmpty().withMessage('User Id is required'),
];

const listUserValidation = [

];

module.exports = { 
    createUserValidation,
    updateUserValidation,
    deleteUserValidation,
    detailUserValidation,
    listUserValidation
}