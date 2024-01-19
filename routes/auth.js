const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const AuthValidation = require('../middleware/validation/authValidation');

router.post('/auth/login', AuthValidation.loginValidation, AuthController.login);
router.post('/auth/register', AuthValidation.registerValidation, AuthController.register);

module.exports = router;