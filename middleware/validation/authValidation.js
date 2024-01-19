const { body, param, query } = require('express-validator');

const loginValidation = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

const registerValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('phone_number').notEmpty().withMessage('Phone Number is required'),
];

module.exports = { 
    loginValidation,
    registerValidation
}