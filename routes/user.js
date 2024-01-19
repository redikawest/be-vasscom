const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const UserValidation = require('../middleware/validation/userValidation');
const Verify = require('../middleware/auth/verifyToken');

router.get('/user', [Verify.verifyToken, Verify.isAdmin, UserValidation.listUserValidation], UserController.list);
router.get('/user/:userId', [Verify.verifyToken, Verify.isAdmin, UserValidation.detailUserValidation], UserController.detail);
router.post('/user', [Verify.verifyToken, Verify.isAdmin, UserValidation.createUserValidation], UserController.create);
router.put('/user/:userId', [Verify.verifyToken, Verify.isAdmin, UserValidation.updateUserValidation], UserController.update);
router.delete('/user/:userId', [Verify.verifyToken, Verify.isAdmin, UserValidation.deleteUserValidation], UserController.deleteUser);

module.exports = router;